export const clinicConfig = {
  // --- BASIC INFO ---
  name: "Dentista x Tutti",
  tagline: "Il Dentista per Tutti — Innovazione e Sorrisi",
  slug: "dentista-x-tutti",
  description: "Studio dentistico a Roma in Via Tuscolana 747. Offriamo implantologia, ortodonzia, sbiancamento e igiene dentale a prezzi competitivi.",

  // --- NAP (CRITICAL for local SEO) ---
  address: {
    street: "Via Tuscolana 747",
    city: "Roma",
    postalCode: "00175",
    region: "RM",
    country: "IT",
  },
  phone: "+393337337783",
  whatsapp: "+393337337783",
  email: "info@romadentista.com",
  openingHours: "Lun-Ven 09:00-18:30, Sab 09:00-13:00",

  // --- BRANDING ---
  colors: {
    primary: "#0A7E8C",
    secondary: "#F59E0B",
    accent: "#1E293B",
  },
  logo: "/images/logo-placeholder.png", // Add your own image in public/images/

  // --- SERVICES ---
  services: [
    { id: "igiene", icon: "🦷", title: "Igiene Dentale", price: "€40", desc: "Rimozione tartaro e placca con strumenti ad ultrasuoni." },
    { id: "implantologia", icon: "🔩", title: "Implantologia", price: "€1.500", desc: "Titanio + Corona in zirconio. Tutto incluso." },
    { id: "ortodonzia", icon: "📐", title: "Ortodonzia", price: "Da €2.500", desc: "Allineatori invisibili (Invisalign) e apparecchi tradizionali." },
    { id: "sbiancamento", icon: "✨", title: "Sbiancamento", price: "€250", desc: "Tecnica professionale con lampada LED." },
    { id: "protesi", icon: "🦷", title: "Protesi Dentale", price: "Da €800", desc: "Corone, ponti e protesi mobili su misura." },
    { id: "endodonzia", icon: "⚡", title: "Endodonzia", price: "Da €300", desc: "Cura canalare con microscopio operatorio." },
    { id: "pedodonzia", icon: "👶", title: "Pedodonzia", price: "Da €60", desc: "Ortodonzia e cure preventive per bambini." },
    { id: "estetica", icon: "🌟", title: "Estetica Dentale", price: "Da €500", desc: "Faccette in ceramica e gomma per sorriso design." },
  ],

  // --- PROMOTIONAL OFFER ---
  promo: {
    title: "Offerta Lancio: Impianto + Corona a €1.500",
    subtitle: "Tutto incluso — visita, TAC, intervento e corona in zirconio.",
    cta: "Prenota la tua consulenza gratuita",
    expiry: "2026-08-31",
  },

  // --- AI CHATBOT CONFIG ---
  ai: {
    systemPrompt: `Sei l'assistente virtuale di Dentista x Tutti a Roma in Via Tuscolana 747.
Rispondi SEMPRE in italiano. Sii amichevole, professionale e conciso.
Servizi offerti: Igiene (€40), Implantologia (€1.500), Ortodonzia (da €2.500), Sbiancamento (€250), Protesi (da €800), Endodonzia (da €300), Pedodonzia (da €60), Estetica (da €500).
Orari: Lun-Ven 9:00-18:30, Sabato 9:00-13:00.
Offerta speciale: Impianti a €1.500 tutto incluso.
Se l'utente chiede un appuntamento, raccogli Nome, Telefono e Servizio desiderato.
Poi rispondi: "Perfetto! La contatteremo entro 1 ora per confermare la sua visita."`,
    welcomeMessage: "Ciao! 👋 Sono l'assistente AI di Dentista x Tutti. In cosa posso aiutarti? Prenotazioni, prezzi, emergenze... chiedimi tutto!",
  },

  // --- BOOKING ---
  booking: {
    provider: "calendly",
    url: "https://calendly.com/dentistaxtutti/visita",
  },
};