"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import Footer from "@/components/Footer";
import RaiseCapital from "@/components/RaiseCapital";
import ChartContent from "@/components/ChartContent";
import GalleryContent from "@/components/GalleryContent";
import MainContent from "@/components/MainContent";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <main>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <MainContent />
      <GalleryContent />
      <ChartContent />
      <RaiseCapital />
      <Footer />
    </main>
  );
}
