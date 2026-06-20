const steps = [
  {
    number: "01",
    title: "豆を選んで予約",
    description:
      "お好みの豆を選び、予約注文してください。決済は予約時に完了します。",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
        />
      </svg>
    ),
  },
  {
    number: "02",
    title: "予約が集まり次第、焙煎",
    description:
      "一定数の予約が集まった時点で焙煎を開始。少量ずつ丁寧に焙煎します。",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.047 8.287 8.287 0 009 9.601a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 18a3.75 3.75 0 00.495-7.468 5.99 5.99 0 00-1.925 3.547 5.975 5.975 0 01-2.133-1.001A3.75 3.75 0 0012 18z"
        />
      </svg>
    ),
  },
  {
    number: "03",
    title: "焙煎したてをお届け",
    description:
      "焙煎後48時間以内に発送。最高の鮮度でお手元にお届けします。",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
        />
      </svg>
    ),
  },
];

export default function HowToOrderSection() {
  return (
    <section id="howto" className="py-28 sm:py-36 bg-brand-cream relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-20">
          <p className="section-label text-brand-gold mb-4">How to Order</p>
          <div className="w-8 h-px bg-brand-gold/40 mx-auto mb-6" />
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-green">
            ご予約の流れ
          </h2>
          <p className="mt-6 text-brand-brown/45 max-w-2xl mx-auto leading-relaxed font-light">
            予約制だからこそ実現できる、焙煎したての鮮度。
            <br className="hidden sm:block" />
            大量生産では叶わない、一杯一杯への丁寧なこだわり。
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-16">
          {steps.map((step, index) => (
            <div key={step.number} className="relative text-center">
              {/* Connector line (desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-px bg-gradient-to-r from-brand-gold/20 to-brand-gold/5" />
              )}

              {/* Step icon */}
              <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-xl bg-brand-green text-brand-gold/70 mb-8">
                {step.icon}
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-brand-gold text-brand-green-dark text-[10px] font-medium flex items-center justify-center tracking-wider">
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
          ))}
        </div>

        {/* Benefits */}
        <div className="mt-24 grid sm:grid-cols-3 gap-5">
          {[
            {
              title: "鮮度最優先",
              description: "まとめて焙煎するから、届く豆はいつも焙煎したて。",
            },
            {
              title: "少量生産",
              description:
                "一度に焙煎する量を限定し、品質管理を徹底しています。",
            },
            {
              title: "希少な味わい",
              description: "大量流通しない、産地の個性が際立つ特別な一杯。",
            },
          ].map((benefit) => (
            <div
              key={benefit.title}
              className="p-7 rounded-xl bg-brand-green/3 border border-brand-green/6"
            >
              <h4 className="font-serif text-base text-brand-green mb-2 tracking-wide">
                {benefit.title}
              </h4>
              <p className="text-xs text-brand-brown/45 leading-relaxed font-light">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
