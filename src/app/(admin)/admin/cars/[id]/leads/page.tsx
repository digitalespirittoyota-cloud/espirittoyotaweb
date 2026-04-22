'use client';

import React, { useState, useEffect, use } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBids, updateBidStatus } from '@/admin/redux/bidSlice';
import { ChevronLeft, Phone, MessageSquare, User, Calendar, Car as CarIcon, ArrowLeft, IndianRupee, Tag, Search, Filter, ArrowUpDown, Mail, Clock, TrendingUp, Eye } from 'lucide-react';
import Modal from '@/admin/components/Modal';
import Link from 'next/link';
import { toast } from 'react-hot-toast';

export default function CarLeadsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  console.log(id);
  const dispatch = useDispatch();
  const { items: allBids = [], loading: loadingBids } = useSelector((state: any) => state.bids || {});
  const [car, setCar] = useState<any>(null);
  const [loadingCar, setLoadingCar] = useState(true);

  // Filtering & Sorting State
  const [searchQuery, setSearchQuery] = useState('');
  const [modeFilter, setModeFilter] = useState('All');
  const [sortOrder, setSortOrder] = useState('date-desc'); // date-desc, date-asc, price-desc, price-asc
  const [selectedBid, setSelectedBid] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchCarAndLeads = async () => {
      try {
        const res = await fetch(`/api/admin/cars/${id}`);
        if (res.ok) {
          const data = await res.json();
          console.log(data);
          setCar(data);
        } else {
          toast.error('Car not found');
        }
      } catch (err) {
        toast.error('Error fetching car details');
      } finally {
        setLoadingCar(false);
      }
      dispatch(fetchBids({ carId: id }) as any);
    };

    fetchCarAndLeads();
  }, [id, dispatch]);



  const processedLeads = allBids
    .filter((b: any) => b.carId === id)
    .filter((b: any) => {
      // Search Filter
      const matchesSearch =
        b.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (b.email || '').toLowerCase().includes(searchQuery.toLowerCase());

      // Mode Filter
      const matchesMode = modeFilter === 'All' || b.purchaseMode === modeFilter;

      return matchesSearch && matchesMode;
    })
    .sort((a: any, b: any) => {
      // Sorting
      if (sortOrder === 'date-desc') return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      if (sortOrder === 'date-asc') return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
      if (sortOrder === 'price-desc') return b.bidPrice - a.bidPrice;
      if (sortOrder === 'price-asc') return a.bidPrice - b.bidPrice;
      return 0;
    });

  const openDetails = (lead: any) => {
    setSelectedBid(lead);
    setIsModalOpen(true);
  };

  const handleStatusUpdate = async (bidId: string, newStatus: string) => {
    try {
      const updatedBid = await dispatch(updateBidStatus({ id: bidId, status: newStatus }) as any).unwrap();
      toast.success(`Bid ${newStatus} successfully!`);
      // Update local state for modal if it's open
      if (selectedBid && selectedBid._id === bidId) {
        setSelectedBid(updatedBid);
      }
    } catch (err) {
      toast.error('Failed to update status');
    }
  };

  if (loadingCar || loadingBids) {
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
        </div>
      </div>

      {/* Filter & Sort Toolbar */}
      <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search customer name or email..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all text-sm"
          />
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:flex-none">
            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
            <select
              value={modeFilter}
              onChange={(e) => setModeFilter(e.target.value)}
              className="w-full md:w-44 pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/20 text-sm appearance-none"
            >
              <option value="All">All Payments</option>
              <option value="Full Payment">Full Payment</option>
              <option value="Loan / Finance">Loan / Finance</option>
            </select>
          </div>

          <div className="relative flex-1 md:flex-none">
            <ArrowUpDown className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="w-full md:w-44 pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/20 text-sm appearance-none"
            >
              <option value="date-desc">Newest First</option>
              <option value="date-asc">Oldest First</option>
              <option value="price-desc">Highest Offer</option>
              <option value="price-asc">Lowest Offer</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {processedLeads.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-300">
            <div className="bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Tag size={32} className="text-gray-300" />
            </div>
            <h3 className="text-lg font-medium text-gray-900">
              {searchQuery || modeFilter !== 'All' ? 'No matching bids found' : 'No active bids'}
            </h3>
            <p className="text-sm text-gray-500 max-w-xs mx-auto">
              {searchQuery || modeFilter !== 'All'
                ? 'Try adjusting your filters or search terms to find what you are looking for.'
                : "We couldn't find any bidding offers for this specific variant yet."}
            </p>
            {(searchQuery || modeFilter !== 'All') && (
              <button
                onClick={() => { setSearchQuery(''); setModeFilter('All'); }}
                className="mt-6 text-red-600 font-bold hover:text-red-700 text-sm underline underline-offset-4"
              >
                Clear all filters
              </button>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {processedLeads.map((lead: any) => (
              <div key={lead._id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4">
                  <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase ${lead.status === 'new' ? 'bg-blue-50 text-blue-600' : 'bg-gray-100 text-gray-500'}`}>
                    {lead.status}
                  </span>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-red-50 p-3 rounded-full text-red-500">
                    <IndianRupee size={24} />
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

                    <div className="mt-4 p-4 bg-red-600 rounded-2xl border border-red-700 shadow-lg flex flex-col space-y-3 relative overflow-hidden">
                      {/* Decorative background element */}
                      <div className="absolute top-0 right-0 -mr-4 -mt-4 w-16 h-16 bg-white/10 rounded-full blur-2xl" />

                      <div className="flex justify-between items-center pb-2 border-b border-white/20">
                        <span className="text-[10px] font-bold text-red-100 uppercase tracking-widest">Offer Price</span>
                        <span className="text-2xl font-black text-white flex items-center">
                          <IndianRupee size={18} className="mr-1" />
                          {lead.bidPrice?.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between text-[10px] font-bold text-white/90">
                        <div className="flex flex-col">
                          <span className="text-red-200 uppercase tracking-wider mb-1">Timeline</span>
                          <span className="capitalize">{lead.purchaseTimeline}</span>
                        </div>
                        <div className="flex flex-col text-right">
                          <span className="text-red-200 uppercase tracking-wider mb-1">Payment Mode</span>
                          <span className="capitalize">{lead.purchaseMode}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 p-3 bg-gray-50 rounded-xl text-xs text-gray-600 italic border border-gray-100 line-clamp-2">
                      "{lead.message || 'Interested in this vehicle.'}"
                    </div>

                    <div className="flex space-x-3 mt-6">
                      <button
                        onClick={() => openDetails(lead)}
                        className="flex-1 inline-flex justify-center items-center py-2.5 bg-gray-900 text-white rounded-xl text-sm font-bold hover:bg-black transition-all shadow-sm"
                      >
                        <Eye size={16} className="mr-2" /> Details
                      </button>
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

      {/* Detail Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Bidding Offer Details"
      >
        {selectedBid && (
          <div className="space-y-6">
            <div className="flex items-center justify-between p-4 bg-red-50 rounded-xl border border-red-100">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-red-600 text-white rounded-lg shadow-md">
                  <TrendingUp size={24} />
                </div>
                <div>
                  <p className="text-xs text-red-600 font-black uppercase tracking-widest">Customer Offer</p>
                  <p className="text-3xl font-black text-gray-900 flex items-center">
                    <IndianRupee size={24} className="mr-1 text-gray-400" />
                    {selectedBid.bidPrice?.toLocaleString()}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-400 font-bold uppercase mb-1">Status</p>
                <span className={`px-3 py-1 rounded-full text-xs font-black uppercase ${selectedBid.status === 'new' ? 'bg-blue-100 text-blue-700' :
                  selectedBid.status === 'contacted' ? 'bg-amber-100 text-amber-700' :
                    selectedBid.status === 'approved' ? 'bg-green-100 text-green-700' :
                      'bg-gray-100 text-gray-700'
                  }`}>
                  {selectedBid.status}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white border border-gray-100 rounded-xl shadow-sm">
                <p className="text-[10px] text-gray-400 font-black uppercase mb-3 flex items-center">
                  <User size={12} className="mr-1" /> Bidder Information
                </p>
                <p className="font-bold text-gray-900">{selectedBid.name}</p>
                <p className="text-sm text-gray-500 flex items-center gap-1 mt-1"><Mail size={12} /> {selectedBid.email || 'N/A'}</p>
                <p className="text-sm text-gray-500 flex items-center gap-1 mt-1"><Phone size={12} /> {selectedBid.phone}</p>
              </div>
              <div className="p-4 bg-white border border-gray-100 rounded-xl shadow-sm">
                <p className="text-[10px] text-gray-400 font-black uppercase mb-3 flex items-center">
                  <CarIcon size={12} className="mr-1" /> Car Details
                </p>
                <p className="font-bold text-gray-900 text-lg leading-tight">{selectedBid.carModel || 'Demo Inventory'}</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${selectedBid.agreedToTerms ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {selectedBid.agreedToTerms ? 'Terms Accepted' : 'Terms Not Accepted'}
                  </span>
                  <p className="text-xs text-gray-400 flex items-center uppercase font-bold tracking-tighter">
                    <Clock size={10} className="mr-1" /> {new Date(selectedBid.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-end pt-4 gap-3 bg-white sticky bottom-0 border-t mt-8 py-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-6 py-2.5 text-sm font-bold text-gray-500 hover:bg-gray-50 rounded-lg transition-all"
              >
                Close
              </button>
              {selectedBid.status === 'approved' ? (
                <>
                  <button
                    onClick={() => handleStatusUpdate(selectedBid._id, 'new')}
                    className="px-6 py-2.5 text-sm font-bold text-amber-600 bg-amber-50 rounded-lg hover:bg-amber-100 transition-all"
                  >
                    Undo Approval (New)
                  </button>
                  <button
                    onClick={() => handleStatusUpdate(selectedBid._id, 'rejected')}
                    className="px-6 py-2.5 text-sm font-bold text-red-600 bg-red-50 rounded-lg hover:bg-red-100 transition-all"
                  >
                    Reject Offer
                  </button>
                </>
              ) : selectedBid.status === 'rejected' ? (
                <button
                  onClick={() => handleStatusUpdate(selectedBid._id, 'approved')}
                  className="px-6 py-2.5 text-sm font-bold text-white bg-black rounded-lg hover:bg-gray-800 shadow-xl transition-all hovrer:-translate-y-0.5 active:scale-95"
                >
                  Restore & Approve
                </button>
              ) : (
                <>
                  <button
                    onClick={() => {
                      toast.success('Interest noted. Sales team will be alerted.');
                      setIsModalOpen(false);
                    }}
                    className="px-6 py-2.5 text-sm font-bold text-red-600 bg-red-50 rounded-lg hover:bg-red-100 transition-all"
                  >
                    Forward to Sales
                  </button>
                  <button
                    onClick={() => handleStatusUpdate(selectedBid._id, 'rejected')}
                    className="px-6 py-2.5 text-sm font-bold text-red-600 bg-red-50 rounded-lg hover:bg-red-100 transition-all"
                  >
                    Reject
                  </button>
                  <button
                    onClick={() => handleStatusUpdate(selectedBid._id, 'approved')}
                    className="px-6 py-2.5 text-sm font-bold text-white bg-black rounded-lg hover:bg-gray-800 shadow-xl transition-all transform hover:-translate-y-0.5 active:scale-95"
                  >
                    Approve Offer
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
