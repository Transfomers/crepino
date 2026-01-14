'use client';

import React, { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { useLanguage } from '../context/languageContext';
import { X, Send, CheckCircle } from 'lucide-react';

interface ComplaintsModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const getComplaintTypes = (t: (key: string) => string) => [
    { id: 'service', label: t('complaints.service') },
    { id: 'quality', label: t('complaints.quality') },
    { id: 'hygiene', label: t('complaints.hygiene') },
    { id: 'staff', label: t('complaints.staff') },
    { id: 'other', label: t('complaints.other') }
];

export default function ComplaintsModal({ isOpen, onClose }: ComplaintsModalProps) {
    const { t, isRTL } = useLanguage();
    const complaintTypes = getComplaintTypes(t);
    const [phoneValue, setPhoneValue] = useState<string | undefined>();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        complaintType: '',
        description: '',
        tableNumber: '',
        incidentDate: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const complaintLabel = complaintTypes.find(c => c.id === formData.complaintType)?.label || formData.complaintType;

        const subject = encodeURIComponent(`Nouveau Feedback - ${complaintLabel}`);
        const body = encodeURIComponent(
            `Nom: ${formData.name}\n` +
            `Email: ${formData.email}\n` +
            `Téléphone: ${phoneValue}\n` +
            `Type: ${complaintLabel}\n` +
            `Table: ${formData.tableNumber || 'N/A'}\n` +
            `Date: ${formData.incidentDate}\n\n` +
            `Description:\n${formData.description}`
        );

        window.location.href = `mailto:feedback@crepino.com?subject=${subject}&body=${body}`;

        setTimeout(() => {
            setIsSubmitting(false);
            setShowSuccess(true);
            setTimeout(() => {
                setShowSuccess(false);
                onClose();
            }, 3000);
        }, 1000);
    };

    if (!isOpen) return null;

    const inputStyle = {
        width: '100%',
        padding: '0.9rem 1rem',
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

            <div className={`relative bg-white w-full max-w-[600px] max-h-[90vh] rounded-[40px] overflow-hidden shadow-2xl animate-slide-in-up ${isRTL ? 'rtl' : 'ltr'}`}>
                {/* Header */}
                <div className="bg-[#3E2723] p-8 text-white relative">
                    <button onClick={onClose} className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-all">
                        <X size={24} />
                    </button>
                    <h2 className="text-3xl font-bold mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                        {t('complaints.title')}
                    </h2>
                    <p className="opacity-80 text-sm">
                        {t('complaints.subtitle')}
                    </p>
                </div>

                <div className="p-8 overflow-y-auto max-h-[calc(90vh-140px)]">
                    {showSuccess ? (
                        <div className="py-12 text-center animate-fade-in">
                            <CheckCircle size={80} className="text-green-500 mx-auto mb-6" />
                            <h3 className="text-2xl font-bold text-[#3E2723] mb-2">{t('complaints.success')}</h3>
                            <p className="text-gray-600">{t('complaints.successMessage')}</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-2 gap-4">
                                <div>
                                    <label className="block text-sm font-bold text-[#3E2723] mb-2 ml-2">{t('complaints.namePlaceholder')}</label>
                                    <input type="text" name="name" required style={inputStyle} value={formData.name} onChange={handleInputChange} className="focus:border-[#D4AF37]" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-[#3E2723] mb-2 ml-2">{t('complaints.emailPlaceholder')}</label>
                                    <input type="email" name="email" required style={inputStyle} value={formData.email} onChange={handleInputChange} className="focus:border-[#D4AF37]" />
                                </div>
                            </div>

                            <div className="grid grid-2 gap-4">
                                <div>
                                    <label className="block text-sm font-bold text-[#3E2723] mb-2 ml-2">{t('complaints.phone')}</label>
                                    <PhoneInput international defaultCountry="CM" value={phoneValue} onChange={setPhoneValue} className="phone-input-complaints" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-[#3E2723] mb-2 ml-2">{t('complaints.tableNum')}</label>
                                    <input type="text" name="tableNumber" placeholder={t('complaints.tablePlaceholder')} style={inputStyle} value={formData.tableNumber} onChange={handleInputChange} className="focus:border-[#D4AF37]" />
                                </div>
                            </div>

                            <div className="grid grid-2 gap-4">
                                <div className="col-span-1">
                                    <label className="block text-sm font-bold text-[#3E2723] mb-2 ml-2">{t('complaints.type')}</label>
                                    <select name="complaintType" required style={inputStyle} value={formData.complaintType} onChange={handleInputChange} className="focus:border-[#D4AF37] appearance-none">
                                        <option value="">{t('complaints.selectType')}</option>
                                        {complaintTypes.map(c => <option key={c.id} value={c.id}>{c.label}</option>)}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-[#3E2723] mb-2 ml-2">{t('complaints.incidentDate')}</label>
                                    <input type="date" name="incidentDate" required style={inputStyle} value={formData.incidentDate} onChange={handleInputChange} className="focus:border-[#D4AF37]" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-[#3E2723] mb-2 ml-2">{t('complaints.descPlaceholder')}</label>
                                <textarea name="description" required rows={4} style={{ ...inputStyle, resize: 'none' }} value={formData.description} onChange={handleInputChange} className="focus:border-[#D4AF37]" />
                            </div>

                            <button type="submit" className="w-full btn btn-primary py-4 text-xl" disabled={isSubmitting}>
                                {isSubmitting ? t('complaints.submitting') : <><Send size={20} /> {t('complaints.submit')}</>}
                            </button>

                            <p className="text-center text-xs opacity-50 mt-4">
                                {t('complaints.helpText')}
                            </p>
                        </form>
                    )}
                </div>
            </div>

            <style jsx global>{`
                .phone-input-complaints .PhoneInputCountry {
                    background: #F9F9F9;
                    padding: 0 1rem;
                    border-radius: 1.2rem 0 0 1.2rem;
                    border: 2px solid #E0E0E0;
                    margin-right: -2px;
                }
                .phone-input-complaints .PhoneInputInput {
                    padding: 0.9rem 1rem;
                    border-radius: 0 1.2rem 1.2rem 0;
                    border: 2px solid #E0E0E0;
                    font-size: 1rem;
                    flex: 1;
                    outline: none;
                }
                .phone-input-complaints .PhoneInputInput:focus {
                    border-color: #D4AF37;
                }
            `}</style>
        </div>
    );
}
