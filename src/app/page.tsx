import { Navigation } from "@/components/navigation";
import {
  BeyondDelivery,
  Contact,
  Experience,
  Expertise,
  Hero,
  Work,
} from "@/components/sections";
import { profile } from "@/data/portfolio";

export default function Home() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    email: `mailto:${profile.email}`,
    telephone: profile.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Gudivada",
      addressRegion: "Andhra Pradesh",
      addressCountry: "IN",
    },
    sameAs: [profile.linkedin, profile.github],
    knowsAbout: [
      "MuleSoft",
      "Salesforce integration",
      "DataWeave",
      "REST APIs",
      "B2B integration",
    ],
  };

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navigation />
      <main id="main">
        <Hero />
        <Expertise />
        <Work />
        <Experience />
        <BeyondDelivery />
        <Contact />
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
    </>
  );
}
