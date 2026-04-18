'use client';

import React, { useState, useEffect, use } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCustomers } from '@/admin/redux/customerSlice';
import { ChevronLeft, Phone, MessageSquare, User, Calendar, Car as CarIcon, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { toast } from 'react-hot-toast';

export default function CarLeadsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const dispatch = useDispatch();
  const { items: allEnquiries = [], loading: loadingEnquiries } = useSelector((state: any) => state.customers || {});
  const [car, setCar] = useState<any>(null);
  const [loadingCar, setLoadingCar] = useState(true);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchCarAndLeads = async () => {
      try {
        const res = await fetch(`/api/admin/cars/${id}`);
        if (res.ok) {
          const data = await res.json();
          setCar(data);
        } else {
          toast.error('Car not found');
        }
      } catch (err) {
        toast.error('Error fetching car details');
      } finally {
        setLoadingCar(false);
      }
      dispatch(fetchCustomers() as any);
    };

    fetchCarAndLeads();
  }, [id, dispatch]);

  const matchLower = (leadModel: string, carModelName: string, carVariant: string) => {
    if (!leadModel) return false;
    const l = leadModel.toLowerCase();
    const m = (carModelName || '').toLowerCase();
    const v = (carVariant || '').toLowerCase();
    
    // Check if the lead model string contains the model name OR the variant
    // Also check for split keywords (e.g., "Innova" from "Innova Hycross")
    if (m && l.includes(m)) return true;
    if (v && l.includes(v)) return true;
    
    // Check keyword overlap (e.g. "Glanza V-AMT" matches if "Glanza" or "V-AMT" is in there)
    const leadKeywords = l.split(/[\s-]+/);
    if (m && leadKeywords.some(kw => kw.length > 2 && m.includes(kw))) return true;
    if (v && leadKeywords.some(kw => kw.length > 1 && v.includes(kw))) return true;

    return false;
  };

  const matchingLeads = allEnquiries.filter((e: any) => 
    showAll || 
    e.carId === id || // High-precision match using Database ID
    matchLower(e.carModel || '', car?.modelId?.modelName || '', car?.variantName || '') // Fallback for older leads
  );

  if (loadingCar || loadingEnquiries) {
    return (
      <div className="flex flex-col items-center justify-center h-64 space-y-4">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-red-600"></div>
        <p className="text-sm text-gray-500 font-medium">Loading details...</p>
      </div>
    );
  }

  if (!car) {
    return (
      <div className="text-center py-20">
        <h3 className="text-lg font-medium text-gray-900">Car not found</h3>
        <Link href="/admin/cars" className="text-red-600 hover:text-red-700 font-medium mt-4 inline-block">
          Back to Inventory
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* Header & Back Button */}
      <div className="flex flex-col space-y-4">
        <Link 
          href="/admin/cars" 
          className="inline-flex items-center text-sm text-gray-500 hover:text-red-600 transition-colors w-fit group"
        >
          <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Inventory
        </Link>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              {car.modelId?.modelName} <span className="text-red-600">{car.variantName}</span>
            </h1>
            <p className="text-gray-500 flex items-center mt-1">
              <span className="inline-block w-3 h-3 rounded-full mr-2" style={{ backgroundColor: car.color?.toLowerCase() }} />
              {car.color} • {car.manufactureYear} • {car.minPrice ? `₹${car.minPrice.toLocaleString()}` : 'Price N/A'}
            </p>
          </div>
          <div className="flex items-center space-x-4">
             <div className="flex bg-gray-100 p-1 rounded-xl border border-gray-200">
                <button 
                  onClick={() => setShowAll(false)}
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${!showAll ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  This Car
                </button>
                <button 
                  onClick={() => setShowAll(true)}
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${showAll ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  All Leads
                </button>
             </div>
             <div className="flex items-center space-x-2">
                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${car.status === 'available' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {car.status}
                </span>
                <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                    {matchingLeads.length} {showAll ? 'Total' : 'Matching'}
                </span>
             </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {matchingLeads.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-300">
            <User size={48} className="mx-auto text-gray-200 mb-4" />
            <h3 className="text-lg font-medium text-gray-900">No matching leads</h3>
            <p className="text-sm text-gray-500">We couldn't find any customers interested in this specific variant yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {matchingLeads.map((lead: any) => (
              <div key={lead._id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4">
                  <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase ${lead.status === 'new' ? 'bg-blue-50 text-blue-600' : 'bg-gray-100 text-gray-500'}`}>
                    {lead.status}
                  </span>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-slate-50 p-3 rounded-full text-slate-400 group-hover:bg-red-50 group-hover:text-red-500 transition-colors">
                    <User size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 leading-tight">{lead.name}</h3>
                    <p className="text-sm text-gray-500 mb-4">{lead.email}</p>
                    
                    <div className="grid grid-cols-2 gap-4 text-xs">
                      <div>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Inquiry Model</p>
                        <p className="text-gray-900 font-medium">{lead.carModel || 'N/A'}</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Date Received</p>
                        <p className="text-gray-900 font-medium">{new Date(lead.createdAt).toLocaleDateString()}</p>
                      </div>
                    </div>

                    {lead.formType === 'Bidding' && (
                       <div className="mt-4 p-4 bg-red-50 rounded-2xl border border-red-100 flex flex-col space-y-3">
                          <div className="flex justify-between items-center pb-2 border-b border-red-100">
                             <span className="text-[10px] font-bold text-red-400 uppercase tracking-widest">Customer Offer</span>
                             <span className="text-lg font-black text-red-600">₹{lead.bidPrice?.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between text-[10px] font-bold">
                             <div className="flex flex-col">
                                <span className="text-gray-400 uppercase tracking-wider mb-1">Timeline</span>
                                <span className="text-gray-900 capitalize">{lead.purchaseTimeline}</span>
                             </div>
                             <div className="flex flex-col text-right">
                                <span className="text-gray-400 uppercase tracking-wider mb-1">Payment Mode</span>
                                <span className="text-gray-900 capitalize">{lead.purchaseMode}</span>
                             </div>
                          </div>
                       </div>
                    )}

                    <div className="mt-4 p-3 bg-gray-50 rounded-xl text-xs text-gray-600 italic border border-gray-100 line-clamp-2">
                       "{lead.message || 'Interested in this vehicle.'}"
                    </div>

                    <div className="flex space-x-3 mt-6">
                      <a 
                        href={`tel:${lead.phone}`}
                        className="flex-1 inline-flex justify-center items-center py-2.5 bg-red-600 text-white rounded-xl text-sm font-bold hover:bg-red-700 transition-all shadow-sm"
                      >
                        <Phone size={16} className="mr-2" /> Call
                      </a>
                      <a 
                        href={`https://wa.me/${lead.phone.replace(/[^0-9]/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex justify-center items-center py-2.5 bg-green-600 text-white rounded-xl text-sm font-bold hover:bg-green-700 transition-all shadow-sm"
                      >
                        <MessageSquare size={16} className="mr-2" /> WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
