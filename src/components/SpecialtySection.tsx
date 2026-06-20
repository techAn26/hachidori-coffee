import Image from "next/image";

export default function SpecialtySection() {
  return (
    <section className="py-28 sm:py-36 bg-brand-green relative overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/beans-closeup.webp"
        alt="焙煎されたコーヒー豆"
        fill
        className="object-cover opacity-15"
        sizes="100vw"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <p className="section-label text-brand-gold/60 mb-4">
                Specialty Coffee
              </p>
              <div className="w-8 h-px bg-brand-gold/30 mx-auto md:mx-0 mb-6" />
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-cream/90">
                スペシャルティコーヒーとは
              </h2>
            </div>

            <p className="text-brand-cream/50 leading-loose font-light">
              スペシャルティコーヒーとは、SCA（Specialty Coffee
              Association）の基準で80点以上の評価を受けた、世界の生産量のわずか5%に満たない希少なコーヒーです。
            </p>

            <p className="text-brand-cream/50 leading-loose font-light">
              HACHIDORI
              COFFEEが取り扱う豆は、すべてカッピングスコア82点以上。産地の気候・土壌・標高が生み出すテロワールを、焙煎で最大限に引き出しています。
            </p>

            <div className="space-y-5">
              <h3 className="font-serif text-lg text-brand-cream/80 tracking-wide">
                私たちが大切にしていること
              </h3>
              <ul className="space-y-3">
                {[
                  "トレーサビリティ — 農園・生産者まで追跡可能な透明性",
                  "サステナビリティ — 環境に配慮した栽培と適正な取引",
                  "フレッシュネス — 予約制による焙煎したての鮮度",
                  "クオリティ — SCA基準82点以上の厳選された品質",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-1 w-1 rounded-full bg-brand-gold/60 shrink-0" />
                    <span className="text-brand-cream/40 text-sm font-light leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Visual */}
          <div className="space-y-5">
            {/* Score card */}
            <div className="p-8 rounded-xl bg-brand-green-light/20 border border-brand-cream/6">
              <p className="text-[10px] tracking-[0.2em] uppercase text-brand-cream/35 mb-3">
                Cupping Score
              </p>
              <div className="flex items-end gap-3">
                <span className="font-serif text-6xl text-brand-gold/90">
                  82
                </span>
                <span className="text-brand-cream/30 text-lg mb-2 font-light">
                  点以上
                </span>
              </div>
              <p className="text-xs text-brand-cream/25 mt-3 font-light">
                SCA（Specialty Coffee Association）基準
              </p>
              <div className="mt-6 h-1.5 rounded-full bg-brand-green-dark/40 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-brand-gold-dark/80 to-brand-gold/80"
                  style={{ width: "82%" }}
                />
              </div>
              <div className="flex justify-between mt-2 text-[10px] text-brand-cream/20 tracking-wider">
                <span>0</span>
                <span>スペシャルティ基準 (80)</span>
                <span>100</span>
              </div>
            </div>

            {/* World production stat */}
            <div className="p-7 rounded-xl bg-brand-green-light/20 border border-brand-cream/6">
              <div className="flex items-center gap-5">
                <span className="font-serif text-4xl text-brand-gold/80">
                  &lt;5%
                </span>
                <div>
                  <p className="text-brand-cream/45 text-sm font-light">
                    世界のコーヒー生産量に占める
                  </p>
                  <p className="text-brand-cream/45 text-sm font-light">
                    スペシャルティコーヒーの割合
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
