'use client';

import React from 'react';
import { useLanguage } from '../context/languageContext';
import { Coffee, Utensils, Instagram } from 'lucide-react';

export default function Features() {
    const { t } = useLanguage();

    const features = [
        {
            icon: <Utensils className="text-[#D4AF37]" size={32} />,
            title: t('features.freshDaily'),
            desc: t('features.freshDailyDesc'),
        },
        {
            icon: <Coffee className="text-[#D4AF37]" size={32} />,
            title: t('features.artisanCoffee'),
            desc: t('features.artisanCoffeeDesc'),
        },
        {
            icon: <Instagram className="text-[#D4AF37]" size={32} />,
            title: t('features.instagramWorthy'),
            desc: t('features.instagramDesc'),
        },
    ];

    return (
        <section className="section bg-white">
            <div className="container">
                <div className="grid grid-3">
                    {features.map((f, i) => (
                        <div
                            key={i}
                            className="p-8 rounded-2xl bg-cream-dark/30 border border-cream-dark hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                {f.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-[#3E2723] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                                {f.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {f.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
