'use client';

import React, { useState, useEffect } from 'react';
import Table from '@/admin/components/Table';
import { TableSkeleton } from '@/admin/components/Skeleton';
import Modal from '@/admin/components/Modal';
import { Search, Phone, Mail, Car, Tag, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import { toast } from 'react-hot-toast';

export default function EnquiriesPage() {
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({ page: 1, totalPages: 1 });
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEnquiry, setSelectedEnquiry] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchData = async (page = 1) => {
    try {
      setLoading(true);
      const res = await fetch(`/api/admin/enquiries?page=${page}&limit=50`);
      if (res.ok) {
        const result = await res.json();
        setData(result.data || []);
        setPagination(result.pagination || { page: 1, totalPages: 1 });
      } else {
        toast.error('Failed to fetch enquiries');
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
    { key: 'name', label: 'Customer', render: (val: string, row: any) => (
      <div>
        <p className="font-bold text-gray-900">{val}</p>
        <p className="text-xs text-gray-400">{row.email}</p>
      </div>
    )},
    { key: 'phone', label: 'Phone', render: (val: string) => (
      <a href={`tel:${val}`} className="flex items-center text-blue-600 hover:underline">
        <Phone size={12} className="mr-1" /> {val}
      </a>
    )},
    { key: 'carModel', label: 'Model', render: (val: string) => <span className="font-bold text-gray-700">{val || 'N/A'}</span> },
    { key: 'formType', label: 'Category', render: (val: string) => (
        <span className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-[10px] font-bold uppercase">{val || 'Enquiry'}</span>
    ) },
    { key: 'status', label: 'Status', render: (val: string) => (
      <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase ${
        val === 'new' ? 'bg-blue-100 text-blue-700' : 
        val === 'contacted' ? 'bg-amber-100 text-amber-700' : 
        'bg-green-100 text-green-700'
      }`}>
        {val}
      </span>
    )},
    { key: 'createdAt', label: 'Date', render: (val: string) => new Date(val).toLocaleDateString() },
  ];

  const filteredData = data.filter((item: any) => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (item.carModel || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.uniqueId.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const openDetails = (row: any) => {
    setSelectedEnquiry(row);
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">General Enquiries</h1>
          <p className="text-sm text-gray-500">Manage car enquiries and bidding leads</p>
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
        title="Enquiry Details"
      >
        {selectedEnquiry && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-xs text-gray-500 uppercase font-bold mb-1">Customer Info</p>
                <p className="font-bold text-gray-900">{selectedEnquiry.name}</p>
                <p className="text-sm text-gray-600">{selectedEnquiry.email}</p>
                <p className="text-sm text-gray-600">{selectedEnquiry.phone}</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-xs text-gray-500 uppercase font-bold mb-1">Enquiry Meta</p>
                <p className="text-sm"><span className="font-semibold">ID:</span> {selectedEnquiry.uniqueId}</p>
                <p className="text-sm"><span className="font-semibold">Date:</span> {new Date(selectedEnquiry.createdAt).toLocaleString()}</p>
                <p className="text-sm"><span className="font-semibold">IP:</span> {selectedEnquiry.ip}</p>
              </div>
            </div>
            
            <div className="p-4 border border-red-50 rounded-lg bg-red-50/30">
               <p className="text-xs text-red-600 uppercase font-bold mb-2 flex items-center">
                 <Car size={14} className="mr-1" /> Vehicle Interest
               </p>
               <p className="text-lg font-bold text-gray-900">{selectedEnquiry.carModel || 'N/A'}</p>
               {selectedEnquiry.city && <p className="text-sm text-gray-600">City: {selectedEnquiry.city}</p>}
               {selectedEnquiry.bidPrice && <p className="text-sm text-red-600 font-bold mt-1">Bid Price: ₹{selectedEnquiry.bidPrice}</p>}
            </div>

            {selectedEnquiry.formType && (
              <div className="flex gap-2">
                <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-bold uppercase">{selectedEnquiry.formType}</span>
                <span className={`px-2 py-1 rounded text-xs font-bold uppercase ${
                  selectedEnquiry.status === 'new' ? 'bg-blue-100 text-blue-700' : 
                  selectedEnquiry.status === 'contacted' ? 'bg-amber-100 text-amber-700' : 
                  'bg-green-100 text-green-700'
                }`}>
                  {selectedEnquiry.status}
                </span>
              </div>
            )}
            
            {selectedEnquiry.message && (
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-xs text-gray-500 uppercase font-bold mb-1">Additional Message</p>
                <p className="text-sm text-gray-700 italic">"{selectedEnquiry.message}"</p>
              </div>
            )}

            <div className="flex justify-end pt-4 gap-2">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Close
              </button>
              <button 
                onClick={() => {
                  toast.success('Contact marked as initiated');
                  setIsModalOpen(false);
                }}
                className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 shadow-sm"
              >
                Mark as Contacted
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
