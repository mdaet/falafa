"use client";

import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";
import { ArrowDown } from "lucide-react";

type Room = {
  src: string;
  name: string;
  sub: string;
  text: string;
  focus?: string; // object-position
};

const rooms: Room[] = [
  {
    src: "/images/gite/exterieur-1.jpg",
    name: "Extérieur & jardin",
    sub: "L'arrivée",
    text: "Une longère à colombages posée dans son écrin de verdure, à quelques minutes du centre de Pont-l'Évêque.",
    focus: "center 60%",
  },
  {
    src: "/images/gite/salon-3.jpg",
    name: "Le séjour",
    sub: "Salon",
    text: "Un salon lumineux et cosy : canapé moelleux, touches colorées et lumière douce sous les poutres.",
  },
  {
    src: "/images/gite/galerie-2.jpg",
    name: "Salle à manger",
    sub: "Autour du poêle",
    text: "Une grande table conviviale et un poêle à pellets qui réchauffe les soirées normandes.",
  },
  {
    src: "/images/gite/cuisine-2.jpg",
    name: "La cuisine",
    sub: "Équipée & ouverte",
    text: "Une cuisine contemporaine entièrement équipée, prolongée d'un bar et ouverte sur le séjour.",
  },
  {
    src: "/images/gite/salon-2.jpg",
    name: "L'espace ouvert",
    sub: "Vivre ensemble",
    text: "Des volumes généreux qui relient cuisine, repas et salon dans une même respiration.",
  },
  {
    src: "/images/gite/autre-1.jpg",
    name: "Coin repas",
    sub: "Pierres & bois",
    text: "Pierres apparentes, bois patiné et lumière naturelle : l'authenticité augeronne dans chaque détail.",
  },
  {
    src: "/images/gite/galerie-3.jpg",
    name: "Sous la charpente",
    sub: "L'âme de la maison",
    text: "Une charpente normande apparente qui signe le caractère et la hauteur du lieu.",
    focus: "center 35%",
  },
];

