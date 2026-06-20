"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { products, type Product } from "@/lib/products";

type CartItem = {
  id: string;
  quantity: number;
};

function getCart(): CartItem[] {
  if (typeof window === "undefined") return [];
  return JSON.parse(localStorage.getItem("hachidori-cart") || "[]");
}

function saveCart(cart: CartItem[]) {
  localStorage.setItem("hachidori-cart", JSON.stringify(cart));
}

export default function CartContent() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setCartItems(getCart());
    setMounted(true);
  }, []);

  const cartProducts = cartItems
    .map((item) => ({
      product: products.find((p) => p.id === item.id),
      quantity: item.quantity,
    }))
    .filter(
      (item): item is { product: Product; quantity: number } =>
        item.product !== undefined
    );

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(id);
      return;
    }
    const updated = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: Math.min(10, newQuantity) } : item
    );
    setCartItems(updated);
    saveCart(updated);
  };

  const removeItem = (id: string) => {
    const updated = cartItems.filter((item) => item.id !== id);
    setCartItems(updated);
    saveCart(updated);
  };

  const subtotal = cartProducts.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const shipping = subtotal >= 5000 ? 0 : 550;
  const total = subtotal + shipping;

  if (!mounted) {
    return (
      <div className="text-center py-20">
        <p className="text-brand-brown/40">読み込み中...</p>
      </div>
    );
  }

  if (cartProducts.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-brand-green/5 flex items-center justify-center">
          <svg
            className="w-10 h-10 text-brand-green/20"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
        </div>
        <h2 className="font-serif text-2xl text-brand-green mb-3">
          カートは空です
        </h2>
        <p className="text-brand-brown/50 mb-8">
          コーヒー豆を選んで予約しましょう
        </p>
        <Link
          href="/shop"
          className="inline-flex items-center rounded-full bg-brand-gold px-8 py-3 text-base font-medium text-brand-green-dark hover:bg-brand-gold-light transition-colors"
        >
          商品一覧へ
        </Link>
      </div>
    );
  }

  return (
    <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
      {/* Cart items */}
      <div className="lg:col-span-2 space-y-4">
        {cartProducts.map(({ product, quantity }) => (
          <div
            key={product.id}
            className="flex gap-4 sm:gap-6 p-4 sm:p-6 bg-white rounded-xl border border-brand-green/5"
          >
            {/* Image placeholder */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg bg-brand-green/5 flex items-center justify-center shrink-0">
              <svg
                className="w-8 h-8 text-brand-green/15"
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

            {/* Details */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between">
                <div>
                  <Link
                    href={`/shop/${product.id}`}
                    className="font-serif text-lg text-brand-green hover:text-brand-gold transition-colors"
                  >
                    {product.name}
                  </Link>
                  <p className="text-xs text-brand-brown/40 mt-0.5">
                    {product.nameEn} / {product.weight}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => removeItem(product.id)}
                  className="text-brand-brown/30 hover:text-red-500 transition-colors p-1"
                  aria-label="削除"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="mt-3 flex items-center justify-between">
                {/* Quantity */}
                <div className="flex items-center border border-brand-green/10 rounded-full">
                  <button
                    type="button"
                    onClick={() => updateQuantity(product.id, quantity - 1)}
                    className="w-8 h-8 flex items-center justify-center text-brand-brown/40 hover:text-brand-green text-sm"
                  >
                    &minus;
                  </button>
                  <span className="w-8 text-center text-sm text-brand-green">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => updateQuantity(product.id, quantity + 1)}
                    className="w-8 h-8 flex items-center justify-center text-brand-brown/40 hover:text-brand-green text-sm"
                  >
                    +
                  </button>
                </div>

                {/* Price */}
                <span className="font-serif text-lg text-brand-gold">
                  &yen;{(product.price * quantity).toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Order summary */}
      <div className="lg:col-span-1">
        <div className="sticky top-24 p-6 bg-white rounded-xl border border-brand-green/5">
          <h2 className="font-serif text-xl text-brand-green mb-6">
            ご注文内容
          </h2>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-brand-brown/60">小計</span>
              <span className="text-brand-brown">
                &yen;{subtotal.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-brand-brown/60">送料</span>
              <span className="text-brand-brown">
                {shipping === 0 ? (
                  <span className="text-brand-gold">無料</span>
                ) : (
                  `¥${shipping.toLocaleString()}`
                )}
              </span>
            </div>
            {subtotal < 5000 && (
              <p className="text-xs text-brand-gold">
                あと&yen;{(5000 - subtotal).toLocaleString()}で送料無料
              </p>
            )}
          </div>

          <div className="mt-4 pt-4 border-t border-brand-green/10 flex justify-between items-baseline">
            <span className="text-sm font-medium text-brand-green">合計</span>
            <span className="font-serif text-2xl text-brand-gold">
              &yen;{total.toLocaleString()}
            </span>
          </div>

          <button
            type="button"
            className="mt-6 w-full py-4 rounded-full bg-brand-gold text-base font-medium text-brand-green-dark hover:bg-brand-gold-light transition-colors"
            onClick={() => alert("決済機能は今後実装予定です")}
          >
            予約を確定する
          </button>

          <p className="mt-3 text-xs text-center text-brand-brown/40">
            予約確定後、予約が集まり次第焙煎・発送いたします
          </p>

          <Link
            href="/shop"
            className="mt-4 block text-center text-sm text-brand-brown/50 hover:text-brand-gold transition-colors"
          >
            買い物を続ける
          </Link>
        </div>
      </div>
    </div>
  );
}
