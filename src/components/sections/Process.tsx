"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "Understanding your business goals, target audience, and technical requirements through detailed consultation.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Crafting wireframes and high-fidelity designs that prioritize user experience and visual excellence.",
  },
  {
    number: "03",
    title: "Develop",
    description:
      "Building the application with clean, modular code using modern frameworks and best practices.",
  },
  {
    number: "04",
    title: "Test",
    description:
      "Rigorous testing across devices, browsers, and edge cases to ensure reliability and performance.",
  },
  {
    number: "05",
    title: "Deploy",
    description:
      "Production deployment with CI/CD pipelines, monitoring, and zero-downtime releases.",
  },
  {
    number: "06",
    title: "Support",
    description:
      "Ongoing maintenance, performance optimization, feature updates, and dedicated support.",
  },
];

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative z-10" ref={ref}>
      <div className="section-container">
        <SectionHeading
          title="Development Process"
          accentWord="Process"
          subtitle="A proven workflow that delivers results"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Connecting line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent-gold/20 to-transparent -translate-x-1/2" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-y-16">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                variants={fadeInUp}
                custom={i}
                className={`relative ${
                  i % 2 === 0
                    ? "lg:pr-16 lg:text-right"
                    : "lg:pl-16 lg:col-start-2"
                }`}
              >
                {/* Timeline dot */}
                <div
                  className={`hidden lg:flex absolute top-4 ${
                    i % 2 === 0 ? "-right-3" : "-left-3"
                  } w-6 h-6 rounded-full border-2 border-accent-gold/40 bg-bg-primary items-center justify-center z-10`}
                >
                  <div className="w-2 h-2 rounded-full bg-accent-gold animate-pulse-soft" />
                </div>

                {/* Card */}
                <div className="glass rounded-2xl p-8 card-lift">
                  <span className="text-caption text-accent-gold/40 font-mono text-2xl font-bold">
                    {step.number}
                  </span>
                  <h3 className="font-heading text-heading-md text-text-primary mt-2 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-body-sm text-text-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
