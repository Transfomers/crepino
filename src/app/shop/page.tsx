'use client';

import { useState, useEffect } from 'react';
import { products, categories } from '../data/products';
import ProductCard from '../components/shop/ProductCard';
import ShoppingCart from '../components/shop/ShoppingCart';
import CartNotification from '../components/shop/CartNotification';
import Navbar from '../components/Navbar';
import { useLanguage } from '../context/languageContext';

export default function ShopPage() {
    const [selectedCategory, setSelectedCategory] = useState('Tous');
    const [cartOpen, setCartOpen] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const { t } = useLanguage();

    const slideImages = products.slice(0, 5).map(p => p.image);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slideImages.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [slideImages.length]);

    const filteredProducts = selectedCategory === 'Tous'
        ? products
        : products.filter(product => product.category === selectedCategory);

    return (
        <div className="min-h-screen bg-cream">
            <ShoppingCart isOpen={cartOpen} setIsOpen={setCartOpen} />
            <CartNotification onOpenCart={() => setCartOpen(true)} />
            <Navbar onOpenCart={() => setCartOpen(true)} />

            <section style={{ position: 'relative', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                <div className="slideshow-container">
                    {slideImages.map((img, index) => (
                        <div key={index} className={`slide ${currentSlide === index ? 'active' : ''}`} style={{ backgroundImage: `url(${img})` }}></div>
                    ))}
                    <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.6)' }}></div>
                </div>
                <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', color: 'white' }}>
                    <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>{t('shop.onlineShop') || 'La Boutique'}</h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-primary)' }}>{t('shop.subtitle')}</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
                        {categories.map(cat => {
                            const catMap: { [key: string]: string } = {
                                'Tous': 'cat.tous',
                                'Crêpes Sucrées': 'cat.crepesSucrees',
                                'Crêpes Salées': 'cat.crepesSalees',
                                'Gaufres': 'cat.gaufres',
                                'Milkshakes': 'cat.milkshakes',
                                'Boissons Chaudes': 'cat.boissonsChaudes',
                                'Boissons Froides': 'cat.boissonsFroides'
                            };
                            return (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    style={{
                                        padding: '0.8rem 1.5rem',
                                        borderRadius: '50px',
                                        border: 'none',
                                        background: selectedCategory === cat ? 'var(--color-primary)' : 'var(--color-white)',
                                        color: selectedCategory === cat ? 'var(--color-brown-dark)' : 'var(--color-brown)',
                                        fontWeight: 600,
                                        cursor: 'pointer',
                                        boxShadow: 'var(--shadow-sm)'
                                    }}
                                >
                                    {t(catMap[cat] || cat)}
                                </button>
                            );
                        })}
                    </div>

                    <div className="grid grid-3">
                        {filteredProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
