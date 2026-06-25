"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { discoverCards } from "@/lib/data";

export default function Discover() {
  return (
    <section id="decouverte" className="bg-background py-24 sm:py-32">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="Autour du gîte"
          title="La Normandie à explorer"
          description="Entre patrimoine, gastronomie et grands espaces, voici ce qui rend chaque séjour différent."
          align="center"
          className="mx-auto"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {discoverCards.map((card, index) => (
            <motion.a
              key={card.title}
              href="#"
              onClick={(e) => e.preventDefault()}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.65,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative block overflow-hidden rounded-2xl"
            >
              <div className="relative h-[340px] w-full overflow-hidden sm:h-[400px]">
                <img
                  src={card.image}
                  alt={card.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
                <span className="absolute right-3 top-3 text-[10px] font-medium text-white/55">
                  {card.credit}
                </span>

                <div className="absolute inset-x-0 bottom-0 p-7">
                  <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/70">
                    {card.category}
                  </span>
                  <div className="mt-2 flex items-end justify-between gap-3">
                    <h3 className="font-display text-2xl text-white">
                      {card.title}
                    </h3>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-all duration-300 group-hover:bg-white group-hover:text-foreground">
                      <ArrowUpRight size={17} />
                    </span>
                  </div>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-white/75">
                    {card.description}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
