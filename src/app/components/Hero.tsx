'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '../context/languageContext';

export default function Hero() {
    const { t } = useLanguage();

    return (
        <section id="home" style={{ position: 'relative', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 0, zIndex: -1 }}>
                <Image
                    src="https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                    alt="Cafe Interior"
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(62,39,35,0.85) 0%, rgba(192,64,0,0.65) 100%)' }}></div>
            </div>

            <div className="container text-center">
                <div className="animate-slide-in-up">
                    <div style={{ fontSize: '3.5rem', marginBottom: '1.5rem', filter: 'drop-shadow(0 0 20px rgba(212,175,55,0.5))' }}>☕</div>
                    <h1 style={{ color: 'var(--color-white)', fontSize: 'clamp(3.5rem, 8vw, 6.5rem)', marginBottom: '1rem', fontWeight: 900, textShadow: '4px 4px 20px rgba(0,0,0,0.6)', lineHeight: 1 }}>
                        {t('hero.welcome')} <span className="script-text" style={{ color: 'var(--color-primary)' }}>Crepino</span>
                    </h1>
                    <p className="script-text" style={{ color: 'var(--color-primary)', fontSize: '2.2rem', marginBottom: '2.5rem', textShadow: '2px 2px 10px rgba(0,0,0,0.3)' }}>
                        {t('hero.slogan')}
                    </p>
                    <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-medium">
                        {t('hero.descriptionHero')}
                    </p>
                    <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link href="/shop" className="btn btn-primary no-underline" style={{ fontSize: '1.2rem', padding: '1.2rem 2.5rem' }}>
                            {t('hero.orderNow')}
                        </Link>
                        <a href="#menu" className="btn btn-secondary no-underline" style={{ fontSize: '1.2rem', padding: '1.2rem 2.5rem', color: 'white', borderColor: 'rgba(255,255,255,0.5)' }}>
                            {t('hero.discoverMenu')}
                        </a>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
                <div className="w-6 h-10 rounded-full border-2 border-white flex justify-center p-1">
                    <div className="w-1 h-2 bg-white rounded-full"></div>
                </div>
            </div>
        </section>
    );
}
