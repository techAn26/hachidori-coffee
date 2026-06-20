import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[1000px] flex items-center justify-center bg-brand-green overflow-hidden">
      {/* Background video with image fallback */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/images/hero-landscape.jpg"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Layered overlays for depth */}
      <div className="absolute inset-0 bg-brand-green/60" />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at center, transparent 20%, rgba(6,15,11,0.5) 80%)",
        }}
      />

      {/* ─── Decorative frame ─── */}
      {/* Corner accents */}
      <div className="absolute top-8 left-8 sm:top-12 sm:left-12 w-12 sm:w-16 h-12 sm:h-16 border-t border-l border-brand-gold/20 z-10" />
      <div className="absolute top-8 right-8 sm:top-12 sm:right-12 w-12 sm:w-16 h-12 sm:h-16 border-t border-r border-brand-gold/20 z-10" />
      <div className="absolute bottom-8 left-8 sm:bottom-12 sm:left-12 w-12 sm:w-16 h-12 sm:h-16 border-b border-l border-brand-gold/20 z-10" />
      <div className="absolute bottom-8 right-8 sm:bottom-12 sm:right-12 w-12 sm:w-16 h-12 sm:h-16 border-b border-r border-brand-gold/20 z-10" />

      {/* ─── Content ─── */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 text-center">
        {/* Brand mark */}
        <div className="mb-8 sm:mb-10">
          <Image
            src="/images/logo.jpg"
            alt="HACHIDORI COFFEE"
            width={56}
            height={56}
            className="rounded-full mx-auto opacity-70"
          />
        </div>

        {/* Decorative line */}
        <div className="w-10 h-px bg-brand-gold/30 mx-auto mb-8 sm:mb-10" />

        {/* Headline */}
        <h1 className="font-serif text-[1.75rem] sm:text-4xl md:text-5xl lg:text-6xl leading-[1.3] text-brand-cream/95 tracking-[0.03em]">
          コロンビアの農園から、
          <br />
          <span className="text-brand-gold">スペシャルティコーヒーを。</span>
        </h1>

        {/* Decorative line */}
        <div className="w-10 h-px bg-brand-gold/30 mx-auto mt-8 sm:mt-10 mb-8 sm:mb-10" />

        {/* Sub text */}
        <p className="text-[10px] sm:text-xs text-brand-cream/30 tracking-[0.3em] uppercase mb-10 sm:mb-12">
          Colombia Direct Import &mdash; Specialty Coffee
        </p>

        {/* CTA */}
        <a
          href="/shop"
          className="inline-flex items-center rounded-none border border-brand-gold/60 bg-transparent px-10 sm:px-12 py-3 sm:py-3.5 text-[10px] sm:text-xs tracking-[0.25em] uppercase text-brand-gold hover:bg-brand-gold/10"
        >
          View Collection
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 text-brand-cream/15">
          <div className="h-8 w-px bg-gradient-to-b from-brand-cream/15 to-transparent" />
        </div>
      </div>
    </section>
  );
}
