"use client";

import { motion, useInView } from "framer-motion";
import { useRef, Suspense } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import MagneticButton from "@/components/ui/MagneticButton";
import { staggerContainer, fadeInUp, fadeInLeft, fadeInRight } from "@/lib/animations";

const HeroScene = dynamic(() => import("@/components/three/HeroScene"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-bg-primary" />,
});

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      ref={ref}
    >
      {/* 3D Background — hidden on mobile for performance */}
      <div className="hidden md:block">
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-bg-primary/95 via-bg-primary/70 to-bg-primary/40 md:to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-bg-primary to-transparent" />
      </div>

      {/* Content */}
      <div className="section-container relative z-10 pt-28 md:pt-32 pb-16 md:pb-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 items-center"
        >
          {/* Portrait — shown first on mobile (order-1), second on desktop (order-2) */}
          <motion.div
            variants={fadeInRight}
            className="relative flex items-center justify-center order-1 lg:order-2"
          >
            <div className="relative w-48 h-56 sm:w-56 sm:h-64 md:w-64 md:h-80 lg:w-80 lg:h-96">
              {/* Glowing backdrop */}
              <div className="absolute inset-0 rounded-2xl md:rounded-3xl bg-gradient-to-br from-accent-gold/10 via-accent-bronze/5 to-transparent blur-3xl" />

              {/* Portrait frame */}
              <div className="relative w-full h-full rounded-2xl md:rounded-3xl glass overflow-hidden border border-accent-gold/10">
                <Image
                  src="/ub-image.jpeg"
                  alt="Abhijith Krishna G — Full Stack Developer & UI/UX Designer"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(max-width: 640px) 192px, (max-width: 768px) 224px, (max-width: 1024px) 256px, 320px"
                />

                {/* Soft vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/60 via-transparent to-bg-primary/20" />

                {/* Glass reflection */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent" />

                {/* Floating label */}
                <div className="absolute bottom-3 left-3 right-3 md:bottom-4 md:left-4 md:right-4 glass rounded-lg md:rounded-xl px-3 py-2 md:px-4 md:py-3">
                  <p className="text-xs md:text-sm font-medium text-text-primary">
                    Abhijith Krishna G
                  </p>
                  <p className="text-[10px] md:text-xs text-text-muted">
                    Full Stack Developer &amp; UI/UX Designer
                  </p>
                </div>
              </div>

              {/* Floating decorations — hidden on smallest screens */}
              <div className="hidden sm:block absolute -top-4 -right-4 md:-top-6 md:-right-6 w-10 h-10 md:w-16 md:h-16 rounded-xl md:rounded-2xl glass animate-float border border-accent-gold/10" />
              <div className="hidden sm:block absolute -bottom-3 -left-3 md:-bottom-4 md:-left-4 w-8 h-8 md:w-12 md:h-12 rounded-lg md:rounded-xl glass animate-float-slow border border-accent-bronze/10" />
              <div className="hidden md:block absolute top-1/2 -right-10 w-8 h-8 rounded-lg glass animate-float-slower border border-accent-gold/5" />
            </div>
          </motion.div>

          {/* Content — shown second on mobile (order-2), first on desktop (order-1) */}
          <motion.div variants={fadeInLeft} className="max-w-xl order-2 lg:order-1 text-center lg:text-left mx-auto lg:mx-0">
            {/* Availability Badge */}
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 rounded-full glass mb-6 md:mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
              </span>
              <span className="text-[10px] md:text-xs text-text-secondary uppercase tracking-widest">
                Available for Freelance
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeInUp}
              className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-display-xl mb-4 md:mb-6 leading-tight"
            >
              Building Digital
              <br />
              Experiences That{" "}
              <span className="text-gradient-gold">Perform.</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={fadeInUp}
              className="text-sm md:text-base lg:text-lg text-text-secondary mb-8 md:mb-10 leading-relaxed"
            >
              I design and develop premium full-stack web applications with
              modern UI, scalable backend architecture, and exceptional user
              experience.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-3 md:gap-4 mb-8 md:mb-12 justify-center lg:justify-start">
              <MagneticButton variant="primary" href="#projects">
                View Projects
              </MagneticButton>
              <MagneticButton variant="outline" href="#contact">
                Hire Me
              </MagneticButton>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeInUp}
              className="flex items-center gap-6 md:gap-8 justify-center lg:justify-start"
            >
              <div className="flex items-center gap-2 md:gap-3">
                <span className="text-2xl md:text-3xl font-heading font-bold text-gradient-gold">
                  2+
                </span>
                <span className="text-xs md:text-sm text-text-muted leading-tight">
                  Client Projects
                  <br />
                  Completed
                </span>
              </div>
              <div className="w-px h-8 md:h-10 bg-border-subtle" />
              <div className="flex items-center gap-2 md:gap-3">
                <span className="text-2xl md:text-3xl font-heading font-bold text-gradient-gold">
                  5+
                </span>
                <span className="text-xs md:text-sm text-text-muted leading-tight">
                  Open Source
                  <br />
                  Projects
                </span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
