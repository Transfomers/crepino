'use client';

import { useLanguage } from '../context/languageContext';
import { Language } from '../data/translations';
import { useState } from 'react';

export default function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);

    const languages: { code: Language; label: string; flag: string }[] = [
        { code: 'fr', label: 'Français', flag: '🇫🇷' },
        { code: 'en', label: 'English', flag: '🇬🇧' },
        { code: 'ar', label: 'العربية', flag: '🇸🇦' }
    ];

    const currentLang = languages.find(l => l.code === language) || languages[0];

    return (
        <div style={{ position: 'relative' }}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    background: 'rgba(212,175,55,0.1)',
                    border: '1px solid var(--color-primary)',
                    borderRadius: '50px',
                    padding: '0.5rem 1rem',
                    color: 'var(--color-primary)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontWeight: 600,
                    fontSize: '0.9rem'
                }}
            >
                <span>{currentLang.flag}</span>
                <span>{currentLang.label}</span>
                <span style={{ fontSize: '0.7rem' }}>{isOpen ? '▲' : '▼'}</span>
            </button>

            {isOpen && (
                <>
                    <div
                        style={{ position: 'fixed', inset: 0, zIndex: 998 }}
                        onClick={() => setIsOpen(false)}
                    />
                    <div
                        style={{
                            position: 'absolute',
                            top: '110%',
                            right: 0,
                            background: 'white',
                            borderRadius: '12px',
                            boxShadow: 'var(--shadow-lg)',
                            padding: '0.5rem',
                            minWidth: '150px',
                            zIndex: 999,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.2rem',
                            animation: 'fadeIn 0.2s ease-out'
                        }}
                    >
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => {
                                    setLanguage(lang.code);
                                    setIsOpen(false);
                                }}
                                style={{
                                    background: language === lang.code ? 'var(--color-cream)' : 'transparent',
                                    border: 'none',
                                    padding: '0.7rem 1rem',
                                    borderRadius: '8px',
                                    textAlign: 'left',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.7rem',
                                    color: 'var(--color-brown-dark)',
                                    fontWeight: language === lang.code ? 700 : 400,
                                    transition: 'all 0.2s'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.background = 'var(--color-cream)'}
                                onMouseLeave={(e) => e.currentTarget.style.background = language === lang.code ? 'var(--color-cream)' : 'transparent'}
                            >
                                <span>{lang.flag}</span>
                                <span>{lang.label}</span>
                            </button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}
