# 🦷DentAI Template - AI-Powered Dental Clinic Landing Page

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![OpenAI](https://img.shields.io/badge/OpenAI-GPT--4o--mini-412991?style=flat-square&logo=openai)](https://openai.com/)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-black?style=flat-square&logo=vercel)](https://vercel.com/)
[![Prisma](https://img.shields.io/badge/Prisma-5.14-2D3748?style=flat-square&logo=prisma)](https://www.prisma.io/)

**One template. Infinite dental clients. 10-minute setup.**

> Built for developers who sell AI-powered websites to dentists. Stop building from scratch. Deploy a premium, conversion-optimized dental site with a 24/7 AI receptionist in minutes.

![Dental AI Template Screenshot](./public/screenshot.png)

---

## ✨ Features That Sell

### 🧠 AI Receptionist (Your Fiverr USP)
- **Floating ChatGPT/Claude chatbot** that answers patient questions 24/7.
- **Automated lead capture** – extracts Name, Phone, and Service preference during conversation.
- **Configurable system prompt** – change the AI's personality and knowledge in 2 minutes.

### ⚡ Conversion Engine
- **Mobile-first, blazing-fast** (90+ Lighthouse score).
- **Click-to-call** floating button (critical for mobile emergency searches).
- **WhatsApp integration** – one-tap to start a conversation.
- **Calendly/Doctolib ready** – redirects users directly to your booking page.

### 🔍 Local SEO Dominance
- **Complete JSON-LD Schema** (DentalClinic, LocalBusiness, FAQPage).
- **Perfect NAP consistency** (Name, Address, Phone) pulled from a single config file.
- **Italian-optimized** – full language support out-of-the-box.

### 🛠️ Developer Experience
- **Single source of truth** – `config/clinic.ts` controls everything (colors, content, services, AI prompts).
- **Zero database required** – works perfectly with or without PostgreSQL (optional lead storage).
- **TypeScript** for full type safety.
- **Vercel-ready** – deploy in 2 clicks.

---

## 🚀 Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 14 (App Router)** | React framework for SSR & static generation |
| **TypeScript** | Type safety & maintainability |
| **Tailwind CSS** | Utility-first styling, fully customizable |
| **Vercel AI SDK** | Stream ChatGPT/Claude responses in real-time |
| **OpenAI (GPT-4o-mini)** | The brains behind the AI chatbot (swap for Claude if desired) |
| **Prisma (optional)** | ORM for storing captured leads |
| **PostgreSQL / Supabase (optional)** | Database for lead storage |

---

## 📂 Repository Structure
dentai-template/

├── config/
│ └── clinic.ts # 🔥 CHANGE THIS ONLY 🔥 — all client data

├── components/
│ ├── ai/ # Chatbot widget
│ ├── dental/ # Services grid, etc.
│ └── shared/ # Navbar, CTAs, badges

├── app/
│ ├── api/
│ │ ├── chat/ # OpenAI streaming endpoint
│ │ └── leads/ # Optional lead capture endpoint
│ └── page.tsx # Full landing page

├── lib/
│ ├── db.ts # Prisma client
│ └── schema.ts # JSON-LD schema generators

└── prisma/
└── schema.prisma # Lead model

---

## ⚙️ Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/MrAli00/dental_website_template.git
cd dental_website_template
2. Install dependencies
bash
npm install
3. Set up environment variables
Copy the example env file:

bash
cp .env.local.example .env.local
Then add your OpenAI API key:

env
OPENAI_API_KEY=sk-your-openai-key-here
Get your key from platform.openai.com

4. Run the development server
bash
npm run dev
Your site is now live at http://localhost:3000 🎉

🎨 Customize for a New Client (10 Minutes)
Open config/clinic.ts and change ONLY these fields:

Field	What to Change
name, tagline	Clinic name and slogan
address	Street, city, postal code, region, country
phone, whatsapp, email	Contact details
colors.primary	Brand color (e.g., #0A7E8C for teal)
services	Add/remove treatments, update prices
promo.title	Special offer text (e.g., implants at €1,500)
ai.systemPrompt	Customize the AI's personality and knowledge
booking.url	Your Calendly or Doctolib link
⚠️ Pro Tip: Updating the Schema markup requires zero effort — lib/schema.ts automatically reads from this config file.

📱 Deploy to Vercel (2 Minutes)
Push your code to GitHub.

Go to vercel.com and click Add New → Project.

Import your repository.

Add the OPENAI_API_KEY environment variable.

Click Deploy.

Your client's website is now live at https://your-clinic.vercel.app. Custom domain? Point your DNS and Vercel handles SSL automatically.

💰 How to Sell This on Fiverr
Your gig title:

"I will build an AI-powered dental website with ChatGPT chatbot that books appointments"

Your pitch:
Don't sell a "website." Sell a 24/7 AI Receptionist that:

Answers patient questions at 2 AM.

Books appointments directly into Calendly/Doctolib.

Captures leads automatically (name + phone).

Qualifies patients before they even call.

Package	Price	Includes
Basic	$300	Configurable template deployment + AI chatbot
Standard	$600	Full services page + custom AI prompt training
Premium	$1,200	+ Admin dashboard (lead logs) + WhatsApp API integration

🧪 Demo AI Prompt Example
Here's the default system prompt powering the chatbot (from config/clinic.ts):

"Sei l'assistente virtuale di Dentista x Tutti a Roma in Via Tuscolana 747. Rispondi SEMPRE in italiano. Sii amichevole, professionale e conciso. Servizi offerti: Igiene (€40), Implantologia (€1.500)..."

When a user asks to book, the AI automatically collects their Name, Phone, and Service — then responds:

"Perfetto! La contatteremo entro 1 ora per confermare la sua visita."

📸 Preview
(Add your demo screenshot here by placing it at public/screenshot.png)

https://via.placeholder.com/1200x600/0A7E8C/FFFFFF?text=DentAI+Template+Demo
Replace this placeholder with your actual screenshot!

📄 License
MIT — Use it freely, modify it, sell it to 1000 clients.

🙋‍♂️ Support
Open an issue or reach out if you get stuck. Happy building! 🚀

Made with ❤️ by MrAli00 — Dental AI Engineer
