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
      {/* 3D Background */}
      <Suspense fallback={null}>
        <HeroScene />
      </Suspense>

      {/* Gradient overlays */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-bg-primary/90 via-bg-primary/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-bg-primary to-transparent" />
      </div>

      {/* Content */}
      <div className="section-container relative z-10 pt-32 pb-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center"
        >
          {/* Left side - Content */}
          <motion.div variants={fadeInLeft} className="max-w-xl">
            {/* Availability Badge */}
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
              </span>
              <span className="text-caption text-text-secondary uppercase tracking-widest">
                Available for Freelance
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeInUp}
              className="font-heading text-display-xl mb-6"
            >
              Building Digital
              <br />
              Experiences That{" "}
              <span className="text-gradient-gold">Perform.</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={fadeInUp}
              className="text-body-lg text-text-secondary mb-10 leading-relaxed"
            >
              I design and develop premium full-stack web applications with
              modern UI, scalable backend architecture, and exceptional user
              experience.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 mb-12">
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
              className="flex items-center gap-8"
            >
              <div className="flex items-center gap-3">
                <span className="text-3xl font-heading font-bold text-gradient-gold">
                  2+
                </span>
                <span className="text-body-sm text-text-muted leading-tight">
                  Client Projects
                  <br />
                  Completed
                </span>
              </div>
              <div className="w-px h-10 bg-border-subtle" />
              <div className="flex items-center gap-3">
                <span className="text-3xl font-heading font-bold text-gradient-gold">
                  5+
                </span>
                <span className="text-body-sm text-text-muted leading-tight">
                  Open Source
                  <br />
                  Projects
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Portrait Area */}
          <motion.div
            variants={fadeInRight}
            className="relative hidden lg:flex items-center justify-center"
          >
            {/* Decorative frame */}
            <div className="relative w-80 h-96">
              {/* Glowing backdrop */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent-gold/10 via-accent-bronze/5 to-transparent blur-3xl" />

              {/* Portrait frame */}
              <div className="relative w-full h-full rounded-3xl glass overflow-hidden border border-accent-gold/10">
                {/* Portrait photo */}
                <Image
                  src="/ub-image.jpeg"
                  alt="Abhijith Krishna G — Full Stack Developer & UI/UX Designer"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(max-width: 1024px) 0px, 320px"
                />

                {/* Soft vignette overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/60 via-transparent to-bg-primary/20" />

                {/* Glass reflection */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent" />

                {/* Floating label */}
                <div className="absolute bottom-4 left-4 right-4 glass rounded-xl px-4 py-3">
                  <p className="text-body-sm font-medium text-text-primary">
                    Abhijith Krishna G
                  </p>
                  <p className="text-caption text-text-muted">
                    Full Stack Developer & UI/UX Designer
                  </p>
                </div>
              </div>

              {/* Floating decorative elements */}
              <div className="absolute -top-6 -right-6 w-16 h-16 rounded-2xl glass animate-float border border-accent-gold/10" />
              <div className="absolute -bottom-4 -left-4 w-12 h-12 rounded-xl glass animate-float-slow border border-accent-bronze/10" />
              <div className="absolute top-1/2 -right-10 w-8 h-8 rounded-lg glass animate-float-slower border border-accent-gold/5" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
