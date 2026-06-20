"use client";

import { useState } from "react";

const faqs = [
  {
    question: "予約からどのくらいで届きますか？",
    answer:
      "予約数が一定数に達した時点で焙煎を開始します。焙煎後48時間以内に発送しますので、予約状況により1〜3週間程度でお届けとなります。焙煎開始時にメールでお知らせいたします。",
  },
  {
    question: "コーヒー豆の保存方法は？",
    answer:
      "直射日光を避け、常温の冷暗所で保存してください。開封後は密閉容器に移し、2週間以内にお召し上がりいただくのがおすすめです。冷凍保存も可能ですが、解凍後の再冷凍は風味を損なうためお控えください。",
  },
  {
    question: "粉での購入は可能ですか？",
    answer:
      "現在は豆のままでの販売のみとなっております。挽きたての風味をお楽しみいただくため、ご自宅でのグラインドをおすすめしています。ミルをお持ちでない方には、おすすめのミルもご紹介しています。",
  },
  {
    question: "送料はいくらですか？",
    answer:
      "全国一律550円（税込）でお届けいたします。5,000円以上のご注文で送料無料となります。",
  },
  {
    question: "支払い方法は何がありますか？",
    answer:
      "クレジットカード（Visa、Mastercard、JCB、American Express）でお支払いいただけます。決済は予約時に行われます。",
  },
  {
    question: "予約のキャンセルはできますか？",
    answer:
      "焙煎開始前であれば、キャンセル・変更が可能です。焙煎開始後のキャンセルは承りかねますのでご了承ください。キャンセルの場合は全額返金いたします。",
  },
];

function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-brand-green/10">
      <button
        type="button"
        className="w-full flex items-center justify-between py-5 text-left"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="font-medium text-brand-green pr-4">{question}</span>
        <svg
          className={`w-5 h-5 text-brand-gold shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="pb-5">
          <p className="text-brand-brown/60 leading-relaxed text-sm">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}

export default function FAQSection() {
  return (
    <section id="faq" className="py-24 sm:py-32 bg-brand-green">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.2em] uppercase text-brand-gold/80 mb-3">
            FAQ
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-cream">
            よくあるご質問
          </h2>
        </div>

        {/* FAQ list */}
        <div className="divide-y divide-brand-cream/10 border-t border-brand-cream/10 [&_span]:text-brand-cream [&_p]:text-brand-cream/60">
          {faqs.map((faq) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
