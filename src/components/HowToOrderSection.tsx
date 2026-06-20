import Image from "next/image";
import AnimateOnScroll from "./AnimateOnScroll";

const steps = [
  {
    number: "01",
    title: "豆を選んで予約",
    description: "お好みの豆を選び、予約注文。決済は予約時に完了します。",
    image: { src: "/images/producer-carry.jpg", alt: "コーヒー豆の運搬" },
  },
  {
    number: "02",
    title: "予約が集まり次第、焙煎",
    description: "少量ずつ丁寧に焙煎。大量生産では叶わない品質です。",
    image: { src: "/images/roasting.jpg", alt: "コーヒー豆の焙煎" },
  },
  {
    number: "03",
    title: "焙煎したてをお届け",
    description: "焙煎後48時間以内に発送。最高の鮮度でお届けします。",
    image: { src: "/images/cherry-sorting.jpg", alt: "コーヒーチェリーの選別" },
  },
];

export default function HowToOrderSection() {
  return (
    <section id="howto" className="py-28 sm:py-36 bg-brand-cream relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <AnimateOnScroll className="text-center mb-20">
          <p className="section-label text-brand-gold mb-4">How to Order</p>
          <div className="w-8 h-px bg-brand-gold/40 mx-auto mb-6" />
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-green">
            ご予約の流れ
          </h2>
        </AnimateOnScroll>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <AnimateOnScroll key={step.number} delay={(index + 1) as 1 | 2 | 3}>
              <div className="text-center">
                {/* Step image */}
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-8">
                  <Image
                    src={step.image.src}
                    alt={step.image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-brand-green/20" />
                  <span className="absolute top-4 left-4 font-serif text-5xl text-brand-gold/20">
                    {step.number}
                  </span>
                </div>

                <h3 className="font-serif text-lg text-brand-green mb-3 tracking-wide">
                  {step.title}
                </h3>
                <p className="text-brand-brown/45 leading-relaxed max-w-xs mx-auto text-sm font-light">
                  {step.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
