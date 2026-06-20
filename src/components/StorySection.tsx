import Image from "next/image";

const storySteps = [
  {
    image: "/images/farm-field.jpg",
    alt: "標高1,700mのコーヒー農園",
    label: "01",
    title: "標高1,700mの農園から",
    text: "コロンビア中央山脈、標高1,700〜2,300mの高地。昼夜の寒暖差が大きく、火山性の肥沃な土壌が広がるこの地は、世界有数のスペシャルティコーヒーの産地です。私たちはこの地で代々コーヒーを育てる農園と直接つながっています。",
    reverse: false,
  },
  {
    image: "/images/coffee-cherries.jpg",
    alt: "完熟したコーヒーチェリー",
    label: "02",
    title: "完熟チェリーだけを、手摘みで",
    text: "真っ赤に熟したチェリーだけを、一粒ずつ手で摘み取る。機械では実現できない選別の精度が、スペシャルティグレードの品質を支えています。収穫から精製まで、すべての工程に人の手と目が入ります。",
    reverse: true,
  },
  {
    image: "/images/producer-harvest.jpg",
    alt: "コーヒー農園の生産者",
    label: "03",
    title: "生産者の顔が見える、直接取引",
    text: "中間業者を介さず、農園から直接買い付ける。それは生産者に適正な対価を届けることであり、同時に最高の品質を最短ルートで届けることでもあります。顔が見える関係だからこそ、信頼できる一杯をお届けできます。",
    reverse: false,
  },
];

export default function StorySection() {
  return (
    <section id="story">
      {/* ─── Block 1: Full-width hero with KPIs ─── */}
      <div className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/hero-landscape.jpg"
          alt="Manzanares, Caldas. Colombia"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-brand-green/70" />

        <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
          <p className="section-label text-brand-gold/60 mb-4">Our Story</p>
          <div className="w-8 h-px bg-brand-gold/30 mx-auto mb-8" />
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-cream/90 mb-6">
            なぜ、コロンビア直輸入なのか
          </h2>
          <p className="text-brand-cream/40 text-sm tracking-wider mb-16 font-light">
            Manzanares, Caldas. Colombia
          </p>

          {/* KPI numbers */}
          <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
            <div>
              <p className="font-serif text-4xl sm:text-5xl text-brand-gold">
                100
                <span className="text-2xl sm:text-3xl">%</span>
              </p>
              <div className="w-6 h-px bg-brand-gold/30 mx-auto my-3" />
              <p className="text-[10px] text-brand-cream/40 tracking-[0.2em] uppercase">
                Colombia
              </p>
            </div>
            <div>
              <p className="font-serif text-4xl sm:text-5xl text-brand-gold">
                48
                <span className="text-2xl sm:text-3xl">h</span>
              </p>
              <div className="w-6 h-px bg-brand-gold/30 mx-auto my-3" />
              <p className="text-[10px] text-brand-cream/40 tracking-[0.2em] uppercase">
                Freshness
              </p>
            </div>
            <div>
              <p className="font-serif text-4xl sm:text-5xl text-brand-gold">
                Direct
              </p>
              <div className="w-6 h-px bg-brand-gold/30 mx-auto my-3" />
              <p className="text-[10px] text-brand-cream/40 tracking-[0.2em] uppercase">
                Trade
              </p>
            </div>
          </div>
        </div>

        {/* Bottom divider */}
        <div className="absolute bottom-0 left-0 right-0 section-divider" />
      </div>

      {/* ─── Block 2: Alternating story steps ─── */}
      <div className="bg-brand-green">
        {storySteps.map((step) => (
          <div key={step.label} className="relative">
            <div
              className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 grid md:grid-cols-2 gap-10 lg:gap-20 items-center ${
                step.reverse ? "md:direction-rtl" : ""
              }`}
            >
              {/* Image */}
              <div
                className={`relative aspect-[4/3] rounded-xl overflow-hidden ${
                  step.reverse ? "md:order-2" : ""
                }`}
              >
                <Image
                  src={step.image}
                  alt={step.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-brand-green/10" />
                {/* Step number */}
                <div className="absolute top-6 left-6">
                  <span className="font-serif text-6xl text-brand-gold/15">
                    {step.label}
                  </span>
                </div>
              </div>

              {/* Text */}
              <div
                className={`space-y-6 ${step.reverse ? "md:order-1" : ""}`}
              >
                <div>
                  <span className="text-[10px] tracking-[0.3em] uppercase text-brand-gold/50">
                    Step {step.label}
                  </span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-brand-cream/90 tracking-wide leading-snug">
                  {step.title}
                </h3>
                <p className="text-brand-cream/40 leading-loose font-light text-sm sm:text-base">
                  {step.text}
                </p>
              </div>
            </div>

            {/* Step divider */}
            <div className="section-divider" />
          </div>
        ))}
      </div>

      {/* ─── Block 3: Hachidori quote ─── */}
      <div className="relative py-28 sm:py-36 overflow-hidden">
        <Image
          src="/images/finca-la-pastorita.jpg"
          alt="Finca La Pastorita"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-brand-green/80" />

        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
          <div className="w-8 h-px bg-brand-gold/40 mx-auto mb-10" />

          <blockquote className="font-serif text-2xl sm:text-3xl lg:text-4xl text-brand-cream/80 leading-relaxed italic">
            &ldquo;一杯のコーヒーが、
            <br />
            産地と消費者をつなぎ、
            <br />
            小さくても確かな変化を生み出す&rdquo;
          </blockquote>

          <div className="mt-10 space-y-2">
            <p className="text-brand-gold/60 text-sm tracking-[0.15em]">
              &mdash; ハチドリのひとしずく
            </p>
            <p className="text-brand-cream/25 text-xs tracking-wider font-light">
              南米に伝わる寓話より
            </p>
          </div>

          <div className="w-8 h-px bg-brand-gold/40 mx-auto mt-10" />

          <p className="mt-8 text-brand-cream/30 text-xs tracking-wider font-light">
            Finca &ldquo;La Pastorita&rdquo; &mdash; Manzanares, Caldas
          </p>
        </div>

        {/* Bottom divider */}
        <div className="absolute bottom-0 left-0 right-0 section-divider" />
      </div>
    </section>
  );
}
