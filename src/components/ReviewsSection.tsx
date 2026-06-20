const reviews = [
  {
    name: "T.K.",
    title: "コーヒー歴15年",
    rating: 5,
    text: "ウィラ スプレモの甘みに驚きました。スーパーで買っていた豆とは別次元の味わいです。予約制というのも、届くまでの楽しみがあっていいですね。",
    product: "ウィラ スプレモ",
  },
  {
    name: "M.S.",
    title: "自家焙煎愛好家",
    rating: 5,
    text: "シエラネバダのコクと甘みのバランスが絶妙。エスプレッソで淹れると、チョコレートのような余韻が長く続きます。リピート確定です。",
    product: "シエラネバダ",
  },
  {
    name: "A.Y.",
    title: "カフェオーナー",
    rating: 5,
    text: "ナリーニョ エスペシャルの華やかな香りは、お客様にも大好評。直輸入ならではの鮮度の良さを実感しています。産地のストーリーも素晴らしい。",
    product: "ナリーニョ エスペシャル",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${star <= rating ? "text-brand-gold" : "text-brand-green/20"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section className="py-24 sm:py-32 bg-brand-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.2em] uppercase text-brand-gold mb-3">
            Reviews
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-green">
            お客様の声
          </h2>
        </div>

        {/* Reviews grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="p-8 rounded-2xl bg-white border border-brand-green/5 shadow-sm"
            >
              <StarRating rating={review.rating} />
              <p className="mt-4 text-brand-brown/70 leading-relaxed text-sm">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="mt-6 pt-4 border-t border-brand-green/5">
                <p className="font-medium text-brand-green text-sm">
                  {review.name}
                </p>
                <p className="text-xs text-brand-brown/50 mt-0.5">
                  {review.title} &mdash; {review.product}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
