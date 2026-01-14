'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';
import { Language, getTranslation } from '../data/translations';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
    isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguageState] = useState<Language>('fr');
    const [isRTL, setIsRTL] = useState(false);

    const setLanguage = useCallback((lang: Language) => {
        setLanguageState(lang);
        setIsRTL(lang === 'ar');
        localStorage.setItem('crepino-language', lang);
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    }, []);

    // Initial load from localStorage or browser preference
    useEffect(() => {
        if (typeof window === 'undefined') return;

        const savedLang = localStorage.getItem('crepino-language') as Language;
        let initialLang: Language = 'fr';

        if (savedLang && (savedLang === 'fr' || savedLang === 'en' || savedLang === 'ar')) {
            initialLang = savedLang;
        } else {
            const browserLang = navigator.language.split('-')[0] as Language;
            initialLang = (browserLang === 'ar' || browserLang === 'en') ? browserLang : 'fr';
        }

        // Initial load - wrapped in setTimeout to avoid synchronous setState warning
        setTimeout(() => {
            setLanguage(initialLang);
        }, 0);
    }, [setLanguage]);

    const t = (key: string) => getTranslation(key, language);

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
            <div dir={isRTL ? 'rtl' : 'ltr'}>
                {children}
            </div>
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
