import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartContent from "./CartContent";

export const metadata = {
  title: "カート | HACHIDORI COFFEE",
  description: "ご予約内容の確認",
};

export default function CartPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero */}
        <div className="bg-brand-green py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm tracking-[0.2em] uppercase text-brand-gold/80 mb-3">
              Cart
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl text-brand-cream">
              ご予約カート
            </h1>
          </div>
        </div>

        {/* Cart content */}
        <div className="bg-brand-cream py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <CartContent />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
