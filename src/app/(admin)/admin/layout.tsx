'use client';

import Sidebar from "@/admin/components/Sidebar";
import Navbar from "@/admin/components/Navbar";
import StoreProvider from "@/admin/redux/StoreProvider";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMe } from "@/admin/redux/authSlice";

function RoleGuard({ children }: { children: React.ReactNode }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = usePathname();
  const { user, initialized, loading } = useSelector((state: any) => state.auth || {});

  useEffect(() => {
    if (!initialized && !loading) {
      dispatch(fetchMe() as any);
    }
  }, [initialized, loading, dispatch]);

  useEffect(() => {
    if (initialized && !user && pathname !== '/admin/login') {
      router.push('/admin/login');
    }

    if (initialized && user) {
      const role = user.role;
      const isBiddingPath = pathname.startsWith('/admin/models') || pathname.startsWith('/admin/cars') || pathname.startsWith('/admin/bidding');
      const isMarketingPath = pathname.startsWith('/admin/test-drives') || pathname.startsWith('/admin/bookings') || pathname.startsWith('/admin/enquiries') || pathname.startsWith('/admin/contacts');
      
      if (role === 'bidding' && isMarketingPath) {
        router.push('/admin');
      } else if (role === 'marketing' && isBiddingPath) {
        router.push('/admin');
      }
    }
  }, [initialized, user, pathname, router]);

  if (!initialized || (loading && !user)) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
      </div>
    );
  }

  return <>{children}</>;
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isLoginPage = pathname === '/admin/login';

  return (
    <StoreProvider>
      {isLoginPage ? (
        children
      ) : (
        <RoleGuard>
          <div className="min-h-screen bg-gray-50 flex">
            <Sidebar />
            <div className="flex-1 flex flex-col lg:pl-64 transition-all duration-300">
              <Navbar />
              <main className="p-8">
                {children}
              </main>
            </div>
          </div>
        </RoleGuard>
      )}
    </StoreProvider>
  );
}
