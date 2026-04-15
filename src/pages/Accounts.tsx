import { useState } from "react";
import { Download, Filter, TrendingUp, TrendingDown, DollarSign } from "lucide-react";
import AppLayout from "../components/layout/AppLayout";

export default function Accounts() {
  const [tab, setTab] = useState("overview");

  return (
    <AppLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-semibold">Accounts & Finance</h1>
          <p className="text-sm text-[var(--text-muted)]">
            Detailed financial tracking across all user segments
          </p>
        </div>

        {/* TABS */}
        <div
          className="flex gap-8 border-b pb-2 overflow-x-auto whitespace-nowrap"
          style={{ borderColor: "var(--border)" }}
        >
          {[
            { id: "overview", label: "Overview" },
            { id: "hos", label: "HOS Staff" },
            { id: "vip", label: "VIP" },
            { id: "franchise", label: "Franchise" },
            { id: "student", label: "Students" },
          ].map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`pb-2 text-sm font-medium transition-colors ${
                tab === t.id
                  ? "text-[var(--primary)] border-b-2 border-[var(--primary)]"
                  : "text-[var(--text-muted)] hover:text-[var(--text-main)]"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {tab === "overview" && <FinancialOverview />}
        {tab !== "overview" && <UserTypeFinancials type={tab} />}
      </div>
    </AppLayout>
  );
}

function FinancialOverview() {
  return (
    <div className="space-y-8">
      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard title="Total Revenue" value="₹45,20,000" icon={<DollarSign className="text-green-500" />} trend="+12% from last month" />
        <StatCard title="Net Profit" value="₹12,80,000" icon={<TrendingUp className="text-blue-500" />} trend="+5% from last month" />
        <StatCard title="Total Payouts" value="₹5,40,000" icon={<TrendingDown className="text-red-400" />} trend="-2% from last month" />
        <StatCard title="Pending Dues" value="₹2,15,000" icon={<Filter className="text-orange-400" />} trend="Requires attention" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
         <TransactionTable title="Recent Transactions" />
         <div className="p-6 rounded-2xl border bg-[var(--bg-card)] flex items-center justify-center text-[var(--text-muted)]" style={{ borderColor: 'var(--border)' }}>
             Financial Chart Placeholder (Revenue vs Profit)
         </div>
      </div>
    </div>
  );
}

function UserTypeFinancials({ type }: { type: string }) {
    const titles: any = { hos: 'HOS Staff Financials', vip: 'VIP Member Financials', franchise: 'Franchisee Financials', student: 'Student Payments' };
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">{titles[type]}</h3>
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm bg-[var(--bg-soft)]">
                    <Download size={16} /> Export {type.toUpperCase()} Data
                </button>
            </div>
            <TransactionTable title={`${titles[type]} Records`} />
        </div>
    )
}

function StatCard({ title, value, icon, trend }: any) {
    return (
        <div className="p-6 rounded-2xl border bg-[var(--bg-card)] shadow-sm" style={{ borderColor: 'var(--border)' }}>
            <div className="flex justify-between items-start">
                <div>
                    <p className="text-sm text-[var(--text-muted)]">{title}</p>
                    <h3 className="text-2xl font-bold mt-1">{value}</h3>
                </div>
                <div className="p-2 rounded-lg bg-[var(--bg-soft)]">{icon}</div>
            </div>
            <p className="text-[10px] mt-4 text-[var(--text-muted)] uppercase tracking-wider">{trend}</p>
        </div>
    )
}

function TransactionTable({ title }: { title: string }) {
    const data = [
        { id: 'T1001', user: 'Rajesh Kumar', type: 'Franchise Fee', amount: '₹1,00,000', status: 'Success' },
        { id: 'T1002', user: 'Alice Wong', type: 'Course Fee', amount: '₹25,000', status: 'Success' },
        { id: 'T1003', user: 'Mark Smith', type: 'Referral Payout', amount: '-₹500', status: 'Pending' },
    ];
    return (
        <div className="space-y-4">
             {title && <h4 className="text-sm font-medium text-[var(--text-muted)]">{title}</h4>}
             <div className="rounded-xl overflow-hidden border" style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}>
                <table className="w-full text-sm text-left">
                    <thead className="bg-[var(--bg-soft)]">
                        <tr>
                            <th className="p-4">TX ID</th>
                            <th className="p-4">User</th>
                            <th className="p-4">Category</th>
                            <th className="p-4">Amount</th>
                            <th className="p-4">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, i) => (
                            <tr key={i} className="border-t" style={{ borderColor: 'var(--border)' }}>
                                <td className="p-4 font-mono text-xs">{row.id}</td>
                                <td className="p-4">{row.user}</td>
                                <td className="p-4 text-[var(--text-muted)]">{row.type}</td>
                                <td className={`p-4 font-medium ${row.amount.includes('-') ? 'text-red-400' : 'text-green-500'}`}>{row.amount}</td>
                                <td className="p-4">
                                     <span className={`px-2 py-0.5 rounded text-[10px] ${row.status === 'Success' ? 'bg-green-500/10 text-green-500' : 'bg-orange-500/10 text-orange-500'}`}>{row.status}</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
             </div>
        </div>
    )
}
