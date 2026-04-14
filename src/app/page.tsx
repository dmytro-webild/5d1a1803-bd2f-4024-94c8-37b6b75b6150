"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="mediumSmall"
        sizing="mediumSizeLargeTitles"
        background="grid"
        cardStyle="glass-depth"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Accueil",
          id: "hero",
        },
        {
          name: "À propos",
          id: "about",
        },
        {
          name: "Services",
          id: "services",
        },
        {
          name: "Avis",
          id: "testimonials",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Moon Palace"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCarouselLogo
      logoText="Moon Palace Kolwezi"
      description="L'excellence et le prestige au cœur de Kolwezi. Découvrez une expérience VIP sans compromis dans un cadre raffiné et sécurisé."
      buttons={[
        {
          text: "Réserver maintenant",
          href: "#contact",
        },
        {
          text: "En savoir plus",
          href: "#about",
        },
      ]}
      slides={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/hallway-building_23-2149397562.jpg",
          imageAlt: "Façade de l'hôtel",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/3d-rendering-beautiful-comtemporary-luxury-bedroom-suite-hotel-with-tv_105762-2065.jpg",
          imageAlt: "Suite luxueuse",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/night-pool-still-life-assortment_23-2148633536.jpg",
          imageAlt: "Piscine extérieure",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/restaurant-hall-with-turquoise-chairs-white-walls-french-windows-curtains_140725-8450.jpg",
          imageAlt: "Restaurant gastronomique",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-exercising-elliptical-cardio-machine_23-2147827880.jpg",
          imageAlt: "Centre remise en forme",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/hotel-receptionist-work_23-2149661548.jpg",
          imageAlt: "Réception",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="split"
      useInvertedBackground={true}
      title="Un Sanctuaire d'Excellence"
      description="Situé au cœur de Kolwezi, l'Hôtel Moon Palace redéfinit le luxe. Alliant confort exceptionnel et service attentionné, nous offrons une expérience adaptée aux voyageurs d'affaires les plus exigeants comme aux séjours de détente absolue."
      bulletPoints={[
        {
          title: "Confort & Repos",
          description: "Chambres haut de gamme avec climatisation pour un sommeil réparateur.",
        },
        {
          title: "Services VIP",
          description: "Réception 24h/24, blanchisserie et équipe multilingue.",
        },
        {
          title: "Sécurité Renforcée",
          description: "Un environnement calme et protégé au cœur de la ville.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/3d-rendering-beautiful-luxury-bedroom-suite-hotel-with-tv-working-table_105762-2022.jpg"
      imageAlt="Intérieur chambre luxueuse"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      features={[
        {
          title: "Restaurant Gastronomique",
          description: "Cuisine internationale et spécialités indiennes.",
          imageSrc: "http://img.b2bpic.net/free-photo/wine-glass_74190-3483.jpg",
          imageAlt: "Restaurant",
        },
        {
          title: "Piscine Extérieure",
          description: "Détente assurée dans un cadre magnifique.",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-outdoor-swimming-pool-hotel-resort-with-chair-deck-leisure-vacation_74190-8478.jpg",
          imageAlt: "Piscine",
        },
        {
          title: "Espace Remise en Forme",
          description: "Gardez votre routine sportive même en déplacement.",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-elegant-girl-standing-gym_1157-18760.jpg",
          imageAlt: "Gym",
        },
        {
          title: "Wi-Fi & Parking",
          description: "Connexion haute performance et parking gratuit sécurisé.",
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-pregnant-woman-laying-bed_23-2149072928.jpg",
          imageAlt: "Service",
        },
        {
          title: "Bar Élégant",
          description: "L'endroit idéal pour vos rencontres professionnelles.",
          imageSrc: "http://img.b2bpic.net/free-photo/restaurant-dinner-table-with-plates-cutlery-yellow-blue-glasses_140725-8444.jpg",
          imageAlt: "Bar",
        },
        {
          title: "Événements",
          description: "Organisation parfaite de vos mariages et conférences.",
          imageSrc: "http://img.b2bpic.net/free-photo/wooden-sauna-with-mountain-view-panoramic-calm_169016-70823.jpg",
          imageAlt: "Conférence",
        },
      ]}
      title="Des Services de Standard International"
      description="Chaque détail est conçu pour sublimer votre séjour à Kolwezi."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",
          name: "Marc Dubois",
          role: "Voyageur d'affaires",
          testimonial: "Chambre somptueuse, repos absolu et petit déjeuner royal. Un sans faute.",
          imageSrc: "http://img.b2bpic.net/free-photo/black-businessman-happy-expression_1194-2551.jpg",
        },
        {
          id: "2",
          name: "Sophie Martin",
          role: "Client VIP",
          testimonial: "L'un des meilleurs hôtels à Kolwezi. Excellent emplacement, calme et moderne.",
          imageSrc: "http://img.b2bpic.net/free-photo/expressive-woman-posing-indoor_344912-1827.jpg",
        },
        {
          id: "3",
          name: "Jean-Pierre T.",
          role: "Cadre d'entreprise",
          testimonial: "Le lieu de référence pour mes rencontres professionnelles. Sécurité et qualité.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-young-handsome-successful-man_1163-5475.jpg",
        },
        {
          id: "4",
          name: "Elena V.",
          role: "Voyageuse internationale",
          testimonial: "Fabuleux et magnifique. Une expérience 5 étoiles avec piscine et salle de sport.",
          imageSrc: "http://img.b2bpic.net/free-photo/confident-businessman-smiling_107420-84734.jpg",
        },
        {
          id: "5",
          name: "Katia L.",
          role: "Hôte fréquent",
          testimonial: "Une signature VIP dans la ville. Service impeccable et personnel anglophone.",
          imageSrc: "http://img.b2bpic.net/free-photo/image-corporate-woman-working-office-sitting-front-laptop-preparing-business_1258-194628.jpg",
        },
      ]}
      title="L'Excellence selon nos Hôtes"
      description="Ils ont choisi le Moon Palace Kolwezi et témoignent de leur expérience."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Réservez votre séjour"
      description="Contactez-nous directement pour vos réservations ou vos questions concernant nos événements."
      inputs={[
        {
          name: "nom",
          type: "text",
          placeholder: "Nom complet",
          required: true,
        },
        {
          name: "email",
          type: "email",
          placeholder: "Adresse email",
          required: true,
        },
        {
          name: "tel",
          type: "tel",
          placeholder: "+243 978 882 222",
          required: true,
        },
      ]}
      textarea={{
        name: "message",
        placeholder: "Votre demande (dates, type de chambre, etc.)",
        rows: 4,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/woman-talking-phone-front-view_23-2149963946.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="Hotel Moon Palace"
      columns={[
        {
          title: "Contact",
          items: [
            {
              label: "4351, route Likasi",
              href: "#",
            },
            {
              label: "+243 978 882 222",
              href: "tel:+243978882222",
            },
          ],
        },
        {
          title: "Services",
          items: [
            {
              label: "Restaurant",
              href: "#services",
            },
            {
              label: "Piscine",
              href: "#services",
            },
            {
              label: "Gym",
              href: "#services",
            },
          ],
        },
        {
          title: "Infos",
          items: [
            {
              label: "Mentions Légales",
              href: "#",
            },
            {
              label: "Confidentialité",
              href: "#",
            },
          ],
        },
      ]}
      copyrightText="© 2024 Hotel Moon Palace Kolwezi. Tous droits réservés."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
