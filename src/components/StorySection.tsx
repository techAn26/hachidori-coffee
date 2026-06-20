import Image from "next/image";
import AnimateOnScroll from "./AnimateOnScroll";

const storySteps = [
  {
    image: "/images/farm-field.jpg",
    alt: "コロンビアの高地コーヒー農園",
    title: "標高1,700mの農園から",
    text: "寒暖差の大きい高地と火山性土壌が、複雑な風味を育てます。",
    reverse: false,
  },
  {
    image: "/images/coffee-cherries.jpg",
    alt: "完熟コーヒーチェリー",
    title: "完熟チェリーだけを手摘みで",
    text: "一粒ずつ人の手で選別。機械では実現できない品質がここにあります。",
    reverse: true,
  },
  {
    image: "/images/producer-processing.jpg",
    alt: "コーヒー生産者の精製作業",
    title: "顔が見える、直接取引",
    text: "中間業者ゼロ。農園から届く最短ルートが、鮮度と適正価格を実現します。",
    reverse: false,
  },
];

export default function StorySection() {
  return (
    <section id="story">
      {/* ─── Block 1: KPI Impact ─── */}
      <div className="relative h-[60vh] min-h-[450px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/beans-closeup.webp"
          alt="焙煎されたコーヒー豆"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-brand-green/75" />

        <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
          <AnimateOnScroll>
            <p className="section-label text-brand-gold/60 mb-6">Our Story</p>
            <div className="w-8 h-px bg-brand-gold/30 mx-auto mb-10" />
          </AnimateOnScroll>

          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
            <AnimateOnScroll delay={1}>
              <p className="font-serif text-4xl sm:text-5xl text-brand-gold">
                100<span className="text-2xl">%</span>
              </p>
              <div className="w-6 h-px bg-brand-gold/30 mx-auto my-3" />
              <p className="text-[10px] text-brand-cream/40 tracking-[0.2em] uppercase">
                Colombia
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={2}>
              <p className="font-serif text-4xl sm:text-5xl text-brand-gold">
                48<span className="text-2xl">h</span>
              </p>
              <div className="w-6 h-px bg-brand-gold/30 mx-auto my-3" />
              <p className="text-[10px] text-brand-cream/40 tracking-[0.2em] uppercase">
                Freshness
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={3}>
              <p className="font-serif text-4xl sm:text-5xl text-brand-gold">
                Direct
              </p>
              <div className="w-6 h-px bg-brand-gold/30 mx-auto my-3" />
              <p className="text-[10px] text-brand-cream/40 tracking-[0.2em] uppercase">
                Trade
              </p>
            </AnimateOnScroll>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 section-divider" />
      </div>

      {/* ─── Block 2: Alternating story ─── */}
      <div className="bg-brand-green">
        {storySteps.map((step, i) => (
          <div key={i} className="relative">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 grid md:grid-cols-2 gap-10 lg:gap-20 items-center">
              <AnimateOnScroll
                animation={step.reverse ? "slide-right" : "slide-left"}
                className={step.reverse ? "md:order-2" : ""}
              >
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                  <Image
                    src={step.image}
                    alt={step.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll
                animation={step.reverse ? "slide-left" : "slide-right"}
                className={step.reverse ? "md:order-1" : ""}
              >
                <h3 className="font-serif text-2xl sm:text-3xl text-brand-cream/90 tracking-wide leading-snug mb-4">
                  {step.title}
                </h3>
                <p className="text-brand-cream/40 leading-relaxed font-light">
                  {step.text}
                </p>
              </AnimateOnScroll>
            </div>
            <div className="section-divider" />
          </div>
        ))}
      </div>

      {/* ─── Block 3: Quote ─── */}
      <div className="relative py-24 sm:py-32 overflow-hidden">
        <Image
          src="/images/finca-la-pastorita.jpg"
          alt="Finca La Pastorita"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-brand-green/80" />

        <AnimateOnScroll className="relative z-10 mx-auto max-w-3xl px-4 text-center">
          <div className="w-8 h-px bg-brand-gold/40 mx-auto mb-10" />
          <blockquote className="font-serif text-2xl sm:text-3xl lg:text-4xl text-brand-cream/80 leading-relaxed italic">
            &ldquo;一杯のコーヒーが、
            <br />
            産地と消費者をつなぎ、
            <br />
            小さくても確かな変化を生み出す&rdquo;
          </blockquote>
          <p className="mt-8 text-brand-gold/60 text-sm tracking-[0.15em]">
            &mdash; ハチドリのひとしずく
          </p>
          <p className="mt-2 text-brand-cream/20 text-xs tracking-wider font-light">
            Finca &ldquo;La Pastorita&rdquo; &mdash; Manzanares, Caldas
          </p>
          <div className="w-8 h-px bg-brand-gold/40 mx-auto mt-10" />
        </AnimateOnScroll>

        <div className="absolute bottom-0 left-0 right-0 section-divider" />
      </div>
    </section>
  );
}
