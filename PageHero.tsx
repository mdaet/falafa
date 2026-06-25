type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

/** Bandeau d'en-tête sombre pour les pages secondaires (galerie, réservation). */
export default function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative isolate flex min-h-[44vh] items-end overflow-hidden bg-foreground">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#3a2a1e] via-foreground to-[#1a120c]" />
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.12]"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
          aria-hidden="true"
        >
          {[20, 40, 60, 80].map((x) => (
            <line
              key={x}
              x1={x}
              y1="0"
              x2={x - 25}
              y2="100"
              stroke="#b3946f"
              strokeWidth="0.4"
              vectorEffect="non-scaling-stroke"
            />
          ))}
        </svg>
      </div>
      <div className="absolute inset-x-0 bottom-0 z-10 h-1 bg-accent/80" />

      <div className="container-luxe pb-14 pt-32">
        {eyebrow ? (
          <span className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.25em] text-secondary">
            {eyebrow}
          </span>
        ) : null}
        <h1 className="font-display text-4xl font-medium leading-[1.1] text-white sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  );
}
