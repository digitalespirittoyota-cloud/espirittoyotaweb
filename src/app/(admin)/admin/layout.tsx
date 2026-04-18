'use client';

import Sidebar from "@/admin/components/Sidebar";
import Navbar from "@/admin/components/Navbar";
import StoreProvider from "@/admin/redux/StoreProvider";
import { usePathname } from "next/navigation";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isLoginPage = pathname === '/admin/login';

  if (isLoginPage) {
    return <StoreProvider>{children}</StoreProvider>;
  }

  return (
    <StoreProvider>
      <div className="min-h-screen bg-gray-50 flex">
        <Sidebar />
        <div className="flex-1 flex flex-col lg:pl-64 transition-all duration-300">
          <Navbar />
          <main className="p-8">
            {children}
          </main>
        </div>
      </div>
    </StoreProvider>
  );
}
