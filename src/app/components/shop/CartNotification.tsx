'use client';

import { useCart } from '../../context/cartContext';
import { useLanguage } from '../../context/languageContext';
import Image from 'next/image';
import { useState, useEffect } from 'react';

interface CartNotificationProps {
    onOpenCart?: () => void;
}

export default function CartNotification({ onOpenCart }: CartNotificationProps) {
    const { lastAddedProduct, dismissNotification, getItemCount, getSubtotal } = useCart();
    const { t, language } = useLanguage();
    const [isVisible, setIsVisible] = useState(false);
    const [isExpanded, setIsExpanded] = useState(true);

    useEffect(() => {
        if (lastAddedProduct) {
            if (!isVisible) setIsVisible(true);
            if (!isExpanded) setIsExpanded(true);

            const collapseTimer = setTimeout(() => {
                setIsExpanded(false);
            }, 4000);

            const dismissTimer = setTimeout(() => {
                setIsVisible(false);
                dismissNotification();
            }, 8000);

            return () => {
                clearTimeout(collapseTimer);
                clearTimeout(dismissTimer);
            };
        }
    }, [lastAddedProduct, dismissNotification, isVisible, isExpanded]);

    const handleClose = () => {
        setIsVisible(false);
        dismissNotification();
    };

    const handleOpenCart = () => {
        if (onOpenCart) {
            onOpenCart();
        }
        handleClose();
    };

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    if (!isVisible || !lastAddedProduct) return null;

    return (
        <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 2000, maxWidth: isExpanded ? '340px' : '60px', transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)' }}>
            {isExpanded ? (
                <div style={{ background: '#FEFEFE', borderRadius: '16px', boxShadow: '0 10px 40px rgba(0,0,0,0.2)', overflow: 'hidden', border: '1px solid var(--color-primary)' }}>
                    <div style={{ background: 'var(--gradient-gold)', padding: '0.75rem 1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ color: '#3E2723', fontWeight: 700, fontSize: '0.9rem' }}>{t('notification.addedToCart') || '✓ Ajouté au panier'}</span>
                        <button onClick={handleClose} style={{ background: 'transparent', border: 'none', color: '#3E2723', cursor: 'pointer' }}>✕</button>
                    </div>
                    <div style={{ padding: '1rem', display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                        <div style={{ position: 'relative', width: '60px', height: '60px', borderRadius: '10px', overflow: 'hidden', flexShrink: 0 }}>
                            <Image src={lastAddedProduct.image} alt={lastAddedProduct.name.fr} fill style={{ objectFit: 'cover' }} />
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                            <h4 style={{ fontSize: '0.95rem', fontWeight: 600, margin: '0 0 0.25rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{lastAddedProduct.name[language] || lastAddedProduct.name.fr}</h4>
                            <p style={{ fontSize: '0.9rem', color: '#C04000', fontWeight: 700, margin: 0 }}>{lastAddedProduct.price.toLocaleString()} FCFA</p>
                        </div>
                    </div>
                    <div style={{ padding: '0.75rem 1rem', display: 'flex', gap: '0.5rem' }}>
                        <button onClick={toggleExpand} style={{ flex: 1, padding: '0.5rem', background: '#EEE', border: 'none', borderRadius: '8px', fontSize: '0.8rem' }}>Reduire</button>
                        <button onClick={handleOpenCart} className="btn-primary" style={{ flex: 2, padding: '0.5rem', fontSize: '0.8rem', borderRadius: '8px' }}>{t('notification.viewCart') || 'Voir Panier'}</button>
                    </div>
                </div>
            ) : (
                <button onClick={toggleExpand} style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'var(--gradient-gold)', border: 'none', boxShadow: 'var(--shadow-lg)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', position: 'relative' }}>
                    🛒
                    <span style={{ position: 'absolute', top: '-5px', right: '-5px', background: 'var(--color-secondary)', color: 'white', borderRadius: '50%', width: '22px', height: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', fontWeight: 'bold' }}>{getItemCount()}</span>
                </button>
            )}
        </div>
    );
}
