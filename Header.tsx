"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Le gîte", href: "/#gite" },
  { label: "Expérience", href: "/#experience" },
  { label: "Région", href: "/#localisation" },
  { label: "Galerie", href: "/galerie" },
  { label: "Avis", href: "/#avis" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(181,103,58,0.18)]"
          : "bg-transparent"
      )}
    >
      <div className="container-luxe flex h-20 items-center justify-between">
        <a
          href="/"
          className={cn(
            "font-display text-lg tracking-wide transition-colors",
            scrolled ? "text-foreground" : "text-white"
          )}
        >
          Falafa Normand
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium tracking-wide transition-colors hover:text-accent",
                scrolled ? "text-foreground/80" : "text-white/90"
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="/reservation"
            className="inline-flex items-center rounded-full bg-accent px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#964f2c]"
          >
            Réserver
          </a>
        </div>

        <button
          onClick={() => setOpen(true)}
          aria-label="Ouvrir le menu"
          className={cn(
            "lg:hidden",
            scrolled ? "text-foreground" : "text-white"
          )}
        >
          <Menu size={26} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background lg:hidden"
          >
            <div className="container-luxe flex h-20 items-center justify-between">
              <span className="font-display text-lg text-foreground">
                Falafa Normand
              </span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Fermer le menu"
                className="text-foreground"
              >
                <X size={26} />
              </button>
            </div>
            <nav className="container-luxe mt-10 flex flex-col gap-7">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.4 }}
                  className="font-display text-2xl text-foreground"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="/reservation"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="mt-4 inline-flex w-fit items-center rounded-full bg-accent px-6 py-3 text-sm font-medium text-white"
              >
                Réserver votre séjour
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
