'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '../context/languageContext';
import { products, categories } from '../data/products';
import ProductCard from './shop/ProductCard';

export default function Menu() {
    const { t } = useLanguage();
    const [selectedCategory, setSelectedCategory] = useState('Tous');

    const menuProducts = selectedCategory === 'Tous'
        ? products.slice(0, 6)
        : products.filter(p => p.category === selectedCategory).slice(0, 6);

    return (
        <section id="menu" className="section" style={{ background: 'var(--color-cream)' }}>
            <div className="container">
                <div className="section-title-wrapper">
                    <span className="section-subtitle">{t('menu.selectTaste')}</span>
                    <h2 className="section-title">{t('menu.onlineMenu')}</h2>
                    <p style={{ color: 'var(--color-brown)', maxWidth: '600px', margin: '1rem auto 0', fontSize: '1.1rem' }}>{t('menu.subtitle')}</p>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '4rem', flexWrap: 'wrap' }}>
                    {categories.map(cat => {
                        // Manual map for safety since keys might be tricky
                        const catMap: { [key: string]: string } = {
                            'Tous': 'cat.tous',
                            'Crêpes Sucrées': 'cat.crepesSucrees',
                            'Crêpes Salées': 'cat.crepesSalees',
                            'Gaufres': 'cat.gaufres',
                            'Milkshakes': 'cat.milkshakes',
                            'Boissons Chaudes': 'cat.boissonsChaudes',
                            'Boissons Froides': 'cat.boissonsFroides'
                        };

                        const isActive = selectedCategory === cat;

                        return (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                style={{
                                    padding: '0.8rem 2rem',
                                    borderRadius: '50px', // Round full
                                    border: isActive ? '2px solid var(--color-primary)' : '2px solid transparent',
                                    background: isActive ? 'var(--color-primary)' : 'var(--color-white)',
                                    color: isActive ? 'var(--color-brown-dark)' : 'var(--color-brown)',
                                    fontWeight: 700,
                                    cursor: 'pointer',
                                    boxShadow: isActive ? '0 10px 20px rgba(212, 175, 55, 0.2)' : 'var(--shadow-sm)',
                                    transition: 'all 0.3s ease',
                                    textTransform: 'uppercase',
                                    fontSize: '0.85rem',
                                    letterSpacing: '1px'
                                }}
                            >
                                {t(catMap[cat] || cat)}
                            </button>
                        );
                    })}
                </div>

                <div className="grid grid-3">
                    {menuProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                    <Link href="/shop" className="btn btn-secondary no-underline" style={{ color: 'var(--color-brown-dark)', borderColor: 'var(--color-primary)' }}>
                        {t('about.exploreMenu')} →
                    </Link>
                </div>

                {menuProducts.length === 0 && (
                    <div style={{ textAlign: 'center', padding: '5rem 0', background: 'white', border: '2px dashed #DDD', borderRadius: '20px' }}>
                        <p style={{ color: '#999' }}>{t('menu.noProducts')}</p>
                    </div>
                )}
            </div>
        </section>
    );
}
