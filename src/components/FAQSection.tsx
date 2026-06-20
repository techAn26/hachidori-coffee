"use client";

import { useState } from "react";
import AnimateOnScroll from "./AnimateOnScroll";

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
    <div className="border-b border-brand-cream/8">
      <button
        type="button"
        className="w-full flex items-center justify-between py-6 text-left"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="text-sm text-brand-cream/70 pr-4 tracking-wide font-light">
          {question}
        </span>
        <svg
          className={`w-4 h-4 text-brand-gold/50 shrink-0 transition-transform duration-400 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
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
        <div className="pb-6">
          <p className="text-brand-cream/40 leading-loose text-sm font-light">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}

export default function FAQSection() {
  return (
    <section id="faq" className="py-28 sm:py-36 bg-brand-green relative">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <AnimateOnScroll className="text-center mb-20">
          <p className="section-label text-brand-gold/50 mb-4">FAQ</p>
          <div className="w-8 h-px bg-brand-gold/30 mx-auto mb-6" />
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-cream/90">
            よくあるご質問
          </h2>
        </AnimateOnScroll>

        {/* FAQ list */}
        <div className="border-t border-brand-cream/8">
          {faqs.map((faq) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
