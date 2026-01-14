'use client';

import { useCart } from '../../context/cartContext';
import { useLanguage } from '../../context/languageContext';
import Image from 'next/image';
import { useState } from 'react';

interface ShoppingCartProps {
    isOpen?: boolean;
    setIsOpen?: (isOpen: boolean) => void;
}

export default function ShoppingCart({ isOpen: externalIsOpen, setIsOpen: externalSetIsOpen }: ShoppingCartProps = {}) {
    const { cart, removeFromCart, updateQuantity, clearCart, getSubtotal, getItemCount, generateWhatsAppMessage } = useCart();
    const { t, language } = useLanguage();
    const [internalIsOpen, setInternalIsOpen] = useState(false);

    const isOpen = externalIsOpen !== undefined ? externalIsOpen : internalIsOpen;
    const setIsOpen = externalSetIsOpen || setInternalIsOpen;

    const handleCheckout = () => {
        const message = generateWhatsAppMessage();
        const whatsappNumber = '237695266214';
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <>
            {isOpen && (
                <>
                    <div
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'rgba(0,0,0,0.3)',
                            zIndex: 1998
                        }}
                        onClick={() => setIsOpen(false)}
                    />

                    <div
                        style={{
                            position: 'fixed',
                            top: '70px',
                            right: '20px',
                            width: '380px',
                            maxWidth: 'calc(100vw - 40px)',
                            maxHeight: 'calc(100vh - 100px)',
                            background: '#FEFEFE',
                            borderRadius: '12px',
                            boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
                            zIndex: 1999,
                            display: 'flex',
                            flexDirection: 'column',
                            overflow: 'hidden',
                            animation: 'slideDown 0.3s ease-out'
                        }}
                    >
                        <div style={{
                            padding: '1.25rem 1.5rem',
                            borderBottom: '1px solid #E8E8E8',
                            background: 'linear-gradient(135deg, #F8F5F0 0%, #FEFEFE 100%)'
                        }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <h3 style={{ fontSize: '1.3rem', color: '#3E2723', margin: 0, fontWeight: 600 }}>
                                    {t('cart.title')}
                                </h3>
                                <button onClick={() => setIsOpen(false)} style={{ background: 'transparent', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: '#999' }}>✕</button>
                            </div>
                            <p style={{ fontSize: '0.85rem', color: '#888', margin: '0.5rem 0 0' }}>
                                {getItemCount()} {t('cart.articles') || 'articles'}
                            </p>
                        </div>

                        <div style={{ flex: 1, overflowY: 'auto', padding: '1rem 1.5rem' }}>
                            {cart.length === 0 ? (
                                <div style={{ textAlign: 'center', padding: '2rem 1rem', color: '#999' }}>
                                    <div style={{ fontSize: '3.5rem', marginBottom: '1rem', opacity: 0.5 }}>🛒</div>
                                    <p style={{ fontSize: '1rem', color: '#666' }}>{t('cart.empty')}</p>
                                    <p style={{ fontSize: '0.85rem' }}>{t('cart.addProducts')}</p>
                                </div>
                            ) : (
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    {cart.map(item => (
                                        <div key={item.id} style={{ display: 'flex', gap: '1rem', padding: '0.75rem', background: '#FAFAFA', borderRadius: '8px', position: 'relative', border: '1px solid #F0F0F0' }}>
                                            <div style={{ position: 'relative', width: '70px', height: '70px', borderRadius: '6px', overflow: 'hidden', flexShrink: 0 }}>
                                                <Image src={item.image} alt={item.name.fr} fill style={{ objectFit: 'cover' }} />
                                            </div>
                                            <div style={{ flex: 1, minWidth: 0 }}>
                                                <h4 style={{ fontSize: '0.9rem', fontWeight: 600, color: '#3E2723', margin: '0 0 0.25rem', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>{item.name[language] || item.name.fr}</h4>
                                                <p style={{ fontSize: '0.9rem', color: '#C04000', fontWeight: 700, margin: '0 0 0.5rem' }}>{item.price.toLocaleString()} FCFA</p>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} style={{ width: '26px', height: '26px', borderRadius: '4px', border: '1px solid #DDD', background: '#FFF' }}>−</button>
                                                    <span style={{ fontSize: '0.9rem', fontWeight: 600, minWidth: '25px', textAlign: 'center' }}>{item.quantity}</span>
                                                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} style={{ width: '26px', height: '26px', borderRadius: '4px', border: '1px solid #C04000', background: '#C04000', color: '#FFF' }}>+</button>
                                                </div>
                                            </div>
                                            <button onClick={() => removeFromCart(item.id)} style={{ position: 'absolute', top: '0.5rem', right: '0.5rem', background: 'transparent', color: '#CCC', border: 'none', cursor: 'pointer' }}>✕</button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {cart.length > 0 && (
                            <div style={{ padding: '1.25rem 1.5rem', borderTop: '1px solid #E8E8E8', background: '#FAFAFA' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                                    <span style={{ fontWeight: 600, color: '#555' }}>{t('cart.subtotal')}</span>
                                    <span style={{ fontSize: '1.25rem', fontWeight: 700, color: '#C04000' }}>{getSubtotal().toLocaleString()} FCFA</span>
                                </div>
                                <div style={{ display: 'flex', gap: '0.75rem' }}>
                                    <button onClick={clearCart} className="btn-secondary" style={{ flex: 1, padding: '0.85rem', fontSize: '0.9rem', color: '#666', border: '1px solid #DDD', borderRadius: '6px' }}>{t('cart.clear') || 'Vider'}</button>
                                    <button onClick={handleCheckout} className="btn-primary" style={{ flex: 2, padding: '0.85rem', fontSize: '0.95rem', borderRadius: '6px' }}>{t('cart.checkout')}</button>
                                </div>
                            </div>
                        )}
                    </div>
                </>
            )}
        </>
    );
}
