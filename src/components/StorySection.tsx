import Image from "next/image";
import AnimateOnScroll from "./AnimateOnScroll";

export default function StorySection() {
  return (
    <section id="story" className="bg-brand-green py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ─── Main grid: Text + Large photo side by side ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-end">
          {/* Left: Text + KPI (5 cols) */}
          <AnimateOnScroll
            animation="slide-left"
            className="lg:col-span-5 flex flex-col justify-between lg:min-h-[500px] xl:min-h-[560px]"
          >
            <div>
              <p className="section-label text-brand-gold/50 mb-6">
                Our Story
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl xl:text-5xl text-brand-cream/90 leading-snug">
                コロンビアの高地から、
                <br />
                一切の妥協なく。
              </h2>
              <p className="mt-6 text-brand-cream/30 font-light leading-relaxed text-sm">
                標高1,700m。火山性土壌。手摘み。直接取引。
                <br />
                すべての工程が、この一杯のためにあります。
              </p>
            </div>

            {/* KPI */}
            <div className="flex items-center gap-8 sm:gap-12 mt-12 lg:mt-0">
              <div>
                <p className="font-serif text-3xl text-brand-gold">
                  100<span className="text-lg">%</span>
                </p>
                <p className="text-[10px] text-brand-cream/25 tracking-[0.2em] uppercase mt-1">
                  Colombian
                </p>
              </div>
              <div className="w-px h-8 bg-brand-cream/8" />
              <div>
                <p className="font-serif text-3xl text-brand-gold">
                  48<span className="text-lg">h</span>
                </p>
                <p className="text-[10px] text-brand-cream/25 tracking-[0.2em] uppercase mt-1">
                  Freshness
                </p>
              </div>
              <div className="w-px h-8 bg-brand-cream/8" />
              <div>
                <p className="font-serif text-3xl text-brand-gold">Direct</p>
                <p className="text-[10px] text-brand-cream/25 tracking-[0.2em] uppercase mt-1">
                  Trade
                </p>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Right: Large photo (7 cols) */}
          <AnimateOnScroll
            animation="slide-right"
            className="lg:col-span-7"
          >
            <div className="relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] rounded-lg overflow-hidden group">
              <Image
                src="/images/farm-field.jpg"
                alt="コロンビアの高地コーヒー農園"
                fill
                className="object-cover group-hover:scale-[1.02] transition-transform duration-[1.2s]"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-green/50 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <p className="text-[10px] text-brand-gold/60 tracking-[0.25em] uppercase mb-1">
                  Altitude 1,700m
                </p>
                <p className="font-serif text-lg sm:text-xl text-brand-cream/80">
                  Manzanares, Caldas. Colombia
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>

        {/* ─── Bottom row: Two photos ─── */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-3 sm:mt-4">
          <AnimateOnScroll delay={1} className="relative aspect-[3/2] rounded-lg overflow-hidden group">
            <Image
              src="/images/coffee-cherries.jpg"
              alt="完熟コーヒーチェリー"
              fill
              className="object-cover group-hover:scale-[1.02] transition-transform duration-[1.2s]"
              sizes="50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-green/40 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
              <p className="text-[10px] text-brand-gold/50 tracking-[0.25em] uppercase mb-1 hidden sm:block">
                Hand Picked
              </p>
              <p className="font-serif text-sm sm:text-base text-brand-cream/70">
                完熟チェリーだけを手摘みで
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={2} className="relative aspect-[3/2] rounded-lg overflow-hidden group">
            <Image
              src="/images/producer-processing.jpg"
              alt="コーヒー生産者の精製作業"
              fill
              className="object-cover group-hover:scale-[1.02] transition-transform duration-[1.2s]"
              sizes="50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-green/40 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
              <p className="text-[10px] text-brand-gold/50 tracking-[0.25em] uppercase mb-1 hidden sm:block">
                Direct Trade
              </p>
              <p className="font-serif text-sm sm:text-base text-brand-cream/70">
                農園から直接、あなたへ
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="mt-24 sm:mt-32 section-divider" />
    </section>
  );
}
