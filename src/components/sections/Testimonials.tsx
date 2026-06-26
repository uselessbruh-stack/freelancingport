"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const testimonials = [
  {
    name: "Deeksha",
    role: "Head, JhainKriti Sports Club",
    quote:
      "Working with Abhijith was a game-changer for our sports club. He built us a registration platform that our members actually love using. The design is clean, the admin dashboard gives us complete control, and we haven't had a single technical issue since launch. Professional, responsive, and delivers beyond expectations.",
    initials: "DK",
  },
  {
    name: "Chandhan",
    role: "Head, Aarav India",
    quote:
      "We needed a tournament management system that could handle multiple events simultaneously — and Abhijith delivered exactly that. The platform is fast, intuitive, and our organizers were up and running within minutes. His attention to detail in both design and functionality is remarkable.",
    initials: "CH",
  },
  {
    name: "Lalitha",
    role: "The Fit Cubs",
    quote:
      "Abhijith transformed our event registration process from chaotic spreadsheets into a seamless digital experience. The responsive design works perfectly on every device, and participants constantly compliment how easy it is to register. I wouldn't hesitate to work with him again.",
    initials: "LT",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-padding relative z-10" ref={ref}>
      <div className="section-container">
        <SectionHeading
          title="Client Testimonials"
          accentWord="Testimonials"
          subtitle="What people say about working with me"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Cards */}
          <motion.div variants={fadeInUp} className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden">
              <motion.div
                animate={{ x: `-${activeIndex * 100}%` }}
                transition={{
                  duration: 0.6,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="flex"
              >
                {testimonials.map((t) => (
                  <div
                    key={t.name}
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div className="glass rounded-3xl p-8 md:p-12 text-center">
                      {/* Quote */}
                      <svg
                        className="w-10 h-10 text-accent-gold/20 mx-auto mb-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>

                      <p className="text-body-lg text-text-secondary leading-relaxed mb-8 italic">
                        &ldquo;{t.quote}&rdquo;
                      </p>

                      {/* Author */}
                      <div className="flex items-center justify-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-accent-gold/10 flex items-center justify-center">
                          <span className="text-accent-gold font-heading font-bold text-sm">
                            {t.initials}
                          </span>
                        </div>
                        <div className="text-left">
                          <p className="text-body-md font-medium text-text-primary">
                            {t.name}
                          </p>
                          <p className="text-body-sm text-text-muted">
                            {t.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Dots */}
            <div className="flex items-center justify-center gap-3 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === activeIndex
                      ? "w-8 bg-accent-gold"
                      : "w-2 bg-surface-light hover:bg-surface-lighter"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
