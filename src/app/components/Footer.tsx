'use client';

import React from 'react';
import { useLanguage } from '../context/languageContext';
import { Heart } from 'lucide-react';

interface FooterProps {
    onOpenComplaints: () => void;
}

export default function Footer({ onOpenComplaints }: FooterProps) {
    const { t } = useLanguage();
    const currentYear = new Date().getFullYear();

    return (
        <footer style={{ background: 'var(--color-brown-dark)', color: 'white', padding: '4rem 0 2rem' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '4rem' }}>
                    <div className="space-y-4">
                        <h2 className="script-text text-3xl font-bold tracking-tighter text-[#D4AF37]">
                            Crepino
                        </h2>
                        <p style={{ opacity: 0.7, maxWidth: '300px' }}>
                            {t('hero.slogan')} - {t('about.paragraph1').substring(0, 100)}...
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-heading text-xl font-bold text-[#D4AF37]">{t('contact.hours')}</h4>
                        <p style={{ opacity: 0.7 }}>{t('contact.hoursValue')}</p>
                    </div>

                    <div className="space-y-6">
                        <h4 className="font-heading text-xl font-bold text-[#D4AF37]">{t('footer.rateService')}</h4>
                        <p style={{ opacity: 0.7, fontSize: '0.9rem' }}>{t('complaints.subtitle')}</p>
                        <button
                            onClick={onOpenComplaints}
                            className="btn btn-outline"
                            style={{ borderColor: 'var(--color-primary)', color: 'var(--color-primary)', padding: '0.6rem 1.5rem', fontSize: '0.9rem' }}
                        >
                            {t('footer.rateService')}
                        </button>
                    </div>
                </div>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: '4rem', paddingTop: '2rem', textAlign: 'center' }}>
                    <p style={{ opacity: 0.5, fontSize: '0.9rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                        {t('footer.copyright').replace('2024', currentYear.toString())}
                    </p>
                    <p style={{ opacity: 0.3, fontSize: '0.7rem', marginTop: '1rem', letterSpacing: '0.1em' }}>
                        MADE WITH <Heart size={10} className="inline text-red-500" /> IN YAOUNDÉ
                    </p>
                </div>
            </div>
        </footer>
    );
}
