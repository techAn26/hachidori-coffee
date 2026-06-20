import Image from "next/image";
import AnimateOnScroll from "./AnimateOnScroll";

export default function StorySection() {
  return (
    <section id="story">
      {/* ─── Part 1: Editorial heading + KPI ─── */}
      <div className="bg-brand-green py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll className="max-w-3xl">
            <p className="section-label text-brand-gold/50 mb-6">Our Story</p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-cream/90 leading-snug">
              コロンビアの高地から、
              <br />
              一切の妥協なく。
            </h2>
            <p className="mt-6 text-brand-cream/35 font-light leading-relaxed max-w-xl">
              標高1,700m。火山性土壌。手摘み。直接取引。
              <br className="hidden sm:block" />
              すべての工程が、この一杯のためにあります。
            </p>
          </AnimateOnScroll>

          {/* KPI row */}
          <AnimateOnScroll className="mt-16 flex items-center gap-12 sm:gap-16">
            <div>
              <p className="font-serif text-3xl sm:text-4xl text-brand-gold">
                100<span className="text-xl">%</span>
              </p>
              <p className="text-[10px] text-brand-cream/30 tracking-[0.2em] uppercase mt-2">
                Colombian
              </p>
            </div>
            <div className="w-px h-10 bg-brand-cream/10" />
            <div>
              <p className="font-serif text-3xl sm:text-4xl text-brand-gold">
                48<span className="text-xl">h</span>
              </p>
              <p className="text-[10px] text-brand-cream/30 tracking-[0.2em] uppercase mt-2">
                Freshness
              </p>
            </div>
            <div className="w-px h-10 bg-brand-cream/10" />
            <div>
              <p className="font-serif text-3xl sm:text-4xl text-brand-gold">
                Direct
              </p>
              <p className="text-[10px] text-brand-cream/30 tracking-[0.2em] uppercase mt-2">
                Trade
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </div>

      {/* ─── Part 2: Photo mosaic ─── */}
      <div className="bg-brand-green">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24 sm:pb-32">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4">
            {/* Large photo — left 7 cols */}
            <AnimateOnScroll
              animation="slide-left"
              className="md:col-span-7 relative aspect-[3/4] sm:aspect-[4/5] rounded-lg overflow-hidden group"
            >
              <Image
                src="/images/farm-field.jpg"
                alt="コロンビアの高地コーヒー農園"
                fill
                className="object-cover group-hover:scale-[1.02] transition-transform duration-1000"
                sizes="(max-width: 768px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-green/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <p className="text-[10px] text-brand-gold/60 tracking-[0.2em] uppercase mb-2">
                  Altitude 1,700m
                </p>
                <p className="font-serif text-xl sm:text-2xl text-brand-cream/90">
                  Manzanares, Caldas
                </p>
              </div>
            </AnimateOnScroll>

            {/* Right column — 5 cols, 2 stacked photos */}
            <div className="md:col-span-5 grid grid-cols-2 md:grid-cols-1 gap-3 sm:gap-4">
              <AnimateOnScroll
                animation="slide-right"
                delay={1}
                className="relative aspect-square sm:aspect-[5/4] rounded-lg overflow-hidden group"
              >
                <Image
                  src="/images/coffee-cherries.jpg"
                  alt="完熟コーヒーチェリー"
                  fill
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-1000"
                  sizes="(max-width: 768px) 50vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-green/50 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                  <p className="text-[10px] text-brand-gold/60 tracking-[0.2em] uppercase mb-1">
                    Hand Picked
                  </p>
                  <p className="font-serif text-sm sm:text-lg text-brand-cream/80">
                    完熟チェリーだけを手摘み
                  </p>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll
                animation="slide-right"
                delay={2}
                className="relative aspect-square sm:aspect-[5/4] rounded-lg overflow-hidden group"
              >
                <Image
                  src="/images/producer-processing.jpg"
                  alt="コーヒー生産者"
                  fill
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-1000"
                  sizes="(max-width: 768px) 50vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-green/50 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                  <p className="text-[10px] text-brand-gold/60 tracking-[0.2em] uppercase mb-1">
                    Direct Trade
                  </p>
                  <p className="font-serif text-sm sm:text-lg text-brand-cream/80">
                    農園から直接、あなたへ
                  </p>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
        <div className="section-divider" />
      </div>

      {/* ─── Part 3: Quote ─── */}
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
          <blockquote className="font-serif text-2xl sm:text-3xl lg:text-4xl text-brand-cream/80 leading-relaxed italic">
            &ldquo;一杯のコーヒーが、
            <br />
            小さくても確かな変化を生み出す&rdquo;
          </blockquote>
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="w-8 h-px bg-brand-gold/30" />
            <p className="text-brand-gold/50 text-xs tracking-[0.2em] uppercase">
              Hachidori no Hitoshizuku
            </p>
            <div className="w-8 h-px bg-brand-gold/30" />
          </div>
        </AnimateOnScroll>

        <div className="absolute bottom-0 left-0 right-0 section-divider" />
      </div>
    </section>
  );
}
