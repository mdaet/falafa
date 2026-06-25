"use client";

import { motion } from "framer-motion";
import { BedDouble, Sparkles, Receipt, Bath, UserPlus } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const seasons = [
  { name: "Basse saison", price: "100 €", min: "2 nuits" },
  { name: "Moyenne saison", price: "120 €", min: "2 nuits" },
  { name: "Haute saison", price: "130 €", min: "2 nuits" },
  { name: "Très haute saison", price: "145 €", min: "3 nuits", highlight: true },
];

const extras = [
  { icon: BedDouble, text: "Linge de lit fourni" },
  { icon: Receipt, text: "Taxe de séjour : 2,50 €/adulte/nuit" },
  { icon: Sparkles, text: "Ménage obligatoire : 45 €" },
  { icon: Bath, text: "Linge de toilette (option) : 10 € pour 4 personnes" },
  { icon: UserPlus, text: "Canapé-lit séjour : +20 €/nuit pour une 5ᵉ personne" },
];

const conditions = [
  "Acompte de 25 % à la réservation",
  "Solde 15 jours avant l'arrivée (si paiement par chèque)",
  "Sinon, paiement du solde en espèces à l'arrivée",
  "Caution : 400 €, restituée après inventaire",
];

export default function Tarifs() {
  return (
    <section id="tarifs" className="bg-background py-20 sm:py-28">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="Tarifs"
          title="Nos tarifs par saison"
          description="Le gîte se loue à la nuitée selon la saison. Tous les tarifs s'entendent pour le logement entier, jusqu'à 4 personnes."
          align="center"
          className="mx-auto"
        />

        <div className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-2xl border border-accent/15 bg-white shadow-[0_2px_24px_-10px_rgba(42,32,24,0.1)]">
          <div className="grid grid-cols-[1.4fr_1fr_1fr] bg-cream-dark/60 px-6 py-4 text-xs font-medium uppercase tracking-[0.15em] text-foreground/55 sm:px-8">
            <span>Saison</span>
            <span className="text-right">Tarif / nuit</span>
            <span className="text-right">Minimum</span>
          </div>
          {seasons.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className={
                "grid grid-cols-[1.4fr_1fr_1fr] items-center border-t border-accent/10 px-6 py-5 sm:px-8 " +
                (s.highlight ? "bg-accent/[0.05]" : "")
              }
            >
              <span className="flex items-center gap-2.5 font-display text-lg text-foreground">
                {s.name}
                {s.highlight && (
                  <span className="rounded-full bg-accent px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-white">
                    Été
                  </span>
                )}
              </span>
              <span className="text-right text-lg font-medium text-accent">
                {s.price}
              </span>
              <span className="text-right text-sm text-foreground/60">{s.min}</span>
            </motion.div>
          ))}
        </div>

        <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-accent/15 bg-cream-dark/50 p-7">
            <h3 className="font-display text-lg text-foreground">
              Informations complémentaires
            </h3>
            <ul className="mt-5 space-y-3.5">
              {extras.map((e) => {
                const Icon = e.icon;
                return (
                  <li key={e.text} className="flex items-start gap-3 text-sm text-foreground/70">
                    <Icon size={17} className="mt-0.5 shrink-0 text-accent" />
                    <span>{e.text}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="rounded-2xl border border-accent/15 bg-cream-dark/50 p-7">
            <h3 className="font-display text-lg text-foreground">
              Conditions de réservation
            </h3>
            <ul className="mt-5 space-y-3.5">
              {conditions.map((c) => (
                <li key={c} className="flex items-start gap-3 text-sm text-foreground/70">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
