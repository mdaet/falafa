import type { LucideIcon } from "lucide-react";
import {
  Trees,
  Landmark,
  UtensilsCrossed,
  Wind,
  Users,
  BedDouble,
  Sun,
  Flower2,
  Wifi,
  Car,
  MapPin,
  Star,
} from "lucide-react";

export const siteConfig = {
  name: "Gîte Falafa Normand",
  tagline: "Votre parenthèse normande",
  description:
    "Un gîte authentique à colombages niché au cœur du Pays d'Auge, entre mer, nature et patrimoine normand. Entre Honfleur et Deauville, à deux pas des plages du Débarquement.",
  url: "https://www.gite-falafa-normand.com",
  address: {
    street: "753 Route de Honfleur",
    locality: "Pont-l'Évêque",
    postalCode: "14130",
    region: "Calvados",
    country: "FR",
  },
  geo: {
    latitude: 49.30272,
    longitude: 0.18561,
  },
  rating: {
    value: 4.9,
    count: 87,
  },
  phone: "+33 2 31 00 00 00",
};

export type ExperienceCard = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const experienceCards: ExperienceCard[] = [
  {
    icon: Trees,
    title: "Nature",
    description:
      "Un jardin paysagé d'un demi-hectare, des pommiers centenaires et le silence du bocage normand pour seul horizon.",
  },
  {
    icon: Landmark,
    title: "Patrimoine",
    description:
      "Une bâtisse à pans de bois restaurée dans le respect de l'architecture augeronne, entre Honfleur et le Pays d'Auge.",
  },
  {
    icon: UtensilsCrossed,
    title: "Gastronomie",
    description:
      "Cidre, calvados et camembert à quelques minutes : les producteurs locaux composent votre garde-manger normand.",
  },
  {
    icon: Wind,
    title: "Déconnexion",
    description:
      "Pas de vis-à-vis, pas de bruit de circulation. Seulement le poêle à pellets qui crépite et le vent dans les pommiers.",
  },
];

export type Amenity = {
  icon: LucideIcon;
  label: string;
};

export const amenities: Amenity[] = [
  { icon: Users, label: "4 personnes" },
  { icon: BedDouble, label: "2 chambres" },
  { icon: Sun, label: "Terrasse exposée sud" },
  { icon: Flower2, label: "Jardin clos paysagé" },
  { icon: Wifi, label: "Wifi fibre gratuit" },
  { icon: Car, label: "Parking privé" },
];

export type GalleryImage = {
  src: string;
  alt: string;
  span?: "tall" | "wide" | "normal";
};

export const galleryImages: GalleryImage[] = [
  {
    src: "/images/gite/galerie-3.jpg",
    alt: "Charpente normande apparente et hauteur sous plafond",
    span: "tall",
  },
  {
    src: "/images/gite/salon-3.jpg",
    alt: "Salon chaleureux avec canapé et coussins colorés",
    span: "normal",
  },
  {
    src: "/images/gite/cuisine-1.jpg",
    alt: "Cuisine équipée contemporaine baignée de lumière",
    span: "normal",
  },
  {
    src: "/images/gite/autre-1.jpg",
    alt: "Salle à manger conviviale sous les poutres",
    span: "wide",
  },
  {
    src: "/images/gite/cuisine-2.jpg",
    alt: "Coin cuisine avec bar et tabourets",
    span: "normal",
  },
  {
    src: "/images/gite/salon-4.jpg",
    alt: "Espace salon cosy aux teintes naturelles",
    span: "tall",
  },
  {
    src: "/images/gite/galerie-1.jpg",
    alt: "Salle à manger avec poêle à pellets",
    span: "normal",
  },
  {
    src: "/images/gite/cuisine-4.jpg",
    alt: "Table et pierres apparentes du Pays d'Auge",
    span: "normal",
  },
];

