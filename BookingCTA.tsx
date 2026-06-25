"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

export default function BookingCTA() {
  return (
    <section
      id="reservation"
      className="relative isolate flex min-h-[560px] items-center justify-center overflow-hidden py-28"
    >
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/gite/salon-4.jpg"
          alt="Salon chaleureux du Gîte Falafa Normand"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/75" />
      </div>

      <div className="container-luxe relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-sm"
        >
          <Calendar className="text-white" size={24} strokeWidth={1.6} />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl text-balance font-display text-4xl font-medium leading-tight text-white sm:text-5xl"
        >
          Offrez-vous une parenthèse normande
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5 max-w-md text-balance text-white/75"
        >
          Disponibilités limitées en haute saison. Vérifiez les dates de
          votre séjour dès maintenant.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-9"
        >
          <a
            href="/reservation"
            className="inline-flex items-center justify-center rounded-full bg-white px-9 py-4 text-sm font-medium text-foreground transition-all hover:bg-secondary hover:text-white"
          >
            Réserver votre séjour
          </a>
        </motion.div>
      </div>
    </section>
  );
}
