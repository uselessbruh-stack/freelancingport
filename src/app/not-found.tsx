"use client";

import { motion } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-bg-primary flex items-center justify-center relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent-gold/5 blur-[120px]" />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center section-container"
      >
        <motion.div variants={fadeInUp}>
          <span className="text-[8rem] md:text-[12rem] font-heading font-bold text-gradient-gold leading-none block">
            404
          </span>
        </motion.div>

        <motion.h1
          variants={fadeInUp}
          className="font-heading text-heading-lg text-text-primary mt-4 mb-4"
        >
          Page Not Found
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="text-body-lg text-text-secondary mb-10 max-w-md mx-auto"
        >
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </motion.p>

        <motion.div variants={fadeInUp}>
          <MagneticButton variant="primary" href="/">
            Back to Home
          </MagneticButton>
        </motion.div>
      </motion.div>
    </div>
  );
}
