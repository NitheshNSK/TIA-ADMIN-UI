import { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import FloatingCRM from "./FloatingCRM";
import { Menu } from "lucide-react";

export default function AppLayout({ children }: any) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-[var(--bg-main)]">
      {/* SIDEBAR - MOBILE OVERLAY */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100] lg:hidden animate-in fade-in duration-300" 
          onClick={() => setIsSidebarOpen(false)} 
        />
      )}

      {/* SIDEBAR CONTAINER */}
      <div className={`
        fixed inset-y-0 left-0 z-[101] lg:relative lg:z-0
        transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        transition-transform duration-300 ease-in-out
      `}>
        <Sidebar onClose={() => setIsSidebarOpen(false)} />
      </div>

      <div className="flex flex-col flex-1 min-w-0">
        <div className="flex items-center lg:hidden bg-[var(--bg-card)] px-4 h-14 border-b" style={{ borderColor: 'var(--border)' }}>
             <button onClick={() => setIsSidebarOpen(true)} className="p-2 hover:bg-[var(--bg-soft)] rounded-lg">
                <Menu size={20} />
             </button>
             <span className="ml-4 font-bold text-[var(--primary)] text-lg">tia</span>
        </div>

        <Topbar />

        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-10 no-scrollbar">
            {children}
        </main>
      </div>

      <FloatingCRM hasNotification={true} />
    </div>
  );
}
