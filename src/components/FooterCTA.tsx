export default function FooterCTA() {
  return (
    <section className="py-24 sm:py-32 bg-brand-cream relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 30% 50%, rgba(26, 58, 42, 0.5) 0%, transparent 50%),
                              radial-gradient(circle at 70% 50%, rgba(201, 168, 76, 0.3) 0%, transparent 50%)`,
          }}
        />
      </div>

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm tracking-[0.2em] uppercase text-brand-gold mb-3">
          Reserve Now
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-green mb-6">
          次回の予約受付中
        </h2>
        <p className="text-brand-brown/60 leading-relaxed mb-10 max-w-xl mx-auto">
          コロンビアから届いた最高品質のスペシャルティコーヒーを、
          焙煎したての鮮度でお届けします。予約が集まり次第、焙煎を開始します。
        </p>

        {/* CTA */}
        <a
          href="/shop"
          className="inline-flex items-center rounded-full bg-brand-green px-10 py-4 text-base font-medium text-brand-cream hover:bg-brand-green-light transition-colors"
        >
          豆を選んで予約する
        </a>

        {/* Email signup */}
        <div className="mt-16 max-w-md mx-auto">
          <p className="text-sm text-brand-brown/50 mb-4">
            次回の予約開始をメールでお知らせ
          </p>
          <form
            className="flex gap-2"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="メールアドレス"
              className="flex-1 px-4 py-3 rounded-full bg-white border border-brand-green/10 text-sm text-brand-brown placeholder:text-brand-brown/30 focus:outline-none focus:border-brand-gold"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-full bg-brand-gold text-sm font-medium text-brand-green-dark hover:bg-brand-gold-light transition-colors shrink-0"
            >
              登録
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
