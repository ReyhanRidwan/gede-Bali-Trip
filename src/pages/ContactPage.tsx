import React, { useState } from 'react';
import { PageHeaderBanner } from '../components/PageHeaderBanner';
import { Language, TourPackage } from '../types';
import { COMPANY_INFO } from '../data/packages';
import destBedugul from '../assets/images/dest_bedugul_1790762178211.jpg';
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  ChevronDown,
  ExternalLink,
} from 'lucide-react';

interface ContactPageProps {
  currentLanguage: Language;
  packages: TourPackage[];
  onSelectPackage: (pkg: TourPackage) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  currentLanguage,
  packages,
  onSelectPackage,
}) => {
  const isId = currentLanguage === 'id';

  // Form State
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [tripDate, setTripDate] = useState('');
  const [paxCount, setPaxCount] = useState('2');
  const [selectedPackage, setSelectedPackage] = useState('UBUD HIGHLIGHTS');
  const [pickupArea, setPickupArea] = useState('Kuta / Seminyak');
  const [notes, setNotes] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  // FAQ Open State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Halo GedeBaliTrip, saya ingin reservasi/konsultasi tour Bali:\n\n` +
      `*Nama:* ${name}\n` +
      `*No HP/WA:* ${phoneNumber}\n` +
      `*Paket Tour:* ${selectedPackage}\n` +
      `*Tanggal Trip:* ${tripDate || 'Belum ditentukan'}\n` +
      `*Jumlah Peserta:* ${paxCount} Orang\n` +
      `*Area Penjemputan:* ${pickupArea}\n` +
      `*Catatan Khusus:* ${notes || '-'}\n\n` +
      `Mohon info ketersediaan dan total biayanya. Terima kasih!`
    );

    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${text}`, '_blank');
    setIsSuccess(true);
  };

  const faqs = [
    {
      qId: 'Bagaimana cara melakukan pemesanan paket tour?',
      qEn: 'How do I book a tour package with GedeBaliTrip?',
      aId: 'Pemesanan sangat mudah! Cukup hubungi kami via WhatsApp atau isi form di halaman ini. Tim kami akan mengonfirmasi ketersediaan tanggal, jadwal penjemputan, dan rincian harga secara transparan.',
      aEn: 'Booking is effortless! Simply contact us on WhatsApp or submit the form above. Our team will verify dates, pickup times, and itemized transparent pricing instantly.',
    },
    {
      qId: 'Apakah tour bersifat privat atau digabung dengan rombongan lain?',
      qEn: 'Are the tours private or shared with other groups?',
      aId: 'Semua paket tour GedeBaliTrip bersifat 100% PRIVATE TOUR. Anda dan keluarga tidak akan pernah digabung dengan orang asing di dalam kendaraan demi kenyamanan dan keleluasaan waktu Anda.',
      aEn: 'All our tour packages are 100% PRIVATE. You and your party will never be grouped with strangers in the vehicle for optimal privacy and flexible timing.',
    },
    {
      qId: 'Apakah penjemputan bisa langsung di Bandara Ngurah Rai atau Villa?',
      qEn: 'Can we be picked up directly from DPS Airport or private villa?',
      aId: 'Tentu bisa! Driver kami siap menjemput Anda tepat waktu di seluruh area populer Bali (Kuta, Seminyak, Canggu, Nusa Dua, Jimbaran, Ubud, Sanur) serta penjemputan kedatangan di Bandara Internasional Ngurah Rai.',
      aEn: 'Absolutely! Our drivers provide prompt door-to-door pickup across Bali (Kuta, Seminyak, Canggu, Nusa Dua, Ubud, Sanur) as well as airport arrivals at DPS Ngurah Rai.',
    },
    {
      qId: 'Bagaimana kebijakan pembayaran dan uang muka (DP)?',
      qEn: 'What is the deposit and payment policy?',
      aId: 'Untuk mengunci jadwal driver dan armada, kami hanya memerlukan DP ringan (20-30%). Sisa pembayaran dapat dilunasi secara fleksibel (Transfer / Tunai) saat hari tour berlangsung.',
      aEn: 'To secure your vehicle and driver, we require a small deposit (20-30%). The remaining balance can be settled comfortably via transfer or cash upon trip day.',
    },
    {
      qId: 'Bagaimana jika cuaca buruk saat penyeberangan Nusa Penida?',
      qEn: 'What happens if fast boat is canceled due to extreme sea weather?',
      aId: 'Keselamatan adalah prioritas utama. Jika otoritas pelabuhan membatalkan fast boat karena ombak besar, Anda berhak reschedule tanggal secara gratis atau mendapatkan refund penuh uang muka.',
      aEn: 'Safety is our highest priority. If port authorities halt fast boats due to sea warnings, you receive a 100% free reschedule or a full deposit refund.',
    },
  ];

  return (
    <div className="w-full">
      {/* Short Scenic Bali Header Banner matching screenshot */}
      <PageHeaderBanner
        currentLanguage={currentLanguage}
        title="Hubungi Kami"
        titleEn="Contact Us"
        breadcrumb="Hubungi Kami"
        breadcrumbEn="Contact Us"
        backgroundImage="https://res.cloudinary.com/di6ziqvtp/image/upload/v1790767969/558720c6-5250-4840-877f-7baab5c6d63a.png"
        packages={packages}
        onSelectPackage={onSelectPackage}
      />

      {/* Main Content: Form & Direct Contacts */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left 5 Cols: Quick Contact Cards & Office Details */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">
                {isId ? 'Kontak Langsung' : 'Direct Contacts'}
              </span>
              <h2 className="text-2xl font-bold text-neutral-900 mt-1">
                {isId ? 'Selalu Siap Membantu Anda' : 'We Are Always Ready to Assist'}
              </h2>
              <p className="text-neutral-600 text-xs sm:text-sm mt-1">
                {isId
                  ? 'Respon cepat dalam hitungan menit melalui WhatsApp resmi kami.'
                  : 'Fast response within minutes on our official WhatsApp.'}
              </p>
            </div>

            {/* WhatsApp Card */}
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(
                'Halo GedeBaliTrip, saya ingin konsultasi rencana liburan ke Bali.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-3xl bg-emerald-50 border border-emerald-200 flex items-start gap-4 hover:shadow-md hover:bg-emerald-100/70 transition group block cursor-pointer"
            >
              <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <span className="text-xs font-semibold text-emerald-800 uppercase tracking-wider block">
                  WhatsApp (Fast Response)
                </span>
                <div className="text-lg font-bold text-emerald-950 mt-0.5">
                  {COMPANY_INFO.phone}
                </div>
                <p className="text-xs text-emerald-700 mt-1">
                  {isId ? 'Klik untuk langsung chat dengan Customer Care kami' : 'Click to chat directly with our customer care'}
                </p>
              </div>
            </a>

            {/* Phone Card */}
            <a
              href={`tel:${COMPANY_INFO.whatsapp}`}
              className="p-5 rounded-3xl bg-blue-50 border border-blue-200 flex items-start gap-4 hover:shadow-md hover:bg-blue-100/70 transition group block cursor-pointer"
            >
              <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                <Phone className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <span className="text-xs font-semibold text-blue-800 uppercase tracking-wider block">
                  {isId ? 'Panggilan Telepon' : 'Direct Telephone Call'}
                </span>
                <div className="text-lg font-bold text-blue-950 mt-0.5">
                  {COMPANY_INFO.phone}
                </div>
                <p className="text-xs text-blue-700 mt-1">
                  {isId ? 'Layanan panggilan langsung setiap hari' : 'Available for voice calls daily'}
                </p>
              </div>
            </a>

            {/* Email Card */}
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="p-5 rounded-3xl bg-neutral-50 border border-neutral-200 flex items-start gap-4 hover:shadow-md hover:bg-neutral-100 transition group block"
            >
              <div className="w-12 h-12 rounded-2xl bg-neutral-900 text-white flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider block">
                  Email
                </span>
                <div className="text-sm sm:text-base font-bold text-neutral-900 mt-0.5 group-hover:text-amber-600 transition-colors">
                  {COMPANY_INFO.email}
                </div>
                <p className="text-xs text-neutral-500 mt-1">
                  {isId ? 'Klik untuk kirim email langsung' : 'Click to send email directly'}
                </p>
              </div>
            </a>

            {/* Office, Google Maps & Hours */}
            <div className="p-6 rounded-3xl bg-neutral-900 text-white space-y-4 shadow-lg">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div className="flex-1">
                  <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider block">
                    {isId ? 'Alamat Kantor Utama' : 'Headquarters Address'}
                  </span>
                  <p className="text-xs sm:text-sm text-neutral-200 mt-1 leading-relaxed">
                    {COMPANY_INFO.address}
                  </p>
                  <a
                    href={COMPANY_INFO.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-2.5 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors bg-amber-400/10 hover:bg-amber-400/20 px-3 py-1.5 rounded-xl border border-amber-400/30"
                  >
                    <span>📍 {isId ? 'Buka di Google Maps' : 'Open in Google Maps'}</span>
                    <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-neutral-800">
                <Clock className="w-5 h-5 text-amber-400 shrink-0" />
                <div>
                  <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider block">
                    {isId ? 'Jam Operasional' : 'Operating Hours'}
                  </span>
                  <p className="text-xs sm:text-sm text-neutral-200 mt-0.5">
                    {COMPANY_INFO.hours}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right 7 Cols: Interactive Consultation & Reservation Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-10 rounded-3xl border border-neutral-200 shadow-xl">
              <div className="mb-6">
                <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">
                  {isId ? 'Formulir Reservasi' : 'Booking Form'}
                </span>
                <h3 className="text-2xl font-bold text-neutral-900 mt-1">
                  {isId ? 'Kirim Rencana Liburan Anda' : 'Send Us Your Travel Plan'}
                </h3>
                <p className="text-neutral-500 text-xs sm:text-sm mt-1">
                  {isId
                    ? 'Isi formulir di bawah ini dan kami akan mengirimkan estimasi biaya serta ketersediaan jadwal secara instan ke WhatsApp Anda.'
                    : 'Fill in the details below for instant itinerary confirmation and pricing via WhatsApp.'}
                </p>
              </div>

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
                      placeholder="Contoh: Budi Pratama"
                      className="w-full px-4 py-3 rounded-2xl border border-neutral-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">
                      {isId ? 'Nomor WhatsApp Aktif' : 'WhatsApp Number'} *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="Contoh: 08123456789"
                      className="w-full px-4 py-3 rounded-2xl border border-neutral-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">
                      {isId ? 'Rencana Tanggal Tour' : 'Planned Tour Date'}
                    </label>
                    <input
                      type="date"
                      value={tripDate}
                      onChange={(e) => setTripDate(e.target.value)}
                      className="w-full px-4 py-3 rounded-2xl border border-neutral-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">
                      {isId ? 'Jumlah Peserta (Pax)' : 'Number of Guests'}
                    </label>
                    <select
                      value={paxCount}
                      onChange={(e) => setPaxCount(e.target.value)}
                      className="w-full px-4 py-3 rounded-2xl border border-neutral-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500 bg-white"
                    >
                      <option value="1">1 Orang (Solo)</option>
                      <option value="2">2 Orang (Pasangan / Couple)</option>
                      <option value="3-4">3 - 4 Orang (Keluarga Kecil)</option>
                      <option value="5-7">5 - 7 Orang (Keluarga / Grup)</option>
                      <option value="8-14">8 - 14 Orang (Rombongan Hiace)</option>
                      <option value="15+">15+ Orang (Grup Bus / Corporate)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">
                      {isId ? 'Pilihan Paket Tour' : 'Select Tour Package'}
                    </label>
                    <select
                      value={selectedPackage}
                      onChange={(e) => setSelectedPackage(e.target.value)}
                      className="w-full px-4 py-3 rounded-2xl border border-neutral-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500 bg-white"
                    >
                      {packages.map((pkg) => (
                        <option key={pkg.id} value={pkg.title}>
                          {isId ? pkg.title : pkg.titleEn}
                        </option>
                      ))}
                      <option value="Custom Tour Sendiri">Custom Tour Sesuai Rute Sendiri</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">
                      {isId ? 'Lokasi Penjemputan' : 'Pickup Location Area'}
                    </label>
                    <input
                      type="text"
                      value={pickupArea}
                      onChange={(e) => setPickupArea(e.target.value)}
                      placeholder="Contoh: Hotel Kuta / Villa Seminyak / Bandara DPS"
                      className="w-full px-4 py-3 rounded-2xl border border-neutral-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    {isId ? 'Catatan Tambahan / Permintaan Khusus' : 'Special Notes or Dietary Requests'}
                  </label>
                  <textarea
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder={isId ? 'Misal: Bawa anak kecil, butuh car seat, atau request spot sunset tertentu...' : 'E.g. Traveling with infant, requesting sunset spot...'}
                    className="w-full px-4 py-3 rounded-2xl border border-neutral-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-6 rounded-2xl transition shadow-lg flex items-center justify-center gap-2.5 cursor-pointer text-sm sm:text-base active:scale-98"
                >
                  <Send className="w-5 h-5" />
                  <span>{isId ? 'Kirim & Dapatkan Penawaran di WhatsApp' : 'Send & Get Offer via WhatsApp'}</span>
                </button>

                {isSuccess && (
                  <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span>{isId ? 'Form berhasil dibuka di WhatsApp! Tim kami segera merespon.' : 'Form redirected to WhatsApp! Our team will respond shortly.'}</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* Frequently Asked Questions (FAQ) */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">
              {isId ? 'Tanya Jawab' : 'Common Inquiries'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 mt-1">
              {isId ? 'Pertanyaan yang Sering Diajukan' : 'Frequently Asked Questions (FAQ)'}
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-neutral-200 bg-white overflow-hidden transition-all shadow-xs"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-neutral-900 hover:text-amber-600 transition cursor-pointer"
                  >
                    <span>{isId ? faq.qId : faq.qEn}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-neutral-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-amber-600' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-neutral-100 bg-neutral-50/50">
                      {isId ? faq.aId : faq.aEn}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
