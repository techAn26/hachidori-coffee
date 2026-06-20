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
      <div className="absolute inset-0 bg-brand-green/70" />

      {/* Subtle gold gradient */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 30%, rgba(184, 150, 74, 0.06) 0%, transparent 60%),
                            radial-gradient(circle at 80% 70%, rgba(184, 150, 74, 0.04) 0%, transparent 60%)`,
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        {/* Logo mark */}
        <Image
          src="/images/logo.jpg"
          alt="HACHIDORI COFFEE"
          width={64}
          height={64}
          className="rounded-full mx-auto mb-8 opacity-80"
        />

        {/* Main heading */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-brand-cream/90 mb-6 tracking-[0.02em]">
          コロンビアの農園から、
          <br />
          <span className="text-brand-gold">優雅なひと時をあなたへ。</span>
        </h1>

        {/* Description — shorter */}
        <p className="mx-auto max-w-lg text-sm sm:text-base text-brand-cream/40 leading-relaxed mb-12 font-light">
          厳選されたスペシャルティコーヒーを、
          焙煎したての鮮度でお届けします。
        </p>

        {/* CTA — single primary */}
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
