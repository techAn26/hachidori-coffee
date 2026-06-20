import Image from "next/image";
import AnimateOnScroll from "./AnimateOnScroll";

export default function SpecialtySection() {
  return (
    <section className="pt-20 sm:pt-28 pb-28 sm:pb-36 bg-brand-green relative overflow-hidden">
      <Image
        src="/images/beans-closeup.webp"
        alt="焙煎されたコーヒー豆"
        fill
        className="object-cover opacity-15"
        sizes="100vw"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
          <AnimateOnScroll animation="slide-left" className="space-y-8">
            <div>
              <p className="section-label text-brand-gold/50 mb-4">
                Specialty Coffee
              </p>
              <div className="w-8 h-px bg-brand-gold/30 mx-auto md:mx-0 mb-6" />
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-cream/90">
                スペシャルティコーヒーとは
              </h2>
            </div>

            <p className="text-brand-cream/50 leading-loose font-light">
              SCA基準で80点以上の評価を受けた、世界の生産量のわずか5%に満たない希少なコーヒー。HACHIDORI COFFEEの豆はすべてカッピングスコア82点以上です。
            </p>

            <ul className="space-y-3">
              {[
                "トレーサビリティ — 農園まで追跡可能",
                "サステナビリティ — 環境配慮と適正取引",
                "フレッシュネス — 予約制で焙煎したて",
                "クオリティ — SCA基準82点以上",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-1 w-1 rounded-full bg-brand-gold/60 shrink-0" />
                  <span className="text-brand-cream/40 text-sm font-light">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </AnimateOnScroll>

          <AnimateOnScroll animation="slide-right" className="space-y-5">
            <div className="p-8 rounded-xl bg-brand-green-light/20 border border-brand-cream/6">
              <p className="text-[10px] tracking-[0.2em] uppercase text-brand-cream/35 mb-3">
                Cupping Score
              </p>
              <div className="flex items-end gap-3">
                <span className="font-serif text-6xl text-brand-gold/90">82</span>
                <span className="text-brand-cream/30 text-lg mb-2 font-light">点以上</span>
              </div>
              <div className="mt-6 h-1.5 rounded-full bg-brand-green-dark/40 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-brand-gold-dark/80 to-brand-gold/80"
                  style={{ width: "82%" }}
                />
              </div>
              <div className="flex justify-between mt-2 text-[10px] text-brand-cream/20 tracking-wider">
                <span>0</span>
                <span>Specialty (80)</span>
                <span>100</span>
              </div>
            </div>

            <div className="p-7 rounded-xl bg-brand-green-light/20 border border-brand-cream/6">
              <div className="flex items-center gap-5">
                <span className="font-serif text-4xl text-brand-gold/80">&lt;5%</span>
                <p className="text-brand-cream/45 text-sm font-light">
                  世界のコーヒー生産量に占めるスペシャルティの割合
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
