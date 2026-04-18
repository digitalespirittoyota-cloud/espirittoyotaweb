'use client';

import React, { useState, useEffect } from 'react';
import Table from '@/admin/components/Table';
import { TableSkeleton } from '@/admin/components/Skeleton';
import Modal from '@/admin/components/Modal';
import { Search, Phone, Mail, MessageSquare, Clock, User, ChevronLeft, ChevronRight, Send, CheckCircle2 } from 'lucide-react';
import { toast } from 'react-hot-toast';

export default function ContactsPage() {
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({ page: 1, totalPages: 1 });
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedContact, setSelectedContact] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchData = async (page = 1) => {
    try {
      setLoading(true);
      const res = await fetch(`/api/admin/contacts?page=${page}&limit=50`);
      if (res.ok) {
        const result = await res.json();
        setData(result.data || []);
        setPagination(result.pagination || { page: 1, totalPages: 1 });
      } else {
        toast.error('Failed to fetch contact messages');
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
    { key: 'name', label: 'Sender', render: (val: string, row: any) => (
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
    { key: 'subject', label: 'Subject', render: (val: string) => <p className="text-sm font-medium text-gray-700 max-w-[200px] truncate">{val || 'General Inquiry'}</p> },
    { key: 'status', label: 'Status', render: (val: string) => (
      <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase ${
        val === 'new' ? 'bg-blue-100 text-blue-700' : 
        val === 'contacted' ? 'bg-amber-100 text-amber-700' : 
        'bg-green-100 text-green-700'
      }`}>
        {val}
      </span>
    )},
    { key: 'createdAt', label: 'Received On', render: (val: string) => (
        <p className="flex items-center text-xs text-gray-500"><Clock size={12} className="mr-1" /> {new Date(val).toLocaleDateString()}</p>
    ) },
  ];

  const filteredData = data.filter((item: any) => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (item.subject || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.uniqueId.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const openDetails = (row: any) => {
    setSelectedContact(row);
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Contact Messages</h1>
          <p className="text-sm text-gray-500">Manage messages from the contact form</p>
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
          placeholder="Search by name, subject or ID..."
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
        title="Message Details"
      >
        {selectedContact && (
          <div className="space-y-6">
            <div className="flex items-center gap-4 border-b pb-6">
               <div className="h-14 w-14 bg-red-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                 {selectedContact.name.charAt(0)}
               </div>
               <div>
                 <h2 className="text-xl font-bold text-gray-900">{selectedContact.name}</h2>
                 <p className="text-sm text-gray-500 flex items-center gap-2">
                   <Mail size={14} /> {selectedContact.email}
                   <span className="h-1 w-1 bg-gray-300 rounded-full" />
                   <Phone size={14} /> {selectedContact.phone}
                 </p>
               </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
               <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">Subject</p>
                  <p className="text-sm font-bold text-gray-900">{selectedContact.subject || 'General Inquiry'}</p>
               </div>
               <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">Received At</p>
                  <p className="text-sm font-bold text-gray-900">{new Date(selectedContact.createdAt).toLocaleString()}</p>
               </div>
            </div>

            <div className="p-5 bg-white border border-gray-200 rounded-xl">
               <p className="text-[10px] text-gray-400 font-bold uppercase mb-3 flex items-center">
                 <MessageSquare size={12} className="mr-1" /> Message Content
               </p>
               <p className="text-gray-700 leading-relaxed text-lg">
                 {selectedContact.message}
               </p>
            </div>

            <div className="flex justify-between items-center pt-4">
              <div className="flex gap-2">
                 <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
                   selectedContact.status === 'new' ? 'bg-blue-100 text-blue-700' : 
                   selectedContact.status === 'contacted' ? 'bg-amber-100 text-amber-700' : 
                   'bg-green-100 text-green-700'
                 }`}>
                   {selectedContact.status}
                 </span>
                 <span className="px-3 py-1 bg-gray-100 text-gray-500 rounded-full text-xs font-mono">
                   ID: {selectedContact.uniqueId}
                 </span>
              </div>
              
              <div className="flex gap-3">
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-sm font-bold text-gray-500 hover:bg-gray-50 rounded-lg"
                >
                  Close
                </button>
                <button 
                  onClick={() => {
                    window.location.href = `mailto:${selectedContact.email}?subject=Re: ${selectedContact.subject || 'Inquiry'}`;
                  }}
                  className="px-4 py-2 text-sm font-bold text-white bg-black rounded-lg hover:bg-gray-800 flex items-center gap-2"
                >
                  <Send size={14} /> Reply to Customer
                </button>
                <button 
                  onClick={() => {
                    toast.success('Conversation archived');
                    setIsModalOpen(false);
                  }}
                  className="px-4 py-2 text-sm font-bold text-white bg-green-600 rounded-lg hover:bg-green-700 flex items-center gap-2"
                >
                  <CheckCircle2 size={14} /> Resolve
                </button>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
