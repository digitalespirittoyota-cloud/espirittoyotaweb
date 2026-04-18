'use client';

import React from 'react';
import {
  Database,
  Car,
  Users,
  TrendingUp,
  ArrowUpRight,
  Clock,
  Tag
} from 'lucide-react';
import { useSelector } from 'react-redux';
import Link from 'next/link';

export default function Dashboard() {
  const [counts, setCounts] = React.useState({ testDrives: 0, bookings: 0, enquiries: 0, contacts: 0, bidding: 0 });
  const [recentLeads, setRecentLeads] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [mounted, setMounted] = React.useState(false);

  // Use default empty arrays to handle uninitialized state
  const { items: models = [] } = useSelector((state: any) => state.models || {});
  const { items: cars = [] } = useSelector((state: any) => state.cars || {});
  const { user } = useSelector((state: any) => state.auth || {});

  React.useEffect(() => {
    setMounted(true);
    const fetchAll = async () => {
      if (!user) return;

      try {
        setLoading(true);
        const role = user.role;
        const isAdmin = role === 'admin';
        const isMarketing = role === 'marketing';
        const isBidding = role === 'bidding';

        // Conditional fetches based on roles to avoid 403 Forbidden errors
        const fetchMap: Record<string, () => Promise<any>> = {
          td: () => (isAdmin || isMarketing) ? fetch('/api/admin/test-drives').then(res => res.json()) : Promise.resolve([]),
          bk: () => (isAdmin || isMarketing) ? fetch('/api/admin/bookings').then(res => res.json()) : Promise.resolve([]),
          eq: () => (isAdmin || isMarketing) ? fetch('/api/admin/enquiries').then(res => res.json()) : Promise.resolve([]),
          ct: () => (isAdmin || isMarketing) ? fetch('/api/admin/contacts').then(res => res.json()) : Promise.resolve([]),
          bd: () => (isAdmin || isBidding) ? fetch('/api/admin/bidding').then(res => res.json()) : Promise.resolve([]),
        };

        const [tdRes, bkRes, eqRes, ctRes, bdRes] = await Promise.all([
          fetchMap.td(), fetchMap.bk(), fetchMap.eq(), fetchMap.ct(), fetchMap.bd()
        ]);

        // Helper to handle both paginated and non-paginated (legacy) responses
        const extractData = (res: any) => Array.isArray(res) ? res : (res?.data || []);

        const td = extractData(tdRes);
        const bk = extractData(bkRes);
        const eq = extractData(eqRes);
        const ct = extractData(ctRes);
        const bd = extractData(bdRes);

        setCounts({
          testDrives: td.length,
          bookings: bk.length,
          enquiries: eq.length,
          contacts: ct.length,
          bidding: bd.length
        });

        // Merge and sort by date - Filter based on role
        const rawLeads = [
          ...td.map((i: any) => ({ ...i, type: 'Test Drive', iconColor: 'bg-purple-50 text-purple-600', link: '/admin/test-drives', leadRole: 'marketing' })),
          ...bk.map((i: any) => ({ ...i, type: 'Booking', iconColor: 'bg-amber-50 text-amber-600', link: '/admin/bookings', leadRole: 'marketing' })),
          ...eq.map((i: any) => ({ ...i, type: 'Enquiry', iconColor: 'bg-green-50 text-green-600', link: '/admin/enquiries', leadRole: 'marketing' })),
          ...bd.map((i: any) => ({ ...i, type: 'Bid', iconColor: 'bg-red-50 text-red-600', link: '/admin/bidding', leadRole: 'bidding' })),
          ...ct.map((i: any) => ({ ...i, type: 'Contact', iconColor: 'bg-slate-100 text-slate-600', link: '/admin/contacts', leadRole: 'marketing' })),
        ];

        const filteredLeads = rawLeads
          .filter(lead => isAdmin || lead.leadRole === role)
          .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

        setRecentLeads(filteredLeads.slice(0, 8));
      } catch (e) {
        console.error('Failed to fetch dashboard data', e);
      } finally {
        setLoading(false);
      }
    };

    fetchAll();
  }, [user]);

  const stats = [
    { name: 'Models', value: models.length, icon: Database, color: 'text-blue-600', bg: 'bg-blue-50', link: '/admin/models', roles: ['admin', 'bidding'] },
    { name: 'Inventory', value: cars.length, icon: Car, color: 'text-red-600', bg: 'bg-red-50', link: '/admin/cars', roles: ['admin', 'bidding'] },
    { name: 'Test Drives', value: counts.testDrives, icon: Users, color: 'text-purple-600', bg: 'bg-purple-50', link: '/admin/test-drives', roles: ['admin', 'marketing'] },
    { name: 'Bookings', value: counts.bookings, icon: Clock, color: 'text-amber-600', bg: 'bg-amber-50', link: '/admin/bookings', roles: ['admin', 'marketing'] },
    { name: 'Enquiries', value: counts.enquiries, icon: TrendingUp, color: 'text-green-600', bg: 'bg-green-50', link: '/admin/enquiries', roles: ['admin', 'marketing'] },
    { name: 'Bidding', value: counts.bidding, icon: Tag, color: 'text-red-700', bg: 'bg-red-50', link: '/admin/bidding', roles: ['admin', 'bidding'] },
    { name: 'Contacts', value: counts.contacts, icon: ArrowUpRight, color: 'text-slate-600', bg: 'bg-slate-50', link: '/admin/contacts', roles: ['admin', 'marketing'] },
  ];

  const filteredStats = stats.filter(s => !user || s.roles.includes(user.role));

  const quickActions = [
    { name: 'Add Model', icon: Database, link: '/admin/models', roles: ['admin', 'bidding'] },
    { name: 'Add Car', icon: Car, link: '/admin/cars', roles: ['admin', 'bidding'] },
    { name: 'Manage Enquiries', icon: TrendingUp, link: '/admin/enquiries', roles: ['admin', 'marketing'] },
    { name: 'View Bookings', icon: Clock, link: '/admin/bookings', roles: ['admin', 'marketing'] },
  ].filter(a => !user || a.roles.includes(user.role));

  if (loading && models.length === 0 && cars.length === 0) {
    return (
      <div className="space-y-4 animate-pulse p-4">
        <div className="h-12 w-48 bg-gray-200 rounded-lg mb-6"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map(i => <div key={i} className="h-32 bg-gray-100 rounded-2xl border border-gray-100"></div>)}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          <div className="h-96 bg-gray-50 rounded-2xl border border-gray-100"></div>
          <div className="h-96 bg-gray-50 rounded-2xl border border-gray-100"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-in fade-in duration-500 max-w-[1600px] mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-gray-100 pb-6">
        <div>
          <h1 className="text-4xl font-black text-gray-900 tracking-tight">
            Dashboard
            <span className="text-red-600">.</span>
          </h1>
          <p className="text-sm text-gray-500 mt-2 font-medium min-h-[1.25rem]">
            {mounted && (
              user?.role === 'admin' ? 'Total showroom overview & system control' :
                user?.role === 'marketing' ? 'Manage customer inquiries and engagement' :
                  'Monitor vehicle inventory and active bidding'
            )}
          </p>
        </div>
        <div className="bg-white px-4 py-2 rounded-full border border-gray-200 shadow-sm flex items-center gap-2">
          {mounted && (
            <>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">{user?.role} Access Mode</span>
            </>
          )}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredStats.map((stat) => (
          <Link href={stat.link} key={stat.name} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group overflow-hidden relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-current opacity-[0.03] -mr-8 -mt-8 rounded-full group-hover:scale-150 transition-transform duration-500" />
            <div className="flex items-center justify-between relative z-10">
              <div className={`${stat.bg} ${stat.color} p-4 rounded-2xl transition-all group-hover:scale-110 shadow-sm`}>
                <stat.icon size={28} />
              </div>
              <div className="text-right">
                <h3 className="text-gray-400 text-[10px] font-black uppercase tracking-widest mb-1">{stat.name}</h3>
                <p className="text-3xl font-black text-gray-900 tracking-tighter">{stat.value}</p>
              </div>
            </div>
            <div className="mt-4 flex items-center text-[10px] font-bold text-gray-400 gap-1 group-hover:text-red-600 transition-colors">
              Manage {stat.name} <ArrowUpRight size={10} />
            </div>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Recent Leads */}
        <div className="lg:col-span-8 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-xl font-black text-gray-900 tracking-tight">Recent Activity</h3>
              <p className="text-xs text-gray-400 font-medium mt-1">Real-time engagement across your sections</p>
            </div>
            <div className="flex gap-2">
              {mounted && (
                <span className="hidden sm:inline-flex px-3 py-1 bg-gray-50 text-gray-500 text-[10px] font-bold rounded-lg uppercase tracking-wider items-center">
                  <Clock size={12} className="mr-1.5" /> Updated {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              )}
            </div>
          </div>
          <div className="space-y-3 flex-1">
            {recentLeads.map((c: any) => (
              <Link href={c.link} key={c._id + c.type} className="flex items-center justify-between p-4 bg-gray-50/50 hover:bg-white rounded-2xl transition-all border border-transparent hover:border-gray-100 hover:shadow-md group">
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 ${c.iconColor} rounded-2xl flex items-center justify-center font-black text-sm uppercase border border-current opacity-70 group-hover:opacity-100 transition-opacity`}>
                    {c.name?.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-black text-gray-900 group-hover:text-red-600 transition-colors">{c.name}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className={`text-[9px] font-black uppercase px-2 py-0.5 rounded ${c.iconColor} bg-opacity-10 border border-current border-opacity-20`}>{c.type}</span>
                      <p className="text-[11px] text-gray-400 font-medium truncate max-w-[200px]">
                        {c.carModel || c.serviceType || c.model || c.subject || 'General Interest'}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="text-right flex flex-col items-end">
                  <div className="flex items-center text-[10px] text-gray-400 font-black uppercase tracking-widest gap-1">
                    {new Date(c.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
                  </div>
                  <div className="mt-1 h-1 w-8 bg-gray-200 rounded-full group-hover:bg-red-500 group-hover:w-12 transition-all duration-300" />
                </div>
              </Link>
            ))}
            {recentLeads.length === 0 && (
              <div className="flex flex-col items-center justify-center py-20 text-gray-300 bg-gray-50/30 rounded-3xl border border-dashed border-gray-200">
                <Users size={48} className="mb-4 opacity-20" />
                <h4 className="text-sm font-bold text-gray-400">No recent activity detected</h4>
                <p className="text-[11px] max-w-[200px] text-center mt-1">Leads from your sections will appear here as they arrive.</p>
              </div>
            )}
          </div>
        </div>

        {/* Sidebar Actions */}
        <div className="lg:col-span-4 space-y-6">
          {/* Quick Actions */}
          <div className="bg-red-600 p-8 rounded-3xl shadow-xl shadow-red-200 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <TrendingUp size={120} />
            </div>
            <h3 className="text-xl font-black mb-6 relative z-10">Workflow</h3>
            <div className="grid grid-cols-1 gap-2 relative z-10">
              {quickActions.map((action) => (
                <Link
                  key={action.name}
                  href={action.link}
                  className="flex items-center justify-between p-4 bg-white/10 hover:bg-white/20 rounded-2xl transition-all border border-white/5 group"
                >
                  <div className="flex items-center gap-3">
                    <action.icon size={20} className="text-red-200" />
                    <span className="text-sm font-bold">{action.name}</span>
                  </div>
                  <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}