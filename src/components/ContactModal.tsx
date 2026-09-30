import React, { useState } from 'react';
import { Language } from '../types';
import { COMPANY_INFO } from '../data/packages';
import { X, MessageCircle, Phone, MapPin, Clock, Send, Mail, CheckCircle2 } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLanguage: Language;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  currentLanguage,
}) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [planDate, setPlanDate] = useState('');
  const [packageInterest, setPackageInterest] = useState('Ubud Highlights (Private Tour)');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;
  const isId = currentLanguage === 'id';

  const defaultWhatsappMsg = encodeURIComponent(
    'Halo GedeBaliTrip, saya ingin konsultasi rencana liburan ke Bali. Mohon info paket tour dan rekomendasinya.'
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const compiledMsg = encodeURIComponent(
      `Halo GedeBaliTrip, saya ${name} (${phoneNumber}). Saya berencana liburan ke Bali tanggal ${planDate || 'segera'} dan tertarik dengan paket ${packageInterest}. Catatan: ${message || '-'}`
    );
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${compiledMsg}`, '_blank');
    setIsSubmitted(true);
  };

  return (
    <div
      id="contact-modal-backdrop"
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="contact-modal-card"
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 relative animate-in fade-in zoom-in-95 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          id="close-contact-modal-btn"
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-600 flex items-center justify-center transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">
            {isId ? 'Konsultasi Wisata Gratis' : 'Free Travel Consultation'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">
            {isId ? 'Hubungi GedeBaliTrip' : 'Contact GedeBaliTrip'}
          </h2>
          <p className="text-neutral-500 text-xs sm:text-sm mt-1">
            {isId
              ? 'Tanyakan apa saja seputar liburan di Bali, konsultasi rute, dan dapatkan penawaran terbaik hari ini!'
              : 'Feel free to ask about custom itineraries, prices, or fast boat tickets. Our Bali experts are ready to assist!'}
          </p>
        </div>

        {/* Quick Contact Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          <a
            href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${defaultWhatsappMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 hover:bg-emerald-100 transition shadow-xs"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-medium text-emerald-700">Chat WhatsApp (Fast Response)</div>
              <div className="text-sm font-bold text-emerald-950">{COMPANY_INFO.phone}</div>
            </div>
          </a>

          <a
            href={`tel:${COMPANY_INFO.whatsapp}`}
            className="flex items-center gap-3 p-3.5 rounded-2xl bg-blue-50 border border-blue-200 text-blue-800 hover:bg-blue-100 transition shadow-xs"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-medium text-blue-700">{isId ? 'Panggilan Telepon' : 'Call Directly'}</div>
              <div className="text-sm font-bold text-blue-950">{COMPANY_INFO.phone}</div>
            </div>
          </a>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-neutral-700 mb-1">
                {isId ? 'Nama Lengkap' : 'Full Name'} *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Contoh: Budi Santoso"
                className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-neutral-700 mb-1">
                {isId ? 'Nomor WhatsApp / HP' : 'WhatsApp / Mobile Number'} *
              </label>
              <input
                type="tel"
                required
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="0812xxxxxxx"
                className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-neutral-700 mb-1">
                {isId ? 'Rencana Tanggal Tour' : 'Estimated Tour Date'}
              </label>
              <input
                type="date"
                value={planDate}
                onChange={(e) => setPlanDate(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-neutral-700 mb-1">
                {isId ? 'Minat Paket Tour' : 'Interested Package'}
              </label>
              <select
                value={packageInterest}
                onChange={(e) => setPackageInterest(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500 bg-white"
              >
                <option value="Ubud Highlights (Private Tour)">UBUD HIGHLIGHTS (Private Tour - USD $45/car)</option>
                <option value="Custom Private Tour Bali">Custom Private Tour / Sewa Mobil + Driver</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-neutral-700 mb-1">
              {isId ? 'Pesan / Pertanyaan Tambahan' : 'Notes / Additional Requests'}
            </label>
            <textarea
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={isId ? 'Contoh: Jumlah peserta 4 orang dewasa, mau request penjemputan di area Seminyak...' : 'Number of guests, special dietary requests, pickup location...'}
              className="w-full px-3.5 py-2 rounded-xl border border-neutral-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-amber-500 hover:bg-amber-600 active:scale-98 text-neutral-950 font-bold py-3 px-5 rounded-2xl transition shadow-md flex items-center justify-center gap-2 cursor-pointer"
          >
            <Send className="w-4 h-4" />
            <span>{isId ? 'Kirim Pesan & Konsultasi ke WhatsApp' : 'Send & Chat via WhatsApp'}</span>
          </button>
        </form>

        {/* Office details */}
        <div className="mt-6 pt-5 border-t border-neutral-200 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-neutral-500">
          <a
            href={COMPANY_INFO.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-2 hover:text-amber-600 transition"
          >
            <MapPin className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <span>{COMPANY_INFO.address} (Maps ↗)</span>
          </a>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-amber-600 shrink-0" />
            <span>{COMPANY_INFO.hours}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
