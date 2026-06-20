import Link from "next/link";
import { products } from "@/lib/products";

function TasteChart({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-xs text-brand-brown/60 w-10 shrink-0">
        {label}
      </span>
      <div className="flex-1 flex gap-1">
        {[1, 2, 3, 4, 5].map((level) => (
          <div
            key={level}
            className={`h-1.5 flex-1 rounded-full ${
              level <= value ? "bg-brand-gold" : "bg-brand-green/10"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function BeansSection() {
  return (
    <section id="beans" className="py-24 sm:py-32 bg-brand-green">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.2em] uppercase text-brand-gold/80 mb-3">
            Our Beans
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-cream">
            厳選された3つの豆
          </h2>
          <p className="mt-4 text-brand-cream/60 max-w-2xl mx-auto">
            コロンビアの異なる産地から届く、個性豊かなスペシャルティコーヒー。
            それぞれの土地が育んだ味わいをお楽しみください。
          </p>
        </div>

        {/* Beans grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-brand-green-light/30 border border-brand-cream/10 rounded-2xl overflow-hidden hover:border-brand-gold/30 transition-colors"
            >
              {/* Image placeholder */}
              <div className="aspect-square bg-brand-green-dark/50 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-brand-cream/5 flex items-center justify-center">
                    <svg
                      className="w-10 h-10 text-brand-cream/20"
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
                  <p className="text-xs text-brand-cream/20">
                    {product.nameEn}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                {/* Name & Region */}
                <div>
                  <h3 className="font-serif text-xl text-brand-cream group-hover:text-brand-gold transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs text-brand-cream/50 mt-1">
                    {product.nameEn}
                  </p>
                  <p className="text-sm text-brand-cream/60 mt-2">
                    {product.region} / {product.altitude}
                  </p>
                </div>

                {/* Flavor notes */}
                <div className="flex flex-wrap gap-2">
                  {product.flavorNotes.map((note) => (
                    <span
                      key={note}
                      className="text-xs px-2.5 py-1 rounded-full border border-brand-gold/30 text-brand-gold/80"
                    >
                      {note}
                    </span>
                  ))}
                </div>

                {/* Taste chart */}
                <div className="space-y-2 py-3">
                  <TasteChart label="酸味" value={product.taste.acidity} />
                  <TasteChart label="苦味" value={product.taste.bitterness} />
                  <TasteChart label="甘み" value={product.taste.sweetness} />
                  <TasteChart label="コク" value={product.taste.body} />
                </div>

                {/* Roast & Process */}
                <div className="flex items-center justify-between text-sm">
                  <span className="text-brand-cream/50">
                    焙煎: {product.roast}
                  </span>
                  <span className="text-brand-cream/50">
                    精製: {product.process}
                  </span>
                </div>

                {/* Brew recommendation */}
                <p className="text-xs text-brand-cream/40">
                  おすすめ: {product.brewRecommendation}
                </p>

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-brand-cream/10">
                  <span className="font-serif text-xl text-brand-gold">
                    &yen;{product.price.toLocaleString()}
                  </span>
                  <Link
                    href={`/shop/${product.id}`}
                    className="text-sm px-5 py-2 rounded-full border border-brand-gold/50 text-brand-gold hover:bg-brand-gold hover:text-brand-green-dark transition-colors"
                  >
                    詳しく見る
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
