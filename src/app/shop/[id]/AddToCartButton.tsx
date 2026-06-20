"use client";

import { useState } from "react";
import type { Product } from "@/lib/products";

export default function AddToCartButton({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    // TODO: カート状態管理の実装
    const cart = JSON.parse(localStorage.getItem("hachidori-cart") || "[]");
    const existing = cart.find(
      (item: { id: string }) => item.id === product.id
    );
    if (existing) {
      existing.quantity += quantity;
    } else {
      cart.push({ id: product.id, quantity });
    }
    localStorage.setItem("hachidori-cart", JSON.stringify(cart));

    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="space-y-4">
      {/* Quantity selector */}
      <div className="flex items-center gap-4">
        <span className="text-sm text-brand-brown/60">数量</span>
        <div className="flex items-center border border-brand-green/10 rounded-full">
          <button
            type="button"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="w-10 h-10 flex items-center justify-center text-brand-brown/50 hover:text-brand-green transition-colors"
          >
            &minus;
          </button>
          <span className="w-10 text-center text-sm font-medium text-brand-green">
            {quantity}
          </span>
          <button
            type="button"
            onClick={() => setQuantity(Math.min(10, quantity + 1))}
            className="w-10 h-10 flex items-center justify-center text-brand-brown/50 hover:text-brand-green transition-colors"
          >
            +
          </button>
        </div>
        <span className="text-sm text-brand-brown/40">
          &yen;{(product.price * quantity).toLocaleString()}
        </span>
      </div>

      {/* Add to cart button */}
      <button
        type="button"
        onClick={handleAddToCart}
        className={`w-full py-4 rounded-full text-base font-medium transition-colors ${
          added
            ? "bg-brand-green text-brand-cream"
            : "bg-brand-gold text-brand-green-dark hover:bg-brand-gold-light"
        }`}
      >
        {added ? "カートに追加しました" : "カートに追加"}
      </button>

      <p className="text-xs text-center text-brand-brown/40">
        予約制 &mdash; 予約が集まり次第、焙煎してお届けします
      </p>
    </div>
  );
}
