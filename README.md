# Gîte Falafa Normand — site vitrine premium

Recréation du site gite-falafa-normand.com en Next.js 15 / TypeScript / Tailwind v4 / Framer Motion.

## Lancer le projet

```bash
npm install
npm run dev
```

Ouvre ensuite http://localhost:3000

Pour la production :

```bash
npm run build
npm run start
```

## ⚠️ Important — à propos des images

Toutes les photos du site sont actuellement des **placeholders SVG élégants**
(motif colombage en filigrane, ratio conservé) générés par le composant
`components/ui/PlaceholderImage.tsx`. Ils ont été utilisés parce que je n'ai
pas pu récupérer les vraies photos du site d'origine (site Wix qui charge son
contenu en JavaScript côté client, inaccessible à mes outils).

### Pour remplacer par les vraies photos

1. Dépose tes images dans `public/images/` avec ces noms (ou change les
   chemins dans `lib/data.ts`) :
   - `gite-facade.svg` → `gite-facade.jpg`
   - `gite-salon.svg`, `gite-chambre1.svg`, `gite-chambre2.svg`,
     `gite-cuisine.svg`, `gite-terrasse.svg`, `gite-jardin.svg`,
     `gite-salle-bain.svg`
   - `discover-honfleur.svg`, `discover-deauville.svg`,
     `discover-cidre.svg`, `discover-etretat.svg`

2. Remplace les appels `<PlaceholderImage ... />` par `next/image` :

```tsx
import Image from "next/image";

<Image
  src="/images/gite-facade.jpg"
  alt="Façade du gîte"
  fill
  className="object-cover"
/>
```

3. Pour le Hero, Testimonials et BookingCTA (fonds plein écran), fais de même
   en gardant le `<div className="absolute inset-0">` qui contient déjà le
   calque d'overlay (gradient noir) pour la lisibilité du texte.

## Contenu à vérifier / personnaliser

Tout le texte (titres, avis clients, FAQ, étapes de la timeline régionale)
est centralisé dans `lib/data.ts`. Les avis clients sont des exemples
plausibles inspirés du ton des vrais avis trouvés sur Booking/Gîtes.fr,
**pas des citations réelles** — à remplacer par les vrais avis dès que
possible pour rester honnête vis-à-vis des visiteurs.

## Structure

```
app/
  layout.tsx       → metadata SEO, OpenGraph, JSON-LD (LodgingBusiness + FAQ)
  page.tsx          → assemblage des sections
  globals.css       → thème Tailwind v4, palette, typographie, animations
  sitemap.ts        → sitemap.xml généré automatiquement
  robots.ts         → robots.txt généré automatiquement
components/
  Header.tsx
  Hero.tsx
  Experience.tsx
  Gallery.tsx
  Location.tsx
  Discover.tsx
  Testimonials.tsx
  FAQ.tsx
  BookingCTA.tsx
  Footer.tsx
  ui/
    PlaceholderImage.tsx  → générateur de placeholder SVG (à terme à supprimer)
    SectionHeading.tsx
    TimberDivider.tsx
lib/
  data.ts           → tout le contenu (textes, avis, galerie, FAQ...)
  utils.ts          → helper cn() pour Tailwind
```
