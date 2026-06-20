import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-green-dark py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="font-serif text-lg tracking-[0.15em] text-brand-cream/80"
            >
              HACHIDORI COFFEE
            </Link>
            <p className="mt-4 text-xs text-brand-cream/25 leading-loose font-light">
              コロンビアの農園から直輸入。
              <br />
              厳選されたスペシャルティコーヒーを、
              <br />
              焙煎したての鮮度でお届けします。
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-[10px] tracking-[0.2em] uppercase text-brand-cream/35 mb-5">
              Navigation
            </h3>
            <ul className="space-y-3">
              {[
                { label: "ストーリー", href: "#story" },
                { label: "コーヒー豆", href: "#beans" },
                { label: "ご予約の流れ", href: "#howto" },
                { label: "FAQ", href: "#faq" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-xs text-brand-cream/25 hover:text-brand-gold font-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-[10px] tracking-[0.2em] uppercase text-brand-cream/35 mb-5">
              Shop
            </h3>
            <ul className="space-y-3">
              {[
                { label: "商品一覧", href: "/shop" },
                { label: "カート", href: "/cart" },
                { label: "ログイン", href: "/login" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-brand-cream/25 hover:text-brand-gold font-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-[10px] tracking-[0.2em] uppercase text-brand-cream/35 mb-5">
              Legal
            </h3>
            <ul className="space-y-3">
              {[
                "特定商取引法に基づく表記",
                "プライバシーポリシー",
                "利用規約",
              ].map((label) => (
                <li key={label}>
                  <span className="text-xs text-brand-cream/25 cursor-pointer hover:text-brand-gold font-light">
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-brand-cream/5 text-center">
          <p className="text-[10px] text-brand-cream/15 tracking-[0.15em]">
            &copy; 2026 HACHIDORI COFFEE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
