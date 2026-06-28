/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-brand-light selection:text-stone-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://lillobrillo.it/#localbusiness",
            name: "Lillo Brillo",
            url: "https://lillobrillo.it",
            telephone: "+39 0872717634",
            email: "lillobrillo2007@libero.it",
            priceRange: "€20 - €100",
            image: "https://lillobrillo.it/logo.png",
            logo: "https://lillobrillo.it/logo.png",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Via Martiri del 6 Ottobre 84",
              postalCode: "66034",
              addressLocality: "Lanciano",
              addressRegion: "CH",
              addressCountry: "IT",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 42.22118426470614,
              longitude: 14.385148286075683,
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "https://schema.org/Monday",
                  "https://schema.org/Tuesday",
                  "https://schema.org/Wednesday",
                  "https://schema.org/Thursday",
                  "https://schema.org/Friday",
                  "https://schema.org/Saturday",
                ],
                opens: "09:00",
                closes: "18:00",
              },
            ],
            sameAs: [
              "https://www.instagram.com/lillo.brillo.9/?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D",
              "https://www.facebook.com/lillo.brillo.9",
            ],
          }),
        }}
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}