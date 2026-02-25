"use server";

import { writeFile } from "fs/promises";
import { join } from "path";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function uploadProductImage(productId: string, formData: FormData) {
  try {
    const file = formData.get("image") as File;
    if (!file) {
      return { success: false, error: "No file provided" };
    }

    // Validate file type
    if (!file.type.startsWith("image/")) {
      return { success: false, error: "File must be an image" };
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
    const extension = file.name.split(".").pop();
    const filename = `${timestamp}-${randomString}.${extension}`;
    
    const uploadPath = join(process.cwd(), "public/uploads/products", filename);
    
    await writeFile(uploadPath, buffer);

    // Get current image count to determine if this should be primary
    const existingImages = await prisma.productImage.findMany({
      where: { productId },
    });

    // Save to database
    const imagePath = `/uploads/products/${filename}`;
    await prisma.productImage.create({
      data: {
        productId,
        path: imagePath,
        alt: file.name.replace(/\.[^/.]+$/, ""), // Remove extension for alt text
        isPrimary: existingImages.length === 0, // First image is primary
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
