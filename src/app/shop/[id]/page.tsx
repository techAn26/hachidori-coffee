import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { products } from "@/lib/products";
import AddToCartButton from "./AddToCartButton";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);
  if (!product) return { title: "商品が見つかりません" };
  return {
    title: `${product.name} | HACHIDORI COFFEE`,
    description: product.description,
  };
}

function TasteChart({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-brand-brown/60 w-10 shrink-0">
        {label}
      </span>
      <div className="flex-1 flex gap-1">
        {[1, 2, 3, 4, 5].map((level) => (
          <div
            key={level}
            className={`h-2 flex-1 rounded-full ${
              level <= value ? "bg-brand-gold" : "bg-brand-green/10"
            }`}
          />
        ))}
      </div>
      <span className="text-xs text-brand-brown/40 w-6 text-right">
        {value}/5
      </span>
    </div>
  );
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="pt-16">
        <div className="bg-brand-cream py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="mb-8 text-sm text-brand-brown/40">
              <Link href="/" className="hover:text-brand-gold transition-colors">
                ホーム
              </Link>
              <span className="mx-2">/</span>
              <Link
                href="/shop"
                className="hover:text-brand-gold transition-colors"
              >
                商品一覧
              </Link>
              <span className="mx-2">/</span>
              <span className="text-brand-brown/70">{product.name}</span>
            </nav>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Image */}
              <div className="aspect-square rounded-2xl bg-brand-green/5 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-brand-green/10 flex items-center justify-center">
                    <svg
                      className="w-16 h-16 text-brand-green/20"
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
                  <p className="text-sm text-brand-green/20">
                    {product.nameEn}
                  </p>
                </div>
              </div>

              {/* Details */}
              <div className="space-y-8">
                {/* Name & Price */}
                <div>
                  <p className="text-sm text-brand-brown/40 mb-1">
                    {product.nameEn}
                  </p>
                  <h1 className="font-serif text-3xl sm:text-4xl text-brand-green">
                    {product.name}
                  </h1>
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="font-serif text-3xl text-brand-gold">
                      &yen;{product.price.toLocaleString()}
                    </span>
                    <span className="text-sm text-brand-brown/40">
                      ({product.weight})
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-brand-brown/70 leading-relaxed">
                  {product.description}
                </p>

                {/* Flavor notes */}
                <div>
                  <h3 className="text-sm font-medium text-brand-green mb-3">
                    フレーバーノート
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {product.flavorNotes.map((note) => (
                      <span
                        key={note}
                        className="text-sm px-3 py-1.5 rounded-full border border-brand-gold/30 text-brand-gold-dark bg-brand-gold/5"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Taste chart */}
                <div>
                  <h3 className="text-sm font-medium text-brand-green mb-4">
                    味わいチャート
                  </h3>
                  <div className="space-y-3">
                    <TasteChart label="酸味" value={product.taste.acidity} />
                    <TasteChart
                      label="苦味"
                      value={product.taste.bitterness}
                    />
                    <TasteChart label="甘み" value={product.taste.sweetness} />
                    <TasteChart label="コク" value={product.taste.body} />
                  </div>
                </div>

                {/* Specs */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "産地", value: product.region },
                    { label: "標高", value: product.altitude },
                    { label: "精製方法", value: product.process },
                    { label: "焙煎度", value: product.roast },
                  ].map((spec) => (
                    <div
                      key={spec.label}
                      className="p-3 rounded-lg bg-brand-green/5"
                    >
                      <p className="text-xs text-brand-brown/40">
                        {spec.label}
                      </p>
                      <p className="text-sm text-brand-green mt-0.5">
                        {spec.value}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Brew recommendation */}
                <div className="p-4 rounded-xl bg-brand-gold/5 border border-brand-gold/20">
                  <p className="text-xs text-brand-gold-dark mb-1">
                    おすすめの淹れ方
                  </p>
                  <p className="text-sm text-brand-brown/70">
                    {product.brewRecommendation}
                  </p>
                </div>

                {/* Add to cart */}
                <AddToCartButton product={product} />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
