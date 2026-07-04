import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import './globals.css';
import { clinicConfig } from '@/config/clinic';
import ChatbotWidget from '@/components/ai/ChatbotWidget';
import TechBadge from '@/components/shared/TechBadge';
import ClickToCall from '@/components/shared/ClickToCall';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: `${clinicConfig.name} — Studio Odontoiatrico a Roma`,
  description: clinicConfig.description,
  keywords: 'dentista Roma, implantologia Roma, ortodonzia, sbiancamento denti, igiene dentale',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={inter.className}>
        {children}
        <ChatbotWidget />
        <ClickToCall />
        <TechBadge />
      </body>
    </html>
  );
}