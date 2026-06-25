"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import SectionHeading from "./SectionHeading";
import { amenities, galleryImages } from "@/lib/data";

export default function Gallery() {
  return (
    <section id="gite" className="bg-cream-dark py-24 sm:py-32">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="Le gîte"
          title="Une maison à colombages, pensée pour le repos"
          description="Chaque pièce a été restaurée dans le respect de l'architecture augeronne : matières naturelles, lumière douce, et le silence pour seul voisin."
          align="center"
          className="mx-auto"
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:[grid-template-rows:repeat(2,200px)] md:[grid-template-rows:repeat(2,260px)]">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: (index % 4) * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={cn(
                "group relative overflow-hidden rounded-xl",
                image.span === "tall" && "row-span-2",
                image.span === "wide" && "col-span-2"
              )}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 gap-x-8 gap-y-7 border-t border-accent/15 pt-12 sm:grid-cols-3 md:grid-cols-6">
          {amenities.map((amenity, index) => {
            const Icon = amenity.icon;
            return (
              <motion.div
                key={amenity.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="flex flex-col items-center gap-3 text-center"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-accent shadow-sm">
                  <Icon size={19} strokeWidth={1.6} />
                </div>
                <span className="text-sm font-medium text-foreground/75">
                  {amenity.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
