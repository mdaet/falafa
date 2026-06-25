"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import { siteConfig, testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section id="avis" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0">
        <PlaceholderImage
          alt="Jardin paysagé du gîte en arrière-plan"
          variant="dark"
          className="h-full w-full"
        />
        <div className="absolute inset-0 bg-black/55" />
      </div>

      <div className="container-luxe relative z-10">
        <SectionHeading
          eyebrow="Ils sont venus"
          title="Ce que nos hôtes en disent"
          align="center"
          light
          className="mx-auto"
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto mt-8 flex w-fit items-center gap-3 rounded-full border border-white/20 bg-white/10 px-6 py-3 backdrop-blur-md"
        >
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={15}
                className="fill-secondary text-secondary"
              />
            ))}
          </div>
          <span className="text-sm font-medium text-white">
            {siteConfig.rating.value}/5
          </span>
          <span className="text-sm text-white/60">
            · {siteConfig.rating.count} avis
          </span>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-col rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-md transition-colors duration-300 hover:bg-white/[0.14]"
            >
              <Quote className="text-secondary" size={22} />
              <p className="mt-4 flex-1 text-sm leading-relaxed text-white/85">
                {testimonial.text}
              </p>
              <div className="mt-6 flex items-center justify-between border-t border-white/15 pt-4">
                <div>
                  <p className="text-sm font-medium text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-white/55">
                    {testimonial.origin} · {testimonial.date}
                  </p>
                </div>
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={11}
                      className="fill-secondary text-secondary"
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
