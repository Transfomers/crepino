'use client';

import React, { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { useLanguage } from '../context/languageContext';
import { X, Calendar, Clock, Users, DollarSign, MessageSquare, Send } from 'lucide-react';

interface EventBookingModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const getEventTypes = (t: (key: string) => string) => [
    { id: 'anniversary', label: t('booking.anniversary'), emoji: '🎂' },
    { id: 'graduation', label: t('booking.graduation'), emoji: '🎓' },
    { id: 'birthday', label: t('booking.birthday'), emoji: '🎉' },
    { id: 'corporate', label: t('booking.corporate'), emoji: '💼' },
    { id: 'wedding', label: t('booking.wedding'), emoji: '💒' },
    { id: 'baby_shower', label: t('booking.baby_shower'), emoji: '👶' },
    { id: 'other', label: t('booking.other_event'), emoji: '📅' }
];

export default function EventBookingModal({ isOpen, onClose }: EventBookingModalProps) {
    const { t, isRTL } = useLanguage();
    const eventTypes = getEventTypes(t);
    const [phoneValue, setPhoneValue] = useState<string | undefined>();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        eventType: '',
        eventDate: '',
        eventTime: '',
        guestCount: '',
        specialRequests: '',
        budget: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const generateWhatsAppMessage = () => {
        const eventLabel = eventTypes.find(e => e.id === formData.eventType)?.label || formData.eventType;

        const message = `
${t('booking.whatsAppNew')}

${t('booking.clientInfo')}
• ${t('booking.name').replace(' *', '')}: ${formData.name}
• ${t('booking.phone').replace(' *', '')}: ${phoneValue || t('product.unavailable')}
• ${t('booking.email').replace(' *', '')}: ${formData.email}

${t('booking.eventDetails')}
• ${t('booking.eventType').replace(' *', '')}: ${eventLabel}
• ${t('booking.date').replace(' *', '')}: ${formData.eventDate}
• ${t('booking.time').replace(' *', '')}: ${formData.eventTime}
• ${t('booking.guests').replace(' *', '')}: ${formData.guestCount}

${t('booking.estBudget')} ${formData.budget} FCFA

${t('booking.specialReq')}
${formData.specialRequests || t('booking.none')}

---
${t('footer.copyright').split('.')[0]}
    `.trim();

        return encodeURIComponent(message);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const whatsappUrl = `https://wa.me/237695957973?text=${generateWhatsAppMessage()}`;
        window.open(whatsappUrl, '_blank');

        setTimeout(() => {
            setIsSubmitting(false);
            onClose();
        }, 1000);
    };

    if (!isOpen) return null;

    const inputStyle = {
        width: '100%',
        padding: '0.9rem 1.2rem',
        borderRadius: '1.2rem',
        border: '2px solid #E0E0E0',
        fontSize: '1rem',
        transition: 'all 0.3s ease',
        outline: 'none',
        background: '#F9F9F9'
    };

    return (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-md animate-fade-in" onClick={onClose} />

            <div className={`relative bg-white w-full max-w-[700px] max-h-[95vh] rounded-[40px] overflow-hidden shadow-2xl animate-slide-in-up ${isRTL ? 'rtl' : 'ltr'}`}>
                {/* Header */}
                <div className="bg-gradient-to-r from-[#D4AF37] to-[#B8860B] p-8 text-white relative">
                    <button onClick={onClose} className="absolute top-4 right-4 p-2 hover:bg-black/10 rounded-full transition-all">
                        <X size={24} />
                    </button>
                    <div className="flex items-center gap-4 mb-2">
                        <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                            <Calendar size={28} />
                        </div>
                        <h2 className="text-3xl font-bold" style={{ fontFamily: 'var(--font-heading)' }}>
                            {t('booking.title')}
                        </h2>
                    </div>
                    <p className="opacity-90 ml-16">
                        {t('booking.subtitle')}
                    </p>
                </div>

                <div className="p-8 md:p-10 overflow-y-auto max-h-[calc(95vh-160px)]">
                    <form onSubmit={handleSubmit} className="space-y-8">
                        {/* Section 1: Event Type */}
                        <div>
                            <label className="block text-sm font-bold text-[#3E2723] mb-3 ml-2 uppercase tracking-wider">{t('booking.eventType')}</label>
                            <div className="flex flex-wrap gap-3">
                                {eventTypes.map((type) => (
                                    <button
                                        key={type.id}
                                        type="button"
                                        onClick={() => setFormData(prev => ({ ...prev, eventType: type.id }))}
                                        className={`flex items-center gap-2 px-5 py-3 rounded-full border-2 transition-all font-semibold ${formData.eventType === type.id
                                                ? 'bg-[#3E2723] border-[#3E2723] text-white shadow-lg scale-105'
                                                : 'border-gray-100 bg-gray-50 text-[#4A3026] hover:border-[#D4AF37]'
                                            }`}
                                    >
                                        <span className="text-xl">{type.emoji}</span>
                                        {type.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Section 2: Personal Details */}
                        <div className="grid grid-2 gap-6">
                            <div>
                                <label className="block text-sm font-bold text-[#3E2723] mb-2 ml-2">{t('booking.name')}</label>
                                <input type="text" name="name" required style={inputStyle} value={formData.name} onChange={handleInputChange} placeholder={t('booking.placeholderName')} className="focus:border-[#D4AF37]" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-[#3E2723] mb-2 ml-2">{t('booking.phone')}</label>
                                <PhoneInput international defaultCountry="CM" value={phoneValue} onChange={setPhoneValue} className="phone-input-booking" />
                            </div>
                        </div>

                        {/* Section 3: Time & Guests */}
                        <div className="grid grid-2 lg:grid-4 gap-6">
                            <div className="col-span-1 lg:col-span-2">
                                <label className="block text-sm font-bold text-[#3E2723] mb-2 ml-2">{t('booking.email')}</label>
                                <input type="email" name="email" style={inputStyle} value={formData.email} onChange={handleInputChange} placeholder="votre@email.com" className="focus:border-[#D4AF37]" />
                            </div>
                            <div className="col-span-1">
                                <label className="block text-sm font-bold text-[#3E2723] mb-2 ml-2">{t('booking.date')}</label>
                                <input type="date" name="eventDate" required style={inputStyle} value={formData.eventDate} onChange={handleInputChange} className="focus:border-[#D4AF37]" />
                            </div>
                            <div className="col-span-1">
                                <label className="block text-sm font-bold text-[#3E2723] mb-2 ml-2">{t('booking.time')}</label>
                                <input type="time" name="eventTime" required style={inputStyle} value={formData.eventTime} onChange={handleInputChange} className="focus:border-[#D4AF37]" />
                            </div>
                        </div>

                        <div className="grid grid-2 gap-6">
                            <div>
                                <label className="block text-sm font-bold text-[#3E2723] mb-2 ml-2">{t('booking.guests')}</label>
                                <div className="relative">
                                    <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                    <input type="number" name="guestCount" required style={{ ...inputStyle, paddingLeft: '3rem' }} value={formData.guestCount} onChange={handleInputChange} className="focus:border-[#D4AF37]" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-[#3E2723] mb-2 ml-2">{t('booking.budget')}</label>
                                <div className="relative">
                                    <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                    <input type="text" name="budget" style={{ ...inputStyle, paddingLeft: '3rem' }} value={formData.budget} onChange={handleInputChange} placeholder="FCFA" className="focus:border-[#D4AF37]" />
                                </div>
                            </div>
                        </div>

                        {/* Section 4: Message */}
                        <div>
                            <label className="block text-sm font-bold text-[#3E2723] mb-2 ml-2">{t('booking.message')}</label>
                            <textarea
                                name="specialRequests"
                                rows={3}
                                style={{ ...inputStyle, resize: 'none' }}
                                value={formData.specialRequests}
                                onChange={handleInputChange}
                                placeholder={t('booking.specialRequestsPlaceholder')}
                                className="focus:border-[#D4AF37]"
                            />
                        </div>

                        <button type="submit" className="w-full btn btn-primary py-5 text-2xl" disabled={isSubmitting}>
                            {isSubmitting ? t('complaints.submitting') : <><Send size={24} /> {t('booking.reserve')}</>}
                        </button>

                        <p className="text-center text-sm font-medium text-gray-400 mt-4">
                            {t('booking.confirmHelp')}
                        </p>
                    </form>
                </div>
            </div>

            <style jsx global>{`
                .phone-input-booking .PhoneInputCountry {
                    background: #F9F9F9;
                    padding: 0 1.2rem;
                    border-radius: 1.2rem 0 0 1.2rem;
                    border: 2px solid #E0E0E0;
                    margin-right: -2px;
                }
                .phone-input-booking .PhoneInputInput {
                    padding: 0.9rem 1.2rem;
                    border-radius: 0 1.2rem 1.2rem 0;
                    border: 2px solid #E0E0E0;
                    font-size: 1rem;
                    flex: 1;
                    outline: none;
                }
                .phone-input-booking .PhoneInputInput:focus {
                    border-color: #D4AF37;
                }
            `}</style>
        </div>
    );
}