export type LocationStop = {
  name: string;
  distance: string;
  description: string;
  /** Coordonnées GPS réelles pour le marqueur sur la carte interactive. */
  geo: { lat: number; lng: number };
  /** Contenu de la « carte d'identité » affichée au clic sur la carte. */
  category: string;
  long: string;
  image: string;
  credit: string;
  /** false = exclu du cadrage initial de la carte (point lointain). */
  inFrame?: boolean;
};

export const locationTimeline: LocationStop[] = [
  {
    name: "Pont-l'Évêque centre",
    distance: "5 min",
    description:
      "Le centre historique : fromage AOP, maisons à pans de bois et marché du lundi.",
    geo: { lat: 49.2897, lng: 0.1869 },
    category: "Village & terroir",
    long: "À cinq minutes du gîte, le cœur de Pont-l'Évêque a donné son nom à l'un des plus anciens fromages de Normandie, déjà réputé au XIIIᵉ siècle. Ses ruelles bordées de maisons à pans de bois, ses halles et son marché du lundi matin en font une petite cité de caractère où il fait bon flâner entre cidre, calvados et tables gourmandes.",
    image: "/images/cities/pont-leveque.jpg",
    credit: "© ChBougui · CC BY-SA 4.0 · Wikimedia Commons",
  },
  {
    name: "Deauville",
    distance: "10 km",
    description: "Planches et élégance : le casino Belle Époque et la plus chic des plages.",
    geo: { lat: 49.3597, lng: 0.0758 },
    category: "Bord de mer chic",
    long: "Station chic de la Côte Fleurie, Deauville incarne l'élégance balnéaire depuis le Second Empire. On y vient pour ses Planches bordées de parasols colorés et de cabines portant le nom des stars, son casino Belle Époque, ses villas, ses champs de courses et son festival du cinéma américain qui déroule chaque automne son tapis rouge face à la mer.",
    image: "/images/cities/deauville.jpg",
    credit: "© Avishai Teicher · CC BY-SA 4.0 · Wikimedia Commons",
  },
  {
    name: "Honfleur",
    distance: "10 km",
    description: "Le Vieux Bassin, ses ruelles pavées et ses ateliers d'artistes.",
    geo: { lat: 49.419, lng: 0.233 },
    category: "Patrimoine & art",
    long: "Port de carte postale à l'embouchure de la Seine, Honfleur est célèbre pour son Vieux Bassin cerné de hautes maisons d'ardoise qui se reflètent dans l'eau. Berceau de l'impressionnisme — Eugène Boudin y est né et Monet y a peint —, la ville aligne galeries d'art, ruelles pavées et l'étonnante église Sainte-Catherine, la plus grande église en bois de France.",
    image: "/images/cities/honfleur.jpg",
    credit: "© Rebexho · CC BY-SA 3.0 · Wikimedia Commons",
  },
  {
    name: "Lisieux",
    distance: "18 km",
    description: "Basilique et patrimoine, deuxième lieu de pèlerinage de France.",
    geo: { lat: 49.1463, lng: 0.2258 },
    category: "Spiritualité & patrimoine",
    long: "Capitale du Pays d'Auge, Lisieux est dominée par l'imposante basilique Sainte-Thérèse, l'un des plus grands sanctuaires édifiés au XXᵉ siècle et deuxième lieu de pèlerinage de France après Lourdes. La ville conserve aussi sa cathédrale Saint-Pierre gothique et de beaux témoignages du patrimoine augeron.",
    image: "/images/cities/lisieux.jpg",
    credit: "© Raimond Spekking · CC BY-SA 4.0 · Wikimedia Commons",
  },
  {
    name: "Beuvron-en-Auge",
    distance: "22 km",
    description: "Classé parmi les Plus Beaux Villages de France.",
    geo: { lat: 49.1781, lng: -0.0608 },
    category: "Plus beau village",
    long: "Niché au milieu des vergers, Beuvron-en-Auge figure parmi les Plus Beaux Villages de France. Ses maisons à pans de bois fleuries, son vieux manoir et ses halles forment un décor de carte postale, étape incontournable de la Route du Cidre où l'on déguste cidre, poiré et calvados chez les producteurs.",
    image: "/images/cities/beuvron-en-auge.jpg",
    credit: "© Cicero · CC BY-SA 3.0 · Wikimedia Commons",
  },
  {
    name: "Pont-Audemer",
    distance: "30 km",
    description: "La « Venise normande » et ses canaux bordés de colombages.",
    geo: { lat: 49.3539, lng: 0.5147 },
    category: "Canaux & colombages",
    long: "Surnommée la « Venise normande », Pont-Audemer séduit par ses canaux de la Risle qui serpentent entre de pittoresques maisons à pans de bois. Ses ruelles, ses ponts fleuris et son patrimoine médiéval en font une halte pleine de charme aux portes du Pays d'Auge.",
    image: "/images/cities/pont-audemer.jpg",
    credit: "© Calips · CC BY-SA 3.0 · Wikimedia Commons",
  },
  {
    name: "Caen",
    distance: "30 min",
    description: "Château ducal, abbayes et Mémorial de la Paix.",
    geo: { lat: 49.1829, lng: -0.3707 },
    category: "Histoire & mémoire",
    long: "Cité de Guillaume le Conquérant, Caen déploie l'un des plus vastes châteaux d'Europe, les deux abbayes romanes — aux Hommes et aux Dames — et le célèbre Mémorial, musée incontournable pour comprendre la Seconde Guerre mondiale et le Débarquement. Une ville d'art et d'histoire animée et étudiante.",
    image: "/images/cities/caen.jpg",
    credit: "© Nikater · Domaine public · Wikimedia Commons",
  },
  {
    name: "Étretat",
    distance: "45 min",
    description: "Falaises et arches, parmi les paysages les plus photographiés de France.",
    geo: { lat: 49.7075, lng: 0.205 },
    category: "Nature & panoramas",
    long: "Les falaises d'Étretat comptent parmi les paysages les plus photographiés de France. Leurs arches monumentales — la Porte d'Aval, la Manneporte — et l'Aiguille creuse, immortalisées par Monet et imaginées par Maurice Leblanc dans les aventures d'Arsène Lupin, dominent une plage de galets et offrent des panoramas spectaculaires depuis les sentiers du littoral.",
    image: "/images/cities/etretat.jpg",
    credit: "© Jörg Braukmann · CC BY-SA 4.0 · Wikimedia Commons",
  },
  {
    name: "Mont-Saint-Michel",
    distance: "2 h",
    description: "La Merveille de l'Occident, site classé au patrimoine mondial de l'UNESCO.",
    geo: { lat: 48.6361, lng: -1.5115 },
    category: "Merveille UNESCO",
    long: "Surgissant de sa baie aux plus grandes marées d'Europe, le Mont-Saint-Michel et son abbaye millénaire forment l'un des sites les plus visités de France, inscrit au patrimoine mondial de l'UNESCO. Une escapade spectaculaire à environ deux heures de route, entre Normandie et Bretagne.",
    image: "/images/cities/mont-saint-michel.jpg",
    credit: "© Lynx1211 · CC BY-SA 4.0 · Wikimedia Commons",
    inFrame: false,
  },
  {
    name: "Paris",
    distance: "2 h",
    description: "La capitale française, à deux heures par la route ou le train.",
    geo: { lat: 48.8566, lng: 2.3522 },
    category: "Escapade capitale",
    long: "À environ deux heures de Pont-l'Évêque, Paris se prête à une escapade d'une journée : musées, monuments et grands boulevards de la capitale française, avant de retrouver le calme du Pays d'Auge le soir venu.",
    image: "/images/cities/paris.jpg",
    credit: "© Benh Lieu Song · Domaine public · Wikimedia Commons",
    inFrame: false,
  },
];