function Scene({
  room,
  index,
  total,
  progress,
}: {
  room: Room;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const half = 1 / (total - 1);
  const center = index / (total - 1);
  const opacity = useTransform(
    progress,
    [center - half, center - half * 0.5, center, center + half * 0.5, center + half],
    [0, 1, 1, 1, 0],
    { clamp: true }
  );
  const scale = useTransform(progress, [center - half, center + half], [1.16, 1.05], {
    clamp: true,
  });
  const capY = useTransform(progress, [center - half, center, center + half], [40, 0, -40], {
    clamp: true,
  });

  return (
    <motion.div style={{ opacity }} className="absolute inset-0">
      <motion.img
        src={room.src}
        alt={`${room.name} — ${room.sub}`}
        style={{ scale, objectPosition: room.focus ?? "center" }}
        className="absolute inset-0 h-full w-full object-cover"
        loading={index < 2 ? "eager" : "lazy"}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-black/25" />
      <motion.div
        style={{ y: capY }}
        className="absolute bottom-[12vh] left-0 right-0 px-7 sm:bottom-24 sm:px-16"
      >
        <div className="container-luxe">
          <span className="mb-3 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-white/70">
            <span className="text-accent-light">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="h-px w-8 bg-white/40" />
            {room.sub}
          </span>
          <h2 className="max-w-2xl font-display text-4xl font-medium leading-[1.05] text-white sm:text-6xl">
            {room.name}
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/80 sm:text-base">
            {room.text}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function GalleryTour() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const total = rooms.length;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const i = Math.min(total - 1, Math.max(0, Math.round(v * (total - 1))));
    setActive(i);
  });

  const barScaleY = useTransform(scrollYProgress, [0, 1], [0, 1], { clamp: true });
  const hintOpacity = useTransform(scrollYProgress, [0, 0.04], [1, 0], { clamp: true });

  const goTo = (i: number) => {
    const el = ref.current;
    if (!el) return;
    const range = el.offsetHeight - window.innerHeight;
    const target = el.offsetTop + (i / (total - 1)) * range;
    window.scrollTo({ top: target, behavior: "smooth" });
  };

  // Fallback statique si l'utilisateur préfère réduire les animations
  if (reduce) {
    return (
      <div className="bg-foreground">
        {rooms.map((room, i) => (
          <section key={room.src} className="relative h-[80svh] min-h-[520px]">
            <img
              src={room.src}
              alt={`${room.name} — ${room.sub}`}
              style={{ objectPosition: room.focus ?? "center" }}
              className="absolute inset-0 h-full w-full object-cover"
              loading={i < 2 ? "eager" : "lazy"}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
            <div className="container-luxe absolute bottom-12 left-0 right-0">
              <span className="text-xs font-medium uppercase tracking-[0.25em] text-white/70">
                {String(i + 1).padStart(2, "0")} · {room.sub}
              </span>
              <h2 className="mt-2 font-display text-4xl text-white sm:text-5xl">
                {room.name}
              </h2>
              <p className="mt-3 max-w-md text-sm text-white/80">{room.text}</p>
            </div>
          </section>
        ))}
      </div>
    );
  }

  return (
    <>
      <div ref={ref} style={{ height: `${total * 80}vh` }} className="relative bg-foreground">
        <div className="sticky top-0 h-[100svh] overflow-hidden">
          {rooms.map((room, i) => (
            <Scene key={room.src} room={room} index={i} total={total} progress={scrollYProgress} />
          ))}

          {/* dégradé haut pour la lisibilité du header */}
          <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-28 bg-gradient-to-b from-black/40 to-transparent" />

          {/* Navigateur de pièces (desktop) */}
          <nav className="absolute right-8 top-1/2 z-20 hidden -translate-y-1/2 flex-col gap-3.5 lg:flex">
            {rooms.map((room, i) => (
              <button
                key={room.src}
                type="button"
                onClick={() => goTo(i)}
                className="group flex items-center justify-end gap-3"
                aria-label={`Aller à ${room.name}`}
              >
                <span
                  className={
                    "whitespace-nowrap text-xs font-medium transition-all duration-300 " +
                    (active === i
                      ? "text-white opacity-100"
                      : "text-white/0 opacity-0 group-hover:text-white/70 group-hover:opacity-100")
                  }
                >
                  {room.name}
                </span>
                <span
                  className={
                    "h-2 w-2 rounded-full ring-1 ring-white/60 transition-all duration-300 " +
                    (active === i ? "scale-125 bg-accent ring-accent" : "bg-white/0 group-hover:bg-white/50")
                  }
                />
              </button>
            ))}
          </nav>

          {/* Barre de progression (gauche) */}
          <div className="absolute left-6 top-1/2 z-20 hidden h-40 w-px -translate-y-1/2 bg-white/20 lg:block">
            <motion.div
              style={{ scaleY: barScaleY }}
              className="absolute inset-0 origin-top bg-accent-light"
            />
          </div>

          {/* Indice de défilement */}
          <motion.div
            style={{ opacity: hintOpacity }}
            className="absolute bottom-7 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-1.5 text-white/70"
          >
            <span className="text-[11px] font-medium uppercase tracking-[0.25em]">
              Faites défiler la visite
            </span>
            <motion.span
              animate={{ y: [0, 7, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown size={18} />
            </motion.span>
          </motion.div>

          {/* Repère mobile : pastilles */}
          <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 gap-1.5 lg:hidden">
            {rooms.map((room, i) => (
              <span
                key={room.src}
                className={
                  "h-1.5 rounded-full transition-all duration-300 " +
                  (active === i ? "w-5 bg-accent-light" : "w-1.5 bg-white/40")
                }
              />
            ))}
          </div>
        </div>
      </div>

      {/* Clôture de la visite */}
      <section className="bg-background py-24 text-center sm:py-32">
        <div className="container-luxe">
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-accent">
            Fin de la visite
          </span>
          <h2 className="mx-auto mt-4 max-w-2xl text-balance font-display text-3xl font-medium text-foreground sm:text-4xl">
            Et si la prochaine étape, c'était d'y séjourner&nbsp;?
          </h2>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/reservation"
              className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-3.5 text-sm font-medium text-white transition-all hover:bg-[#964f2c] hover:shadow-lg hover:shadow-black/10"
            >
              Voir les tarifs & disponibilités
            </a>
            <a
              href="/#localisation"
              className="inline-flex items-center justify-center rounded-full border border-accent/30 px-8 py-3.5 text-sm font-medium text-foreground transition-all hover:border-accent hover:bg-accent/5"
            >
              Explorer la région
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
