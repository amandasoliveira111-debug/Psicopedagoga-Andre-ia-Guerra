"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/container";
import { WhatsappCta } from "@/components/ui/whatsapp-cta";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[92vh] sm:min-h-screen w-full overflow-hidden flex items-end sm:items-center"
    >
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/media/video/hero-background.mp4"
        poster="/media/video/hero-background-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/45 to-brand-blue-700/20" />

      <Container>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10 max-w-2xl pb-14 sm:pb-0"
        >
          <motion.span
            variants={item}
            className="inline-block rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs sm:text-sm font-semibold uppercase tracking-wide text-white/90 backdrop-blur-sm"
          >
            Cada criança tem um jeito único de aprender.
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-5 text-balance text-4xl font-semibold text-white sm:text-5xl lg:text-6xl"
          >
            Desenvolvimento, aprendizagem e acolhimento para cada criança.
          </motion.h1>

          <motion.p variants={item} className="mt-5 text-lg text-white/90">
            Atendimento psicopedagógico clínico personalizado, respeitando o
            ritmo, as necessidades e as potencialidades de cada criança.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <WhatsappCta size="lg" message="hero">
              Quero ajuda para meu filho
            </WhatsappCta>
            <a
              href="#sobre"
              className="inline-flex items-center justify-center rounded-full border border-white/50 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur transition-colors duration-300 hover:bg-white/20"
            >
              Conheça meu trabalho
            </a>
          </motion.div>
        </motion.div>
      </Container>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="absolute inset-x-0 bottom-6 z-10 hidden flex-col items-center gap-1 text-white/80 sm:flex"
      >
        <span className="text-xs font-medium uppercase tracking-wide">
          Role para conhecer
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-5 w-5" aria-hidden />
        </motion.div>
      </motion.div>
    </section>
  );
}
