import Image from "next/image";

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
          {/* Farm image */}
          <div className="aspect-[4/3] rounded-xl overflow-hidden relative">
            <Image
              src="/images/farm-field.jpg"
              alt="コロンビアのコーヒー農園"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
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
