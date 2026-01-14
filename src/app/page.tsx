'use client';

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ShoppingCart from './components/shop/ShoppingCart';
import CartNotification from './components/shop/CartNotification';
import EventBookingModal from './components/EventBookingModal';
import ComplaintsModal from './components/ComplaintsModal';
import { useLanguage } from './context/languageContext';

export default function Home() {
  const [cartOpen, setCartOpen] = useState(false);
  const [eventModalOpen, setEventModalOpen] = useState(false);
  const [complaintsModalOpen, setComplaintsModalOpen] = useState(false);
  const { isRTL } = useLanguage();

  return (
    <main className={`min-h-screen ${isRTL ? 'rtl' : 'ltr'}`}>
      <ShoppingCart isOpen={cartOpen} setIsOpen={setCartOpen} />
      <CartNotification onOpenCart={() => setCartOpen(true)} />

      <EventBookingModal isOpen={eventModalOpen} onClose={() => setEventModalOpen(false)} />
      <ComplaintsModal isOpen={complaintsModalOpen} onClose={() => setComplaintsModalOpen(false)} />

      <Navbar onOpenCart={() => setCartOpen(true)} />

      <Hero />

      <Menu />

      <About />

      <Gallery />

      <Contact />

      <Footer onOpenComplaints={() => setComplaintsModalOpen(true)} />

      {/* Floating Action Button for Booking */}
      <button
        onClick={() => setEventModalOpen(true)}
        className={`fixed bottom-8 ${isRTL ? 'left-8' : 'right-8'} z-[500] bg-[#D4AF37] text-[#3E2723] p-5 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all animate-bounce group`}
      >
        <span className={`absolute ${isRTL ? 'left-full ml-4' : 'right-full mr-4'} top-1/2 -translate-y-1/2 bg-[#3E2723] text-white px-5 py-2.5 rounded-2xl text-sm font-black opacity-0 group-hover:opacity-100 transition-all scale-75 group-hover:scale-100 whitespace-nowrap pointer-events-none shadow-xl border border-[#D4AF37]/30`}>
          Réserver un événement 🎉
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8 2v4" /><path d="M16 2v4" /><rect width="18" height="18" x="3" y="4" rx="2" /><path d="M3 10h18" /><path d="m9 16 2 2 4-4" /></svg>
      </button>
    </main>
  );
}
