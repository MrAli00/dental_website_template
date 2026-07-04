import { clinicConfig } from '@/config/clinic';

export function generateDentalSchema() {
  const { name, address, phone, openingHours, description } = clinicConfig;

  return {
    '@context': 'https://schema.org',
    '@type': 'DentalClinic',
    name: name,
    description: description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: address.street,
      addressLocality: address.city,
      postalCode: address.postalCode,
      addressRegion: address.region,
      addressCountry: address.country,
    },
    telephone: phone,
    openingHours: openingHours,
    priceRange: '€€',
    image: 'https://www.romadentista.com/og-image.jpg',
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  };
}