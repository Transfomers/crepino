'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '../context/languageContext';

export default function About() {
    const { t } = useLanguage();

    return (
        <section id="about" className="section" style={{ background: 'var(--color-white)' }}>
            <div className="container">
                <div style={{ display: 'flex', gap: '4rem', alignItems: 'center', flexWrap: 'wrap' }}>
                    <div style={{ flex: '1 1 500px' }} className="animate-slide-in-left">
                        <h2 className="script-text" style={{ color: 'var(--color-primary)', fontSize: '2.5rem', marginBottom: '1rem' }}>{t('about.ourStory')}</h2>
                        <h3 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '2rem', color: 'var(--color-brown-dark)', fontWeight: 800 }}>{t('about.discover')} Crepino</h3>
                        <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: 'var(--color-brown)', lineHeight: '1.8' }}>{t('about.paragraph1')}</p>
                        <p style={{ fontSize: '1.2rem', marginBottom: '2.5rem', color: 'var(--color-brown)', lineHeight: '1.8' }}>{t('about.paragraph2')}</p>
                        <div style={{ display: 'flex', gap: '1.2rem' }}>
                            <a href="#contact" className="btn btn-primary no-underline">{t('about.visitUs')}</a>
                            <a href="#menu" className="btn btn-secondary no-underline" style={{ color: 'var(--color-brown-dark)', borderColor: 'var(--color-primary)' }}>{t('about.exploreMenu')}</a>
                        </div>
                    </div>
                    <div style={{ flex: '1 1 400px', position: 'relative', height: '600px', borderRadius: '40px', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }} className="animate-fade-in">
                        <Image
                            src="https://images.unsplash.com/photo-1519676867240-f031ea443c0d?auto=format&fit=crop&w=1000&q=80"
                            alt="Crepino Experience"
                            fill
                            style={{ objectFit: 'cover' }}
                        />
                        <div style={{ position: 'absolute', bottom: '30px', left: '30px', background: 'white/90', backdropFilter: 'blur(10px)', padding: '1.5rem', borderRadius: '25px', boxShadow: 'var(--shadow-md)' }}>
                            <p className="script-text" style={{ color: 'var(--color-primary)', fontSize: '1.5rem', margin: 0 }}>Fait avec amour ❤️</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
