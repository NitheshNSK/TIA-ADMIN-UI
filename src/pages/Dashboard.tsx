import { useState } from "react";
import { 
  TrendingUp, 
  Activity, 
  ArrowUpRight, 
  ArrowDownRight,
  Filter,
  LayoutDashboard
} from "lucide-react";
import AppLayout from "../components/layout/AppLayout";
import { 
  AreaChart, Area, 
  BarChart, Bar, 
  RadarChart, PolarGrid, PolarAngleAxis, Radar,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  Cell
} from 'recharts';

export default function Dashboard() {
  const [timeFilter, setTimeFilter] = useState("Weekly");

  const growthData = [
    { name: 'Mon', students: 400, revenue: 2400 },
    { name: 'Tue', students: 300, revenue: 1398 },
    { name: 'Wed', students: 200, revenue: 9800 },
    { name: 'Thu', students: 278, revenue: 3908 },
    { name: 'Fri', students: 189, revenue: 4800 },
    { name: 'Sat', students: 239, revenue: 3800 },
    { name: 'Sun', students: 349, revenue: 4300 },
  ];

  const regionalData = [
    { name: 'Chennai', value: 850 },
    { name: 'Madurai', value: 620 },
    { name: 'Coimbatore', value: 740 },
    { name: 'Trichy', value: 490 },
    { name: 'Salem', value: 380 },
  ];

  const healthData = [
    { subject: 'Students', A: 120, fullMark: 150 },
    { subject: 'VIPs', A: 98, fullMark: 150 },
    { subject: 'Franchise', A: 86, fullMark: 150 },
    { subject: 'Retention', A: 99, fullMark: 150 },
    { subject: 'Profit', A: 85, fullMark: 150 },
  ];

  return (
    <AppLayout>
      <div className="space-y-8 pb-10">
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight mb-1 flex items-center gap-2">
                <LayoutDashboard className="text-[var(--primary)]" size={28} />
                Platform Intelligence
            </h1>
            <p className="text-[var(--text-muted)] text-sm font-medium">Monitoring 15+ real-time platform segments</p>
          </div>
          
          <div className="flex items-center gap-3 bg-[var(--bg-card)] p-1.5 rounded-2xl border" style={{ borderColor: 'var(--border)' }}>
            {["Daily", "Weekly", "Monthly"].map((t) => (
              <button 
                key={t}
                onClick={() => setTimeFilter(t)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${timeFilter === t ? 'bg-[var(--primary)] text-white shadow-lg' : 'text-[var(--text-muted)] hover:bg-[var(--bg-soft)]'}`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* KEY HIGHLIGHTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetricSummary title="Total Revenue" value="₹24.8L" trend="+14.2%" trendUp={true} />
            <MetricSummary title="Active Sessions" value="1,842" trend="+5.4%" trendUp={true} />
            <MetricSummary title="Pending Leads" value="142" trend="-2.1%" trendUp={false} />
            <MetricSummary title="Avg. Retention" value="94.2%" trend="+0.8%" trendUp={true} />
        </div>

        {/* MAIN VISUALIZATION ROW */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* LARGE GROWTH CHART */}
            <div className="lg:col-span-2 bg-[var(--bg-card)] p-8 rounded-3xl border shadow-sm" style={{ borderColor: 'var(--border)' }}>
                 <div className="flex justify-between items-center mb-8">
                    <div>
                        <h3 className="font-bold text-lg mb-1">Growth Dynamics</h3>
                        <p className="text-xs text-[var(--text-muted)] font-medium">Revenue vs Student Enrollment</p>
                    </div>
                    <button className="p-2.5 rounded-xl border bg-[var(--bg-soft)]/50 active:scale-95 transition-transform">
                        <Filter size={18} className="text-[var(--text-muted)]" />
                    </button>
                 </div>
                 <div className="h-[350px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={growthData}>
                            <defs>
                                <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.15}/>
                                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" opacity={0.5} />
                            <XAxis dataKey="name" fontSize={12} stroke="var(--text-muted)" axisLine={false} tickLine={false} tickMargin={15} />
                            <YAxis fontSize={12} stroke="var(--text-muted)" axisLine={false} tickLine={false} tickFormatter={(val) => `₹${val/1000}k`} />
                            <Tooltip 
                                cursor={{ stroke: 'var(--primary)', strokeWidth: 1 }}
                                contentStyle={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '16px', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                            />
                            <Area type="monotone" dataKey="revenue" stroke="#6366f1" strokeWidth={4} fillOpacity={1} fill="url(#colorRev)" />
                            <Area type="monotone" dataKey="students" stroke="#10b981" strokeWidth={4} fill="transparent" />
                        </AreaChart>
                    </ResponsiveContainer>
                 </div>
            </div>

            {/* RADAR ANALYTICS */}
            <div className="bg-[var(--bg-card)] p-8 rounded-3xl border shadow-sm" style={{ borderColor: 'var(--border)' }}>
                <h3 className="font-bold text-lg mb-8">Platform Health</h3>
                <div className="h-[300px] w-full flex items-center justify-center">
                    <ResponsiveContainer width="100%" height="100%">
                        <RadarChart data={healthData}>
                            <PolarGrid stroke="var(--border)" />
                            <PolarAngleAxis dataKey="subject" tick={{ fill: 'var(--text-muted)', fontSize: 11 }} />
                            <Radar name="Platform" dataKey="A" stroke="var(--primary)" fill="var(--primary)" fillOpacity={0.6} />
                            <Tooltip contentStyle={{ background: 'var(--bg-card)', borderColor: 'var(--border)', borderRadius: '12px' }} />
                        </RadarChart>
                    </ResponsiveContainer>
                </div>
                <div className="mt-8 space-y-4">
                    <HealthBar label="Database Speed" value={92} />
                    <HealthBar label="API Response" value={85} />
                    <HealthBar label="Server Load" value={34} />
                </div>
            </div>
        </div>

        {/* BOTTOM ROW: REGIONAL & STATS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
             {/* REGIONAL BAR CHART */}
             <div className="bg-[var(--bg-card)] p-8 rounded-3xl border shadow-sm" style={{ borderColor: 'var(--border)' }}>
                <div className="flex justify-between items-center mb-8">
                    <h3 className="font-bold text-lg">Regional Distribution</h3>
                    <TrendingUp size={20} className="text-green-500" />
                </div>
                <div className="h-[250px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={regionalData}>
                            <XAxis dataKey="name" fontSize={11} stroke="var(--text-muted)" axisLine={false} tickLine={false} />
                            <Tooltip contentStyle={{ background: 'var(--bg-card)', borderColor: 'var(--border)', borderRadius: '12px' }} />
                            <Bar dataKey="value" radius={[6, 6, 0, 0]} barSize={40}>
                                {regionalData.map((_, i) => (
                                    <Cell key={i} fill={i % 2 === 0 ? 'var(--primary)' : '#818cf8'} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
             </div>

             {/* LIVE PERFORMANCE LOGS */}
             <div className="bg-[var(--bg-card)] p-8 rounded-3xl border shadow-sm" style={{ borderColor: 'var(--border)' }}>
                <div className="flex justify-between items-center mb-8">
                    <h3 className="font-bold text-lg">System Performance</h3>
                    <Activity size={20} className="text-blue-500" />
                </div>
                <div className="space-y-6">
                    <PerformanceMetric label="App Resource Usage" val="45%" status="OPTIMAL" color="#10b981" />
                    <PerformanceMetric label="Real-time User Latency" val="24ms" status="EXCELLENT" color="#6366f1" />
                    <PerformanceMetric label="Sync Status" val="100%" status="SYNCED" color="#f59e0b" />
                </div>
             </div>
        </div>
      </div>
    </AppLayout>
  );
}

function MetricSummary({ title, value, trend, trendUp }: any) {
    return (
        <div className="bg-[var(--bg-card)] p-6 rounded-3xl border shadow-sm hover:shadow-md transition-shadow group" style={{ borderColor: 'var(--border)' }}>
            <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-2xl ${trendUp ? 'bg-green-500/10' : 'bg-red-500/10'} group-hover:scale-110 transition-transform`}>
                    {trendUp ? <TrendingUp size={20} className="text-green-500" /> : <TrendingUp size={20} className="text-red-500 rotate-180" />}
                </div>
                <div className={`flex items-center text-[10px] font-bold px-2 py-1 rounded-full ${trendUp ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>
                    {trendUp ? <ArrowUpRight size={10} className="mr-1" /> : <ArrowDownRight size={10} className="mr-1" />}
                    {trend}
                </div>
            </div>
            <p className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider mb-1">{title}</p>
            <h2 className="text-2xl font-black">{value}</h2>
        </div>
    )
}

function HealthBar({ label, value }: any) {
    return (
        <div className="space-y-2">
            <div className="flex justify-between text-xs font-bold uppercase">
                <span className="text-[var(--text-muted)]">{label}</span>
                <span>{value}%</span>
            </div>
            <div className="h-1.5 w-full bg-[var(--bg-soft)] rounded-full overflow-hidden">
                <div className="h-full bg-[var(--primary)] rounded-full transition-all duration-1000" style={{ width: `${value}%` }} />
            </div>
        </div>
    )
}

function PerformanceMetric({ label, val, status, color }: any) {
    return (
        <div className="flex items-center justify-between p-4 rounded-2xl bg-[var(--bg-soft)]/40 border border-transparent hover:border-[var(--border)] transition-all">
            <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: color }} />
                <div>
                    <p className="text-sm font-bold">{label}</p>
                    <p className="text-[10px] font-black" style={{ color }}>{status}</p>
                </div>
            </div>
            <div className="text-xl font-black">{val}</div>
        </div>
    )
}
