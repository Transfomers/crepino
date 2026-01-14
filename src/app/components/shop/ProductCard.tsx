'use client';

import { Product } from '../../data/products';
import { useCart } from '../../context/cartContext';
import { useLanguage } from '../../context/languageContext';
import Image from 'next/image';
import { useState } from 'react';

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    const { addToCart } = useCart();
    const { t, language } = useLanguage();
    const [isAdding, setIsAdding] = useState(false);

    const handleAddToCart = () => {
        setIsAdding(true);
        addToCart(product);

        setTimeout(() => {
            setIsAdding(false);
        }, 600);
    };

    return (
        <div className="card" style={{ position: 'relative' }}>
            {product.popular && (
                <div className="card-badge">
                    {t('product.popular') || '⭐ Populaire'}
                </div>
            )}

            <div style={{ position: 'relative', height: '280px', overflow: 'hidden' }}>
                <Image
                    src={product.image}
                    alt={product.name.fr}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="card-img"
                />
            </div>

            <div className="card-content">
                <h3 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.4rem',
                    marginBottom: '0.5rem',
                    color: 'var(--color-brown-dark)',
                    fontWeight: 700
                }}>
                    {product.name[language] || product.name.fr}
                </h3>

                <p style={{ color: 'var(--color-brown)', fontSize: '0.95rem', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                    {product.description[language] || product.description.fr}
                </p>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', borderTop: '1px solid #f0f0f0', paddingTop: '1rem' }}>
                    <div className="price" style={{ margin: 0, fontWeight: 700, color: 'var(--color-primary)', fontSize: '1.25rem', fontFamily: 'var(--font-heading)' }}>
                        <span>{product.price.toLocaleString()} <small style={{ fontSize: '0.7em' }}>FCFA</small></span>
                    </div>

                    <button
                        onClick={handleAddToCart}
                        className={`btn btn-primary ${isAdding ? 'animate-pulse' : ''}`}
                        style={{ fontSize: '0.85rem', padding: '0.6rem 1.2rem', borderRadius: '30px' }}
                    >
                        {isAdding ? (t('product.added') || '✓') : (t('product.add') || '+ Ajouter')}
                    </button>
                </div>
            </div>

            {product.available === false && (
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(255,255,255,0.85)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 'var(--radius-lg)', zIndex: 20, backdropFilter: 'blur(2px)' }}>
                    <span style={{
                        color: 'var(--color-brown-dark)',
                        fontSize: '1rem',
                        fontWeight: 'bold',
                        border: '2px solid var(--color-brown-dark)',
                        padding: '0.8rem 2rem',
                        borderRadius: '0',
                        backgroundColor: 'transparent',
                        textTransform: 'uppercase',
                        letterSpacing: '2px'
                    }}>
                        {t('product.unavailable') || 'Sold Out'}
                    </span>
                </div>
            )}
        </div>
    );
}
