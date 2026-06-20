import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-green-dark py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="font-serif text-lg tracking-wider text-brand-cream"
            >
              HACHIDORI COFFEE
            </Link>
            <p className="mt-3 text-sm text-brand-cream/40 leading-relaxed">
              コロンビアの農園から直輸入。
              <br />
              厳選されたスペシャルティコーヒーを、
              <br />
              焙煎したての鮮度でお届けします。
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-medium text-brand-cream/60 mb-4">
              ナビゲーション
            </h3>
            <ul className="space-y-2">
              {[
                { label: "ストーリー", href: "#story" },
                { label: "コーヒー豆", href: "#beans" },
                { label: "ご予約の流れ", href: "#howto" },
                { label: "FAQ", href: "#faq" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-brand-cream/40 hover:text-brand-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-sm font-medium text-brand-cream/60 mb-4">
              ショップ
            </h3>
            <ul className="space-y-2">
              {[
                { label: "商品一覧", href: "/shop" },
                { label: "カート", href: "/cart" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-brand-cream/40 hover:text-brand-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-medium text-brand-cream/60 mb-4">
              ご利用について
            </h3>
            <ul className="space-y-2">
              {[
                "特定商取引法に基づく表記",
                "プライバシーポリシー",
                "利用規約",
              ].map((label) => (
                <li key={label}>
                  <span className="text-sm text-brand-cream/40 cursor-pointer hover:text-brand-gold transition-colors">
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-brand-cream/5 text-center">
          <p className="text-xs text-brand-cream/30">
            &copy; 2026 HACHIDORI COFFEE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
