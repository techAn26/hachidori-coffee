"use client";

export default function FooterCTA() {
  return (
    <section className="py-28 sm:py-36 bg-brand-cream relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 30% 50%, rgba(13, 31, 23, 0.03) 0%, transparent 50%),
                              radial-gradient(circle at 70% 50%, rgba(184, 150, 74, 0.04) 0%, transparent 50%)`,
          }}
        />
      </div>

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="section-label text-brand-gold mb-4">Reserve Now</p>
        <div className="w-8 h-px bg-brand-gold/40 mx-auto mb-6" />
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-green mb-8">
          次回の予約受付中
        </h2>
        <p className="text-brand-brown/45 leading-loose mb-12 max-w-xl mx-auto font-light">
          コロンビアから届いた最高品質のスペシャルティコーヒーを、
          焙煎したての鮮度でお届けします。予約が集まり次第、焙煎を開始します。
        </p>

        {/* CTA */}
        <a
          href="/shop"
          className="inline-flex items-center rounded-lg bg-brand-green px-12 py-4 text-sm tracking-[0.1em] uppercase text-brand-cream/80 hover:bg-brand-green-light"
        >
          豆を選んで予約する
        </a>

        {/* Email signup */}
        <div className="mt-20 max-w-md mx-auto">
          <p className="text-xs text-brand-brown/35 mb-5 tracking-wider">
            次回の予約開始をメールでお知らせ
          </p>
          <form
            className="flex gap-2"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="メールアドレス"
              className="flex-1 px-5 py-3 rounded-lg bg-white border border-brand-green/8 text-sm text-brand-brown placeholder:text-brand-brown/25 focus:outline-none focus:border-brand-gold/50 font-light"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-lg bg-brand-gold text-sm tracking-wider text-brand-green-dark hover:bg-brand-gold-light shrink-0"
            >
              登録
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
