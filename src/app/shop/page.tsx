import Link from "next/link";
import Image from "next/image";
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
      <span className="text-[10px] text-brand-brown/40 w-8 shrink-0 tracking-wider">
        {label}
      </span>
      <div className="flex-1 flex gap-0.5">
        {[1, 2, 3, 4, 5].map((level) => (
          <div
            key={level}
            className={`h-1 flex-1 rounded-full ${
              level <= value ? "bg-brand-gold" : "bg-brand-green/8"
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
      <main className="pt-20">
        {/* Hero */}
        <div className="bg-brand-green py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <p className="section-label text-brand-gold/60 mb-4">
              Online Shop
            </p>
            <div className="w-8 h-px bg-brand-gold/30 mx-auto mb-6" />
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-cream/90">
              コーヒー豆一覧
            </h1>
            <p className="mt-6 text-brand-cream/40 font-light">
              すべての豆は予約制です。予約が集まり次第、焙煎してお届けします。
            </p>
          </div>
        </div>

        {/* Product grid */}
        <div className="bg-brand-cream py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {products.map((product) => (
                <Link
                  key={product.id}
                  href={`/shop/${product.id}`}
                  className="group block bg-white rounded-xl overflow-hidden border border-brand-green/4 hover:border-brand-gold/20"
                >
                  {/* Product image */}
                  <div className="aspect-[3/4] relative overflow-hidden bg-gradient-to-b from-brand-green-dark/60 to-brand-green/80">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-6 drop-shadow-2xl group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <h2 className="font-serif text-lg text-brand-green group-hover:text-brand-gold">
                          {product.name}
                        </h2>
                        <p className="text-[10px] text-brand-brown/30 mt-0.5 tracking-wider">
                          {product.nameEn}
                        </p>
                      </div>
                      <span className="font-serif text-lg text-brand-gold">
                        &yen;{product.price.toLocaleString()}
                      </span>
                    </div>

                    <p className="mt-3 text-xs text-brand-brown/40 font-light">
                      {product.region}
                    </p>

                    {/* Flavor notes */}
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {product.flavorNotes.map((note) => (
                        <span
                          key={note}
                          className="text-[10px] px-2 py-0.5 rounded border border-brand-green/8 text-brand-green/50 tracking-wider"
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
                    <div className="mt-4 flex items-center justify-between text-[10px] text-brand-brown/30 tracking-wider">
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
