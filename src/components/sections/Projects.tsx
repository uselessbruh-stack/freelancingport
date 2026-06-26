"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const projects = [
  {
    title: "Sports Event Registration Platform",
    type: "Client Project",
    client: "JhainKriti Sports Club",
    overview:
      "A comprehensive sports event registration platform enabling athletes and participants to discover events, register seamlessly, and manage their participation — with a powerful admin dashboard for event organizers.",
    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "JWT Auth",
      "Vercel",
    ],
    responsibilities: [
      "Complete frontend design & development",
      "Backend API architecture",
      "User authentication & authorization",
      "Admin dashboard with analytics",
      "Deployment & hosting setup",
      "Responsive design across all devices",
    ],
    results: [
      "Streamlined registration process for 100+ participants",
      "Reduced manual data entry by 90%",
      "Sub-second page load times",
      "Zero-downtime deployment pipeline",
    ],
    gradient: "from-accent-gold/20 via-accent-bronze/10 to-transparent",
  },
  {
    title: "Sports Tournament Management System",
    type: "Client Project",
    client: "Aarav India",
    overview:
      "A full-stack tournament management system handling event scheduling, participant registration, bracket generation, real-time score tracking, and comprehensive reporting dashboards.",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "REST APIs",
      "Firebase",
      "Render",
    ],
    responsibilities: [
      "Full stack development end-to-end",
      "Event & tournament management module",
      "Participant registration workflows",
      "Dashboard with real-time data",
      "Database schema design & optimization",
      "Cloud deployment & monitoring",
    ],
    results: [
      "Managed multiple concurrent tournaments",
      "Real-time leaderboard updates",
      "Automated bracket generation",
      "Intuitive admin controls",
    ],
    gradient: "from-accent-copper/20 via-accent-amber/10 to-transparent",
  },
  {
    title: "Open Source Development",
    type: "Personal & Community",
    client: "Developer Community",
    overview:
      "Award-winning open-source contributor with multiple actively-used projects on GitHub. Hackathon winner for open-source development, building tools and libraries that help developers worldwide.",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Python",
      "Git",
      "GitHub Actions",
      "npm",
    ],
    responsibilities: [
      "Architecture & design of open-source tools",
      "Community-driven development",
      "Documentation & developer experience",
      "CI/CD pipeline automation",
      "Issue management & code reviews",
    ],
    results: [
      "Hackathon winner — Open Source Track",
      "Multiple projects with active user base",
      "Contributions used by developers globally",
      "Growing GitHub community engagement",
    ],
    gradient: "from-accent-amber/20 via-accent-gold/10 to-transparent",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding relative z-10" ref={ref}>
      <div className="section-container">
        <SectionHeading
          title="Featured Projects"
          accentWord="Projects"
          subtitle="Real-world solutions built for real businesses"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-12"
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              variants={fadeInUp}
              custom={i}
              className="group relative rounded-3xl glass overflow-hidden card-lift"
            >
              {/* Gradient overlay */}
              <div
                className={`absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l ${project.gradient} opacity-50 pointer-events-none`}
              />

              <div className="relative p-8 md:p-12">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full text-caption uppercase tracking-widest bg-accent-gold/10 text-accent-gold mb-4">
                      {project.type}
                    </span>
                    <h3 className="font-heading text-heading-lg text-text-primary">
                      {project.title}
                    </h3>
                    <p className="text-body-sm text-text-muted mt-1">
                      Client: {project.client}
                    </p>
                  </div>
                </div>

                {/* Overview */}
                <p className="text-body-md text-text-secondary mb-8 max-w-3xl leading-relaxed">
                  {project.overview}
                </p>

                {/* Grid: Tech + Responsibilities + Results */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Technologies */}
                  <div>
                    <h4 className="text-caption text-accent-gold uppercase tracking-widest mb-4">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full text-xs bg-surface-light text-text-secondary border border-border-subtle"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <div>
                    <h4 className="text-caption text-accent-gold uppercase tracking-widest mb-4">
                      Responsibilities
                    </h4>
                    <ul className="space-y-2">
                      {project.responsibilities.map((r) => (
                        <li
                          key={r}
                          className="text-body-sm text-text-muted flex items-start gap-2"
                        >
                          <span className="w-1 h-1 rounded-full bg-accent-gold mt-2 flex-shrink-0" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Results */}
                  <div>
                    <h4 className="text-caption text-accent-gold uppercase tracking-widest mb-4">
                      Results
                    </h4>
                    <ul className="space-y-2">
                      {project.results.map((r) => (
                        <li
                          key={r}
                          className="text-body-sm text-text-muted flex items-start gap-2"
                        >
                          <span className="w-1 h-1 rounded-full bg-green-400 mt-2 flex-shrink-0" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
