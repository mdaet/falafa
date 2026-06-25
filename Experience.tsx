"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { experienceCards } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="bg-background py-24 sm:py-32">
      <div className="container-luxe grid grid-cols-1 gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading
            eyebrow="L'esprit du lieu"
            title="Bien plus qu'un hébergement"
            description="Falafa Normand n'est pas qu'un toit pour la nuit. C'est une manière de ralentir, d'habiter le Pays d'Auge le temps d'un séjour, et d'en repartir avec un peu de sa douceur."
          />
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {experienceCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl border border-accent/15 bg-white p-8 shadow-[0_2px_20px_-8px_rgba(29,29,29,0.08)] transition-shadow duration-500 hover:shadow-[0_24px_48px_-16px_rgba(181,103,58,0.28)]"
              >
                <div
                  className="absolute inset-0 -z-10 translate-y-full bg-gradient-to-t from-accent/[0.06] to-transparent transition-transform duration-500 group-hover:translate-y-0"
                  aria-hidden="true"
                />
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-secondary/15 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                  <Icon size={22} strokeWidth={1.6} />
                </div>
                <h3 className="font-display text-xl text-foreground">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/60">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
