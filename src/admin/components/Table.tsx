'use client';

import React from 'react';

// Define the structure for each column
interface Column {
  key: string;
  label: string;
  render?: (value: any, row: any) => React.ReactNode;
}

// Define the props for the Table component
interface TableProps {
  columns: Column[];
  data: any[];
  onEdit?: (row: any) => void;
  onDelete?: (row: any) => void;
  onView?: (row: any) => void;
}

export default function Table({ columns, data, onEdit, onDelete, onView }: TableProps) {
  return (
    <div className="overflow-x-auto bg-white rounded-xl shadow-sm border border-gray-100">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-50 border-b border-gray-100">
            {columns?.map((col) => (
              <th key={col.key} className="px-6 py-4 text-xs font-bold uppercase text-gray-500 tracking-wider">
                {col.label}
              </th>
            ))}
            {(onEdit || onDelete || onView) && (
              <th className="px-6 py-4 text-xs font-bold uppercase text-gray-500 tracking-wider text-right">
                Actions
              </th>
            )}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {(!data || data.length === 0) ? (
            <tr>
              <td colSpan={(columns?.length || 0) + 1} className="px-6 py-10 text-center text-gray-500 italic">
                No data available
              </td>
            </tr>
          ) : (
            data.map((row: any, idx: number) => (
              <tr key={row._id || idx} className="hover:bg-gray-50/50 transition-colors">
                {columns.map((col) => (
                  <td key={col.key} className="px-6 py-4 text-sm text-gray-700">
                    {col.render ? col.render(row[col.key], row) : row[col.key]}
                  </td>
                ))}
                {(onEdit || onDelete || onView) && (
                  <td className="px-6 py-4 text-sm text-right space-x-3">
                    {onView && (
                      <button onClick={() => onView(row)} className="text-blue-600 hover:text-blue-800 font-medium">
                        View
                      </button>
                    )}
                    {onEdit && (
                      <button onClick={() => onEdit(row)} className="text-amber-600 hover:text-amber-800 font-medium">
                        Edit
                      </button>
                    )}
                    {onDelete && (
                      <button onClick={() => onDelete(row)} className="text-red-600 hover:text-red-800 font-medium">
                        Delete
                      </button>
                    )}
                  </td>
                )}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
