'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
   Car,
   MapPin,
   Phone,
   User,
   Calendar,
   Wallet,
   ArrowRight,
   X,
   CheckCircle2,
   MessageSquare,
   ChevronRight,
   ChevronLeft,
   TrendingUp,
   Clock,
   ImageIcon
} from 'lucide-react';
import { toast } from 'react-hot-toast';
import Link from 'next/link';

export default function BiddingPage() {
   const [cars, setCars] = useState<any[]>([]);
   const [loading, setLoading] = useState(true);
   const [selectedCar, setSelectedCar] = useState<any>(null);
   const [step, setStep] = useState(1);
   const [isSubmitting, setIsSubmitting] = useState(false);
   const [isSubmitted, setIsSubmitted] = useState(false);
   const [agreedToTerms, setAgreedToTerms] = useState(false);
   const [priceError, setPriceError] = useState("");
   const [formData, setFormData] = useState({
      name: '',
      phone: '',
      city: '',
      carModel: '',
      bidPrice: '',
      purchaseTimeline: 'Immediately',
      purchaseMode: 'Full Payment'
   });

   useEffect(() => {
      fetch('/api/cars/bidding')
         .then(res => res.json())
         .then(data => {
            if (Array.isArray(data)) {
               setCars(data);
            } else {
               console.error('Bidding API error:', data);
               setCars([]);
            }
            setLoading(false);
         })
         .catch(() => {
            setCars([]);
            setLoading(false);
         });
   }, []);

   const getCarImage = (modelName: string) => {
      const name = modelName?.toLowerCase() || '';
      if (name.includes('glanza')) return '/models/glanza.png';
      if (name.includes('taisor')) return '/models/taisor.png';
      if (name.includes('rumion')) return '/models/rumion.png';
      if (name.includes('hyryder')) return '/models/hyryder.png';
      if (name.includes('innova')) return '/models/innova-hycross.png';
      if (name.includes('fortuner')) return '/models/fortuner.png';
      if (name.includes('hilux')) return '/models/hilux.png';
      return '/models/glanza.png'; // Fallback
   };

   const CarImageSlider = ({ car }: { car: any }) => {
      const [currentIndex, setCurrentIndex] = useState(0);
      const hasImages = car.images && car.images.length > 0;

      const next = (e: React.MouseEvent) => {
         e.stopPropagation();
         setCurrentIndex((prev) => (prev + 1) % car.images.length);
      };

      const prev = (e: React.MouseEvent) => {
         e.stopPropagation();
         setCurrentIndex((prev) => (prev - 1 + car.images.length) % car.images.length);
      };

      if (!hasImages) {
         return (
            <img
               src={getCarImage(car.modelId?.modelName)}
               className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500 p-4"
               alt={car.variantName}
            />
         );
      }

      return (
         <div className="relative w-full h-full group/slider">
            <img
               src={car.images[currentIndex]}
               className="w-full h-full object-cover transition-all duration-500"
               alt={`${car.variantName} - View ${currentIndex + 1}`}
            />

            {car.images.length > 1 && (
               <>
                  <button
                     onClick={prev}
                     className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 bg-white/80 backdrop-blur-sm rounded-full text-gray-900 opacity-0 group-hover/slider:opacity-100 transition-opacity hover:bg-white shadow-lg"
                  >
                     <ChevronLeft size={16} />
                  </button>
                  <button
                     onClick={next}
                     className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-white/80 backdrop-blur-sm rounded-full text-gray-900 opacity-0 group-hover/slider:opacity-100 transition-opacity hover:bg-white shadow-lg"
                  >
                     <ChevronRight size={16} />
                  </button>

                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-1.5">
                     {car.images.map((_: any, i: number) => (
                        <div
                           key={i}
                           className={`h-1 rounded-full transition-all duration-300 ${i === currentIndex ? 'w-4 bg-red-600' : 'w-1 bg-white/50'}`}
                        />
                     ))}
                  </div>
               </>
            )}
         </div>
      );
   };
   const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;

      setFormData({ ...formData, bidPrice: value });

      if (value && Number(value) < selectedCar.minPrice) {
         setPriceError(
            `Minimum bid is ₹${selectedCar.minPrice.toLocaleString("en-IN")}`
         );
      } else {
         setPriceError("");
      }
   };

   const handleOpenForm = (car: any) => {
      setSelectedCar(car);
      setFormData({ ...formData, carModel: `${car.modelId?.modelName} ${car.variantName}` });
      setStep(1);
      setIsSubmitted(false);
   };

   const handleNext = () => setStep(step + 1);
   const handleBack = () => setStep(step - 1);

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      if (step < 3) return handleNext();

      setIsSubmitting(true);
      try {
         const res = await fetch('/api/bidding', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
               ...formData,
               carId: selectedCar._id,
               agreedToTerms,
            }),
         });

         if (res.ok) {
            setIsSubmitted(true);

         } else {
            toast.error('Submission failed. Please try again.');
            setIsSubmitting(false);
         }
      } catch (err) {
         toast.error('Network error');
         setIsSubmitting(false);
      }
   };

   if (loading) return (
      <div className="flex items-center justify-center min-h-screen">
         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
      </div>
   );

   return (
      <div className="min-h-screen bg-slate-50">
         {/* Hero Section */}
         <section className="bg-white border-b overflow-hidden pt-12 pb-16">
            <div className="container mx-auto px-4 max-w-6xl">
               <div className="flex flex-col md:flex-row items-center gap-12">
                  <div className="flex-1 space-y-6">
                     <span className="inline-block px-3 py-1 bg-red-50 text-red-600 rounded-full text-xs font-bold uppercase tracking-wider">Limited Offer</span>
                     <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
                        Bid Your Price for a <span className="text-red-600">Toyota</span>
                     </h1>
                     <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                        Get a chance to own a Toyota demo car at your preferred price. Submit your bid now — limited vehicles available.
                     </p>
                     <div className="flex items-center space-x-4 text-sm font-medium text-gray-500">
                        <div className="flex items-center"><CheckCircle2 className="text-green-500 mr-2" size={18} /> Best Price Wins</div>
                        <div className="flex items-center"><CheckCircle2 className="text-green-500 mr-2" size={18} /> Instant Review</div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* Car Grid */}
         <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4 max-w-6xl">
               <div className="flex items-center justify-between mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                     <TrendingUp className="mr-3 text-red-600" /> Currently On Bid
                  </h2>
                  <p className="text-sm text-gray-500">Total available cars: {cars.length}</p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {cars.map((car) => (
                     <div key={car._id} className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100 group">
                        <div className="relative h-48 bg-slate-100 overflow-hidden">
                           <div className="absolute top-4 left-4 z-10">
                              <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-gray-900 border border-white/20">Demo Car</span>
                           </div>
                           <CarImageSlider car={car} />
                        </div>
                        <div className="p-6">
                           <h3 className="text-xl font-bold text-gray-900 mb-1">{car.modelId?.modelName}</h3>
                           <p className="text-sm text-gray-500 font-medium mb-4">{car.variantName} • {car.manufactureYear}</p>

                           <div className="flex items-center justify-between py-4 border-t border-b border-slate-50 mb-6">
                              <div className="flex flex-col">
                                 <span className="text-[10px] text-gray-400 uppercase font-black tracking-tighter">
                                    Market Value approx.
                                 </span>
                                 <span className="text-lg font-black text-gray-900">
                                    ₹{car.minPrice?.toLocaleString("en-IN")}
                                 </span>
                              </div>
                           </div>

                           <button
                              onClick={() => handleOpenForm(car)}
                              className="w-full py-4 bg-gray-900 text-white rounded-2xl font-bold hover:bg-red-600 transition-all flex items-center justify-center group"
                           >
                              Bid Your Price <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                           </button>
                        </div>
                     </div>
                  ))}
               </div>

               {cars.length === 0 && (
                  <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-slate-200">
                     <Car size={64} className="mx-auto text-slate-200 mb-4" />
                     <h3 className="text-xl font-bold text-gray-900">New Bidding Starting Soon!</h3>
                     <p className="text-gray-500">Currently all demo cars are sold. Check back shortly.</p>
                  </div>
               )}
            </div>
         </section>

         {/* Bidding Modal */}
         {selectedCar && (
            <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
               <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm" onClick={() => setSelectedCar(null)}></div>

               <div className="relative bg-white w-full max-w-xl rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in duration-300">
                  {/* Progress Bar */}
                  <div className="h-1.5 w-full bg-slate-100 flex">
                     <div className="h-full bg-red-600 transition-all duration-500" style={{ width: `${(step / 3) * 100}%` }}></div>
                  </div>

                  <button onClick={() => setSelectedCar(null)} className="absolute top-6 right-6 text-gray-400 hover:text-gray-900 transition-colors">
                     <X size={24} />
                  </button>

                  <div className="p-8 md:p-12">
                     {!isSubmitted ? (
                        <form onSubmit={handleSubmit} className="space-y-8">
                           {/* Step Headers */}
                           <div className="space-y-2">
                              <span className="text-red-600 text-xs font-black uppercase tracking-widest">Step {step} of 3</span>
                              <h2 className="text-2xl font-bold text-gray-900">
                                 {step === 1 && "Basic Details"}
                                 {step === 2 && "Your Offer"}
                                 {step === 3 && "Purchase Intent"}
                              </h2>
                           </div>

                           {step === 1 && (
                              <div className="space-y-4">
                                 <div className="relative">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                    <input
                                       required
                                       placeholder="Full Name"
                                       value={formData.name}
                                       onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                       className="w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-red-600 outline-none transition-all font-medium text-black placeholder-gray-600"
                                    />
                                 </div>
                                 <div className="relative">
                                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                    <input
                                       required
                                       type="tel"
                                       placeholder="Phone Number"
                                       value={formData.phone}
                                       onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                       className="w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-red-600 outline-none transition-all font-medium text-black placeholder-gray-600"
                                    />
                                 </div>
                                 <div className="relative">
                                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                    <input
                                       required
                                       placeholder="City / Location"
                                       value={formData.city}
                                       onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                                       className="w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-red-600 outline-none transition-all font-medium text-black placeholder-gray-600"
                                    />
                                 </div>
                              </div>
                           )}

                           {step === 2 && (
                              <div className="space-y-6">
                                 <div>
                                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Interested Model</label>
                                    <div className="p-4 bg-slate-100 rounded-2xl font-bold text-gray-900 flex items-center">
                                       <Car className="mr-3 text-red-600" size={20} /> {formData.carModel}
                                    </div>
                                 </div>
                                 <div>
                                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">What price would you like to offer?</label>
                                    <div className="relative">
                                       <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-gray-400 text-lg">₹</span>
                                       <input
                                          required
                                          type="number"
                                          placeholder={`Min ₹${selectedCar.minPrice?.toLocaleString("en-IN")}`}
                                          value={formData.bidPrice}
                                          onChange={handlePriceChange}
                                          className={`w-full pl-10 pr-4 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-red-600 outline-none transition-all font-black text-lg text-black placeholder-gray-600 ${priceError ? "border-red-500" : "border-gray-200"}`}
                                       />
                                    </div>
                                    {priceError && (
                                       <p className="text-red-500 text-sm mt-2 font-medium">{priceError}</p>
                                    )}
                                    {selectedCar.minBidHint && (
                                       <div className="mt-3 p-3 bg-red-50 text-red-600 rounded-xl text-[10px] font-bold flex items-center">
                                          <Clock className="mr-2" size={14} /> Bids closer to ₹{selectedCar.minBidHint.toLocaleString()} have higher chances of approval
                                       </div>
                                    )}
                                 </div>
                              </div>
                           )}

                           {step === 3 && (
                              <div className="space-y-6">
                                 <div>
                                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Purchase Timeline</label>
                                    <div className="grid grid-cols-2 gap-2">
                                       {['Immediately', 'Within 15 days', 'Within 1 month', 'Just exploring'].map((t) => (
                                          <button
                                             key={t}
                                             type="button"
                                             onClick={() => setFormData({ ...formData, purchaseTimeline: t })}
                                             className={`p-3 rounded-xl border-2 text-xs font-bold transition-all ${formData.purchaseTimeline === t ? 'border-red-600 bg-red-50 text-red-600' : 'border-slate-100 text-gray-500 hover:border-slate-200'}`}
                                          >
                                             {t}
                                          </button>
                                       ))}
                                    </div>
                                 </div>
                                 <div>
                                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Mode of Purchase</label>
                                    <div className="grid grid-cols-2 gap-2">
                                       {['Full Payment', 'Loan / Finance'].map((m) => (
                                          <button
                                             key={m}
                                             type="button"
                                             onClick={() => setFormData({ ...formData, purchaseMode: m })}
                                             className={`p-4 rounded-xl border-2 text-xs font-bold transition-all ${formData.purchaseMode === m ? 'border-red-600 bg-red-50 text-red-600' : 'border-slate-100 text-gray-500 hover:border-slate-200'}`}
                                          >
                                             {m}
                                          </button>
                                       ))}
                                    </div>
                                 </div>
                                 <div className="flex items-start space-x-3 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                                    <input
                                       type="checkbox"
                                       id="terms"
                                       required
                                       checked={agreedToTerms}
                                       onChange={(e) => setAgreedToTerms(e.target.checked)}
                                       className="mt-1 h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded cursor-pointer"
                                    />
                                    <label htmlFor="terms" className="text-[10px] text-gray-500 leading-relaxed cursor-pointer select-none">
                                       I agree to the <Link href="/terms-and-conditions" className="font-bold text-gray-900 border-b border-gray-200 hover:text-red-600 transition-colors">Bidding Terms & Conditions</Link>. I understand that the final price is subject to inspection and management approval.
                                    </label>
                                 </div>

                                 <p className="text-[10px] text-gray-400 italic text-center">
                                    Final selection based on best suitable offer. <Link href="/terms-and-conditions">Terms & conditions</Link> apply.
                                 </p>
                              </div>
                           )}

                           <div className="flex items-center space-x-3 pt-4">
                              {step > 1 && (
                                 <button
                                    type="button"
                                    onClick={handleBack}
                                    className="px-6 py-4 bg-slate-100 text-gray-600 rounded-2xl font-bold hover:bg-slate-200 transition-all"
                                 >
                                    Back
                                 </button>
                              )}
                              <button
                                 type="submit"
                                 disabled={isSubmitting || (step === 3 && !agreedToTerms)}
                                 className={`flex-1 py-4 text-white rounded-2xl font-bold transition-all flex items-center justify-center shadow-lg ${isSubmitting || (step === 3 && !agreedToTerms) ? 'bg-gray-400 shadow-none cursor-not-allowed' : 'bg-red-600 hover:bg-red-700 shadow-red-200'}`}
                              >
                                 {isSubmitting ? (
                                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                                 ) : (
                                    <>
                                       {step === 3 ? "Submit Your Bid" : "Continue"}
                                       <ChevronRight className="ml-1" size={20} />
                                    </>
                                 )}
                              </button>
                           </div>
                        </form>
                     ) : (
                        <div className="text-center space-y-8 animate-in slide-in-from-bottom duration-500">
                           <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                              <CheckCircle2 size={40} />
                           </div>
                           <div className="space-y-3">
                              <h2 className="text-2xl md:text-3xl font-black text-gray-900 leading-tight">Your Bid Has Been Submitted!</h2>
                              <p className="text-gray-500 font-medium">Our team will review your offer and contact you shortly. Best price wins the deal!</p>
                           </div>

                           <div className="space-y-3 pt-6">
                              <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Redirecting to WhatsApp...</p>
                              <div className="flex space-x-3">
                                 <a
                                    href={`https://wa.me/919583765431?text=${encodeURIComponent('Hi, I am enquiry for my bid...')}`} // Static fallback
                                    className="flex-1 py-4 bg-green-600 text-white rounded-2xl font-bold hover:bg-green-700 transition-all flex items-center justify-center shadow-lg shadow-green-100"
                                 >
                                    <MessageSquare className="mr-2" size={20} /> WhatsApp Us
                                 </a>
                                 <a
                                    href="tel:919583765431"
                                    className="flex-1 py-4 bg-gray-900 text-white rounded-2xl font-bold hover:bg-black transition-all flex items-center justify-center shadow-lg shadow-gray-100"
                                 >
                                    <Phone className="mr-2" size={20} /> Call Now
                                 </a>
                              </div>
                           </div>
                        </div>
                     )}
                  </div>
               </div>
            </div>
         )}

         {/* Footer Disclaimer */}
         <footer className="py-12 bg-white border-t">
            <div className="container mx-auto px-4 text-center max-w-lg">
               <img src="/logo.png" className="h-12 mx-auto mb-6 opacity-80" alt="Toyota Logo" />
               <p className="text-xs text-gray-400 leading-relaxed font-medium">
                  © 2026 Espirit Toyota. Bidding closer to market value has higher chances of approval. Limited time offer only on demo fleet. Selection criteria solely based on management discretion.
               </p>
            </div>
         </footer>
      </div>
   );
}
