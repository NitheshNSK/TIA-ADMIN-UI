import { useState } from "react";
import { Bell, MessageSquare, X, Send } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Topbar() {
  const [showMessages, setShowMessages] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <header
      className="h-14 md:h-16 flex items-center justify-between px-4 md:px-6 border-b relative z-40"
      style={{
        background: "var(--bg-card)",
        borderColor: "var(--border)",
      }}
    >
      <div className="flex items-center gap-4">
        <input
          placeholder="Search anything..."
          className="hidden md:block bg-[var(--bg-soft)] px-4 py-2 rounded-xl outline-none text-sm w-64 border border-transparent focus:border-[var(--primary)] transition-all"
        />
      </div>

      <div className="flex items-center gap-6">
        {/* CEO Messages Trigger */}
        <button 
          onClick={() => {
            setShowMessages(!showMessages);
            setShowNotifications(false);
          }}
          className="relative p-2 rounded-lg hover:bg-[var(--bg-soft)] transition-colors"
        >
          <MessageSquare size={20} className="text-[var(--text-muted)]" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[var(--primary)] rounded-full border-2 border-[var(--bg-card)]" />
        </button>

        {/* Notifications Trigger */}
        <button 
           onClick={() => {
            setShowNotifications(!showNotifications);
            setShowMessages(false);
          }}
          className="relative p-2 rounded-lg hover:bg-[var(--bg-soft)] transition-colors"
        >
          <Bell size={20} className="text-[var(--text-muted)]" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-[var(--bg-card)]" />
        </button>

        <div className="h-8 w-px bg-[var(--border)] mx-2" />

        <ThemeToggle />

        <div className="flex items-center gap-3 pl-2">
            <div className="text-right hidden sm:block">
                <p className="text-xs font-bold">Admin User</p>
                <p className="text-[10px] text-[var(--text-muted)]">Platform Manager</p>
            </div>
            <img src="https://i.pravatar.cc/40?img=12" className="w-9 h-9 rounded-xl object-cover border border-[var(--border)]" alt="Avatar" />
        </div>
      </div>

      {/* MESSAGE SIDEBAR DRAWER */}
      {showMessages && (
        <>
            <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50" onClick={() => setShowMessages(false)} />
            <div className="fixed top-0 right-0 h-full w-full md:w-96 bg-[var(--bg-card)] shadow-2xl z-50 transform transition-transform border-l overflow-hidden flex flex-col" style={{ borderColor: 'var(--border)' }}>
                <div className="p-6 border-b flex justify-between items-center" style={{ borderColor: 'var(--border)' }}>
                    <h3 className="font-bold text-lg">Quick Broadcast</h3>
                    <button onClick={() => setShowMessages(false)} className="p-1 hover:bg-[var(--bg-soft)] rounded-md transition-colors">
                        <X size={20} />
                    </button>
                </div>
                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                    <p className="text-xs text-[var(--text-muted)] uppercase font-bold tracking-widest">Recent Broadcasts</p>
                    {[1, 2, 3].map(i => (
                        <div key={i} className="space-y-2">
                            <div className="flex justify-between text-[10px] text-[var(--text-muted)]">
                                <span>To All Users</span>
                                <span>2h ago</span>
                            </div>
                            <div className="bg-[var(--bg-soft)] p-3 rounded-xl text-sm">
                                System maintenance scheduled for tonight at 12:00 AM UTC. Please save your work.
                            </div>
                        </div>
                    ))}
                </div>
                <div className="p-6 border-t bg-[var(--bg-soft)]/30" style={{ borderColor: 'var(--border)' }}>
                    <textarea 
                        className="w-full h-32 bg-[var(--bg-card)] p-4 rounded-xl border outline-none text-sm resize-none focus:border-[var(--primary)] transition-all" 
                        placeholder="Type your broadcast message here..."
                        style={{ borderColor: 'var(--border)' }}
                    />
                    <button className="w-full mt-4 py-3 bg-[var(--primary)] text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                        <Send size={18} />
                        Send Broadcast
                    </button>
                </div>
            </div>
        </>
      )}

      {/* NOTIFICATION OVERLAY */}
      {showNotifications && (
        <>
            <div className="fixed inset-0 z-40" onClick={() => setShowNotifications(false)} />
            <div className="absolute top-16 right-4 md:right-20 w-[calc(100vw-2rem)] md:w-80 bg-[var(--bg-card)] border rounded-2xl shadow-xl z-50 overflow-hidden" style={{ borderColor: 'var(--border)' }}>
                <div className="p-4 border-b flex justify-between items-center" style={{ borderColor: 'var(--border)' }}>
                    <span className="font-bold text-sm">Notifications</span>
                    <span className="text-[10px] bg-[var(--primary)]/10 text-[var(--primary)] px-2 py-0.5 rounded-full font-bold">4 NEW</span>
                </div>
                <div className="max-h-96 overflow-y-auto">
                    {[
                        { title: "New Lead", desc: "A new student lead has been registered from Chennai.", time: "5m ago", type: "info" },
                        { title: "Revenue Alert", desc: "Daily revenue target reached (₹50,000).", time: "1h ago", type: "success" },
                        { title: "System Login", desc: "New admin login detected from IP 192.168.1.1", time: "3h ago", type: "warning" },
                        { title: "Course Feedback", desc: "New 5-star review on 'Advanced AI' course.", time: "5h ago", type: "success" },
                    ].map((n, i) => (
                        <div key={i} className="p-4 border-b hover:bg-[var(--bg-soft)] cursor-pointer transition-colors" style={{ borderColor: 'var(--border)' }}>
                            <div className="flex justify-between items-start mb-1">
                                <h4 className="text-xs font-bold">{n.title}</h4>
                                <span className="text-[10px] text-[var(--text-muted)]">{n.time}</span>
                            </div>
                            <p className="text-[11px] text-[var(--text-muted)] leading-relaxed">{n.desc}</p>
                        </div>
                    ))}
                </div>
                <div className="p-3 bg-[var(--bg-soft)]/50 text-center">
                    <button className="text-[10px] font-bold text-[var(--primary)] hover:underline">VIEW ALL NOTIFICATIONS</button>
                </div>
            </div>
        </>
      )}
    </header>
  );
}
