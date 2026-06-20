export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-brand-green overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(201, 168, 76, 0.3) 0%, transparent 50%),
                              radial-gradient(circle at 75% 75%, rgba(201, 168, 76, 0.2) 0%, transparent 50%)`,
          }}
        />
      </div>

      {/* Decorative gold line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        {/* Sub heading */}
        <p className="mb-6 text-sm tracking-[0.3em] uppercase text-brand-gold/80">
          Colombia Direct Import &mdash; Specialty Coffee
        </p>

        {/* Main heading */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-brand-cream mb-8">
          コロンビアの農園から、
          <br />
          <span className="text-brand-gold">あなたのカップへ。</span>
        </h1>

        {/* Description */}
        <p className="mx-auto max-w-2xl text-base sm:text-lg text-brand-cream/70 leading-relaxed mb-12">
          中間業者を介さず、コロンビアの農園から直接届く
          <br className="hidden sm:block" />
          スペシャルティコーヒー。
          <br className="hidden sm:block" />
          予約が集まり次第焙煎し、最高の鮮度でお届けします。
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/shop"
            className="inline-flex items-center rounded-full bg-brand-gold px-8 py-3.5 text-base font-medium text-brand-green-dark hover:bg-brand-gold-light transition-colors"
          >
            予約する
          </a>
          <a
            href="#beans"
            className="inline-flex items-center rounded-full border border-brand-cream/30 px-8 py-3.5 text-base text-brand-cream hover:border-brand-gold hover:text-brand-gold transition-colors"
          >
            豆を見る
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-brand-cream/40">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="h-8 w-px bg-gradient-to-b from-brand-cream/40 to-transparent" />
        </div>
      </div>

      {/* Bottom gold line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />
    </section>
  );
}
