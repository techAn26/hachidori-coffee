export default function StorySection() {
  return (
    <section id="story" className="py-24 sm:py-32 bg-brand-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.2em] uppercase text-brand-gold mb-3">
            Our Story
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-green">
            なぜ、コロンビア直輸入なのか
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image placeholder */}
          <div className="aspect-[4/3] rounded-2xl bg-brand-green/10 flex items-center justify-center overflow-hidden">
            <div className="text-center p-8">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-brand-green/20 flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-brand-green/40"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.41a2.25 2.25 0 013.182 0l2.909 2.91M3.75 21h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v13.5A1.5 1.5 0 003.75 21z"
                  />
                </svg>
              </div>
              <p className="text-sm text-brand-green/40">農園の写真</p>
            </div>
          </div>

          {/* Story content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="font-serif text-xl sm:text-2xl text-brand-green">
                農園との直接のつながり
              </h3>
              <p className="text-brand-brown/70 leading-relaxed">
                HACHIDORI
                COFFEEは、コロンビアの農園と直接取引しています。中間業者を介さないことで、生産者に適正な対価を届けながら、最高品質の豆を適正な価格でお届けすることを実現しました。
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-serif text-xl sm:text-2xl text-brand-green">
                鮮度へのこだわり
              </h3>
              <p className="text-brand-brown/70 leading-relaxed">
                一般的なコーヒー豆は、輸入から焙煎、販売までに数ヶ月を要します。私たちは直輸入した生豆を国内で管理し、ご予約が集まり次第焙煎。焙煎後48時間以内に発送することで、最高の鮮度をお約束します。
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-serif text-xl sm:text-2xl text-brand-green">
                ハチドリのひとしずく
              </h3>
              <p className="text-brand-brown/70 leading-relaxed">
                南米に伝わる「ハチドリのひとしずく」の物語のように、一杯のコーヒーが産地と消費者をつなぎ、小さくても確かな変化を生み出す。それが私たちの信念です。
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-brand-green/10">
              <div>
                <p className="font-serif text-2xl sm:text-3xl text-brand-gold">
                  100%
                </p>
                <p className="text-sm text-brand-brown/60 mt-1">
                  コロンビア産
                </p>
              </div>
              <div>
                <p className="font-serif text-2xl sm:text-3xl text-brand-gold">
                  48h
                </p>
                <p className="text-sm text-brand-brown/60 mt-1">
                  焙煎後発送
                </p>
              </div>
              <div>
                <p className="font-serif text-2xl sm:text-3xl text-brand-gold">
                  Direct
                </p>
                <p className="text-sm text-brand-brown/60 mt-1">
                  農園直取引
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
