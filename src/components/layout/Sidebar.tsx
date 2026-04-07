import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  BookOpen,
  GraduationCap,
  Users,
  Crown,
  Building2,
  UserPlus,
  Wallet,
  Image,
  Settings,
} from "lucide-react";

export const menu = [
  { name: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
  { name: "Concept Details", icon: BookOpen, path: "/concepts" },
  { name: "Course Details", icon: GraduationCap, path: "/courses" },
  { name: "HOS Staff", icon: Users, path: "/hos-staff" },
  { name: "VIP", icon: Crown, path: "/vip" },
  { name: "VIP Franchise", icon: Building2, path: "/vip-franchise" },
  { name: "Franchise", icon: Building2, path: "/franchise" },
  { name: "Students", icon: UserPlus, path: "/students" },
  { name: "Accounts", icon: Wallet, path: "/accounts" },
  { name: "Media", icon: Image, path: "/media" },
];

export const bottomMenu = [
  { name: "Settings", icon: Settings, path: "/settings" },
];



export default function Sidebar() {
  return (
    <aside
      className="w-64 h-screen flex flex-col border-r"
      style={{
        background: "var(--bg-sidebar)",
        borderColor: "var(--border)",
      }}
    >
      <div className="p-6 text-2xl font-bold text-[var(--primary)]">tia</div>

      <nav className="flex-1 px-3 space-y-1">
        {menu.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 text-sm rounded-lg transition relative
              
              ${
                isActive
                  ? "text-[var(--primary)] bg-[var(--bg-soft)] font-semibold"
                  : "text-[var(--text-muted)] hover:bg-[var(--bg-soft)]"
              }`
            }
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <span
                    className="absolute left-0 top-0 h-full w-[3px] rounded-r"
                    style={{ background: "var(--primary)" }}
                  />
                )}

                <item.icon size={18} />

                {item.name}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      <div className="border-t p-3" style={{ borderColor: "var(--border)" }}>
        {bottomMenu.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className="flex items-center gap-3 px-4 py-2 text-sm text-[var(--text-muted)] hover:bg-[var(--bg-soft)] rounded-lg"
          >
            <item.icon size={18} />
            {item.name}
          </NavLink>
        ))}
      </div>
    </aside>
  );
}
