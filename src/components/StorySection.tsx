import Image from "next/image";
import AnimateOnScroll from "./AnimateOnScroll";

export default function StorySection() {
  return (
    <section id="story" className="bg-brand-green py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ─── Text + KPI ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-end mb-10 sm:mb-14">
          <AnimateOnScroll animation="slide-left">
            <p className="section-label text-brand-gold/50 mb-5">Our Story</p>
            <h2 className="font-serif text-3xl sm:text-4xl xl:text-5xl text-brand-cream/90 leading-snug">
              コロンビアの高地から、
              <br />
              一切の妥協なく。
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll animation="slide-right">
            <p className="text-brand-cream/30 font-light leading-relaxed text-sm mb-8">
              標高1,700m。火山性土壌。手摘み。直接取引。
              すべての工程が、この一杯のためにあります。
            </p>
            <div className="flex items-center gap-8 sm:gap-10">
              <div>
                <p className="font-serif text-2xl text-brand-gold">
                  100<span className="text-sm">%</span>
                </p>
                <p className="text-[10px] text-brand-cream/20 tracking-[0.2em] uppercase mt-1">
                  Colombian
                </p>
              </div>
              <div className="w-px h-7 bg-brand-cream/8" />
              <div>
                <p className="font-serif text-2xl text-brand-gold">
                  48<span className="text-sm">h</span>
                </p>
                <p className="text-[10px] text-brand-cream/20 tracking-[0.2em] uppercase mt-1">
                  Freshness
                </p>
              </div>
              <div className="w-px h-7 bg-brand-cream/8" />
              <div>
                <p className="font-serif text-2xl text-brand-gold">Direct</p>
                <p className="text-[10px] text-brand-cream/20 tracking-[0.2em] uppercase mt-1">
                  Trade
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>

        {/* ─── Photo strip: 3 photos in one row ─── */}
        <div className="grid grid-cols-12 gap-2 sm:gap-3">
          <AnimateOnScroll delay={1} className="col-span-6 relative aspect-[3/2] rounded-lg overflow-hidden group">
            <Image
              src="/images/farm-field.jpg"
              alt="コロンビアの高地コーヒー農園"
              fill
              className="object-cover group-hover:scale-[1.02] transition-transform duration-[1.2s]"
              sizes="50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-green/40 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
              <p className="font-serif text-sm sm:text-base text-brand-cream/80">
                Manzanares, Caldas
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={2} className="col-span-3 relative aspect-[3/4] sm:aspect-[3/2] rounded-lg overflow-hidden group">
            <Image
              src="/images/coffee-cherries.jpg"
              alt="完熟コーヒーチェリー"
              fill
              className="object-cover group-hover:scale-[1.02] transition-transform duration-[1.2s]"
              sizes="25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-green/40 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
              <p className="font-serif text-xs sm:text-sm text-brand-cream/70">
                Hand Picked
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={3} className="col-span-3 relative aspect-[3/4] sm:aspect-[3/2] rounded-lg overflow-hidden group">
            <Image
              src="/images/producer-processing.jpg"
              alt="コーヒー生産者"
              fill
              className="object-cover group-hover:scale-[1.02] transition-transform duration-[1.2s]"
              sizes="25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-green/40 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
              <p className="font-serif text-xs sm:text-sm text-brand-cream/70">
                Direct Trade
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </div>

      <div className="mt-20 sm:mt-28 section-divider" />
    </section>
  );
}