export type DiscoverCard = {
  title: string;
  category: string;
  description: string;
  image: string;
  credit: string;
};

export const discoverCards: DiscoverCard[] = [
  {
    title: "Le Vieux Bassin de Honfleur",
    category: "Patrimoine",
    description:
      "Flânez le long du port où Monet posait déjà son chevalet, entre maisons à hautes toitures d'ardoise et galeries d'art.",
    image: "/images/cities/honfleur.jpg",
    credit: "© Rebexho · CC BY-SA 3.0 · Wikimedia Commons",
  },
  {
    title: "Les Planches de Deauville",
    category: "Bord de mer",
    description:
      "Une promenade de bois centenaire bordée de cabines aux noms de stars, face à une plage de sable fin à perte de vue.",
    image: "/images/cities/deauville.jpg",
    credit: "© Avishai Teicher · CC BY-SA 4.0 · Wikimedia Commons",
  },
  {
    title: "La Route du Cidre",
    category: "Gastronomie",
    description:
      "Traversez les vergers du Pays d'Auge et poussez la porte des cidreries familiales pour une dégustation au calme.",
    image: "/images/cities/cidre.jpg",
    credit: "Domaine public · Wikimedia Commons",
  },
  {
    title: "Les Falaises d'Étretat",
    category: "Nature",
    description:
      "Aiguille, Porte d'Amont et Porte d'Aval : un des panoramas les plus photographiés de la côte normande.",
    image: "/images/cities/etretat.jpg",
    credit: "© Jörg Braukmann · CC BY-SA 4.0 · Wikimedia Commons",
  },
];

