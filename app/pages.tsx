import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GalleryTour from "@/components/GalleryTour";

export const metadata: Metadata = {
  title: "Visite du gîte",
  description:
    "Visite immersive du Gîte Falafa Normand : extérieur, séjour, salle à manger, cuisine et charpente normande, comme si vous y étiez.",
};

export default function GaleriePage() {
  return (
    <main>
      <Header />
      <GalleryTour />
      <Footer />
    </main>
  );
}
