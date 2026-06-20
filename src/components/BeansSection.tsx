import Link from "next/link";
import Image from "next/image";
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
      <span className="text-[10px] tracking-wider text-brand-cream/40 w-10 shrink-0">
        {label}
      </span>
      <div className="flex-1 flex gap-1">
        {[1, 2, 3, 4, 5].map((level) => (
          <div
            key={level}
            className={`h-1 flex-1 rounded-full ${
              level <= value ? "bg-brand-gold/80" : "bg-brand-cream/8"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function BeansSection() {
  return (
    <section id="beans" className="py-28 sm:py-36 bg-brand-green relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-20">
          <p className="section-label text-brand-gold/60 mb-4">Our Beans</p>
          <div className="w-8 h-px bg-brand-gold/30 mx-auto mb-6" />
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-cream/90">
            厳選された3つの豆
          </h2>
          <p className="mt-6 text-brand-cream/40 max-w-2xl mx-auto leading-relaxed font-light">
            コロンビアの異なる産地から届く、個性豊かなスペシャルティコーヒー。
            それぞれの土地が育んだ味わいをお楽しみください。
          </p>
        </div>

        {/* Beans grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-brand-green-light/20 border border-brand-cream/6 rounded-xl overflow-hidden hover:border-brand-gold/20"
            >
              {/* Product image */}
              <div className="aspect-[3/4] relative overflow-hidden bg-gradient-to-b from-brand-green-dark/60 to-brand-green/80 flex items-center justify-center p-8">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-6 drop-shadow-2xl group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                {/* Name & Region */}
                <div>
                  <h3 className="font-serif text-xl text-brand-cream/90 group-hover:text-brand-gold">
                    {product.name}
                  </h3>
                  <p className="text-[10px] text-brand-cream/30 mt-1 tracking-wider">
                    {product.nameEn}
                  </p>
                  <p className="text-xs text-brand-cream/40 mt-3">
                    {product.region} / {product.altitude}
                  </p>
                </div>

                {/* Flavor notes */}
                <div className="flex flex-wrap gap-2">
                  {product.flavorNotes.map((note) => (
                    <span
                      key={note}
                      className="text-[10px] px-2.5 py-1 rounded border border-brand-gold/20 text-brand-gold/60 tracking-wider"
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
                <div className="flex items-center justify-between text-[10px] tracking-wider">
                  <span className="text-brand-cream/30">
                    焙煎: {product.roast}
                  </span>
                  <span className="text-brand-cream/30">
                    精製: {product.process}
                  </span>
                </div>

                {/* Brew recommendation */}
                <p className="text-[10px] text-brand-cream/25 tracking-wider">
                  おすすめ: {product.brewRecommendation}
                </p>

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-brand-cream/6">
                  <span className="font-serif text-xl text-brand-gold">
                    &yen;{product.price.toLocaleString()}
                  </span>
                  <Link
                    href={`/shop/${product.id}`}
                    className="text-[10px] tracking-[0.1em] uppercase px-5 py-2 rounded-lg border border-brand-gold/30 text-brand-gold/70 hover:bg-brand-gold hover:text-brand-green-dark"
                  >
                    Detail
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
