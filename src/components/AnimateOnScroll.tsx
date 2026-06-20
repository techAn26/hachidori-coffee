"use client";

import { useEffect, useRef, useCallback, type ReactNode } from "react";

type AnimationType = "fade-up" | "slide-left" | "slide-right" | "scale";

export default function AnimateOnScroll({
  children,
  animation = "fade-up",
  delay = 0,
  className = "",
  threshold = 0.15,
}: {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  className?: string;
  threshold?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  const setRef = useCallback((node: HTMLDivElement | null) => {
    ref.current = node;
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const animClass =
    animation === "slide-left"
      ? "animate-slide-left"
      : animation === "slide-right"
        ? "animate-slide-right"
        : animation === "scale"
          ? "animate-scale"
          : "";

  const delayClass = delay > 0 ? `animate-delay-${delay}` : "";

  return (
    <div
      ref={setRef}
      className={`animate-on-scroll ${animClass} ${delayClass} ${className}`}
    >
      {children}
    </div>
  );
}
