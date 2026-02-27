"use server";

import { mkdir, writeFile } from "fs/promises";
import { join } from "path";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

const MIME_TO_EXT: Record<string, string> = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/gif": "gif",
  "image/webp": "webp",
  "image/svg+xml": "svg",
  "image/avif": "avif",
  "image/bmp": "bmp",
  "image/tiff": "tiff",
};

export async function uploadProductImage(productId: string, formData: FormData, makePrimary = false) {
  try {
    const file = formData.get("image") as File;
    if (!file) {
      return { success: false, error: "No file provided" };
    }

    // Validate file type
    const extension = MIME_TO_EXT[file.type];
    if (!extension) {
      return { success: false, error: "File must be an image (JPEG, PNG, GIF, WebP, SVG, AVIF, BMP, or TIFF)" };
    }

    // Validate file size (max 5MB)
    const maxSize = 5 * 1024 * 1024;
    if (file.size > maxSize) {
      return { success: false, error: "File size must be less than 5MB" };
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Generate unique filename
    const timestamp = Date.now();
    const randomString = Math.random().toString(36).substring(2, 8);
    const filename = `${timestamp}-${randomString}.${extension}`;

    const uploadDir = join(process.cwd(), "data/uploads/products");
    await mkdir(uploadDir, { recursive: true });
    await writeFile(join(uploadDir, filename), buffer);

    // Determine if this should be primary
    const existingImages = await prisma.productImage.findMany({
      where: { productId },
    });
    const shouldBePrimary = makePrimary || existingImages.length === 0;

    // If this will be primary, demote all existing images
    if (shouldBePrimary && existingImages.length > 0) {
      await prisma.productImage.updateMany({
        where: { productId },
        data: { isPrimary: false },
      });
    }

    // Save to database
    const imagePath = `/api/uploads/products/${filename}`;
    await prisma.productImage.create({
      data: {
        productId,
        path: imagePath,
        alt: file.name.replace(/\.[^/.]+$/, ""), // Remove extension for alt text
        isPrimary: shouldBePrimary,
      },
    });

    revalidatePath(`/admin/products/${productId}`);
    revalidatePath("/admin/products");

    return { success: true, path: imagePath };
  } catch (error) {
    console.error("Upload error:", error);
    return { success: false, error: "Failed to upload image" };
  }
}

export async function deleteProductImage(imageId: string) {
  try {
    const image = await prisma.productImage.findUnique({
      where: { id: imageId },
    });

    if (!image) {
      return { success: false, error: "Image not found" };
    }

    // Delete from database
    await prisma.productImage.delete({
      where: { id: imageId },
    });

    // Note: We're not deleting the physical file to prevent issues
    // You can add file deletion logic here if needed
    
    revalidatePath(`/admin/products/${image.productId}`);
    revalidatePath("/admin/products");

    return { success: true };
  } catch (error) {
    console.error("Delete image error:", error);
    return { success: false, error: "Failed to delete image" };
  }
}

export async function setPrimaryImage(imageId: string) {
  try {
    const image = await prisma.productImage.findUnique({
      where: { id: imageId },
      select: { productId: true },
    });

    if (!image) {
      return { success: false, error: "Image not found" };
    }

    // Set all images for this product to non-primary
    await prisma.productImage.updateMany({
      where: { productId: image.productId },
      data: { isPrimary: false },
    });

    // Set this image as primary
    await prisma.productImage.update({
      where: { id: imageId },
      data: { isPrimary: true },
    });

    revalidatePath(`/admin/products/${image.productId}`);
    revalidatePath("/admin/products");

    return { success: true };
  } catch (error) {
    console.error("Set primary image error:", error);
    return { success: false, error: "Failed to set primary image" };
  }
}
