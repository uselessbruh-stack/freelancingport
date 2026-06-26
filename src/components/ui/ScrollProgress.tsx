"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] z-[101] origin-left"
      style={{
        scaleX,
        background: "linear-gradient(90deg, #C9A96E, #D4A574, #B08D57)",
      }}
    />
  );
}
