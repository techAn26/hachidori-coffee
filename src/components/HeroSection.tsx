export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-end bg-brand-green overflow-hidden">
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
      <div className="absolute inset-0 bg-brand-green/55" />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to top, rgba(13,31,23,0.8) 0%, rgba(13,31,23,0.2) 50%, rgba(13,31,23,0.4) 100%)",
        }}
      />

      {/* Content — bottom-left aligned */}
      <div className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 pb-24 sm:pb-32">
        <div className="max-w-2xl">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.15] text-brand-cream/95 mb-10 tracking-[0.02em]">
            コロンビアの農園から、
            <br />
            <span className="text-brand-gold">スペシャルティコーヒーを。</span>
          </h1>

          <a
            href="/shop"
            className="inline-flex items-center rounded-lg bg-brand-gold px-10 py-3.5 text-sm tracking-[0.15em] uppercase font-medium text-brand-green-dark hover:bg-brand-gold-light"
          >
            Shop
          </a>
        </div>
      </div>

      {/* Scroll indicator — bottom right */}
      <div className="absolute bottom-10 right-8 sm:right-12 z-10">
        <div className="flex flex-col items-center gap-3 text-brand-cream/20">
          <span className="text-[10px] tracking-[0.3em] uppercase">
            Scroll
          </span>
          <div className="h-10 w-px bg-gradient-to-b from-brand-cream/20 to-transparent" />
        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