export type Testimonial = {
  name: string;
  origin: string;
  rating: number;
  date: string;
  text: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Claire & Antoine",
    origin: "Lyon",
    rating: 5,
    date: "Septembre 2025",
    text: "Un cocon parfait. La décoration est soignée jusqu'au moindre détail, le jardin est magnifique et le calme absolu. Michèle nous a accueillis avec une gentillesse rare, jusqu'à nous offrir des pommes du verger.",
  },
  {
    name: "Sophie M.",
    origin: "Bruxelles",
    rating: 5,
    date: "Juillet 2025",
    text: "Exactement ce qu'on cherchait : authentique sans rien sacrifier au confort. La terrasse au coucher du soleil, le poêle à pellets le soir, et Honfleur à vingt minutes. On reviendra.",
  },
  {
    name: "James & Helen",
    origin: "Londres",
    rating: 5,
    date: "Mai 2025",
    text: "A beautifully maintained property surrounded by gardens. The decor everywhere was thoughtful and the kitchen very well equipped. The perfect base to explore the Normandy coast.",
  },
  {
    name: "Marie L.",
    origin: "Paris",
    rating: 5,
    date: "Avril 2025",
    text: "Le gîte construit dans le respect de l'architecture locale est magnifique, comme neuf et impeccable. Les enfants ont adoré le jardin, nous avons adoré la tranquillité.",
  },
];

export const faqItems = [
  {
    question: "Combien de personnes le gîte peut-il accueillir ?",
    answer:
      "Le Gîte Falafa Normand accueille jusqu'à 4 personnes confortablement, avec deux chambres et un canapé-lit d'appoint dans le salon.",
  },
  {
    question: "Le gîte accepte-t-il les animaux ?",
    answer:
      "Les animaux de compagnie ne sont pas admis au sein de l'établissement, afin de préserver le confort de tous les séjours.",
  },
  {
    question: "À quelle distance se trouve Honfleur et Deauville ?",
    answer:
      "Honfleur se trouve à environ 15 minutes en voiture et Deauville à 20 minutes. Le gîte est idéalement situé entre les deux, au cœur du Pays d'Auge.",
  },
  {
    question: "Quels sont les horaires d'arrivée et de départ ?",
    answer:
      "L'arrivée se fait entre 15h et 16h, et le départ au plus tard à 10h. Merci d'indiquer votre heure d'arrivée prévue lors de la réservation.",
  },
  {
    question: "Le wifi et le parking sont-ils inclus ?",
    answer:
      "Oui, le gîte dispose d'une connexion wifi fibre gratuite et d'un parking privé gratuit sur place.",
  },
];

export const iconMapPin = MapPin;
export const iconStar = Star;
