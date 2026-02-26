"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

function shouldUseSecureCookies() {
  if (process.env.COOKIE_SECURE === "true") return true;
  if (process.env.COOKIE_SECURE === "false") return false;

  const publicUrl = process.env.NEXTAUTH_URL || process.env.AUTH_URL || "";
  return process.env.NODE_ENV === "production" && publicUrl.startsWith("https://");
}

// Generate session ID
async function getOrCreateSessionId() {
  const cookieStore = await cookies();
  let sessionId = cookieStore.get("cart_session")?.value;

  if (!sessionId) {
    sessionId = crypto.randomUUID();
    cookieStore.set("cart_session", sessionId, {
      httpOnly: true,
      secure: shouldUseSecureCookies(),
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 30, // 30 days
    });
  }

  return sessionId;
}

export async function addToCart(productId: string) {
  const sessionId = await getOrCreateSessionId();

  let cart = await prisma.cart.findUnique({ where: { sessionId } });
  if (!cart) {
    cart = await prisma.cart.create({ data: { sessionId } });
  }

  const existingItem = await prisma.cartItem.findFirst({
    where: { cartId: cart.id, productId },
  });

  if (existingItem) {
    await prisma.cartItem.update({
      where: { id: existingItem.id },
      data: { quantity: existingItem.quantity + 1 },
    });
  } else {
    await prisma.cartItem.create({
      data: { cartId: cart.id, productId, quantity: 1 },
    });
  }

  revalidatePath("/cart");
  revalidatePath("/shop");
  revalidatePath("/");
}

export async function updateCartItem(itemId: string, quantity: number) {
  if (quantity <= 0) {
    await prisma.cartItem.delete({ where: { id: itemId } });
  } else {
    await prisma.cartItem.update({
      where: { id: itemId },
      data: { quantity },
    });
  }
  revalidatePath("/cart");
}

export async function removeFromCart(itemId: string) {
  await prisma.cartItem.delete({ where: { id: itemId } });
  revalidatePath("/cart");
}

export async function checkout(formData: FormData) {
  const sessionId = await getOrCreateSessionId();

  const cart = await prisma.cart.findUnique({
    where: { sessionId },
    include: { items: { include: { product: true } } },
  });

  if (!cart || cart.items.length === 0) {
    throw new Error("Cart is empty");
  }

  const customerName = formData.get("customerName") as string;
  const customerEmail = formData.get("customerEmail") as string;
  const customerPhone = formData.get("customerPhone") as string;
  const address = formData.get("address") as string;
  const notes = formData.get("notes") as string;

  // Calculate total
  const total = cart.items.reduce(
    (sum, item) => sum + Number(item.product.price) * item.quantity,
    0
  );

  // Generate order number
  const orderNumber = `DWT-${Date.now().toString(36).toUpperCase()}`;

  // Create order
  const order = await prisma.order.create({
    data: {
      orderNumber,
      customerName,
      customerEmail,
      customerPhone,
      address,
      notes,
      total,
      items: {
        create: cart.items.map((item) => ({
          productId: item.productId,
          quantity: item.quantity,
          price: item.product.price,
        })),
      },
    },
  });

  // Clear cart
  await prisma.cartItem.deleteMany({ where: { cartId: cart.id } });
  await prisma.cart.delete({ where: { id: cart.id } });

  redirect(`/checkout/success?order=${order.orderNumber}`);
}

export async function getCart() {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get("cart_session")?.value;

  if (!sessionId) return null;

  return prisma.cart.findUnique({
    where: { sessionId },
    include: {
      items: {
        include: {
          product: {
            include: {
              store: true,
              images: {
                where: { isPrimary: true },
                take: 1
              }
            }
          }
        },
      },
    },
  });
}
