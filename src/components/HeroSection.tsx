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

      {/* Overlay */}
      <div className="absolute inset-0 bg-brand-green/60" />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at center, transparent 0%, rgba(13,31,23,0.4) 70%)",
        }}
      />

      {/* Content — centered */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-serif text-[2rem] sm:text-5xl md:text-6xl lg:text-7xl leading-[1.2] text-brand-cream/95 tracking-[0.02em]">
          コロンビアの農園から、
          <br />
          <span className="text-brand-gold">スペシャルティコーヒーを。</span>
        </h1>

        <div className="mt-10 sm:mt-12">
          <a
            href="/shop"
            className="inline-flex items-center rounded-lg bg-brand-gold px-10 py-3.5 text-sm tracking-[0.15em] uppercase font-medium text-brand-green-dark hover:bg-brand-gold-light"
          >
            Shop
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 text-brand-cream/20">
          <span className="text-[10px] tracking-[0.3em] uppercase">
            Scroll
          </span>
          <div className="h-8 w-px bg-gradient-to-b from-brand-cream/20 to-transparent" />
        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
