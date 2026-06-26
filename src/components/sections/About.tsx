"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { staggerContainer, fadeInUp, fadeInLeft } from "@/lib/animations";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative z-10" ref={ref}>
      <div className="section-container">
        <SectionHeading
          title="About Me"
          accentWord="Me"
          subtitle="Crafting digital products that solve real business problems"
          align="center"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
        >
          {/* Left — Bio */}
          <motion.div variants={fadeInLeft} className="space-y-6">
            <p className="text-body-lg text-text-secondary leading-relaxed">
              I&apos;m a{" "}
              <span className="text-text-primary font-medium">
                Full Stack Developer & UI/UX Designer
              </span>{" "}
              who specializes in building premium digital experiences. I work
              with businesses, sports organizations, and startups to turn
              complex requirements into clean, scalable, and performant web
              applications.
            </p>
            <p className="text-body-lg text-text-secondary leading-relaxed">
              My approach is end-to-end — from understanding business
              objectives and designing intuitive interfaces, to engineering
              robust backend systems and deploying production-ready solutions.
              Every project I take on is treated as a product, not a task.
            </p>
            <p className="text-body-lg text-text-secondary leading-relaxed">
              Beyond client work, I&apos;m an active{" "}
              <span className="text-text-primary font-medium">
                open-source contributor
              </span>{" "}
              with multiple projects used by developers worldwide, and a{" "}
              <span className="text-text-primary font-medium">
                hackathon winner
              </span>{" "}
              in open-source development — building tools that matter.
            </p>
          </motion.div>

          {/* Right — Details */}
          <motion.div variants={fadeInUp} className="space-y-8">
            {/* Info cards */}
            {[
              {
                label: "Focus",
                value:
                  "Full Stack Web Development, UI/UX Design, Open Source",
              },
              {
                label: "Approach",
                value:
                  "Business-first thinking, premium design, scalable architecture",
              },
              {
                label: "Recognition",
                value:
                  "Hackathon Winner — Open Source Development",
              },
              {
                label: "Open Source",
                value:
                  "Multiple projects actively used by the developer community",
              },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                variants={fadeInUp}
                custom={i}
                className="flex gap-6 pb-6 border-b border-border-subtle last:border-0 last:pb-0"
              >
                <span className="text-caption text-accent-gold uppercase tracking-widest min-w-[100px]">
                  {item.label}
                </span>
                <span className="text-body-md text-text-secondary">
                  {item.value}
                </span>
              </motion.div>
            ))}

            {/* CTA */}
            <motion.div variants={fadeInUp} className="pt-4">
              <a
                href="https://github.com/uselessbruh-stack"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline inline-flex items-center gap-2 text-sm"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                View My GitHub
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
