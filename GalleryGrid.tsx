"use client";

import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Expand } from "lucide-react";

type Photo = { src: string; alt: string };

const photos: Photo[] = [
  { src: "/images/gite/exterieur-1.jpg", alt: "Façade à colombages et jardin" },
  { src: "/images/gite/salon-3.jpg", alt: "Salon avec canapé et coussins colorés" },
  { src: "/images/gite/galerie-1.jpg", alt: "Salle à manger et poêle à pellets" },
  { src: "/images/gite/cuisine-2.jpg", alt: "Cuisine équipée avec bar et tabourets" },
  { src: "/images/gite/galerie-3.jpg", alt: "Charpente normande apparente" },
  { src: "/images/gite/salon-1.jpg", alt: "Séjour sous les poutres" },
  { src: "/images/gite/cuisine-3.jpg", alt: "Coin repas et escalier" },
  { src: "/images/gite/salon-4.jpg", alt: "Coin salon cosy aux teintes naturelles" },
  { src: "/images/gite/autre-1.jpg", alt: "Salle à manger, pierres apparentes" },
  { src: "/images/gite/cuisine-1.jpg", alt: "Cuisine contemporaine et lumineuse" },
  { src: "/images/gite/salon-2.jpg", alt: "Espace ouvert vers la cuisine" },
  { src: "/images/gite/galerie-2.jpg", alt: "Poêle et table de repas sous les poutres" },
  { src: "/images/gite/cuisine-4.jpg", alt: "Table et pierres du Pays d'Auge" },
  { src: "/images/gite/sejour-1.jpg", alt: "Séjour lumineux" },
  { src: "/images/gite/galerie-4.jpg", alt: "Console et coin cuisine" },
];

export default function GalleryGrid() {
  const [open, setOpen] = useState<number | null>(null);

  const close = useCallback(() => setOpen(null), []);
  const move = useCallback(
    (dir: number) =>
      setOpen((i) => (i === null ? i : (i + dir + photos.length) % photos.length)),
    []
  );

  useEffect(() => {
    if (open === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") move(1);
      if (e.key === "ArrowLeft") move(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close, move]);

  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="container-luxe">
        <div className="columns-2 gap-4 sm:gap-5 lg:columns-3 [&>button]:mb-4 sm:[&>button]:mb-5">
          {photos.map((p, i) => (
            <motion.button
              key={p.src}
              type="button"
              onClick={() => setOpen(i)}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="group relative block w-full overflow-hidden rounded-xl break-inside-avoid"
              aria-label={`Agrandir : ${p.alt}`}
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="w-full transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="pointer-events-none absolute bottom-3 left-3 right-3 flex items-end justify-between gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="text-xs font-medium text-white drop-shadow">{p.alt}</span>
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/90 text-foreground">
                  <Expand size={14} />
                </span>
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/90 p-4 backdrop-blur-sm"
            onClick={close}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Fermer"
              className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/10 hover:text-white"
            >
              <X size={22} />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                move(-1);
              }}
              aria-label="Photo précédente"
              className="absolute left-3 flex h-11 w-11 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/10 hover:text-white sm:left-6"
            >
              <ChevronLeft size={26} />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                move(1);
              }}
              aria-label="Photo suivante"
              className="absolute right-3 flex h-11 w-11 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/10 hover:text-white sm:right-6"
            >
              <ChevronRight size={26} />
            </button>

            <motion.figure
              key={open}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex max-w-[620px] flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={photos[open].src}
                alt={photos[open].alt}
                className="max-h-[78vh] w-auto rounded-lg object-contain shadow-2xl"
              />
              <figcaption className="mt-4 text-center text-sm text-white/75">
                {photos[open].alt}
                <span className="ml-2 text-white/40">
                  {open + 1} / {photos.length}
                </span>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
