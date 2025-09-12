// src/app/[locale]/page.tsx

import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { PhilosophySection } from "@/components/PhilosophySection";
import { Footer } from "@/components/Footer";
import Portfolio from "@/components/Portfolio";

type Props = {
  params: { locale: "en" | "fa" };
};

export default function Home({ params: { locale } }: Props) {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <PhilosophySection />
      <Portfolio locale={locale} />
      <Footer />
    </main>
  );
}
