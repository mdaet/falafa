import { MapPin, Mail, Phone } from "lucide-react";
import { siteConfig } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-foreground py-16 text-white/70">
      <div className="container-luxe">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <span className="font-display text-xl text-white">
              Falafa Normand
            </span>
            <p className="mt-4 max-w-sm text-sm leading-relaxed">
              Un gîte authentique à colombages entre Honfleur et Deauville,
              au cœur du Pays d&apos;Auge. Calme, nature et patrimoine
              normand, à deux heures de Paris.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-white/40">
              Navigation
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li><a href="#gite" className="transition-colors hover:text-white">Le gîte</a></li>
              <li><a href="#experience" className="transition-colors hover:text-white">Expérience</a></li>
              <li><a href="#localisation" className="transition-colors hover:text-white">Région</a></li>
              <li><a href="#avis" className="transition-colors hover:text-white">Avis</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-white/40">
              Contact
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-0.5 shrink-0 text-secondary" />
                <span>
                  {siteConfig.address.street}, {siteConfig.address.postalCode}{" "}
                  {siteConfig.address.locality}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={16} className="shrink-0 text-secondary" />
                <span>{siteConfig.phone}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={16} className="shrink-0 text-secondary" />
                <span>contact@gite-falafa-normand.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row">
          <span>
            © {new Date().getFullYear()} Gîte Falafa Normand. Tous droits
            réservés.
          </span>
          <span>Pont-l'Évêque, Calvados, Normandie</span>
        </div>
      </div>
    </footer>
  );
}
