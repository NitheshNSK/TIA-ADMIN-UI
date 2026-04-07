import { Bell, MessageSquare } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Topbar() {
  return (
    <header
      className="h-16 flex items-center justify-between px-6 border-b"
      style={{
        background: "var(--bg-card)",
        borderColor: "var(--border)",
      }}
    >
      <input
        placeholder="Search"
        className="bg-[var(--bg-soft)] px-4 py-2 rounded-lg outline-none"
      />

      <div className="flex items-center gap-6">
        {/* CEO Messages */}
        <button className="relative">
          <MessageSquare size={20} />

          <span className="absolute -top-1 -right-1 w-2 h-2 bg-[var(--primary)] rounded-full" />
        </button>

        {/* Notifications */}
        <Bell size={20} />
        <ThemeToggle />

        <img src="https://i.pravatar.cc/40" className="w-8 h-8 rounded-full" />
      </div>
    </header>
  );
}
