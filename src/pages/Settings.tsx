import { useState } from "react";
import AppLayout from "../components/layout/AppLayout";
import { 
  Settings as SettingsIcon, 
  Mail, 
  ShieldCheck, 
  Globe, 
  Database, 
  Save, 
  Plus, 
  Trash2, 
  Eye, 
  AlertCircle,
  Wallet,
  Activity
} from "lucide-react";

export default function Settings() {
  const [activeTab, setActiveTab] = useState("General");

  return (
    <AppLayout>
      <div className="space-y-8 pb-10">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">System Settings</h1>
            <p className="text-[var(--text-muted)] text-sm font-medium">Configure and manage platform-wide parameters</p>
          </div>
          <button className="flex items-center gap-2 px-6 py-3 bg-[var(--primary)] text-white rounded-2xl font-bold shadow-xl hover:opacity-90 transition-opacity">
            <Save size={20} />
            Save All Changes
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* TABS SIDEBAR */}
          <div className="w-full lg:w-64 space-y-2">
            {[
              { id: "General", icon: Globe, label: "General" },
              { id: "Email", icon: Mail, label: "Email Templates" },
              { id: "Security", icon: ShieldCheck, label: "Security & Access" },
              { id: "Integrations", icon: Database, label: "Integrations" },
              { id: "Advanced", icon: SettingsIcon, label: "System Advanced" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-bold transition-all ${
                  activeTab === tab.id 
                    ? "bg-[var(--primary)] text-white shadow-lg" 
                    : "text-[var(--text-muted)] hover:bg-[var(--bg-soft)]"
                }`}
              >
                <tab.icon size={18} />
                {tab.label}
              </button>
            ))}
          </div>

          {/* SETTINGS CONTENT */}
          <div className="flex-1 bg-[var(--bg-card)] rounded-3xl border p-8 shadow-sm" style={{ borderColor: 'var(--border)' }}>
            {activeTab === "General" && <GeneralSettings />}
            {activeTab === "Email" && <EmailSettings />}
            {activeTab === "Security" && <SecuritySettings />}
            {activeTab === "Integrations" && <IntegrationSettings />}
            {activeTab === "Advanced" && <AdvancedSettings />}
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

function GeneralSettings() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <section className="space-y-4">
        <h3 className="text-lg font-bold">Platform Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputGroup label="Platform Name" placeholder="TIA Admin Panel" />
          <InputGroup label="Support Email" placeholder="support@tia.com" />
          <InputGroup label="Help Desk URL" placeholder="https://help.tia.com" />
          <div className="space-y-2">
            <label className="text-xs font-black uppercase text-[var(--text-muted)]">Site Logo</label>
            <div className="flex items-center gap-4">
               <div className="w-16 h-16 rounded-2xl bg-[var(--bg-soft)] flex items-center justify-center border border-dashed border-[var(--border)]">
                    <Image size={24} className="text-[var(--text-muted)]" />
               </div>
               <button className="px-4 py-2 border rounded-xl text-xs font-bold hover:bg-[var(--bg-soft)] transition-colors" style={{ borderColor: 'var(--border)' }}>Change Logo</button>
            </div>
          </div>
        </div>
      </section>

      <div className="h-px bg-[var(--border)]" />

      <section className="space-y-4">
        <h3 className="text-lg font-bold">Operational Status</h3>
        <div className="flex items-center justify-between p-4 rounded-2xl bg-[var(--bg-soft)]/50 border border-[var(--border)]">
          <div>
            <p className="font-bold text-sm">Maintenance Mode</p>
            <p className="text-xs text-[var(--text-muted)]">Take the platform offline for scheduled maintenance.</p>
          </div>
          <Toggle active={false} />
        </div>
      </section>
    </div>
  );
}

function EmailSettings() {
  const templates = [
    { name: "Welcome Email", trigger: "New User Registration" },
    { name: "Password Reset", trigger: "User Forgot Password" },
    { name: "Referral Link", trigger: "Referral Invite Sent" },
    { name: "Payment Success", trigger: "Transaction Completed" },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-bold">Communication Templates</h3>
        <button className="flex items-center gap-2 px-4 py-2 bg-[var(--bg-soft)] rounded-xl text-xs font-bold hover:bg-[var(--border)] transition-colors">
          <Plus size={16} />
          Create New
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {templates.map((tpl, i) => (
          <div key={i} className="flex items-center justify-between p-4 rounded-2xl border bg-[var(--bg-soft)]/30 hover:border-[var(--primary)] transition-all cursor-pointer group" style={{ borderColor: 'var(--border)' }}>
            <div className="flex items-center gap-4">
               <div className="p-3 rounded-xl bg-white/5 shadow-sm border" style={{ borderColor: 'var(--border)' }}>
                    <Mail size={18} className="text-[var(--primary)]" />
               </div>
               <div>
                  <p className="font-bold text-sm">{tpl.name}</p>
                  <p className="text-[10px] text-[var(--text-muted)] font-black uppercase">Source: {tpl.trigger}</p>
               </div>
            </div>
            <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
               <button className="p-2 hover:bg-[var(--bg-card)] rounded-xl"><Eye size={16} /></button>
               <button className="p-2 hover:bg-[var(--bg-card)] rounded-xl"><Trash2 size={16} className="text-red-400" /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SecuritySettings() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <h3 className="text-lg font-bold">Access Controls</h3>
      <div className="space-y-4">
        <SecurityOption 
            title="Two-Factor Authentication (2FA)" 
            desc="Force all admin users to use 2FA for account security." 
            active={true} 
        />
        <SecurityOption 
            title="Password Rotation" 
            desc="Require administrators to change passwords every 90 days." 
            active={false} 
        />
        <SecurityOption 
            title="IP Whitelisting" 
            desc="Restrict admin access to specific IP addresses." 
            active={false} 
        />
      </div>

      <div className="h-px bg-[var(--border)]" />

      <section className="space-y-4">
        <h3 className="text-lg font-bold text-red-500">Danger Zone</h3>
        <button className="px-6 py-4 border-2 border-red-500/20 text-red-500 rounded-2xl font-black text-xs hover:bg-red-500 hover:text-white transition-all">
          REVOKE ALL SESSIONS
        </button>
      </section>
    </div>
  );
}

function IntegrationSettings() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <h3 className="text-lg font-bold">API & Core Gateways</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <IntegrationCard 
            title="SMTP (Mail)" 
            status="CONNECTED" 
            icon={<Mail size={24} />} 
            lastSync="Active" 
        />
        <IntegrationCard 
            title="Payment Gateway" 
            status="WARNING" 
            icon={<Wallet size={24} />} 
            lastSync="API key expiring" 
        />
        <IntegrationCard 
            title="SMS Gateway" 
            status="CONNECTED" 
            icon={<Activity size={24} />} 
            lastSync="Ready" 
        />
        <IntegrationCard 
            title="Cloud Storage" 
            status="CONNECTED" 
            icon={<Database size={24} />} 
            lastSync="92% Free" 
        />
      </div>
    </div>
  );
}

function AdvancedSettings() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <h3 className="text-lg font-bold">System Runtime Parameters</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputGroup label="Max Request Size (MB)" placeholder="10" />
        <InputGroup label="Session Expiry (mins)" placeholder="120" />
        <InputGroup label="Database Timeout (ms)" placeholder="5000" />
        <InputGroup label="Cache TTL (sec)" placeholder="3600" />
      </div>

      <div className="p-6 rounded-3xl bg-blue-500/5 border border-blue-500/20">
         <div className="flex gap-4">
            <AlertCircle className="text-blue-500 shrink-0" size={20} />
            <div>
               <p className="font-bold text-sm text-blue-500">System Optimization</p>
               <p className="text-xs text-blue-500/70 mt-1 leading-relaxed">
                  These settings are critical for platform stability. Changes take effect on the next deployment cycle.
               </p>
            </div>
         </div>
      </div>
    </div>
  );
}

function InputGroup({ label, placeholder }: { label: string, placeholder: string }) {
  return (
    <div className="space-y-2">
      <label className="text-[10px] font-black uppercase text-[var(--text-muted)] tracking-widest">{label}</label>
      <input 
        className="w-full px-4 py-3 bg-[var(--bg-soft)] rounded-2xl border outline-none font-medium text-sm focus:border-[var(--primary)] transition-all" 
        placeholder={placeholder}
        style={{ borderColor: 'var(--border)' }}
      />
    </div>
  )
}

function SecurityOption({ title, desc, active }: any) {
  return (
    <div className="flex items-center justify-between p-5 rounded-2xl border bg-[var(--bg-soft)]/20" style={{ borderColor: 'var(--border)' }}>
      <div className="flex-1 pr-8">
        <p className="font-bold text-sm">{title}</p>
        <p className="text-[11px] text-[var(--text-muted)] mt-1 font-medium">{desc}</p>
      </div>
      <Toggle active={active} />
    </div>
  )
}

function IntegrationCard({ title, status, icon, lastSync }: any) {
    return (
        <div className="p-6 rounded-3xl border bg-[var(--bg-soft)]/20 hover:border-[var(--primary)] transition-all flex flex-col items-center text-center group" style={{ borderColor: 'var(--border)' }}>
            <div className="p-4 rounded-2xl bg-[var(--bg-card)] shadow-sm border mb-4 transition-transform group-hover:scale-110" style={{ borderColor: 'var(--border)' }}>
                {icon}
            </div>
            <h4 className="font-bold text-sm mb-1">{title}</h4>
            <div className="flex items-center gap-1.5 mb-2">
                <div className={`w-2 h-2 rounded-full ${status === 'CONNECTED' ? 'bg-green-500' : 'bg-red-400'}`} />
                <span className={`text-[10px] font-black ${status === 'CONNECTED' ? 'text-green-500' : 'text-red-400'}`}>{status}</span>
            </div>
            <p className="text-[10px] text-[var(--text-muted)] font-bold">{lastSync}</p>
        </div>
    )
}

function Toggle({ active }: { active: boolean }) {
  return (
    <button className={`w-12 h-6 rounded-full relative transition-colors ${active ? 'bg-[var(--primary)]' : 'bg-[var(--border)]'}`}>
      <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all ${active ? 'right-1' : 'left-1'}`} />
    </button>
  )
}

function Image({ size, className }: any) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
    )
}
