"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { loaderVariants } from "@/lib/animations";

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 400);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          variants={loaderVariants}
          initial="initial"
          exit="exit"
          className="fixed inset-0 z-[200] bg-bg-primary flex flex-col items-center justify-center"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="mb-8"
          >
            <span className="font-heading text-4xl font-bold tracking-tight">
              <span className="text-gradient-gold">UB</span>
              <span className="text-text-primary ml-1">Stack</span>
            </span>
          </motion.div>

          {/* Counter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-text-muted text-sm font-mono tabular-nums"
          >
            {Math.min(count, 100)}%
          </motion.div>

          {/* Progress line */}
          <div className="w-48 h-[1px] bg-surface mt-4 overflow-hidden rounded-full">
            <motion.div
              className="h-full rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, #C9A96E, #D4A574)",
                width: `${Math.min(count, 100)}%`,
              }}
              transition={{ duration: 0.1 }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
