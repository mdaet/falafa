"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";
import { locationTimeline } from "@/lib/data";

const InteractiveMap = dynamic(() => import("@/components/InteractiveMap"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center bg-cream-dark">
      <span className="text-sm text-foreground/40">Chargement de la carte…</span>
    </div>
  ),
});

export default function Location() {
  const [active, setActive] = useState<string | null>(null);
  const [selected, setSelected] = useState<string | null>(null);
  const selectedStop = locationTimeline.find((s) => s.name === selected) ?? null;

  return (
    <section id="localisation" className="bg-background py-24 sm:py-32">
      <div className="container-luxe grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-12">
        <div>
          <SectionHeading
            eyebrow="La région"
            title="Au cœur du Pays d'Auge"
            description="Idéalement situé à Pont-l'Évêque, entre Honfleur et Deauville, le gîte est le point de départ parfait pour explorer la côte fleurie, ses plages historiques et ses falaises mythiques."
          />

          <p className="mt-6 text-sm text-foreground/50">
            Survolez une étape pour la repérer, cliquez pour vous y rendre sur la
            carte.
          </p>

          <div className="mt-8 space-y-0">
            {locationTimeline.map((stop, index) => {
              const isActive = active === stop.name;
              const isSelected = selected === stop.name;
              return (
                <motion.div
                  key={stop.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <button
                    type="button"
                    onMouseEnter={() => setActive(stop.name)}
                    onMouseLeave={() => setActive(null)}
                    onFocus={() => setActive(stop.name)}
                    onBlur={() => setActive(null)}
                    onClick={() => setSelected(stop.name)}
                    aria-current={isSelected ? "true" : undefined}
                    className={cn(
                      "relative flex w-full gap-6 rounded-xl pb-10 text-left outline-none transition-colors duration-300 last:pb-0",
                      isActive || isSelected
                        ? "bg-accent/[0.05]"
                        : "hover:bg-accent/[0.03]"
                    )}
                  >
                    <div className="flex flex-col items-center pl-3 pt-1">
                      <span
                        className={cn(
                          "flex h-3 w-3 shrink-0 rounded-full transition-all duration-300",
                          isActive || isSelected
                            ? "scale-125 bg-accent ring-4 ring-accent/25"
                            : "bg-accent/80 ring-4 ring-accent/15"
                        )}
                      />
                      {index !== locationTimeline.length - 1 && (
                        <span className="mt-1 w-px flex-1 bg-accent/20" />
                      )}
                    </div>
                    <div className="pb-1 pr-3">
                      <div className="flex flex-wrap items-baseline gap-2.5">
                        <h3
                          className={cn(
                            "font-display text-lg transition-colors duration-300",
                            isActive || isSelected
                              ? "text-accent"
                              : "text-foreground"
                          )}
                        >
                          {stop.name}
                        </h3>
                        <span className="text-xs font-medium uppercase tracking-wide text-secondary">
                          {stop.distance}
                        </span>
                      </div>
                      <p className="mt-1.5 text-sm leading-relaxed text-foreground/60">
                        {stop.description}
                      </p>
                    </div>
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-[440px] overflow-hidden rounded-2xl border border-accent/15 bg-cream-dark lg:sticky lg:top-32 lg:h-[560px]"
        >
          <InteractiveMap
            active={active}
            selected={selected}
            onActiveChange={setActive}
            onSelect={setSelected}
          />
        </motion.div>
      </div>

      <div className="container-luxe">
        <AnimatePresence mode="wait">
          {selectedStop && (
            <motion.div
              key={selectedStop.name}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="mt-14 overflow-hidden rounded-2xl border border-accent/15 bg-white shadow-sm"
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[340px]">
                  <img
                    src={selectedStop.image}
                    alt={selectedStop.name}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-accent backdrop-blur-sm">
                    {selectedStop.category}
                  </span>
                  <span className="absolute bottom-3 left-4 rounded bg-black/35 px-1.5 py-0.5 text-[10px] text-white/85">
                    {selectedStop.credit}
                  </span>
                </div>
                <div className="relative p-8 sm:p-10">
                  <button
                    type="button"
                    onClick={() => setSelected(null)}
                    aria-label="Fermer la fiche"
                    className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full text-foreground/45 transition-colors hover:bg-accent/10 hover:text-accent"
                  >
                    <X size={18} />
                  </button>
                  <span className="text-xs font-medium uppercase tracking-[0.2em] text-secondary">
                    {selectedStop.distance === "À pied"
                      ? "Dans le village"
                      : `À ${selectedStop.distance} du gîte`}
                  </span>
                  <h3 className="mt-2 font-display text-3xl text-foreground sm:text-4xl">
                    {selectedStop.name}
                  </h3>
                  <p className="mt-5 text-base leading-relaxed text-foreground/70">
                    {selectedStop.long}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
