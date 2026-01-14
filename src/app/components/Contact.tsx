'use client';

import React from 'react';
import { useLanguage } from '../context/languageContext';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Contact() {
    const { t } = useLanguage();

    return (
        <section id="contact" className="section" style={{ background: 'var(--color-cream)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 className="script-text" style={{ color: 'var(--color-primary)', fontSize: '2.5rem' }}>{t('contact.findHappiness')}</h2>
                    <h3 style={{ fontSize: '3rem', color: 'var(--color-brown-dark)' }}>{t('contact.comeVisit')}</h3>
                </div>

                <div className="grid grid-2" style={{ gap: '4rem', alignItems: 'start' }}>
                    {/* Contact Info */}
                    <div className="space-y-8 animate-slide-in-left">
                        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', background: 'white', padding: '2rem', borderRadius: '30px', boxShadow: 'var(--shadow-sm)' }}>
                            <div style={{ width: '60px', height: '60px', borderRadius: '20px', background: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3E2723' }}>
                                <MapPin size={30} />
                            </div>
                            <div>
                                <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#3E2723' }}>{t('contact.location')}</h4>
                                <p style={{ color: 'var(--color-brown)' }}>{t('hero.location')}</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', background: 'white', padding: '2rem', borderRadius: '30px', boxShadow: 'var(--shadow-sm)' }}>
                            <div style={{ width: '60px', height: '60px', borderRadius: '20px', background: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3E2723' }}>
                                <Phone size={30} />
                            </div>
                            <div>
                                <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#3E2723' }}>{t('contact.phone')}</h4>
                                <p style={{ color: 'var(--color-brown)' }}>+237 695 266 214</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', background: 'white', padding: '2rem', borderRadius: '30px', boxShadow: 'var(--shadow-sm)' }}>
                            <div style={{ width: '60px', height: '60px', borderRadius: '20px', background: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3E2723' }}>
                                <Clock size={30} />
                            </div>
                            <div>
                                <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#3E2723' }}>{t('contact.hours')}</h4>
                                <p style={{ color: 'var(--color-brown)' }}>{t('contact.hoursValue')}</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form / Socials */}
                    <div className="animate-fade-in" style={{ background: 'var(--color-brown-dark)', padding: '3rem', borderRadius: '40px', color: 'white' }}>
                        <h4 style={{ fontSize: '2rem', marginBottom: '2rem', color: 'var(--color-primary)' }} className="font-heading">
                            {t('contact.sendMessage')}
                        </h4>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <a href="#" style={{ width: '50px', height: '50px', borderRadius: '15px', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', transition: 'all 0.3s' }} className="hover:bg-[#D4AF37] hover:text-[#3E2723]">
                                    <Instagram size={24} />
                                </a>
                                <a href="#" style={{ width: '50px', height: '50px', borderRadius: '15px', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', transition: 'all 0.3s' }} className="hover:bg-[#D4AF37] hover:text-[#3E2723]">
                                    <Facebook size={24} />
                                </a>
                                <a href="#" style={{ width: '50px', height: '50px', borderRadius: '15px', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', transition: 'all 0.3s' }} className="hover:bg-[#D4AF37] hover:text-[#3E2723]">
                                    <Twitter size={24} />
                                </a>
                            </div>

                            <p style={{ opacity: 0.7, lineHeight: 1.6 }}>
                                {t('about.paragraph1')}
                            </p>

                            <a href="mailto:contact@crepino.com" className="btn btn-primary no-underline text-center" style={{ marginTop: '1rem', padding: '1.2rem' }}>
                                contact@crepino.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
