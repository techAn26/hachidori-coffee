export default function SpecialtySection() {
  return (
    <section className="py-24 sm:py-32 bg-brand-green">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <p className="text-sm tracking-[0.2em] uppercase text-brand-gold/80 mb-3">
                Specialty Coffee
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-cream">
                スペシャルティコーヒーとは
              </h2>
            </div>

            <p className="text-brand-cream/70 leading-relaxed">
              スペシャルティコーヒーとは、SCA（Specialty Coffee
              Association）の基準で80点以上の評価を受けた、世界の生産量のわずか5%に満たない希少なコーヒーです。
            </p>

            <p className="text-brand-cream/70 leading-relaxed">
              HACHIDORI
              COFFEEが取り扱う豆は、すべてカッピングスコア82点以上。産地の気候・土壌・標高が生み出すテロワールを、焙煎で最大限に引き出しています。
            </p>

            <div className="space-y-4">
              <h3 className="font-serif text-xl text-brand-cream">
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
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-gold shrink-0" />
                    <span className="text-brand-cream/60 text-sm">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Visual */}
          <div className="space-y-6">
            {/* Score card */}
            <div className="p-8 rounded-2xl bg-brand-green-light/30 border border-brand-cream/10">
              <p className="text-sm text-brand-cream/50 mb-2">
                カッピングスコア
              </p>
              <div className="flex items-end gap-3">
                <span className="font-serif text-6xl text-brand-gold">82</span>
                <span className="text-brand-cream/40 text-lg mb-2">
                  点以上
                </span>
              </div>
              <p className="text-sm text-brand-cream/40 mt-3">
                SCA（Specialty Coffee Association）基準
              </p>
              <div className="mt-6 h-2 rounded-full bg-brand-green-dark/50 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-brand-gold-dark to-brand-gold"
                  style={{ width: "82%" }}
                />
              </div>
              <div className="flex justify-between mt-2 text-xs text-brand-cream/30">
                <span>0</span>
                <span>スペシャルティ基準 (80)</span>
                <span>100</span>
              </div>
            </div>

            {/* World production stat */}
            <div className="p-6 rounded-2xl bg-brand-green-light/30 border border-brand-cream/10">
              <div className="flex items-center gap-4">
                <span className="font-serif text-4xl text-brand-gold">
                  &lt;5%
                </span>
                <div>
                  <p className="text-brand-cream/70 text-sm">
                    世界のコーヒー生産量に占める
                  </p>
                  <p className="text-brand-cream/70 text-sm">
                    スペシャルティコーヒーの割合
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
