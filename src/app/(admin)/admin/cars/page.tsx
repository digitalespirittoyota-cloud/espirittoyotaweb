'use client';

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from '@/admin/redux/carSlice';
import { fetchModels } from '@/admin/redux/modelSlice';
import { fetchCustomers } from '@/admin/redux/customerSlice';
import Table from '@/admin/components/Table';
import Modal from '@/admin/components/Modal';
import CarForm from '@/admin/forms/CarForm';
import { Plus, Filter, Search, Car as CarIcon } from 'lucide-react';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { SubmitHandler } from 'react-hook-form';
import { CarInput } from '@/app/lib/schemas';
import { TableSkeleton } from '@/admin/components/Skeleton';

export default function CarsPage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { items = [], loading } = useSelector((state: any) => state.cars || {});
  const { items: models = [] } = useSelector((state: any) => state.models || {});
  const { items: allEnquiries = [] } = useSelector((state: any) => state.customers || {});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    modelId: '',
    ownerType: '',
    status: '',
    minPrice: '',
    maxPrice: ''
  });

  useEffect(() => {
    dispatch(fetchCars() as any);
    dispatch(fetchModels() as any);
    dispatch(fetchCustomers() as any);
  }, [dispatch]);

  const handleAddCar = () => {
    setSelectedCar(null);
    setIsModalOpen(true);
  };

  const handleEditCar = (car: any) => {
    setSelectedCar(car);
    setIsModalOpen(true);
  };

  const handleSubmit: SubmitHandler<CarInput> = async (data) => {
    try {
      const url = selectedCar ? `/api/admin/cars/${(selectedCar as any)._id}` : '/api/admin/cars';
      const method = selectedCar ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        toast.success(`Car ${selectedCar ? 'updated' : 'added'} successfully`);
        setIsModalOpen(false);
        dispatch(fetchCars() as any);
      } else {
        const errData = await res.json();
        toast.error(errData.message || 'Operation failed');
      }
    } catch (err) {
      toast.error('Something went wrong');
    }
  };

  const handleDeleteCar = async (car: any) => {
    if (window.confirm(`Are you sure you want to delete this ${car.variantName}?`)) {
      try {
        const res = await fetch(`/api/admin/cars/${car._id}`, { method: 'DELETE' });
        if (res.ok) {
          toast.success('Car removed from inventory');
          dispatch(fetchCars() as any);
        } else {
          toast.error('Failed to delete');
        }
      } catch (err) {
        toast.error('Something went wrong');
      }
    }
  };

  const handleStatusToggle = async (car: any) => {
    const newStatus = car.status === 'sold' ? 'available' : 'sold';
    try {
      const res = await fetch(`/api/admin/cars/${car._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...car, status: newStatus }),
      });

      if (res.ok) {
        toast.success(`Car marked as ${newStatus}`);
        dispatch(fetchCars() as any);
      } else {
        toast.error('Failed to update status');
      }
    } catch (err) {
      toast.error('Something went wrong');
    }
  };

  const columns = [
    { key: 'modelId', label: 'Model', render: (val: any) => val?.modelName || 'N/A' },
    { key: 'variantName', label: 'Variant' },
    { key: 'minPrice', label: 'Price', render: (val: any) => val ? `₹${val.toLocaleString()}` : '-' },
    { key: 'ownerType', label: 'Owner' },
    { key: 'regDate', label: 'Reg. Date', render: (val: any) => val ? new Date(val).toLocaleDateString() : '-' },
    {
      key: 'leads', label: 'Leads', render: (_: any, row: any) => {
        const matchLower = (str1: string, str2: string) =>
          str1 && str2 && (str1.toLowerCase().includes(str2.toLowerCase()) || str2.toLowerCase().includes(str1.toLowerCase()));

        const count = allEnquiries.filter((e: any) =>
          matchLower(e.carModel || '', row.modelId?.modelName || '') ||
          matchLower(e.carModel || '', row.variantName || '')
        ).length;

        return (
        <button
          onClick={() => router.push(`/admin/cars/${row._id}/leads`)}
          className="flex items-center px-2 py-1 rounded text-[10px] font-bold uppercase transition-all bg-blue-100 text-blue-700 hover:bg-blue-200 cursor-pointer shadow-sm hover:shadow-md"
        >
          {count} Leads 
        </button>
      );
      }
    },
    {
      key: 'status', label: 'Status', render: (val: any, row: any) => (
        <button
          onClick={() => handleStatusToggle(row)}
          title="Click to toggle status"
          className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase transition-all hover:scale-105 active:scale-95 ${val === 'available' ? 'bg-green-100 text-green-700 hover:bg-green-200' : 'bg-red-100 text-red-700 hover:bg-red-200'}`}
        >
          {val || 'available'}
        </button>
      )
    },
  ];

  const filteredCars = (items || []).filter((car: any) => {
    const matchesSearch = car.modelId?.modelName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      car.variantName?.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesModel = !filters.modelId || car.modelId?._id === filters.modelId;
    const matchesOwner = !filters.ownerType || car.ownerType === filters.ownerType;
    const matchesStatus = !filters.status || (car.status || 'available') === filters.status;
    const matchesMinPrice = !filters.minPrice || car.minPrice >= Number(filters.minPrice);
    const matchesMaxPrice = !filters.maxPrice || car.minPrice <= Number(filters.maxPrice);

    return matchesSearch && matchesModel && matchesOwner && matchesStatus && matchesMinPrice && matchesMaxPrice;
  });

  const resetFilters = () => {
    setFilters({
      modelId: '',
      ownerType: '',
      status: '',
      minPrice: '',
      maxPrice: ''
    });
    setSearchQuery('');
  };


  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Cars Inventory</h1>
          <p className="text-sm text-gray-500">Manage individual cars and their details</p>
        </div>
        <button
          onClick={handleAddCar}
          className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors shadow-sm font-medium"
        >
          <Plus size={20} className="mr-2" /> Add Car
        </button>
      </div>

      {/* Filters & Search */}
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search by model or variant..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all shadow-sm"
            />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`inline-flex items-center px-4 py-2 rounded-lg transition-all font-medium border ${showFilters ? 'bg-red-50 border-red-200 text-red-600' : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'}`}
          >
            <Filter size={18} className="mr-2" />
            {showFilters ? 'Hide Filters' : 'Show Filters'}
          </button>
          {(filters.modelId || filters.ownerType || filters.status || filters.minPrice || filters.maxPrice) && (
            <button
              onClick={resetFilters}
              className="text-sm text-gray-500 hover:text-red-600 font-medium transition-colors"
            >
              Clear All
            </button>
          )}
        </div>

        {showFilters && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100 animate-in fade-in slide-in-from-top-2 duration-200">
            <div>
              <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Model</label>
              <select
                value={filters.modelId}
                onChange={(e) => setFilters({ ...filters, modelId: e.target.value })}
                className="w-full p-2 bg-white border border-gray-200 rounded-md text-sm outline-none focus:ring-2 focus:ring-red-500/20"
              >
                <option value="">All Models</option>
                {models.map((m: any) => (
                  <option key={m._id} value={m._id}>{m.modelName}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Owner Type</label>
              <select
                value={filters.ownerType}
                onChange={(e) => setFilters({ ...filters, ownerType: e.target.value })}
                className="w-full p-2 bg-white border border-gray-200 rounded-md text-sm outline-none focus:ring-2 focus:ring-red-500/20"
              >
                <option value="">Any Owner</option>
                <option value="First">First Owner</option>
                <option value="Second">Second Owner</option>
                <option value="Third">Third Owner</option>
              </select>
            </div>
            <div>
              <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Status</label>
              <select
                value={filters.status}
                onChange={(e) => setFilters({ ...filters, status: e.target.value })}
                className="w-full p-2 bg-white border border-gray-200 rounded-md text-sm outline-none focus:ring-2 focus:ring-red-500/20"
              >
                <option value="">Any Status</option>
                <option value="available">Available</option>
                <option value="sold">Sold</option>
              </select>
            </div>
            <div>
              <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Price Range (₹)</label>
              <div className="flex items-center space-x-2">
                <input
                  type="number"
                  placeholder="Min"
                  value={filters.minPrice}
                  onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
                  className="w-1/2 p-2 bg-white border border-gray-200 rounded-md text-sm outline-none focus:ring-2 focus:ring-red-500/20"
                />
                <span className="text-gray-400">-</span>
                <input
                  type="number"
                  placeholder="Max"
                  value={filters.maxPrice}
                  onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
                  className="w-1/2 p-2 bg-white border border-gray-200 rounded-md text-sm outline-none focus:ring-2 focus:ring-red-500/20"
                />
              </div>
            </div>
          </div>
        )}
      </div>
      {loading ? (
        <TableSkeleton rows={8} cols={columns.length} />
      ) : (!filteredCars || filteredCars.length === 0) ? (
        <div className="text-center py-20 bg-white rounded-xl border border-dashed border-gray-300">
          <CarIcon size={48} className="mx-auto text-gray-300 mb-4" />
          <h3 className="text-lg font-medium text-gray-900">No cars found</h3>
          <p className="text-sm text-gray-500 mb-2">Start adding cars to your inventory.</p>
          {searchQuery && <p className="text-xs text-gray-400 mb-4">Try clearing your search query.</p>}
          <button
            onClick={handleAddCar}
            className="inline-flex items-center px-4 py-2 text-red-600 font-semibold hover:text-red-700"
          >
            <Plus size={20} className="mr-2" /> Add First Car
          </button>
        </div>
      ) : (
        <Table
          columns={columns}
          data={filteredCars}
          onEdit={handleEditCar}
          onDelete={handleDeleteCar}
        />
      )}

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={selectedCar ? 'Edit Car' : 'Add New Car Entry'}
      >
        <CarForm
          initialData={selectedCar}
          onSubmit={handleSubmit}
          onCancel={() => setIsModalOpen(false)}
        />
      </Modal>
    </div>
  );
}
