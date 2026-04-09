export default function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Extaticaa",
    url: "https://extaticaa.com",
    logo: "https://extaticaa.com/favicon.ico",
    description:
      "Ecstatic dance events in the jungles of Da Nang and Hoi An, Vietnam.",
    sameAs: [
      "https://www.instagram.com/extaticaa/",
      "https://www.facebook.com/extaticaa/",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "mj@theerosa.com",
      contactType: "customer service",
    },
    areaServed: {
      "@type": "Place",
      name: "Da Nang & Hoi An, Vietnam",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Extaticaa",
    url: "https://extaticaa.com",
    inLanguage: ["en", "vi"],
  };

  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "DanceEvent",
    name: "The Jungle Tribe: Ecstatic Dance & Cacao Ritual",
    description:
      "A multisensory homecoming. Heart-opening cacao ritual with Erosa Chocolate, Dance Movement Therapy, a sonic odyssey by DJ Kalisa & M Jay, live tribal drumming, and an elemental fire finale under the stars.",
    startDate: "2026-04-25T16:30:00+07:00",
    endDate: "2026-04-25T21:30:00+07:00",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: "Extaticaa Jungle Venue",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Da Nang",
        addressCountry: "VN",
      },
    },
    organizer: {
      "@type": "Organization",
      name: "Extaticaa",
      url: "https://extaticaa.com",
    },
    offers: {
      "@type": "Offer",
      url: "https://www.ticketmelon.com/extaticaa/JUNGLE",
      price: "300000",
      priceCurrency: "VND",
      availability: "https://schema.org/InStock",
    },
    image: "https://extaticaa.com/images/event-jungle-tribe.png",
    performer: [
      { "@type": "Person", name: "DJ Kalisa" },
      { "@type": "Person", name: "M Jay" },
      { "@type": "Person", name: "Natasha" },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
      />
    </>
  );
}
