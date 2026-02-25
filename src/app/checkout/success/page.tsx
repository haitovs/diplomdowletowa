import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";

export default async function CheckoutSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ order?: string }>;
}) {
  const params = await searchParams;
  const orderNumber = params.order || "Unknown";

  return (
    <div className="min-h-screen bg-desert-sand flex flex-col">
      <Header />
      
      <div className="flex-1 flex items-center justify-center py-12">
        <div className="bg-white rounded-2xl shadow-soft border border-turkmen-gold/10 p-12 max-w-lg text-center">
          <div className="w-20 h-20 bg-turkmen-green/10 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-turkmen-green">
            <span className="text-4xl text-turkmen-green">✓</span>
          </div>
          <h1 className="text-3xl font-bold text-turkmen-green mb-4">
            Order Confirmed!
          </h1>
          <p className="text-gray-600 mb-2">
            Thank you for your order. Your order number is:
          </p>
          <p className="text-2xl font-bold text-turkmen-gold mb-6">
            {orderNumber}
          </p>
          <p className="text-gray-500 text-sm mb-8">
            This is a simulated checkout for diploma demonstration. 
            In a real application, you would receive an email confirmation.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/shop"
              className="btn btn-primary"
            >
              Continue Shopping
            </Link>
            <Link
              href="/"
              className="btn btn-secondary"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
