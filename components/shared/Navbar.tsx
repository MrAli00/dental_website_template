'use client';
import { clinicConfig } from '@/config/clinic';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🦷</span>
          <span className="font-bold text-dental-dark text-lg">{clinicConfig.name}</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#servizi" className="hover:text-dental-teal transition">Servizi</a>
          <a href="#faq" className="hover:text-dental-teal transition">FAQ</a>
          <a
            href={clinicConfig.booking.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-amber-500 hover:bg-amber-600 text-white px-5 py-2 rounded-full transition"
          >
            Prenota Ora
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 py-4 flex flex-col gap-3">
          <a href="#servizi" onClick={() => setIsOpen(false)} className="hover:text-dental-teal">Servizi</a>
          <a href="#faq" onClick={() => setIsOpen(false)} className="hover:text-dental-teal">FAQ</a>
          <a
            href={clinicConfig.booking.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-amber-500 text-white text-center px-5 py-2 rounded-full"
            onClick={() => setIsOpen(false)}
          >
            Prenota Ora
          </a>
        </div>
      )}
    </nav>
  );
}