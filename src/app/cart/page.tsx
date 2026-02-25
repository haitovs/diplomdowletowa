import { checkout, getCart, removeFromCart, updateCartItem } from "@/app/shop/actions";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

export default async function CartPage() {
  const cart = await getCart();
  const items = cart?.items || [];
  const total = items.reduce(
    (sum, item) => sum + Number(item.product.price) * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-desert-sand">
      <Header cartCount={items.length} />

      {/* Hero Section */}
      <section className="hero-gradient text-white py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm uppercase tracking-wide text-turkmen-gold mb-2">Your Selection</p>
          <h1 className="text-4xl font-bold uppercase tracking-wide mb-2">Shopping Cart</h1>
          <p className="opacity-90 max-w-2xl">
            Review your handpicked textiles before completing your order
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {items.length === 0 ? (
          <div className="card text-center py-16">
            <div className="text-6xl mb-4">🧺</div>
            <p className="text-xl text-gray-600 mb-2 font-bold">Your cart is empty</p>
            <p className="text-gray-500 mb-6">Discover our curated collection of Turkmen textiles</p>
            <Link href="/shop" className="btn btn-primary inline-block">
              Browse Collection
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-5">
              {items.map((item) => {
                const primaryImage = item.product.images?.[0];
                const itemTotal = Number(item.product.price) * item.quantity;

                return (
                  <article key={item.id} className="card hover:shadow-xl transition-shadow">
                    <div className="flex gap-6">
                      {/* Product Image */}
                      <div className="w-32 h-32 bg-turkmen-green/5 rounded-xl overflow-hidden flex-shrink-0 border border-turkmen-green/10 relative">
                        {primaryImage ? (
                          <Image
                            src={primaryImage.path}
                            alt={primaryImage.alt ?? item.product.name}
                            fill
                            className="object-cover"
                            sizes="128px"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-5xl">
                            🧶
                          </div>
                        )}
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className="font-bold text-lg text-turkmen-green mb-1">
                            {item.product.name}
                          </h3>
                          <p className="text-sm text-gray-500 mb-2">{item.product.store.name}</p>
                          <p className="text-xs text-gray-600">{item.product.fiber}</p>
                        </div>

                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center gap-3">
                            <span className="text-sm text-gray-500">Qty:</span>
                            <form className="flex items-center gap-2">
                              <button
                                formAction={async () => {
                                  "use server";
                                  await updateCartItem(item.id, item.quantity - 1);
                                }}
                                className="w-8 h-8 rounded-full border-2 border-turkmen-green/30 flex items-center justify-center hover:bg-turkmen-green hover:text-white transition-all font-bold text-turkmen-green"
                              >
                                -
                              </button>
                              <span className="w-10 text-center font-bold text-turkmen-green">
                                {item.quantity}
                              </span>
                              <button
                                formAction={async () => {
                                  "use server";
                                  await updateCartItem(item.id, item.quantity + 1);
                                }}
                                className="w-8 h-8 rounded-full border-2 border-turkmen-green/30 flex items-center justify-center hover:bg-turkmen-green hover:text-white transition-all font-bold text-turkmen-green"
                              >
                                +
                              </button>
                            </form>
                          </div>

                          <div className="text-right">
                            <div className="text-xs text-gray-500 mb-1">
                              ${Number(item.product.price).toFixed(2)} × {item.quantity}
                            </div>
                            <div className="text-xl font-bold text-turkmen-green">
                              ${itemTotal.toFixed(2)}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Remove Button */}
                      <form action={async () => {
                        "use server";
                        await removeFromCart(item.id);
                      }}>
                        <button
                          type="submit"
                          className="text-red-500 hover:text-red-700 transition-colors p-2"
                          title="Remove from cart"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </form>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Checkout Sidebar - Sticky */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="card-static">
                  <div className="border-b border-turkmen-green/10 pb-4 mb-6">
                    <h2 className="text-2xl font-bold text-turkmen-green">Order Summary</h2>
                  </div>

                  {/* Order Details */}
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-gray-600">
                      <span>Items ({items.length})</span>
                      <span className="font-semibold">${total.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Shipping</span>
                      <span className="text-turkmen-green font-semibold">Calculated at checkout</span>
                    </div>
                    <div className="border-t border-turkmen-green/10 pt-3 mt-3">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-gray-900">Total</span>
                        <span className="text-3xl font-bold text-turkmen-green">${total.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>

                  {/* Checkout Form */}
                  <form action={checkout} className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-turkmen-green mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="customerName"
                        required
                        placeholder="Enter your full name"
                        className="input-field"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-turkmen-green mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="customerEmail"
                        required
                        placeholder="your@email.com"
                        className="input-field"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-turkmen-green mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="customerPhone"
                        placeholder="+993 XX XXX XXX"
                        className="input-field"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-turkmen-green mb-2">
                        Delivery Address
                      </label>
                      <textarea
                        name="address"
                        rows={3}
                        placeholder="Street address, city, region..."
                        className="input-field resize-none"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-turkmen-green mb-2">
                        Special Instructions
                      </label>
                      <textarea
                        name="notes"
                        rows={2}
                        placeholder="Any special requests or notes..."
                        className="input-field resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary w-full py-4 text-base mt-6"
                    >
                      Complete Order
                    </button>

                    <p className="text-xs text-center text-gray-500 mt-3">
                      🔒 This is a demonstration. No payment will be processed.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
