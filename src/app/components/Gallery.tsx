'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '../context/languageContext';

export default function Gallery() {
    const { t } = useLanguage();

    const images = [
        'https://images.unsplash.com/photo-1519676867240-f031ea443c0d?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1473093226795-af9932fe5856?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1544787210-2213d2429511?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80',
    ];

    return (
        <section id="gallery" className="section" style={{ background: 'var(--color-white)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 className="script-text" style={{ color: 'var(--color-primary)', fontSize: '2.5rem' }}>{t('gallery.instagramGallery')}</h2>
                    <h3 style={{ fontSize: '3rem', color: 'var(--color-brown-dark)' }}>{t('gallery.followJourney')}</h3>
                    <p style={{ color: 'var(--color-brown)', marginTop: '1rem' }}>{t('gallery.tagUs')}</p>
                </div>

                <div className="grid grid-3" style={{ gap: '1.5rem' }}>
                    {images.map((img, index) => (
                        <div key={index} style={{ position: 'relative', height: '300px', borderRadius: '25px', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }} className="group">
                            <Image
                                src={img}
                                alt={`Gallery image ${index + 1}`}
                                fill
                                style={{ objectFit: 'cover' }}
                                className="transition-transform duration-700 group-hover:scale-110"
                            />
                            <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.3)', opacity: 0, transition: 'opacity 0.3s' }} className="group-hover:opacity-100 flex items-center justify-center">
                                <span style={{ color: 'white', fontSize: '2rem' }}>📸</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                    <a
                        href="https://instagram.com/crepino.coffeeshop"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary no-underline"
                        style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}
                    >
                        {t('gallery.followInstagram')}
                    </a>
                </div>
            </div>
        </section>
    );
}
