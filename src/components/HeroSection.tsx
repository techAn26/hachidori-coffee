import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-brand-green overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/hero-landscape.jpg"
        alt="コロンビア マンサナレス カルダスの山岳風景"
        fill
        className="object-cover"
        priority
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-brand-green/75" />

      {/* Subtle gold gradient */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 30%, rgba(184, 150, 74, 0.06) 0%, transparent 60%),
                              radial-gradient(circle at 80% 70%, rgba(184, 150, 74, 0.04) 0%, transparent 60%)`,
          }}
        />
      </div>

      {/* Top gold line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        {/* Sub heading */}
        <p className="section-label mb-8 text-brand-gold/70">
          Colombia Direct Import &mdash; Specialty Coffee
        </p>

        {/* Decorative line */}
        <div className="w-12 h-px bg-brand-gold/40 mx-auto mb-10" />

        {/* Main heading */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-brand-cream/90 mb-8 tracking-[0.02em]">
          コロンビアの農園から、
          <br />
          <span className="text-brand-gold">優雅なひと時をあなたへ。</span>
        </h1>

        {/* Description */}
        <p className="mx-auto max-w-2xl text-base sm:text-lg text-brand-cream/50 leading-loose mb-14 font-light">
          中間業者を介さず、コロンビアの農園から直接届く
          <br className="hidden sm:block" />
          スペシャルティコーヒー。
          <br className="hidden sm:block" />
          予約が集まり次第焙煎し、最高の鮮度でお届けします。
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <a
            href="/shop"
            className="inline-flex items-center rounded-lg bg-brand-gold px-10 py-3.5 text-sm tracking-[0.1em] uppercase font-medium text-brand-green-dark hover:bg-brand-gold-light"
          >
            Shop
          </a>
          <a
            href="#beans"
            className="inline-flex items-center rounded-lg border border-brand-cream/20 px-10 py-3.5 text-sm tracking-[0.1em] uppercase text-brand-cream/70 hover:border-brand-gold/50 hover:text-brand-gold"
          >
            Our Beans
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-3 text-brand-cream/25">
          <span className="text-[10px] tracking-[0.3em] uppercase">
            Scroll
          </span>
          <div className="h-10 w-px bg-gradient-to-b from-brand-cream/25 to-transparent" />
        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
