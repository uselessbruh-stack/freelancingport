"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="relative z-10 py-20" ref={ref}>
      <div className="section-container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="glass rounded-3xl p-12 md:p-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            <motion.div variants={fadeInUp}>
              <AnimatedCounter value={2} suffix="+" label="Client Projects" />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <AnimatedCounter value={100} suffix="%" label="Responsive" />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <AnimatedCounter value={100} suffix="%" label="Custom Design" />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <div className="text-center">
                <span className="text-display-md font-heading text-gradient-gold block">
                  ∞
                </span>
                <p className="text-text-secondary text-body-sm mt-2 uppercase tracking-widest">
                  Full Stack
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
