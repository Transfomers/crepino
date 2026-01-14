'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

import { Product } from '../data/products';

interface CartItem extends Product {
    quantity: number;
}

interface CartContextType {
    cart: CartItem[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: number) => void;
    updateQuantity: (productId: number, quantity: number) => void;
    clearCart: () => void;
    getSubtotal: () => number;
    getItemCount: () => number;
    generateWhatsAppMessage: () => string;
    lastAddedProduct: Product | null;
    dismissNotification: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [lastAddedProduct, setLastAddedProduct] = useState<Product | null>(null);

    // Load cart from localStorage
    useEffect(() => {
        const savedCart = localStorage.getItem('crepino-cart');
        if (savedCart) {
            try {
                setCart(JSON.parse(savedCart));
            } catch (e) {
                console.error("Failed to parse cart", e);
            }
        }
    }, []);

    // Save cart to localStorage
    useEffect(() => {
        localStorage.setItem('crepino-cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product: Product) => {
        setLastAddedProduct(product);
        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.id === product.id);
            if (existingItem) {
                return prevCart.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prevCart, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (productId: number) => {
        setCart(prevCart => prevCart.filter(item => item.id !== productId));
    };

    const updateQuantity = (productId: number, quantity: number) => {
        if (quantity <= 0) {
            removeFromCart(productId);
            return;
        }
        setCart(prevCart =>
            prevCart.map(item =>
                item.id === productId ? { ...item, quantity } : item
            )
        );
    };

    const clearCart = () => {
        setCart([]);
    };

    const getSubtotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const getItemCount = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    };

    const dismissNotification = () => {
        setLastAddedProduct(null);
    };

    const generateWhatsAppMessage = () => {
        let message = "Bonjour Crepino! 👋\n\nJe souhaite passer une commande :\n\n";
        cart.forEach(item => {
            message += `• ${item.name.fr} (x${item.quantity}) - ${(item.price * item.quantity).toLocaleString()} FCFA\n`;
        });
        message += `\n💰 *Total: ${getSubtotal().toLocaleString()} FCFA*`;
        message += "\n\n📍 Livraison à : [Votre adresse]";
        return message;
    };

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart,
            getSubtotal,
            getItemCount,
            generateWhatsAppMessage,
            lastAddedProduct,
            dismissNotification
        }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
}
