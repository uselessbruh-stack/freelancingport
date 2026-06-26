"use client";

import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import dynamic from "next/dynamic";

// Global UI (loaded eagerly for critical path)
import Navbar from "@/components/ui/Navbar";
import ScrollProgress from "@/components/ui/ScrollProgress";
import NoiseOverlay from "@/components/ui/NoiseOverlay";

// Sections
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Stats from "@/components/sections/Stats";
import Projects from "@/components/sections/Projects";
import TechStack from "@/components/sections/TechStack";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

// Heavy components loaded dynamically for performance
const PageLoader = dynamic(() => import("@/components/ui/PageLoader"), {
  ssr: false,
});
const CustomCursor = dynamic(() => import("@/components/ui/CustomCursor"), {
  ssr: false,
});
const ParticleBackground = dynamic(
  () => import("@/components/ui/ParticleBackground"),
  { ssr: false }
);

export default function Home() {
  useSmoothScroll();

  return (
    <>
      {/* Page Loader */}
      <PageLoader />

      {/* Custom Cursor */}
      <CustomCursor />

      {/* Scroll Progress */}
      <ScrollProgress />

      {/* Navigation */}
      <Navbar />

      {/* Background Effects */}
      <ParticleBackground />
      <NoiseOverlay />

      {/* Main Content */}
      <main className="relative">
        <Hero />
        <Stats />
        <Projects />
        <Services />
        <TechStack />
        <Process />
        <About />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
