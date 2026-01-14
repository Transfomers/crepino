'use client';

import { useEffect, useState } from 'react';

export default function Loader() {
    const [isLoading, setIsLoading] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        // Start fade out after 2 seconds
        const fadeTimer = setTimeout(() => {
            setFadeOut(true);
        }, 2000);

        // Remove loader after fade animation
        const removeTimer = setTimeout(() => {
            setIsLoading(false);
        }, 2500);

        return () => {
            clearTimeout(fadeTimer);
            clearTimeout(removeTimer);
        };
    }, []);

    if (!isLoading) return null;

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                width: '100%',
                height: '100%',
                minHeight: '100dvh',
                background: 'linear-gradient(135deg, #1A1A1A 0%, #3E2723 50%, #1A1A1A 100%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 9999,
                opacity: fadeOut ? 0 : 1,
                transition: 'opacity 0.5s ease-out',
                pointerEvents: fadeOut ? 'none' : 'auto',
                overflow: 'hidden'
            }}
        >
            {/* Coffee Cup Animation */}
            <div style={{ position: 'relative', marginBottom: '2.5rem' }}>
                {/* Cup */}
                <div
                    className="loader-cup"
                    style={{
                        width: '100px',
                        height: '120px',
                        background: 'linear-gradient(135deg, #D4AF37 0%, #C9A22A 50%, #D4AF37 100%)',
                        borderRadius: '0 0 50px 50px',
                        position: 'relative',
                        animation: 'cupPulse 2s ease-in-out infinite'
                    }}
                >
                    {/* Coffee inside */}
                    <div
                        style={{
                            position: 'absolute',
                            top: '12px',
                            left: '10px',
                            right: '10px',
                            height: '40px',
                            background: 'linear-gradient(180deg, #3E2723 0%, #5D4037 100%)',
                            borderRadius: '50%',
                            animation: 'coffeeBubble 1.5s ease-in-out infinite'
                        }}
                    />

                    {/* Handle */}
                    <div
                        className="loader-handle"
                        style={{
                            position: 'absolute',
                            right: '-30px',
                            top: '25px',
                            width: '30px',
                            height: '50px',
                            border: '10px solid #D4AF37',
                            borderLeft: 'none',
                            borderRadius: '0 60px 60px 0'
                        }}
                    />
                </div>

                {/* Steam */}
                <div style={{ position: 'absolute', top: '-50px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '8px' }}>
                    {[0, 0.3, 0.6].map((delay, i) => (
                        <div
                            key={i}
                            style={{
                                width: '10px',
                                height: '40px',
                                background: 'rgba(255,255,255,0.4)',
                                borderRadius: '10px',
                                animation: `steam 1.5s ease-in-out infinite ${delay}s`
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Logo */}
            <h1
                className="loader-title script-text"
                style={{
                    fontSize: '4.5rem',
                    color: '#D4AF37',
                    margin: '0 0 0.5rem',
                    animation: 'fadeInUp 1s ease-out',
                    textShadow: '0 0 30px rgba(212,175,55,0.3)'
                }}
            >
                Crepino
            </h1>

            {/* Tagline */}
            <p
                className="loader-tagline"
                style={{
                    fontSize: '1rem',
                    color: '#FDFBF7',
                    letterSpacing: '0.4em',
                    textTransform: 'uppercase',
                    opacity: 0.8,
                    fontWeight: 800,
                    animation: 'fadeInUp 1s ease-out 0.3s both'
                }}
            >
                The Station Of Happiness
            </p>

            {/* Loading dots */}
            <div style={{ marginTop: '3rem', display: 'flex', gap: '12px' }}>
                {[-0.32, -0.16, 0].map((delay, i) => (
                    <span
                        key={i}
                        style={{
                            width: '14px',
                            height: '14px',
                            background: '#D4AF37',
                            borderRadius: '50%',
                            animation: 'bounce 1.4s infinite ease-in-out both',
                            animationDelay: `${delay}s`,
                            boxShadow: '0 0 10px rgba(212,175,55,0.5)'
                        }}
                    />
                ))}
            </div>

            {/* CSS Keyframes */}
            <style jsx global>{`
        @keyframes steam {
          0%, 100% {
            transform: translateY(0) scaleY(1);
            opacity: 0.2;
          }
          50% {
            transform: translateY(-20px) scaleY(1.3);
            opacity: 0.8;
          }
        }

        @keyframes cupPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        @keyframes coffeeBubble {
          0%, 100% { transform: scaleX(1); opacity: 0.8; }
          50% { transform: scaleX(1.1); opacity: 1; }
        }

        @keyframes bounce {
          0%, 80%, 100% { transform: scale(0); }
          40% { transform: scale(1); }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @media (max-width: 768px) {
          .loader-cup {
            width: 70px !important;
            height: 85px !important;
          }
          .loader-handle {
            width: 22px !important;
            height: 35px !important;
            right: -22px !important;
            border-width: 7px !important;
          }
          .loader-title { font-size: 3rem !important; }
          .loader-tagline { font-size: 0.75rem !important; letter-spacing: 0.3em !important; }
        }
      `}</style>
        </div>
    );
}
