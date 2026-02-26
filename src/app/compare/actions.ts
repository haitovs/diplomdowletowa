"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

function shouldUseSecureCookies() {
  if (process.env.COOKIE_SECURE === "true") return true;
  if (process.env.COOKIE_SECURE === "false") return false;

  const publicUrl = process.env.NEXTAUTH_URL || process.env.AUTH_URL || "";
  return process.env.NODE_ENV === "production" && publicUrl.startsWith("https://");
}

// Generate session ID
async function getOrCreateSessionId() {
  const cookieStore = await cookies();
  let sessionId = cookieStore.get("compare_session")?.value;
  
  if (!sessionId) {
    sessionId = crypto.randomUUID();
    cookieStore.set("compare_session", sessionId, {
      httpOnly: true,
      secure: shouldUseSecureCookies(),
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 30, // 30 days
    });
  }
  
  return sessionId;
}

export async function addToCompare(productId: string) {
  const sessionId = await getOrCreateSessionId();

  // Check if already exists
  const existing = await prisma.compareItem.findUnique({
    where: { sessionId_productId: { sessionId, productId } },
  });

  if (existing) {
    return; // Already in compare list
  }

  // Limit to 3 items
  const count = await prisma.compareItem.count({ where: { sessionId } });
  if (count >= 3) {
    throw new Error("Compare limit reached (max 3 items)");
  }

  await prisma.compareItem.create({
    data: { sessionId, productId },
  });

  revalidatePath("/compare");
  revalidatePath("/shop");
}

export async function removeFromCompare(itemId: string) {
  await prisma.compareItem.delete({ where: { id: itemId } });
  revalidatePath("/compare");
}

export async function clearCompare() {
  const sessionId = await getOrCreateSessionId();
  await prisma.compareItem.deleteMany({ where: { sessionId } });
  revalidatePath("/compare");
}

export async function getCompare() {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get("compare_session")?.value;

  if (!sessionId) return [];

  return prisma.compareItem.findMany({
    where: { sessionId },
    include: {
      product: {
        include: {
          store: { select: { name: true } },
          category: { select: { name: true } },
        },
      },
    },
    orderBy: { createdAt: "asc" },
    take: 3,
  });
}
