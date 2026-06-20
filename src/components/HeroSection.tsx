export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-brand-green overflow-hidden">
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

      {/* Overlay — slightly heavier for video readability */}
      <div className="absolute inset-0 bg-brand-green/65" />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at center, rgba(13,31,23,0.3) 0%, rgba(13,31,23,0.7) 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        {/* Main heading */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-brand-cream/95 mb-6 tracking-[0.02em]">
          コロンビアの農園から、
          <br />
          <span className="text-brand-gold">優雅なひと時をあなたへ。</span>
        </h1>

        {/* Description */}
        <p className="mx-auto max-w-md text-sm sm:text-base text-brand-cream/40 leading-relaxed mb-12 font-light">
          厳選されたスペシャルティコーヒーを、
          焙煎したての鮮度でお届けします。
        </p>

        {/* CTA */}
        <a
          href="/shop"
          className="inline-flex items-center rounded-lg bg-brand-gold px-10 py-3.5 text-sm tracking-[0.15em] uppercase font-medium text-brand-green-dark hover:bg-brand-gold-light"
        >
          Shop
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
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
