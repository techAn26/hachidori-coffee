import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { products } from "@/lib/products";

export const metadata = {
  title: "商品一覧 | HACHIDORI COFFEE",
  description: "コロンビア産スペシャルティコーヒー豆の商品一覧。予約受付中。",
};

function TasteBar({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-xs text-brand-brown/50 w-8 shrink-0">{label}</span>
      <div className="flex-1 flex gap-0.5">
        {[1, 2, 3, 4, 5].map((level) => (
          <div
            key={level}
            className={`h-1 flex-1 rounded-full ${
              level <= value ? "bg-brand-gold" : "bg-brand-green/10"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function ShopPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero */}
        <div className="bg-brand-green py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm tracking-[0.2em] uppercase text-brand-gold/80 mb-3">
              Online Shop
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-cream">
              コーヒー豆一覧
            </h1>
            <p className="mt-4 text-brand-cream/60">
              すべての豆は予約制です。予約が集まり次第、焙煎してお届けします。
            </p>
          </div>
        </div>

        {/* Product grid */}
        <div className="bg-brand-cream py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <Link
                  key={product.id}
                  href={`/shop/${product.id}`}
                  className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-brand-green/5"
                >
                  {/* Image placeholder */}
                  <div className="aspect-[4/3] bg-brand-green/5 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-brand-green/10 flex items-center justify-center">
                        <svg
                          className="w-8 h-8 text-brand-green/20"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1}
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.41a2.25 2.25 0 013.182 0l2.909 2.91M3.75 21h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v13.5A1.5 1.5 0 003.75 21z"
                          />
                        </svg>
                      </div>
                      <p className="text-xs text-brand-green/20">
                        {product.nameEn}
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <h2 className="font-serif text-xl text-brand-green group-hover:text-brand-gold transition-colors">
                          {product.name}
                        </h2>
                        <p className="text-xs text-brand-brown/40 mt-0.5">
                          {product.nameEn}
                        </p>
                      </div>
                      <span className="font-serif text-lg text-brand-gold">
                        &yen;{product.price.toLocaleString()}
                      </span>
                    </div>

                    <p className="mt-3 text-sm text-brand-brown/50">
                      {product.region}
                    </p>

                    {/* Flavor notes */}
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {product.flavorNotes.map((note) => (
                        <span
                          key={note}
                          className="text-xs px-2 py-0.5 rounded-full bg-brand-green/5 text-brand-green/60"
                        >
                          {note}
                        </span>
                      ))}
                    </div>

                    {/* Taste chart */}
                    <div className="mt-4 space-y-1.5">
                      <TasteBar label="酸味" value={product.taste.acidity} />
                      <TasteBar
                        label="苦味"
                        value={product.taste.bitterness}
                      />
                      <TasteBar label="甘み" value={product.taste.sweetness} />
                      <TasteBar label="コク" value={product.taste.body} />
                    </div>

                    {/* Meta */}
                    <div className="mt-4 flex items-center justify-between text-xs text-brand-brown/40">
                      <span>
                        {product.roast} / {product.process}
                      </span>
                      <span>{product.weight}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
