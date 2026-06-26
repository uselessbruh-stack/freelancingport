"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeInUp } from "@/lib/animations";
import clsx from "clsx";

interface SectionHeadingProps {
  title: string;
  accentWord?: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  title,
  accentWord,
  subtitle,
  className,
  align = "center",
}: SectionHeadingProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const renderTitle = () => {
    if (!accentWord) return title;
    const parts = title.split(accentWord);
    return (
      <>
        {parts[0]}
        <span className="text-gradient-gold">{accentWord}</span>
        {parts[1] || ""}
      </>
    );
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInUp}
      className={clsx(
        "mb-16 md:mb-20",
        align === "center" && "text-center",
        className
      )}
    >
      <h2 className="font-heading text-display-md mb-4">{renderTitle()}</h2>
      {subtitle && (
        <p className="text-text-secondary text-body-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div
        className={clsx(
          "divider-gold mt-6",
          align === "center" && "mx-auto"
        )}
      />
    </motion.div>
  );
}
