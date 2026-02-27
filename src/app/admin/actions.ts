"use server";

import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

export async function createStore(formData: FormData) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    throw new Error("Unauthorized");
  }

  const name = formData.get("name") as string;
  const origin = formData.get("origin") as string;
  const specialty = formData.get("specialty") as string;
  const description = formData.get("description") as string;
  const nameEn = formData.get("nameEn") as string;
  const nameRu = formData.get("nameRu") as string;
  const specialtyEn = formData.get("specialtyEn") as string;
  const specialtyRu = formData.get("specialtyRu") as string;

  await prisma.store.create({
    data: {
      name,
      slug: slugify(name),
      origin,
      specialty,
      description,
      createdById: session.user.id,
      nameEn: nameEn || null,
      nameRu: nameRu || null,
      specialtyEn: specialtyEn || null,
      specialtyRu: specialtyRu || null,
    },
  });

  revalidatePath("/admin/stores");
  redirect("/admin/stores");
}

export async function updateStore(id: string, formData: FormData) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    throw new Error("Unauthorized");
  }

  const name = formData.get("name") as string;
  const origin = formData.get("origin") as string;
  const specialty = formData.get("specialty") as string;
  const description = formData.get("description") as string;
  const isActive = formData.get("isActive") === "on";

  await prisma.store.update({
    where: { id },
    data: {
      name,
      slug: slugify(name),
      origin,
      specialty,
      description,
      isActive,
    },
  });

  revalidatePath("/admin/stores");
  redirect("/admin/stores");
}

export async function deleteStore(id: string) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    throw new Error("Unauthorized");
  }

  await prisma.store.delete({ where: { id } });
  revalidatePath("/admin/stores");
}

export async function createProduct(formData: FormData) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    throw new Error("Unauthorized");
  }

  const name = formData.get("name") as string;
  const storeId = formData.get("storeId") as string;
  const categoryId = formData.get("categoryId") as string;
  const price = parseFloat(formData.get("price") as string);
  const unit = formData.get("unit") as string;
  const fiber = formData.get("fiber") as string;
  const technique = formData.get("technique") as string;
  const badge = formData.get("badge") as string;
  const stock = parseInt(formData.get("stock") as string) || 0;
  const delivery = formData.get("delivery") as string;
  const description = formData.get("description") as string;
  const isFeatured = formData.get("isFeatured") === "on";
  const nameEn = formData.get("nameEn") as string;
  const nameRu = formData.get("nameRu") as string;
  const descriptionEn = formData.get("descriptionEn") as string;
  const descriptionRu = formData.get("descriptionRu") as string;
  const fiberEn = formData.get("fiberEn") as string;
  const fiberRu = formData.get("fiberRu") as string;
  const techniqueEn = formData.get("techniqueEn") as string;
  const techniqueRu = formData.get("techniqueRu") as string;

  const product = await prisma.product.create({
    data: {
      name,
      slug: slugify(name),
      storeId,
      categoryId,
      price,
      unit,
      fiber,
      technique,
      badge,
      stock,
      delivery,
      description,
      isFeatured,
      nameEn: nameEn || null,
      nameRu: nameRu || null,
      descriptionEn: descriptionEn || null,
      descriptionRu: descriptionRu || null,
      fiberEn: fiberEn || null,
      fiberRu: fiberRu || null,
      techniqueEn: techniqueEn || null,
      techniqueRu: techniqueRu || null,
    },
  });

  revalidatePath("/admin/products");
  redirect(`/admin/products/${product.id}/edit`);
}

export async function updateProduct(id: string, formData: FormData) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    throw new Error("Unauthorized");
  }

  const name = formData.get("name") as string;
  const storeId = formData.get("storeId") as string;
  const categoryId = formData.get("categoryId") as string;
  const price = parseFloat(formData.get("price") as string);
  const unit = formData.get("unit") as string;
  const fiber = formData.get("fiber") as string;
  const technique = formData.get("technique") as string;
  const badge = formData.get("badge") as string;
  const stock = parseInt(formData.get("stock") as string) || 0;
  const delivery = formData.get("delivery") as string;
  const description = formData.get("description") as string;
  const isFeatured = formData.get("isFeatured") === "on";
  const isActive = formData.get("isActive") === "on";

  await prisma.product.update({
    where: { id },
    data: {
      name,
      slug: slugify(name),
      storeId,
      categoryId,
      price,
      unit,
      fiber,
      technique,
      badge,
      stock,
      delivery,
      description,
      isFeatured,
      isActive,
    },
  });

  revalidatePath("/admin/products");
  redirect("/admin/products");
}

export async function deleteProduct(id: string) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    throw new Error("Unauthorized");
  }

  await prisma.product.delete({ where: { id } });
  revalidatePath("/admin/products");
}

export async function createCategory(formData: FormData) {
  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const nameEn = formData.get("nameEn") as string;
  const nameRu = formData.get("nameRu") as string;

  await prisma.category.create({
    data: {
      name,
      slug: slugify(name),
      description,
      nameEn: nameEn || null,
      nameRu: nameRu || null,
    },
  });

  revalidatePath("/admin/categories");
  redirect("/admin/categories");
}

export async function updateOrderStatus(id: string, status: string) {
  await prisma.order.update({
    where: { id },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: { status: status as any },
  });
  revalidatePath("/admin/orders");
}
