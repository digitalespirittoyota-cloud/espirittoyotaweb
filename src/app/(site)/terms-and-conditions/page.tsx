import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck, FileText, Scale } from 'lucide-react';

export default function TermsPage() {
   const terms = [
      "This campaign is conducted by Espirit Toyota for the sale of selected demo vehicles used for showroom display and test drive purposes.",
      "All vehicles offered under this campaign are demo cars and may have been previously used for test drives or internal purposes. The condition, mileage, and usage details will be shared with interested buyers upon request.",
      "Customers can submit their bid price for the selected vehicle through the official form, website, or WhatsApp channel.",
      "Submission of a bid does not guarantee purchase. The final sale decision will be made solely by Espirit Toyota based on the most suitable offer.",
      "Espirit Toyota reserves the full right to accept or reject any bid without providing a reason.",
      "The highest bid may not necessarily be accepted. Factors such as negotiation, documentation readiness, and purchase timeline may be considered.",
      "Bids once submitted cannot be modified. Customers are advised to enter their best possible offer.",
      "All selected customers will be contacted by the sales team for further verification and negotiation.",
      "Vehicle allocation will be on a first-come, first-served basis among shortlisted bidders who complete the booking process.",
      "Prices quoted in bids are exclusive of applicable taxes, registration charges, insurance, and any additional fees unless explicitly stated.",
      "The customer must complete the booking amount/payment within the timeline communicated by the dealership. Failure to do so may result in cancellation of the offer.",
      "Espirit Toyota reserves the right to withdraw, modify, or extend the campaign at any time without prior notice.",
      "This campaign is valid for a limited period and for limited stock only.",
      "By submitting the form, the customer agrees to be contacted via call, SMS, WhatsApp, or email for campaign-related communication.",
      "All disputes, if any, will be subject to the jurisdiction of the city where the dealership is located.",
      "Standard dealership policies, documentation requirements, and delivery processes will apply to all purchases under this campaign.",
      "Terms and conditions apply. For detailed information, please contact the dealership directly."
   ];

   return (
      <div className="min-h-screen bg-slate-50 py-12 px-4">
         <div className="container mx-auto max-w-4xl">
            {/* Header */}
            <div className="mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
               <div>
                  <Link 
                     href="/ubid" 
                     className="inline-flex items-center text-sm font-bold text-gray-500 hover:text-red-600 transition-colors mb-4 group"
                  >
                     <ArrowLeft size={18} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Bidding
                  </Link>
                  <h1 className="text-4xl font-black text-gray-900 leading-tight">
                     Campaign <span className="text-red-600">Terms</span>
                  </h1>
                  <p className="text-gray-500 mt-2 font-medium">Toyota Demo Car Bidding Campaign • Espirit Toyota</p>
               </div>
               <div className="bg-red-600 text-white p-4 rounded-3xl shadow-lg shadow-red-200 flex items-center space-x-4">
                  <ShieldCheck size={32} />
                  <div className="text-xs">
                     <p className="font-black uppercase tracking-widest">Official Rules</p>
                     <p className="opacity-80">Toyota Demo Program</p>
                  </div>
               </div>
            </div>

            {/* Terms List */}
            <div className="bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 p-8 md:p-16">
               <div className="flex items-center space-x-3 text-red-600 mb-10">
                  <FileText size={28} />
                  <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight">Terms & Conditions</h2>
               </div>

               <div className="space-y-6">
                  {terms.map((term, index) => (
                     <div key={index} className="flex items-start group">
                        <div className="flex-shrink-0 w-8 h-8 bg-slate-50 rounded-xl flex items-center justify-center text-xs font-black text-red-600 border border-slate-100 group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600 transition-all duration-300 mr-4">
                           {index + 1}
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed pt-1.5 font-medium">
                           {term}
                        </p>
                     </div>
                  ))}
               </div>

               {/* Legal Footer */}
               <section className="mt-16 pt-10 border-t border-slate-100">
                  <div className="bg-gray-900 p-10 rounded-[2.5rem] text-white overflow-hidden relative">
                     <div className="relative z-10">
                        <h3 className="text-xl font-bold mb-4 flex items-center">
                           <Scale className="mr-3 text-red-500" size={24} /> Jurisdiction & Policy
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-2xl">
                           Participating in this campaign implies full acceptance of the terms listed above. Espirit Toyota maintains absolute discretion in the vehicle allocation process to ensure the best possible service for all our customers.
                        </p>
                        <div className="flex flex-wrap items-center gap-4 text-[10px] text-gray-500 uppercase font-black tracking-widest">
                           <span className="bg-white/5 px-3 py-1 rounded-full">© 2026 Espirit Toyota</span>
                           <span className="bg-white/5 px-3 py-1 rounded-full">Authorized Toyota Dealer</span>
                        </div>
                     </div>
                     {/* Decorative element */}
                     <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-red-600/10 rounded-full blur-3xl"></div>
                  </div>
               </section>
            </div>

            {/* Help Callout */}
            <div className="mt-12 text-center">
               <p className="text-sm text-gray-400 mb-4">Questions about these terms?</p>
               <a 
                  href="tel:+919583765431"
                  className="inline-flex items-center space-x-2 text-gray-900 font-black hover:text-red-600 transition-colors"
               >
                  <span>Connect with Dealership</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
                  <span>+91 95837 65431</span>
               </a>
            </div>
         </div>
      </div>
   );
}
