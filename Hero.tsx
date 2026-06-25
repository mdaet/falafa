"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative flex h-[100svh] min-h-[640px] w-full items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src="/images/gite/exterieur-1.jpg"
          alt="Façade à colombages du Gîte Falafa Normand et son jardin"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/30 to-black/60" />
      </div>

      <div className="container-luxe relative z-10 flex flex-col items-center text-center">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-7 inline-flex items-center rounded-full border border-white/30 bg-white/10 px-5 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white backdrop-blur-sm"
        >
          Pont-l&apos;Évêque · Pays d&apos;Auge
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl text-balance font-display text-5xl font-medium leading-[1.08] text-white sm:text-6xl md:text-7xl"
        >
          Votre parenthèse normande
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-xl text-balance text-base text-white/90 sm:text-lg"
        >
          Une maison à colombages restaurée avec soin, au cœur du Pays d&apos;Auge,
          entre Honfleur et Deauville.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="/reservation"
            className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-3.5 text-sm font-medium text-white transition-all hover:bg-[#964f2c] hover:shadow-lg hover:shadow-black/20"
          >
            Réserver
          </a>
          <a
            href="/galerie"
            className="inline-flex items-center justify-center rounded-full border border-white/40 bg-transparent px-8 py-3.5 text-sm font-medium text-white transition-all hover:border-white hover:bg-white/10"
          >
            Visiter le gîte
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="text-white/70" size={22} />
        </motion.div>
      </motion.div>
    </section>
  );
}
