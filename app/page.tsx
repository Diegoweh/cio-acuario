import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { AboutSection } from "./components/AboutSection";
import BannerSection from "./components/BannerSection";

import Link from "next/link";
import { ProgramsSection } from "./components/ProgramsSection.tsx";
import { Bird, BookOpen, Waves } from "lucide-react";
import { ImpactBanner } from "./components/ImpactBanner";
import { PartnersSection } from "./components/PartnersSection";
import { pre } from "motion/react-client";
import { Footer } from "./components/Footer";

export default function Home() {
  const sections = [
    {
      title: "Totales",
      items: [
        {
          value: "700",
          label: "Ejemplares Atendidos",
          icon: <Bird className="w-full h-full" />,
          prefix: "+",
        },
        {
          value: "70",
          label: "Aves",
          description: "Mayormente desconocidos del hábitat legal",
          suffix: "%",
        },
        {
          value: "20",
          label: "Mamíferos",
          suffix: "%",
        },
        {
          value: "10",
          label: "Reptiles",
          suffix: "%",
        },
      ],
    },
    {
      title: "Limpiezas",
      items: [
        {
          value: "10",
          label: "Limpiezas de Playas",
          icon: <Waves className="w-full h-full" />,
          prefix: "+",
        },
        {
          value: "2",
          label: "Mega Limpiezas de Playa",
        },
        {
          value: "1500",
          label: "Participantes",
          prefix: "+",
        },
        {
          value: "40",
          label: "Empresas Participantes",
          prefix: "+",
        },
      ],
    },
    {
      title: "Escolares",
      items: [
        {
          value: "175",
          label: "Estudiantes Beneficiados",
          icon: <BookOpen className="w-full h-full" />,
          prefix: "+",
        },
        {
          value: "60",
          label: "Talleres Impartidos",
          prefix: "+",
        },
        {
          value: "21",
          label: "Escuelas Recibidas",
          prefix: "+",
        },
        {
          value: "35",
          label: "Escuelas Visitadas",
          prefix: "+",
        },
      ],
    },
  ];
  
  return (
    <div className="min-h-screen bg-zinc-50 font-sans">
      <Navbar />
      <Header />
      <Hero />
      <AboutSection />
      <BannerSection />
      <ProgramsSection />
      <ImpactBanner
        backgroundImage="/img/impactBanner.webp"
        title="Nuestro Impacto"
        subtitle="Información de 2023 a octubre de 2025"
        sections={sections}
      />
      <PartnersSection />
      <Footer
        logo="/img/logoCio.png"
        organizationName="Centro de Investigaciones Oceánicas del Mar de Cortés"
        description="Dedicados a la conservación y investigación marina del Mar de Cortés"
        menuLinks={[
          { label: "Nosotros", href: "#" },
          { label: "Programas", href: "#" },
          { label: "Súmate a la causa", href: "#" },
          { label: "Participa", href: "#" },
          { label: "Recursos educativos", href: "#" },
          { label: "Dona", href: "#" },
        ]}
        address="Av. de los Deportes 111, Tellería, 82017 Mazatlán, Sin."
        phone="+52 (687) 123-4567"
        email="info@ciomaradecortes.org"
        socialLinks={{
          facebook: "https://facebook.com",
          instagram: "https://instagram.com",
          twitter: "https://twitter.com",
        }}
      />
    </div>
  );
}
