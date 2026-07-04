import { clinicConfig } from '@/config/clinic';

export default function CTASection() {
  return (
    <section className="py-20 px-4 bg-dental-teal text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Pronto per un sorriso nuovo?
        </h2>
        <p className="text-xl text-teal-100 mb-8">
          Prenota la tua consulenza gratuita. Ti aspettiamo in Via Tuscolana 747.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={clinicConfig.booking.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-xl transition-all text-lg"
          >
            📅 Prenota Ora
          </a>
          <a
            href={`https://wa.me/${clinicConfig.whatsapp.replace(/[^0-9]/g, '')}?text=Ciao%20vorrei%20prenotare%20una%20visita`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/20 backdrop-blur hover:bg-white/30 text-white font-bold py-4 px-10 rounded-full transition-all border border-white/30"
          >
            💬 WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}