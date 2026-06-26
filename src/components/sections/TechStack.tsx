"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const techCategories = [
  {
    label: "Frontend",
    techs: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    label: "Backend",
    techs: ["Node.js", "Express", "REST APIs", "MongoDB", "Firebase"],
  },
  {
    label: "Auth & Security",
    techs: ["JWT", "OAuth", "Session Management", "Firebase Auth"],
  },
  {
    label: "Deployment",
    techs: ["Vercel", "Netlify", "Render", "Git", "GitHub"],
  },
];

function TechCard({ name }: { name: string }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState(
    "perspective(600px) rotateX(0deg) rotateY(0deg)"
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    setTransform(
      `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    );
  };

  const handleMouseLeave = () => {
    setTransform("perspective(600px) rotateX(0deg) rotateY(0deg)");
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform, transition: "transform 0.15s ease-out" }}
      className="group glass rounded-xl px-5 py-4 flex items-center justify-center text-center hover:border-accent-gold/20 transition-colors duration-300"
      data-cursor-hover
    >
      <span className="text-body-sm text-text-secondary group-hover:text-text-primary transition-colors duration-300">
        {name}
      </span>
    </div>
  );
}

export default function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative z-10" ref={ref}>
      <div className="section-container">
        <SectionHeading
          title="Technology Stack"
          accentWord="Technology"
          subtitle="Modern tools and frameworks for premium digital products"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-12"
        >
          {techCategories.map((category) => (
            <motion.div key={category.label} variants={fadeInUp}>
              <h3 className="text-caption text-accent-gold uppercase tracking-widest mb-5">
                {category.label}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {category.techs.map((tech) => (
                  <TechCard key={tech} name={tech} />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
