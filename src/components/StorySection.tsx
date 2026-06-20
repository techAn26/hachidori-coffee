export default function StorySection() {
  return (
    <section id="story" className="py-28 sm:py-36 bg-brand-cream relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-20">
          <p className="section-label text-brand-gold mb-4">Our Story</p>
          <div className="w-8 h-px bg-brand-gold/40 mx-auto mb-6" />
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-green">
            なぜ、コロンビア直輸入なのか
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Image placeholder */}
          <div className="aspect-[4/3] rounded-xl bg-brand-green/5 border border-brand-green/8 flex items-center justify-center overflow-hidden">
            <div className="text-center p-8">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-brand-green/8 flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-brand-green/20"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={0.75}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.41a2.25 2.25 0 013.182 0l2.909 2.91M3.75 21h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v13.5A1.5 1.5 0 003.75 21z"
                  />
                </svg>
              </div>
              <p className="text-xs text-brand-green/25 tracking-wider">
                農園の写真
              </p>
            </div>
          </div>

          {/* Story content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="font-serif text-xl sm:text-2xl text-brand-green tracking-wide">
                農園との直接のつながり
              </h3>
              <p className="text-brand-brown/60 leading-loose">
                HACHIDORI
                COFFEEは、コロンビアの農園と直接取引しています。中間業者を介さないことで、生産者に適正な対価を届けながら、最高品質の豆を適正な価格でお届けすることを実現しました。
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-serif text-xl sm:text-2xl text-brand-green tracking-wide">
                鮮度へのこだわり
              </h3>
              <p className="text-brand-brown/60 leading-loose">
                一般的なコーヒー豆は、輸入から焙煎、販売までに数ヶ月を要します。私たちは直輸入した生豆を国内で管理し、ご予約が集まり次第焙煎。焙煎後48時間以内に発送することで、最高の鮮度をお約束します。
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-serif text-xl sm:text-2xl text-brand-green tracking-wide">
                ハチドリのひとしずく
              </h3>
              <p className="text-brand-brown/60 leading-loose">
                南米に伝わる「ハチドリのひとしずく」の物語のように、一杯のコーヒーが産地と消費者をつなぎ、小さくても確かな変化を生み出す。それが私たちの信念です。
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-10 border-t border-brand-green/8">
              <div>
                <p className="font-serif text-2xl sm:text-3xl text-brand-gold">
                  100%
                </p>
                <p className="text-xs text-brand-brown/40 mt-2 tracking-wider">
                  コロンビア産
                </p>
              </div>
              <div>
                <p className="font-serif text-2xl sm:text-3xl text-brand-gold">
                  48h
                </p>
                <p className="text-xs text-brand-brown/40 mt-2 tracking-wider">
                  焙煎後発送
                </p>
              </div>
              <div>
                <p className="font-serif text-2xl sm:text-3xl text-brand-gold">
                  Direct
                </p>
                <p className="text-xs text-brand-brown/40 mt-2 tracking-wider">
                  農園直取引
                </p>
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
