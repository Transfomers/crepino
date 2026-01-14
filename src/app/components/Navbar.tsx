'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '../context/languageContext';
import { useCart } from '../context/cartContext';
import { Menu, X, ShoppingCart as CartIcon, Phone } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';

interface NavbarProps {
    onOpenCart: () => void;
}

export default function Navbar({ onOpenCart }: NavbarProps) {
    const { t, isRTL } = useLanguage();
    const { getItemCount } = useCart();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: t('nav.home'), href: '/' },
        { name: t('nav.menu'), href: '/#menu' },
        { name: t('nav.shop'), href: '/shop' },
        { name: t('nav.about'), href: '/#about' },
        { name: t('nav.contact'), href: '/#contact' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300`}
            style={{
                background: isScrolled ? 'rgba(253, 251, 247, 0.95)' : 'transparent', // var(--color-cream) approx
                backdropFilter: isScrolled ? 'blur(10px)' : 'none',
                boxShadow: isScrolled ? 'var(--shadow-sm)' : 'none',
                padding: isScrolled ? '0.5rem 0' : '1.5rem 0'
            }}
        >
            <div className="container flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex flex-col items-center no-underline group">
                    <h1 className="script-text text-3xl font-bold tracking-tighter leading-none transition-transform group-hover:scale-105"
                        style={{ color: 'var(--color-primary)' }}>
                        Crepino
                    </h1>
                    <p className="uppercase tracking-[0.2em] font-bold -mt-1 transition-colors duration-300"
                        style={{
                            fontSize: '0.6rem',
                            color: isScrolled ? 'var(--color-brown-dark)' : 'var(--color-white)'
                        }}>
                        THE STATION OF HAPPINESS
                    </p>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="font-semibold transition-all no-underline relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:transition-all after:duration-300 hover:after:w-full"
                            style={{
                                color: isScrolled ? 'var(--color-brown-dark)' : 'var(--color-white)',
                                fontFamily: 'var(--font-heading)',
                                letterSpacing: '0.5px'
                            }}
                        // We use style for hover color via class if possible, or simple styled-components approach. 
                        // Since we can't easily do hover state for inline styles without state, we rely on updated Tailwind classes or global CSS.
                        // Adding a specific class for hover handling might be cleaner, but standard generic hover:text-primary works if config exists.
                        // Falling back to a safe "hover:opacity-80" for now which works universally.
                        >
                            <span className="hover:text-[var(--color-primary)] transition-colors">
                                {link.name}
                            </span>
                        </Link>
                    ))}
                    <div className="h-6 w-[1px] bg-gray-300/30"></div>
                    <LanguageSwitcher />
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3">
                    {/* Cart Button */}
                    <button
                        onClick={onOpenCart}
                        className="relative p-2.5 rounded-full border-2 transition-all hover:scale-110 active:scale-95"
                        style={{
                            borderColor: isScrolled ? 'var(--color-brown-dark)' : 'var(--color-white)',
                            color: isScrolled ? 'var(--color-brown-dark)' : 'var(--color-white)'
                        }}
                    >
                        <CartIcon size={20} />
                        {getItemCount() > 0 && (
                            <span className="absolute -top-1 -right-1 text-white text-[0.65rem] font-black w-5 h-5 flex items-center justify-center rounded-full animate-pulse"
                                style={{ background: 'var(--color-secondary)' }}>
                                {getItemCount()}
                            </span>
                        )}
                    </button>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden p-2 transition-colors"
                        style={{ color: isScrolled ? 'var(--color-brown-dark)' : 'var(--color-white)' }}
                    >
                        {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`lg:hidden fixed inset-0 top-[70px] z-[999] transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}
                style={{ background: 'var(--color-white)' }}
            >
                <div className="flex flex-col items-center gap-6 py-12 px-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-2xl font-black no-underline uppercase tracking-tight hover:opacity-80 transition-opacity"
                            style={{
                                color: 'var(--color-brown-dark)',
                                fontFamily: 'var(--font-heading)'
                            }}
                        >
                            {link.name}
                        </Link>
                    ))}

                    <div className="w-full h-[1px] bg-gray-100 my-4"></div>

                    <LanguageSwitcher />

                    <a href="tel:+237695266214"
                        className="w-full max-w-[300px] flex items-center justify-center gap-3 py-4 rounded-2xl font-black text-xl shadow-xl no-underline mt-4 transition-transform active:scale-95"
                        style={{
                            background: 'var(--color-primary)',
                            color: 'var(--color-brown-dark)'
                        }}>
                        <Phone size={24} />
                        <span>{t('nav.call')}</span>
                    </a>
                </div>
            </div>
        </nav>
    );
}
