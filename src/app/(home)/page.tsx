"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import Footer from "@/app/(home)/components/Footer";
import RaiseCapital from "@/app/(home)/components/RaiseCapital";
import ChartContent from "@/app/(home)/components/ChartContent";
import GalleryContent from "@/app/(home)/components/GalleryContent";
import MainContent from "@/app/(home)/components/MainContent";

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
