import { clinicConfig } from '@/config/clinic';
import { generateDentalSchema } from '@/lib/schema';
import Navbar from '@/components/shared/Navbar';
import ServicesGrid from '@/components/dental/ServicesGrid';
import CTASection from '@/components/shared/CTASection';
import Image from 'next/image';

// Static FAQ data (can be moved to config if desired)
const faqs = [
  { question: 'Quanto costa una visita?', answer: 'La prima visita con TAC e piano di trattamento è gratuita se prenoti tramite il sito.' },
  { question: 'Fate convenzioni con assicurazioni?', answer: 'Sì, collaboriamo con le principali assicurazioni sanitarie. Chiamaci per verificare la tua.' },
  { question: 'Accettate finanziamenti?', answer: 'Sì, offriamo finanziamenti senza busta paga fino a 12 rate per interventi superiori a €1.000.' },
  { question: 'L\'impianto a €1.500 è tutto incluso?', answer: 'Sì, include visita, TAC, intervento chirurgico, moncone e corona in zirconio. Nessun costo nascosto.' },
  { question: 'Fate emergenze?', answer: 'Sì, chiama il numero +39 333 733 7783 per emergenze. Rispondiamo 7 giorni su 7.' },
];

export default function Home() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateDentalSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map(f => ({
            '@type': 'Question',
            name: f.question,
            acceptedAnswer: { '@type': 'Answer', text: f.answer }
          }))
        }) }}
      />

      <Navbar />

      <main className="min-h-screen">
        {/* HERO SECTION */}
        <section className="relative bg-gradient-to-br from-dental-teal via-teal-700 to-cyan-800 text-white pt-32 pb-20 px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-amber-500 text-dental-dark text-sm font-bold px-4 py-1 rounded-full mb-4">
                ⭐ Nuovo Studio a Roma
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                {clinicConfig.name}
              </h1>
              <p className="text-xl md:text-2xl text-teal-100 mb-6">
                {clinicConfig.tagline}
              </p>
              <p className="text-lg text-teal-50/80 mb-8 max-w-lg">
                {clinicConfig.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={clinicConfig.booking.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all text-lg flex items-center gap-2"
                >
                  📅 {clinicConfig.promo.cta}
                </a>
                <a
                  href={`tel:${clinicConfig.phone}`}
                  className="bg-white/20 backdrop-blur hover:bg-white/30 text-white font-bold py-4 px-8 rounded-full transition-all text-lg border border-white/30"
                >
                  📞 Chiama Ora
                </a>
              </div>
              <div className="flex items-center gap-4 mt-6 text-sm text-teal-200">
                <span>✅ Finanziamenti</span>
                <span className="w-px h-4 bg-teal-400/30" />
                <span>✅ Assicurazioni</span>
                <span className="w-px h-4 bg-teal-400/30" />
                <span>✅ Emergenza 24h</span>
              </div>
            </div>
            <div className="relative hidden md:block">
              <div className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20">
                <div className="text-4xl mb-4">🦷</div>
                <p className="text-xl font-bold">{clinicConfig.promo.title}</p>
                <p className="text-teal-200">{clinicConfig.promo.subtitle}</p>
                <div className="mt-4 bg-amber-500/20 rounded-xl p-4 border border-amber-500/30">
                  <p className="text-sm">Offerta valida fino al {new Date(clinicConfig.promo.expiry).toLocaleDateString('it-IT')}</p>
                </div>
              </div>
            </div>
          </div>
          {/* Wave divider */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 50L60 55C120 60 240 70 360 70C480 70 600 60 720 55C840 50 960 50 1080 55C1200 60 1320 70 1380 75L1440 80V100H0V50Z" fill="#F8FAFC" />
            </svg>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section id="servizi" className="py-20 px-4 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-dental-dark mb-4">
                I Nostri Servizi
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Tecnologie all'avanguardia e prezzi trasparenti. Scopri cosa possiamo fare per il tuo sorriso.
              </p>
            </div>
            <ServicesGrid services={clinicConfig.services} />
          </div>
        </section>

        {/* PROMO BANNER */}
        <section className="py-16 px-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-5xl block mb-4">🔥</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">{clinicConfig.promo.title}</h2>
            <p className="text-xl text-amber-100 mb-6">{clinicConfig.promo.subtitle}</p>
            <a
              href={clinicConfig.booking.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-amber-600 font-bold py-4 px-10 rounded-full hover:shadow-xl transition-all text-lg"
            >
              {clinicConfig.promo.cta} →
            </a>
          </div>
        </section>

        {/* WHY US / TRUST */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl mb-4">👨‍⚕️</div>
              <h3 className="font-bold text-xl mb-2">Specialisti Qualificati</h3>
              <p className="text-slate-500">Oltre 15 anni di esperienza in implantologia e chirurgia orale.</p>
            </div>
            <div>
              <div className="text-5xl mb-4">🦷</div>
              <h3 className="font-bold text-xl mb-2">Materiali Premium</h3>
              <p className="text-slate-500">Zirconio, titanio e ceramica di ultima generazione.</p>
            </div>
            <div>
              <div className="text-5xl mb-4">💳</div>
              <h3 className="font-bold text-xl mb-2">Finanziamenti</h3>
              <p className="text-slate-500">Paga a rate senza busta paga. Trasparenza totale.</p>
            </div>
            <div>
              <div className="text-5xl mb-4">📱</div>
              <h3 className="font-bold text-xl mb-2">Prenotazione 24/7</h3>
              <p className="text-slate-500">Assistente AI sempre attivo. Risposte in 1 secondo.</p>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-20 px-4 bg-slate-50" id="faq">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-dental-dark">
              Domande Frequenti
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <details key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 group">
                  <summary className="font-bold text-lg cursor-pointer hover:text-dental-teal transition-colors flex justify-between items-center">
                    {faq.question}
                    <span className="text-dental-teal group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="mt-4 text-slate-600 border-t border-slate-100 pt-4">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <CTASection />
      </main>

      {/* FOOTER */}
      <footer className="bg-dental-dark text-white py-12 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{clinicConfig.name}</h3>
            <p className="text-slate-300 text-sm">{clinicConfig.address.street}, {clinicConfig.address.postalCode} {clinicConfig.address.city}</p>
            <p className="text-slate-300 text-sm mt-1">📞 {clinicConfig.phone}</p>
            <p className="text-slate-300 text-sm">✉️ {clinicConfig.email}</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Orari</h4>
            <p className="text-slate-300 text-sm">{clinicConfig.openingHours}</p>
            <p className="text-slate-400 text-xs mt-2">📌 Emergenze: chiama il numero</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Seguici</h4>
            <div className="flex gap-4 text-2xl">
              <a href="#" className="hover:text-amber-500 transition">📸</a>
              <a href="#" className="hover:text-amber-500 transition">📘</a>
              <a href="#" className="hover:text-amber-500 transition">📱</a>
            </div>
            <p className="text-slate-500 text-xs mt-4">© 2026 {clinicConfig.name}. Tutti i diritti riservati.</p>
          </div>
        </div>
      </footer>
    </>
  );
}