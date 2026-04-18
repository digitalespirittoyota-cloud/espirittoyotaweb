'use client';

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchModels } from '@/admin/redux/modelSlice';
import Table from '@/admin/components/Table';
import Modal from '@/admin/components/Modal';
import ModelForm from '@/admin/forms/ModelForm';
import { Plus, LayoutGrid, List } from 'lucide-react';
import { toast } from 'react-hot-toast';

export default function ModelsPage() {
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state: any) => state.models);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedModel, setSelectedModel] = useState(null);
  const [viewingModel, setViewingModel] = useState<any>(null);
  const [viewMode, setViewMode] = useState<'table' | 'grid'>('table');

  useEffect(() => {
    dispatch(fetchModels() as any);
  }, [dispatch]);

  const handleAddModel = () => {
    setSelectedModel(null);
    setIsModalOpen(true);
  };

  const handleEditModel = (model: any) => {
    setSelectedModel(model);
    setIsModalOpen(true);
  };

  const handleViewVariants = (model: any) => {
    setViewingModel(model);
  };

  const handleSubmit = async (data: any) => {
    try {
      const url = selectedModel ? `/api/admin/models/${(selectedModel as any)._id}` : '/api/admin/models';
      const method = selectedModel ? 'PUT' : 'POST';
      
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        toast.success(`Model ${selectedModel ? 'updated' : 'created'} successfully`);
        setIsModalOpen(false);
        dispatch(fetchModels() as any);
      } else {
        toast.error('Operation failed');
      }
    } catch (err) {
      toast.error('Something went wrong');
    }
  };

  const handleDeleteModel = async (model: any) => {
    if (window.confirm(`Are you sure you want to delete ${model.modelName}?`)) {
      try {
        const res = await fetch(`/api/admin/models/${model._id}`, { method: 'DELETE' });
        if (res.ok) {
          toast.success('Model deleted');
          dispatch(fetchModels() as any);
        } else {
          toast.error('Failed to delete');
        }
      } catch (err) {
        toast.error('Something went wrong');
      }
    }
  };

  const columns = [
    { key: 'modelName', label: 'Model Name' },
    { key: 'brand', label: 'Brand' },
    { key: 'variants', label: 'Variants', render: (val: any) => val?.length || 0 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Car Models</h1>
          <p className="text-sm text-gray-500">Manage vehicle models and variants</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center bg-gray-100 p-1 rounded-lg">
            <button 
              onClick={() => setViewMode('table')}
              className={`p-1.5 rounded-md transition-all ${viewMode === 'table' ? 'bg-white shadow-sm text-red-600' : 'text-gray-500 hover:text-gray-700'}`}
              title="Table View"
            >
              <List size={18} />
            </button>
            <button 
              onClick={() => setViewMode('grid')}
              className={`p-1.5 rounded-md transition-all ${viewMode === 'grid' ? 'bg-white shadow-sm text-red-600' : 'text-gray-500 hover:text-gray-700'}`}
              title="Grid View"
            >
              <LayoutGrid size={18} />
            </button>
          </div>
          <button 
            onClick={handleAddModel}
            className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors shadow-sm font-medium"
          >
            <Plus size={20} className="mr-2" /> Add Model
          </button>
        </div>
      </div>

      {loading ? (
        <div className="flex items-center justify-center h-64 bg-white rounded-xl border border-gray-100">
          <div className="flex flex-col items-center">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-red-600"></div>
            <p className="mt-4 text-sm text-gray-500 font-medium">Loading models...</p>
          </div>
        </div>
      ) : (!items || items.length === 0) ? (
        <div className="text-center py-20 bg-white rounded-xl border border-dashed border-gray-300">
          <Database size={48} className="mx-auto text-gray-300 mb-4" />
          <h3 className="text-lg font-medium text-gray-900">No models yet</h3>
          <p className="text-sm text-gray-500 mb-6">Get started by creating your first car model.</p>
          <button 
            onClick={handleAddModel}
            className="inline-flex items-center px-4 py-2 text-red-600 font-semibold hover:text-red-700"
          >
            <Plus size={20} className="mr-2" /> Create Model
          </button>
        </div>
      ) : viewMode === 'table' ? (
        <Table 
          columns={columns} 
          data={items} 
          onEdit={handleEditModel}
          onDelete={handleDeleteModel}
          onView={handleViewVariants}
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((model: any) => (
            <div key={model._id} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all group">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-red-600 transition-colors">{model.modelName}</h3>
                <span className="px-2 py-1 bg-gray-100 text-gray-600 text-[10px] font-bold rounded uppercase tracking-wider">{model.brand}</span>
              </div>
              <div className="space-y-3">
                 <div className="flex flex-wrap gap-2 cursor-pointer" onClick={() => handleViewVariants(model)}>
                   {model.variants?.slice(0, 3).map((v: any, i: number) => (
                     <span key={i} className="text-[11px] px-2 py-0.5 bg-red-50 text-red-600 rounded-full border border-red-100">
                       {v.variantName}
                     </span>
                   ))}
                   {model.variants?.length > 3 && (
                     <span className="text-[11px] px-2 py-0.5 bg-gray-50 text-gray-500 rounded-full">
                       +{model.variants.length - 3} more
                     </span>
                   )}
                 </div>
                 <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                    <button 
                     onClick={() => handleViewVariants(model)}
                     className="text-xs text-gray-400 hover:text-red-600 font-medium transition-colors"
                    >
                     View Details
                    </button>
                    <button 
                     onClick={() => handleEditModel(model)}
                     className="text-sm text-red-600 font-bold hover:text-red-700"
                    >
                     Edit
                    </button>
                 </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        title={selectedModel ? 'Edit Model' : 'Add New Car Model'}
      >
        <ModelForm 
          initialData={selectedModel} 
          onSubmit={handleSubmit}
          onCancel={() => setIsModalOpen(false)}
        />
      </Modal>

      {/* Variant Details Modal */}
      <Modal
        isOpen={!!viewingModel}
        onClose={() => setViewingModel(null)}
        title={`${viewingModel?.modelName || 'Model'} - All Variants`}
      >
        <div className="space-y-4 max-h-[70vh] overflow-y-auto pr-2 custom-scrollbar">
          {viewingModel?.variants?.map((v: any, i: number) => (
            <div key={i} className="p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-red-200 transition-colors">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold text-gray-900">{v.variantName}</h4>
                <span className="px-2 py-0.5 bg-red-600 text-white text-[10px] font-bold rounded shadow-sm">{v.fuelType}</span>
              </div>
              <div className="grid grid-cols-2 gap-4 text-xs text-gray-500">
                <div>
                  <p className="font-bold text-gray-400 uppercase tracking-tighter text-[9px]">Transmission</p>
                  <p className="text-gray-900">{v.transmission || 'N/A'}</p>
                </div>
                <div>
                  <p className="font-bold text-gray-400 uppercase tracking-tighter text-[9px]">Engine</p>
                  <p className="text-gray-900">{v.engine || 'N/A'}</p>
                </div>
                <div>
                  <p className="font-bold text-gray-400 uppercase tracking-tighter text-[9px]">Seating</p>
                  <p className="text-gray-900">{v.seatingCapacity || 'N/A'} Seater</p>
                </div>
              </div>
            </div>
          ))}
          {(!viewingModel?.variants || viewingModel.variants.length === 0) && (
            <p className="text-center py-10 text-gray-500 italic">No variants added to this model yet.</p>
          )}
        </div>
        <div className="mt-6 flex justify-end">
          <button 
             onClick={() => setViewingModel(null)}
             className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-black transition-colors font-medium"
          >
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
}

// Extra import for icon used in empty state
import { Database } from 'lucide-react';
