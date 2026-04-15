import { useState } from "react";
import AppLayout from "../components/layout/AppLayout";
import { 
  Search, 
  Filter, 
  Download, 
  MoreHorizontal, 
  Phone, 
  Mail, 
  Calendar, 
  Clock, 
  TrendingUp,
  X,
  Plus,
  Activity
} from "lucide-react";

export default function CRM() {
  const [selectedLead, setSelectedLead] = useState<any>(null);

  const leads = [
    { id: 1, name: "Robert Fox", email: "robert@ex.com", phone: "+91 98765 43210", source: "Facebook Ads", status: "Qualified", score: 85, city: "Chennai" },
    { id: 2, name: "Jenny Wilson", email: "jenny@ex.com", phone: "+91 87654 32109", source: "Direct Website", status: "Contacted", score: 62, city: "Madurai" },
    { id: 3, name: "Cameron Williamson", email: "cameron@ex.com", phone: "+91 76543 21098", source: "Referral", status: "New", score: 45, city: "Coimbatore" },
    { id: 4, name: "Jerome Bell", email: "jerome@ex.com", phone: "+91 65432 10987", source: "LinkedIn", status: "Qualified", score: 92, city: "Chennai" },
  ];

  return (
    <AppLayout>
      <div className="space-y-8 pb-10">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Lead Relationship Management</h1>
            <p className="text-[var(--text-muted)] text-sm font-medium">Nurture and track your potential students</p>
          </div>
          <button className="flex items-center gap-2 px-6 py-3 bg-[var(--primary)] text-white rounded-2xl font-bold shadow-xl hover:scale-105 active:scale-95 transition-all">
            <Plus size={20} />
            Bulk Import Leads
          </button>
        </div>

        {/* STATS OVERVIEW */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <CRMStat label="High Priority" value="24" color="text-red-500" bg="bg-red-500/10" />
            <CRMStat label="Qualified" value="512" color="text-green-500" bg="bg-green-500/10" />
            <CRMStat label="Total Leads" value="1,842" color="text-blue-500" bg="bg-blue-500/10" />
            <CRMStat label="Conversion Rate" value="34%" color="text-purple-500" bg="bg-purple-500/10" />
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
            {/* LEADS TABLE */}
            <div className={`flex-1 transition-all duration-500 ${selectedLead ? 'lg:max-w-[calc(100%-24rem)]' : 'w-full'}`}>
                <div className="bg-[var(--bg-card)] rounded-3xl border shadow-sm overflow-hidden" style={{ borderColor: 'var(--border)' }}>
                    <div className="p-6 border-b flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderColor: 'var(--border)' }}>
                        <div className="relative flex-1 w-full">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" size={18} />
                            <input className="w-full pl-12 pr-4 py-3 bg-[var(--bg-soft)] rounded-2xl outline-none focus:ring-1 focus:ring-[var(--primary)] text-sm font-medium" placeholder="Search by name, email, or source..." />
                        </div>
                        <div className="flex gap-3 w-full md:w-auto">
                            <button className="flex-1 md:flex-none p-3 border rounded-2xl hover:bg-[var(--bg-soft)] transition-colors" style={{ borderColor: 'var(--border)' }}>
                                <Filter size={18} className="text-[var(--text-muted)]" />
                            </button>
                            <button className="flex-1 md:flex-none flex items-center gap-2 px-4 py-3 border rounded-2xl hover:bg-[var(--bg-soft)] transition-colors font-bold text-xs" style={{ borderColor: 'var(--border)' }}>
                                <Download size={16} />
                                EXPORT
                            </button>
                        </div>
                    </div>

                    <div className="overflow-x-auto no-scrollbar">
                        <table className="w-full text-left min-w-[700px]">
                            <thead className="bg-[var(--bg-soft)]/50">
                                <tr className="text-[10px] font-black uppercase tracking-widest text-[var(--text-muted)]">
                                    <th className="px-6 py-4">Lead Detail</th>
                                    <th className="px-6 py-4">Status</th>
                                    <th className="px-6 py-4">Score</th>
                                    <th className="px-6 py-4">Location</th>
                                    <th className="px-6 py-4"></th>
                                </tr>
                            </thead>
                            <tbody className="divide-y" style={{ borderColor: 'var(--border)' }}>
                                {leads.map((lead) => (
                                    <tr 
                                        key={lead.id} 
                                        onClick={() => setSelectedLead(lead)}
                                        className={`group hover:bg-[var(--bg-soft)]/30 cursor-pointer transition-colors ${selectedLead?.id === lead.id ? 'bg-[var(--bg-soft)]/60' : ''}`}
                                    >
                                        <td className="px-6 py-5">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-xl bg-[var(--bg-soft)] flex items-center justify-center font-bold text-[var(--primary)]">
                                                    {lead.name.charAt(0)}
                                                </div>
                                                <div>
                                                    <p className="font-bold text-sm">{lead.name}</p>
                                                    <p className="text-[10px] text-[var(--text-muted)] font-medium leading-none mt-1">{lead.email}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-5">
                                            <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase ${lead.status === 'Qualified' ? 'bg-green-500/10 text-green-500' : 'bg-blue-500/10 text-blue-500'}`}>
                                                {lead.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-5">
                                            <div className="flex items-center gap-2">
                                                <div className="w-16 h-1.5 bg-[var(--bg-soft)] rounded-full overflow-hidden">
                                                    <div className="h-full bg-[var(--primary)]" style={{ width: `${lead.score}%` }} />
                                                </div>
                                                <span className="text-xs font-black">{lead.score}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-5">
                                            <p className="text-xs font-bold">{lead.city}</p>
                                            <p className="text-[9px] text-[var(--text-muted)] uppercase tracking-tighter mt-1">{lead.source}</p>
                                        </td>
                                        <td className="px-6 py-5 text-right opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button className="p-2 hover:bg-[var(--bg-soft)] rounded-xl"><MoreHorizontal size={18}/></button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* PROFILE SIDEBAR */}
            {selectedLead && (
                <div className="fixed inset-y-0 right-0 w-full md:w-96 bg-[var(--bg-card)] shadow-2xl z-[150] flex flex-col overflow-hidden animate-in slide-in-from-right duration-500 lg:relative lg:z-0 lg:rounded-3xl lg:border lg:shadow-xl" style={{ borderColor: 'var(--border)' }}>
                    <div className="p-6 border-b flex justify-between items-center" style={{ borderColor: 'var(--border)' }}>
                        <h3 className="font-bold">Lead Insight</h3>
                        <button onClick={() => setSelectedLead(null)} className="p-1 hover:bg-[var(--bg-soft)] rounded-lg transition-colors">
                            <X size={20} />
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto p-6 space-y-8 no-scrollbar">
                        {/* PROFILE HEADER */}
                        <div className="text-center">
                            <div className="w-20 h-20 rounded-3xl bg-[var(--primary)]/10 text-[var(--primary)] flex items-center justify-center font-black text-3xl mx-auto mb-4 border-2 border-[var(--primary)]/20 shadow-inner">
                                {selectedLead.name.charAt(0)}
                            </div>
                            <h4 className="text-xl font-black">{selectedLead.name}</h4>
                            <p className="text-xs text-[var(--text-muted)] font-bold mb-4">{selectedLead.status} Lead</p>
                            
                            <div className="flex justify-center gap-3">
                                <button className="p-3 bg-[var(--bg-soft)] rounded-2xl hover:bg-[var(--primary)]/10 hover:text-[var(--primary)] transition-all"><Phone size={18}/></button>
                                <button className="p-3 bg-[var(--bg-soft)] rounded-2xl hover:bg-[var(--primary)]/10 hover:text-[var(--primary)] transition-all"><Mail size={18}/></button>
                                <button className="p-3 bg-[var(--bg-soft)] rounded-2xl hover:bg-[var(--primary)]/10 hover:text-[var(--primary)] transition-all"><Calendar size={18}/></button>
                            </div>
                        </div>

                        {/* ENGAGEMENT TIMELINE */}
                        <div className="space-y-6">
                            <h5 className="text-[10px] font-black uppercase tracking-widest text-[var(--text-muted)] flex items-center gap-2">
                                <Clock size={12} />
                                Engagement Timeline
                            </h5>
                            
                            <div className="space-y-6 relative ml-2">
                                <div className="absolute left-2 top-0 bottom-0 w-px bg-[var(--border)]" />
                                
                                <TimelineItem 
                                    icon={<Phone size={12} className="text-green-500" />}
                                    title="Outbound Call" 
                                    desc="Discussed Course details and VIP membership benefits."
                                    time="Today, 11:30 AM"
                                />
                                <TimelineItem 
                                    icon={<Mail size={12} className="text-blue-500" />}
                                    title="Follow-up Email" 
                                    desc="Sent brochure and pricing sheet for TIA Admission."
                                    time="Yesterday, 02:45 PM"
                                />
                                <TimelineItem 
                                    icon={<Activity size={12} className="text-purple-500" />}
                                    title="Website Visit" 
                                    desc="Viewed 'Advanced AI Mastery' course page (3 mins)."
                                    time="Oct 14, 2023"
                                />
                            </div>
                        </div>

                        {/* LEAD NOTES */}
                        <div className="space-y-4">
                            <h5 className="text-[10px] font-black uppercase tracking-widest text-[var(--text-muted)]">Private Notes</h5>
                            <textarea 
                                className="w-full h-32 bg-[var(--bg-soft)]/50 p-4 rounded-2xl border text-xs font-medium outline-none focus:border-[var(--primary)] transition-all resize-none" 
                                placeholder="Add a note about this lead..."
                                style={{ borderColor: 'var(--border)' }}
                            />
                        </div>
                    </div>

                    <div className="p-6 border-t bg-[var(--bg-soft)]/30" style={{ borderColor: 'var(--border)' }}>
                        <button className="w-full py-4 bg-[var(--primary)] text-white font-black rounded-2xl shadow-xl shadow-[var(--primary)]/20 hover:scale-[1.02] active:scale-95 transition-all uppercase tracking-widest text-[10px]">
                            Convert to Student
                        </button>
                    </div>
                </div>
            )}
        </div>
      </div>
    </AppLayout>
  );
}

function CRMStat({ label, value, color, bg }: any) {
    return (
        <div className="bg-[var(--bg-card)] p-6 rounded-3xl border shadow-sm" style={{ borderColor: 'var(--border)' }}>
            <p className="text-[10px] font-black uppercase tracking-widest text-[var(--text-muted)] mb-2">{label}</p>
            <div className="flex items-center gap-3">
                <h3 className="text-3xl font-black">{value}</h3>
                <div className={`p-1.5 rounded-lg ${bg} ${color}`}>
                    <TrendingUp size={16} />
                </div>
            </div>
        </div>
    )
}

function TimelineItem({ icon, title, desc, time }: any) {
    return (
        <div className="relative pl-8">
            <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-[var(--bg-card)] border-2 border-[var(--border)] flex items-center justify-center z-10 shadow-sm">
                {icon}
            </div>
            <div>
                <div className="flex justify-between items-center mb-1">
                    <h6 className="text-xs font-black leading-none">{title}</h6>
                    <span className="text-[9px] text-[var(--text-muted)] font-bold">{time}</span>
                </div>
                <p className="text-[11px] text-[var(--text-muted)] font-medium leading-relaxed">{desc}</p>
            </div>
        </div>
    )
}
