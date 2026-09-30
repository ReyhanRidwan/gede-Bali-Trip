import React, { useState, useMemo } from 'react';
import { TourPackage, Language } from '../types';
import { COMPANY_INFO } from '../data/packages';
import {
  Calendar as CalendarIcon,
  Users,
  ChevronLeft,
  ChevronRight,
  X,
  CheckCircle2,
  Plus,
  Minus,
  MessageCircle,
  Clock,
  User,
  Phone,
  MapPin,
  FileText,
  Car,
} from 'lucide-react';

interface BookingCalendarModalProps {
  isOpen: boolean;
  onClose: () => void;
  pkg: TourPackage;
  currentLanguage: Language;
}

export const BookingCalendarModal: React.FC<BookingCalendarModalProps> = ({
  isOpen,
  onClose,
  pkg,
  currentLanguage,
}) => {
  const isId = currentLanguage === 'id';

  // Step state: 'date' or 'details'
  const [activeTab, setActiveTab] = useState<'date' | 'details'>('date');

  // Today's date reference
  const today = useMemo(() => new Date(), []);
  const [viewYear, setViewYear] = useState<number>(() => today.getFullYear());
  const [viewMonth, setViewMonth] = useState<number>(() => today.getMonth()); // 0-indexed

  // Selected Date (default to tomorrow)
  const [selectedDate, setSelectedDate] = useState<Date>(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d;
  });

  // Guest details state
  const [guestCount, setGuestCount] = useState<number>(2);
  const [guestName, setGuestName] = useState<string>('');
  const [whatsappNumber, setWhatsappNumber] = useState<string>('');
  const [pickupLocation, setPickupLocation] = useState<string>('Kuta / Seminyak / Legian / Ubud');
  const [specialNotes, setSpecialNotes] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  // Month Names
  const monthNamesId = [
    'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
    'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
  ];
  const monthNamesEn = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const currentMonthNames = isId ? monthNamesId : monthNamesEn;

  // Weekday Names
  const weekDays = ['MIN', 'SEN', 'SEL', 'RAB', 'KAM', 'JUM', 'SAB'];
  const weekDaysEn = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const currentWeekDays = isId ? weekDays : weekDaysEn;

  // Calculate days in view month
  const calendarDays = useMemo(() => {
    const firstDayIndex = new Date(viewYear, viewMonth, 1).getDay();
    const totalDaysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();

    const days: { dayNumber: number | null; dateObj?: Date; isPast?: boolean; isSelected?: boolean }[] = [];

    // Blank cells before day 1
    for (let i = 0; i < firstDayIndex; i++) {
      days.push({ dayNumber: null });
    }

    // Days in current view month
    const startOfToday = new Date(today.getFullYear(), today.getMonth(), today.getDate());

    for (let day = 1; day <= totalDaysInMonth; day++) {
      const d = new Date(viewYear, viewMonth, day);
      const isPast = d < startOfToday;
      const isSelected =
        selectedDate &&
        selectedDate.getDate() === day &&
        selectedDate.getMonth() === viewMonth &&
        selectedDate.getFullYear() === viewYear;

      days.push({
        dayNumber: day,
        dateObj: d,
        isPast,
        isSelected,
      });
    }

    return days;
  }, [viewYear, viewMonth, selectedDate, today]);

  // Month Navigation
  const handlePrevMonth = () => {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear(viewYear - 1);
    } else {
      setViewMonth(viewMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear(viewYear + 1);
    } else {
      setViewMonth(viewMonth + 1);
    }
  };

  // Car Count Calculation (up to 5 guests per private car)
  const carsNeeded = useMemo(() => {
    return Math.max(1, Math.ceil(guestCount / 5));
  }, [guestCount]);

  const totalUsdPrice = useMemo(() => {
    return pkg.price * carsNeeded;
  }, [pkg.price, carsNeeded]);

  // Formatted Date String
  const formattedStartingDate = useMemo(() => {
    if (!selectedDate) return '-';
    return selectedDate.toLocaleDateString(isId ? 'id-ID' : 'en-US', {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  }, [selectedDate, isId]);

  // Submit to WhatsApp
  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!guestName.trim()) {
      setErrorMessage(isId ? 'Mohon masukkan Nama Lengkap Pemesan.' : 'Please enter your full name.');
      setActiveTab('details');
      return;
    }

    if (!whatsappNumber.trim()) {
      setErrorMessage(isId ? 'Mohon masukkan Nomor WhatsApp aktif.' : 'Please enter your WhatsApp number.');
      setActiveTab('details');
      return;
    }

    const fullFormattedDate = selectedDate.toLocaleDateString(isId ? 'id-ID' : 'en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    const waText = encodeURIComponent(
      `*RESERVASI PAKET TOUR - GEDEBALITRIP*\n\n` +
      `📌 *Paket:* ${pkg.title}\n` +
      `⏱️ *Durasi:* ${isId ? pkg.duration : pkg.durationEn}\n` +
      `📅 *Tanggal Tour:* ${fullFormattedDate}\n` +
      `👤 *Nama Pemesan:* ${guestName}\n` +
      `📱 *No. WhatsApp:* ${whatsappNumber}\n` +
      `👥 *Jumlah Peserta:* ${guestCount} Orang (${carsNeeded} Mobil Private)\n` +
      `📍 *Lokasi Penjemputan:* ${pickupLocation}\n` +
      `💰 *Estimasi Total:* USD $${totalUsdPrice} (${carsNeeded} mobil private up to 10 jam)\n` +
      (specialNotes ? `📝 *Catatan Khusus:* ${specialNotes}\n\n` : `\n`) +
      `Mohon info ketersediaan driver dan konfirmasi reservasinya. Terima kasih!`
    );

    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${waText}`, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div
      id="booking-modal-overlay"
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="booking-modal-window"
        className="bg-white rounded-t-3xl sm:rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl relative border border-neutral-200 flex flex-col md:flex-row h-[92vh] sm:h-auto sm:max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* MODAL MAIN CONTENT (Form & Calendar) - Takes 100% space on mobile */}
        <div className="flex-1 flex flex-col h-full bg-white overflow-hidden">
          {/* Top Bar with Title & Close Button */}
          <div className="p-4 sm:p-5 pb-3 border-b border-neutral-100 flex items-center justify-between gap-3 shrink-0 bg-neutral-50/80">
            <div>
              <span className="text-[10px] sm:text-xs font-bold text-amber-600 uppercase tracking-wider block">
                {isId ? 'Reservasi Private Tour' : 'Private Tour Booking'}
              </span>
              <h2 className="text-base sm:text-xl font-extrabold text-neutral-900 leading-tight">
                {isId ? pkg.title : pkg.titleEn}
              </h2>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-neutral-200/80 hover:bg-neutral-300 text-neutral-700 flex items-center justify-center transition cursor-pointer shrink-0"
              aria-label="Close modal"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          {/* Stepper Tabs */}
          <div className="flex border-b border-neutral-200 px-3 sm:px-6 bg-white shrink-0">
            <button
              type="button"
              onClick={() => setActiveTab('date')}
              className={`flex-1 flex items-center justify-center gap-1.5 sm:gap-2 py-3 text-xs sm:text-sm font-bold border-b-2 transition cursor-pointer ${
                activeTab === 'date'
                  ? 'border-amber-500 text-amber-600 bg-amber-50/40'
                  : 'border-transparent text-neutral-400 hover:text-neutral-700'
              }`}
            >
              <CalendarIcon className="w-4 h-4 shrink-0" />
              <span>1. {isId ? 'Tanggal & Waktu' : 'Date & Time'}</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('details')}
              className={`flex-1 flex items-center justify-center gap-1.5 sm:gap-2 py-3 text-xs sm:text-sm font-bold border-b-2 transition cursor-pointer ${
                activeTab === 'details'
                  ? 'border-amber-500 text-amber-600 bg-amber-50/40'
                  : 'border-transparent text-neutral-400 hover:text-neutral-700'
              }`}
            >
              <Users className="w-4 h-4 shrink-0" />
              <span>2. {isId ? 'Data Peserta' : 'Guest Details'}</span>
            </button>
          </div>

          {/* Scrollable Form Content (Large & Spacious) */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
            {errorMessage && (
              <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs font-semibold text-rose-700">
                ⚠️ {errorMessage}
              </div>
            )}

            {/* TAB 1: DATE & CALENDAR SELECTION */}
            {activeTab === 'date' && (
              <div className="space-y-4 max-w-xl mx-auto">
                {/* Month / Year Selectors */}
                <div className="flex items-center justify-between bg-neutral-50 p-2.5 sm:p-3 rounded-2xl border border-neutral-200">
                  <div className="flex items-center gap-2">
                    <select
                      value={viewMonth}
                      onChange={(e) => setViewMonth(Number(e.target.value))}
                      className="bg-white border border-neutral-300 rounded-xl px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm font-bold text-neutral-800 focus:outline-hidden focus:ring-2 focus:ring-amber-500 cursor-pointer shadow-xs"
                    >
                      {currentMonthNames.map((name, idx) => (
                        <option key={idx} value={idx}>
                          {name}
                        </option>
                      ))}
                    </select>

                    <select
                      value={viewYear}
                      onChange={(e) => setViewYear(Number(e.target.value))}
                      className="bg-white border border-neutral-300 rounded-xl px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm font-bold text-neutral-800 focus:outline-hidden focus:ring-2 focus:ring-amber-500 cursor-pointer shadow-xs"
                    >
                      {[today.getFullYear(), today.getFullYear() + 1].map((yr) => (
                        <option key={yr} value={yr}>
                          {yr}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={handlePrevMonth}
                      className="w-8 h-8 rounded-xl border border-neutral-200 bg-white hover:bg-neutral-100 flex items-center justify-center text-neutral-700 transition cursor-pointer shadow-xs"
                      aria-label="Previous month"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={handleNextMonth}
                      className="w-8 h-8 rounded-xl border border-neutral-200 bg-white hover:bg-neutral-100 flex items-center justify-center text-neutral-700 transition cursor-pointer shadow-xs"
                      aria-label="Next month"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Calendar Grid (Clean, spacious, full width) */}
                <div className="border border-neutral-200 rounded-2xl p-3 sm:p-5 bg-white shadow-xs">
                  <div className="grid grid-cols-7 text-center mb-2">
                    {currentWeekDays.map((day, idx) => (
                      <div
                        key={idx}
                        className={`text-xs font-bold py-1 ${
                          idx === 0 ? 'text-rose-600' : 'text-neutral-500'
                        }`}
                      >
                        {day}
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-7 gap-1.5 sm:gap-2 text-center">
                    {calendarDays.map((cell, index) => {
                      if (cell.dayNumber === null) {
                        return <div key={index} className="h-10 sm:h-11" />;
                      }

                      if (cell.isPast) {
                        return (
                          <div
                            key={index}
                            className="h-10 sm:h-11 flex items-center justify-center text-neutral-300 cursor-not-allowed select-none text-xs sm:text-sm font-medium"
                          >
                            {cell.dayNumber}
                          </div>
                        );
                      }

                      if (cell.isSelected) {
                        return (
                          <div
                            key={index}
                            className="h-10 sm:h-11 flex items-center justify-center cursor-pointer"
                          >
                            <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-amber-500 text-neutral-950 font-extrabold flex items-center justify-center shadow-md scale-105 transition-all text-xs sm:text-sm">
                              {cell.dayNumber}
                            </span>
                          </div>
                        );
                      }

                      return (
                        <div
                          key={index}
                          onClick={() => cell.dateObj && setSelectedDate(cell.dateObj)}
                          className="h-10 sm:h-11 flex items-center justify-center text-neutral-700 hover:text-amber-700 font-medium cursor-pointer transition-colors"
                        >
                          <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center hover:bg-amber-100 text-xs sm:text-sm">
                            {cell.dayNumber}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Selected Date & Quick Info Banner */}
                <div className="p-3.5 bg-amber-50 rounded-2xl border border-amber-200 flex items-center justify-between text-xs sm:text-sm">
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="w-4 h-4 text-amber-600 shrink-0" />
                    <span className="text-neutral-700">
                      {isId ? 'Tanggal:' : 'Date:'}{' '}
                      <strong className="text-neutral-900">{formattedStartingDate}</strong>
                    </span>
                  </div>
                  <span className="text-[11px] sm:text-xs font-bold text-emerald-800 bg-emerald-100/80 px-2.5 py-0.5 rounded-lg border border-emerald-300/60">
                    {isId ? '✓ Tersedia' : '✓ Available'}
                  </span>
                </div>
              </div>
            )}

            {/* TAB 2: GUESTS & CONTACT DETAILS */}
            {activeTab === 'details' && (
              <div className="space-y-4 max-w-xl mx-auto">
                {/* Single Guest Counter */}
                <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200 flex items-center justify-between">
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-neutral-900">
                      {isId ? 'Jumlah Orang / Peserta' : 'Number of Guests'}
                    </div>
                    <div className="text-[11px] text-neutral-500">
                      {isId ? 'Kapasitas s.d 5 orang per 1 mobil privat' : 'Capacity up to 5 persons per 1 private car'}
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setGuestCount((prev) => Math.max(1, prev - 1))}
                      className="w-10 h-10 rounded-xl border border-neutral-300 bg-white hover:bg-neutral-100 text-neutral-800 font-bold flex items-center justify-center transition cursor-pointer shadow-xs disabled:opacity-40"
                      disabled={guestCount <= 1}
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-8 text-center text-base sm:text-lg font-extrabold text-neutral-900">
                      {guestCount}
                    </span>
                    <button
                      type="button"
                      onClick={() => setGuestCount((prev) => Math.min(30, prev + 1))}
                      className="w-10 h-10 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold flex items-center justify-center transition cursor-pointer shadow-xs"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Input: Nama Pemesan */}
                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-amber-600" />
                    <span>{isId ? 'Nama Lengkap Pemesan *' : 'Full Name *'}</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    placeholder={isId ? 'Contoh: Budi Pratama / Sarah' : 'e.g. John Doe / Sarah'}
                    className="w-full px-3.5 py-3 rounded-xl border border-neutral-300 text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500 bg-white shadow-xs"
                  />
                </div>

                {/* Input: Nomor WhatsApp */}
                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{isId ? 'Nomor WhatsApp Aktif *' : 'Active WhatsApp Number *'}</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={whatsappNumber}
                    onChange={(e) => setWhatsappNumber(e.target.value)}
                    placeholder={isId ? 'Contoh: 081234567890 atau +62812...' : 'e.g. +62 812... / +61 4...'}
                    className="w-full px-3.5 py-3 rounded-xl border border-neutral-300 text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500 bg-white shadow-xs"
                  />
                </div>

                {/* Input: Lokasi Penjemputan */}
                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-rose-600" />
                    <span>{isId ? 'Area / Hotel Penjemputan' : 'Pickup Hotel / Area'}</span>
                  </label>
                  <input
                    type="text"
                    value={pickupLocation}
                    onChange={(e) => setPickupLocation(e.target.value)}
                    placeholder="Contoh: Hotel Kuta / Villa di Ubud / Canggu / Bandara DPS"
                    className="w-full px-3.5 py-3 rounded-xl border border-neutral-300 text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500 bg-white shadow-xs"
                  />
                </div>

                {/* Input: Catatan Khusus */}
                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1 flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-neutral-500" />
                    <span>{isId ? 'Catatan Khusus (Opsional)' : 'Special Requests (Optional)'}</span>
                  </label>
                  <textarea
                    rows={2}
                    value={specialNotes}
                    onChange={(e) => setSpecialNotes(e.target.value)}
                    placeholder={
                      isId
                        ? 'Contoh: Request jam jemput 08:30 atau baby car seat'
                        : 'e.g., Request pickup at 08:30 AM or baby seat'
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500 bg-white resize-none shadow-xs"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Bottom Action Footer (Responsive with Price Summary on Mobile) */}
          <div className="p-3.5 sm:p-5 border-t border-neutral-200 bg-neutral-50 shrink-0">
            {/* Mobile-only compact price row */}
            <div className="flex md:hidden items-center justify-between mb-2.5 px-1 text-xs">
              <div className="flex items-center gap-1.5 text-neutral-600">
                <Car className="w-4 h-4 text-emerald-600" />
                <span>{guestCount} org ({carsNeeded} mobil AC)</span>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-neutral-400 mr-1">Total:</span>
                <strong className="text-base text-neutral-900 font-extrabold">USD ${totalUsdPrice}</strong>
              </div>
            </div>

            {activeTab === 'date' ? (
              <button
                type="button"
                onClick={() => setActiveTab('details')}
                className="w-full bg-amber-500 hover:bg-amber-400 active:scale-98 text-neutral-950 font-bold py-3.5 px-5 rounded-2xl text-xs sm:text-sm transition flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span>{isId ? 'Lanjut: Data Peserta & Kontak ⟶' : 'Continue to Guest Details ⟶'}</span>
              </button>
            ) : (
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setActiveTab('date')}
                  className="px-3 sm:px-4 py-3.5 rounded-2xl border border-neutral-300 bg-white text-neutral-700 font-semibold text-xs sm:text-sm hover:bg-neutral-100 transition cursor-pointer shrink-0"
                >
                  {isId ? '⟵ Tanggal' : '⟵ Date'}
                </button>
                <button
                  type="button"
                  onClick={handleFinalSubmit}
                  className="flex-1 bg-emerald-600 hover:bg-emerald-700 active:scale-98 text-white font-bold py-3.5 px-4 rounded-2xl text-xs sm:text-sm transition flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" />
                  <span>{isId ? 'Konfirmasi ke WhatsApp' : 'Confirm via WhatsApp'}</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* DESKTOP-ONLY RIGHT SIDEBAR SUMMARY (Hidden on mobile to give 100% space to form & calendar) */}
        <div className="hidden md:flex md:w-[320px] lg:w-[340px] bg-neutral-900 text-white p-5 sm:p-6 border-l border-neutral-800 flex-col justify-between shrink-0">
          <div className="space-y-3.5">
            <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider block">
              {isId ? 'Ringkasan Pesanan' : 'Booking Summary'}
            </span>

            {/* Thumbnail Image */}
            <div className="rounded-2xl overflow-hidden h-28 w-full border border-white/10">
              <img
                src={pkg.image}
                alt={pkg.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Key Summary Line Items */}
            <div className="space-y-2 text-xs text-neutral-300 bg-white/5 p-3.5 rounded-2xl border border-white/10">
              <div className="flex items-center justify-between">
                <span className="text-neutral-400">{isId ? 'Tanggal:' : 'Date:'}</span>
                <span className="font-bold text-amber-300">{formattedStartingDate}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-neutral-400">{isId ? 'Peserta:' : 'Guests:'}</span>
                <span className="font-semibold text-white">{guestCount} {isId ? 'Orang' : 'Guests'}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-neutral-400">{isId ? 'Mobil Privat:' : 'Private Car:'}</span>
                <span className="font-semibold text-white">{carsNeeded} {isId ? 'Mobil AC' : 'Car'}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-neutral-400">{isId ? 'Durasi:' : 'Duration:'}</span>
                <span className="font-semibold text-white">{isId ? pkg.duration : pkg.durationEn}</span>
              </div>
            </div>

            {/* Inclusions */}
            <div className="p-3 bg-emerald-950/60 rounded-2xl border border-emerald-500/30 text-[11px] text-emerald-300 space-y-1">
              <div className="font-bold text-emerald-200 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Private AC Car, Driver & BBM</span>
              </div>
              <p className="text-emerald-400/90 text-[10px]">
                Hotel/villa pick-up & drop-off included.
              </p>
            </div>
          </div>

          {/* Total Price Section */}
          <div className="pt-3 border-t border-white/10 mt-3">
            <span className="text-[11px] text-neutral-400 block">
              {isId ? 'Total Biaya' : 'Total Rate'}
            </span>
            <div className="text-2xl font-extrabold text-amber-400">
              USD ${totalUsdPrice}
            </div>
            <p className="text-[10px] text-neutral-400 mt-0.5">
              {isId ? `(${carsNeeded} mobil s.d 10 jam)` : `(${carsNeeded} car up to 10 hrs)`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
