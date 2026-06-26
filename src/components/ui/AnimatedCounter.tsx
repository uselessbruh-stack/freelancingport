"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect } from "react";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number;
}

export default function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  label,
  duration = 2,
}: AnimatedCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      animate(count, value, {
        duration,
        ease: [0.25, 0.1, 0.25, 1],
      });
    }
  }, [isInView, value, count, duration]);

  return (
    <div ref={ref} className="text-center">
      <div className="flex items-baseline justify-center gap-0.5">
        {prefix && (
          <span className="text-accent-gold text-display-md">{prefix}</span>
        )}
        <motion.span className="text-display-md font-heading text-gradient-gold tabular-nums">
          {rounded}
        </motion.span>
        {suffix && (
          <span className="text-accent-gold text-display-md">{suffix}</span>
        )}
      </div>
      <p className="text-text-secondary text-body-sm mt-2 uppercase tracking-widest">
        {label}
      </p>
    </div>
  );
}
