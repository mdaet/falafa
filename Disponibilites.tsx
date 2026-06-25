"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import SectionHeading from "./SectionHeading";

const BOOKING_URL =
  "https://www.booking.com/hotel/fr/gite-falafa-normand.fr.html";

/**
 * Plages réservées (indicatives) — à mettre à jour, ou laisser Booking.com
 * faire foi en temps réel. Format ISO inclusif début → exclusif fin.
 */
const bookedRanges: [string, string][] = [
  ["2026-07-04", "2026-07-12"],
  ["2026-07-25", "2026-08-03"],
  ["2026-08-15", "2026-08-22"],
  ["2026-09-12", "2026-09-15"],
];

const WEEKDAYS = ["L", "M", "M", "J", "V", "S", "D"];
const MONTHS = [
  "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
  "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre",
];

function iso(d: Date) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(
    d.getDate()
  ).padStart(2, "0")}`;
}

function isBooked(d: Date) {
  const s = iso(d);
  return bookedRanges.some(([a, b]) => s >= a && s < b);
}

function MonthGrid({ year, month, today }: { year: number; month: number; today: Date }) {
  const first = new Date(year, month, 1);
  const lead = (first.getDay() + 6) % 7; // Monday-first
  const days = new Date(year, month + 1, 0).getDate();
  const cells: (Date | null)[] = [
    ...Array(lead).fill(null),
    ...Array.from({ length: days }, (_, i) => new Date(year, month, i + 1)),
  ];

  return (
    <div className="rounded-2xl border border-accent/15 bg-white p-5 shadow-[0_2px_18px_-10px_rgba(42,32,24,0.1)]">
      <p className="mb-4 text-center font-display text-base text-foreground">
        {MONTHS[month]} {year}
      </p>
      <div className="grid grid-cols-7 gap-1">
        {WEEKDAYS.map((w, i) => (
          <span key={i} className="pb-1 text-center text-[11px] font-medium text-foreground/40">
            {w}
          </span>
        ))}
        {cells.map((d, i) => {
          if (!d) return <span key={i} />;
          const past = d < today;
          const booked = isBooked(d);
          return (
            <span
              key={i}
              className={
                "flex aspect-square items-center justify-center rounded-md text-[13px] " +
                (past
                  ? "text-foreground/20"
                  : booked
                  ? "bg-foreground/[0.06] text-foreground/30 line-through"
                  : "bg-accent/[0.07] font-medium text-accent")
              }
            >
              {d.getDate()}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default function Disponibilites() {
  const today = useMemo(() => {
    const t = new Date();
    return new Date(t.getFullYear(), t.getMonth(), t.getDate());
  }, []);

  const months = useMemo(
    () =>
      Array.from({ length: 3 }, (_, i) => {
        const d = new Date(today.getFullYear(), today.getMonth() + i, 1);
        return { year: d.getFullYear(), month: d.getMonth() };
      }),
    [today]
  );

  return (
    <section id="disponibilites" className="bg-cream-dark/50 py-20 sm:py-28">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="Disponibilités"
          title="Vérifiez vos dates"
          description="Calendrier indicatif des prochaines semaines. Les disponibilités en temps réel et la réservation sécurisée se font sur Booking.com."
          align="center"
          className="mx-auto"
        />

        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-foreground/60">
          <span className="flex items-center gap-2">
            <span className="h-3.5 w-3.5 rounded bg-accent/[0.18] ring-1 ring-accent/30" />
            Disponible
          </span>
          <span className="flex items-center gap-2">
            <span className="h-3.5 w-3.5 rounded bg-foreground/[0.08] ring-1 ring-foreground/10" />
            Indisponible
          </span>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {months.map((m) => (
            <MonthGrid key={`${m.year}-${m.month}`} year={m.year} month={m.month} today={today} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 flex flex-col items-center"
        >
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full bg-[#003b95] px-7 py-4 text-base font-medium text-white shadow-lg shadow-[#003b95]/20 transition-all hover:bg-[#00306e] hover:shadow-xl"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-white text-sm font-bold text-[#003b95]">
              B.
            </span>
            Réserver sur Booking.com
            <ExternalLink size={17} className="opacity-80 transition-transform group-hover:translate-x-0.5" />
          </a>
          <p className="mt-4 max-w-md text-center text-xs text-foreground/45">
            Paiement et confirmation immédiate via Booking.com. Aucune réservation
            n'est gérée directement sur ce site.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
