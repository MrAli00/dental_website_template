import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import { clinicConfig } from '@/config/clinic';
import ChatbotWidget from '@/components/ai/ChatbotWidget';
import TechBadge from '@/components/shared/TechBadge';
import ClickToCall from '@/components/shared/ClickToCall';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: `${clinicConfig.name} — Studio Odontoiatrico a Roma`,
  description: clinicConfig.description,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="it">
      <body className={inter.className}>
        {children}
        <ChatbotWidget />
        <ClickToCall />
        <TechBadge />
      </body>
    </html>
  );
}