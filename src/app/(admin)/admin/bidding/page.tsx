'use client';

import React, { useState, useEffect } from 'react';
import Table from '@/admin/components/Table';
import { TableSkeleton } from '@/admin/components/Skeleton';
import Modal from '@/admin/components/Modal';
import { Search, Phone, Mail, Car, Tag, Clock, IndianRupee, ChevronLeft, ChevronRight, User, TrendingUp } from 'lucide-react';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { updateBidStatus } from '@/admin/redux/bidSlice';

export default function BiddingLeadsPage() {
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({ page: 1, totalPages: 1 });
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBid, setSelectedBid] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const fetchData = async (page = 1) => {
    try {
      setLoading(true);
      const res = await fetch(`/api/admin/bidding?page=${page}&limit=50`);
      if (res.ok) {
        const result = await res.json();
        setData(result.data || []);
        setPagination(result.pagination || { page: 1, totalPages: 1 });
      } else {
        toast.error('Failed to fetch bidding leads');
      }
    } catch (err) {
      toast.error('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= pagination.totalPages) {
      fetchData(newPage);
    }
  };

  const columns = [
    { key: 'uniqueId', label: 'ID', render: (val: string) => <span className="font-mono text-xs font-bold text-gray-500">{val}</span> },
    {
      key: 'name', label: 'Customer', render: (val: string, row: any) => (
        <div>
          <p className="font-bold text-gray-900">{val}</p>
          <p className="text-xs text-gray-400">{row.email || 'No email'}</p>
        </div>
      )
    },
    {
      key: 'phone', label: 'Phone', render: (val: string) => (
        <a href={`tel:${val}`} className="flex items-center text-blue-600 hover:underline">
          <Phone size={12} className="mr-1" /> {val}
        </a>
      )
    },
    { key: 'carModel', label: 'Model', render: (val: string) => <span className="font-bold text-gray-700">{val || 'N/A'}</span> },
    {
      key: 'bidPrice', label: 'Offer', render: (val: number) => (
        <span className="flex items-center font-black text-red-600">
          <IndianRupee size={12} className="mr-0.5" /> {val?.toLocaleString() || '0'}
        </span>
      )
    },
    {
      key: 'status', label: 'Status', render: (val: string) => (
        <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase ${val === 'new' ? 'bg-blue-100 text-blue-700' :
          val === 'contacted' ? 'bg-amber-100 text-amber-700' :
            val === 'approved' ? 'bg-green-100 text-green-700' :
              'bg-gray-100 text-gray-700'
          }`}>
          {val}
        </span>
      )
    },
  ];

  const filteredData = data.filter((item: any) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (item.carModel || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.uniqueId.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const openDetails = (row: any) => {
    setSelectedBid(row);
    setIsModalOpen(true);
  };

  const handleStatusUpdate = async (bidId: string, newStatus: string) => {
    try {
      const updatedBid = await dispatch(updateBidStatus({ id: bidId, status: newStatus }) as any).unwrap();
      toast.success(`Bid ${newStatus} successfully!`);
      // Update local state for modal
      if (selectedBid && selectedBid._id === bidId) {
        setSelectedBid(updatedBid);
      }
      // Refresh list
      fetchData(pagination.page);
    } catch (err) {
      toast.error('Failed to update status');
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Bidding Leads</h1>
          <p className="text-sm text-gray-500">Manage demo car bidding offers from customers</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => handlePageChange(pagination.page - 1)}
            disabled={pagination.page <= 1}
            className="p-2 border rounded hover:bg-gray-50 disabled:opacity-50"
          >
            <ChevronLeft size={16} />
          </button>
          <span className="text-sm font-medium">Page {pagination.page} of {pagination.totalPages}</span>
          <button
            onClick={() => handlePageChange(pagination.page + 1)}
            disabled={pagination.page >= pagination.totalPages}
            className="p-2 border rounded hover:bg-gray-50 disabled:opacity-50"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
        <input
          type="text"
          placeholder="Search by name, model or ID..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all shadow-sm"
        />
      </div>

      {loading ? (
        <TableSkeleton rows={8} cols={columns.length} />
      ) : (
        <Table
          columns={columns}
          data={filteredData}
          onView={openDetails}
        />
      )}

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
                  <Car size={12} className="mr-1" /> Car Details
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
                  className="px-6 py-2.5 text-sm font-bold text-white bg-black rounded-lg hover:bg-gray-800 shadow-xl transition-all hover:-translate-y-0.5 active:scale-95"
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
