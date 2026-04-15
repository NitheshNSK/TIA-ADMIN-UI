import { useState } from "react";
import { Download } from "lucide-react";
import AppLayout from "../components/layout/AppLayout";

export default function VIP() {
  const [tab, setTab] = useState("vip-member");

  return (
    <AppLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-semibold">VIP Management</h1>
          <p className="text-sm text-[var(--text-muted)]">
            Manage VIP members, referrals and registrations
          </p>
        </div>

        {/* TABS */}
        <div
          className="flex gap-8 border-b pb-2"
          style={{ borderColor: "var(--border)" }}
        >
          {[
            { id: "vip-member", label: "VIP Member" },
            { id: "vip-referral", label: "VIP Referral" },
            { id: "add-vip", label: "Add VIP" },
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

        {tab === "vip-member" && <VIPMemberTable />}
        {tab === "vip-referral" && <VIPReferralTable />}
        {tab === "add-vip" && <AddVIPForm />}
      </div>
    </AppLayout>
  );
}

function VIPMemberTable() {
  const members = [
    { id: "VIP001", name: "John Doe", type: "Gold", status: "Active" },
    { id: "VIP002", name: "Jane Smith", type: "Platinum", status: "Active" },
  ];

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <input
          placeholder="Search members..."
          className="px-4 py-2 rounded-lg bg-[var(--bg-soft)] outline-none w-72"
        />
        <button
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm"
          style={{ background: "var(--bg-soft)" }}
        >
          <Download size={16} />
          Export Excel
        </button>
      </div>

      <div
        className="rounded-xl overflow-hidden border shadow-sm"
        style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
      >
        <table className="w-full text-sm">
          <thead style={{ background: "var(--bg-soft)" }}>
            <tr className="text-left">
              <th className="p-4">VIP ID</th>
              <th className="p-4">Name</th>
              <th className="p-4">Type</th>
              <th className="p-4">Status</th>
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {members.map((m, i) => (
              <tr key={i} className="border-t" style={{ borderColor: "var(--border)" }}>
                <td className="p-4">{m.id}</td>
                <td className="p-4 font-medium">{m.name}</td>
                <td className="p-4">{m.type}</td>
                <td className="p-4">
                  <span className="px-3 py-1 text-xs rounded-full bg-green-500/20 text-green-400">
                    {m.status}
                  </span>
                </td>
                <td className="p-4 text-right text-[var(--primary)] cursor-pointer hover:underline">
                  View
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function VIPReferralTable() {
  const referrals = [
    { id: "REF001", referrer: "John Doe", referee: "Bob Brown", date: "2024-05-10" },
    { id: "REF002", referrer: "Jane Smith", referee: "Lucy Lane", date: "2024-05-12" },
  ];

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <input
          placeholder="Search referrals..."
          className="px-4 py-2 rounded-lg bg-[var(--bg-soft)] outline-none w-72"
        />
        <button
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm"
          style={{ background: "var(--bg-soft)" }}
        >
          <Download size={16} />
          Export Excel
        </button>
      </div>

      <div
        className="rounded-xl overflow-hidden border shadow-sm"
        style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
      >
        <table className="w-full text-sm">
          <thead style={{ background: "var(--bg-soft)" }}>
            <tr className="text-left">
              <th className="p-4">Ref ID</th>
              <th className="p-4">Referrer</th>
              <th className="p-4">Referee</th>
              <th className="p-4">Date</th>
            </tr>
          </thead>
          <tbody>
            {referrals.map((r, i) => (
              <tr key={i} className="border-t" style={{ borderColor: "var(--border)" }}>
                <td className="p-4">{r.id}</td>
                <td className="p-4">{r.referrer}</td>
                <td className="p-4 font-medium">{r.referee}</td>
                <td className="p-4 text-[var(--text-muted)]">{r.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function AddVIPForm() {
  const [step, setStep] = useState(1);
  const steps = ["Personal", "Contact", "Address", "Bank", "Permissions"];

  return (
    <div className="max-w-4xl mx-auto space-y-6 pt-4">
      {/* STEPPER */}
      <div className="flex justify-between text-xs md:text-sm">
        {steps.map((s, i) => (
          <div
            key={s}
            className={`flex-1 text-center relative ${
              step === i + 1 ? "text-[var(--primary)] font-semibold" : "text-[var(--text-muted)]"
            }`}
          >
            <div
              className={`w-6 h-6 mx-auto mb-2 rounded-full flex items-center justify-center border-2 ${
                step === i + 1 ? "border-[var(--primary)] bg-[var(--primary)]/10" : "border-[var(--border)]"
              }`}
            >
              {i + 1}
            </div>
            {s}
          </div>
        ))}
      </div>

      <div
        className="p-8 rounded-2xl space-y-6 border shadow-sm"
        style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {step === 1 && (
            <>
              <Input label="Full Name" placeholder="Enter full name" />
              <Input label="Date of Birth" type="date" />
              <Select label="Gender" options={["Male", "Female", "Other"]} />
            </>
          )}
          {step === 2 && (
            <>
              <Input label="Email" placeholder="email@example.com" />
              <Input label="Phone" placeholder="+91 00000 00000" />
            </>
          )}
          {step === 3 && (
            <>
              <Input label="Address" placeholder="Street layout" />
              <Input label="City" placeholder="City" />
            </>
          )}
          {/* Add other steps as needed */}
        </div>

        <div className="flex justify-between pt-6 border-t" style={{ borderColor: "var(--border)" }}>
          <button
            onClick={() => setStep(step - 1)}
            disabled={step === 1}
            className={`px-6 py-2 rounded-lg bg-[var(--bg-soft)] ${step === 1 ? "opacity-50" : ""}`}
          >
            Back
          </button>
          {step < 5 ? (
            <button
              onClick={() => setStep(step + 1)}
              className="px-6 py-2 rounded-lg text-white"
              style={{ background: "var(--primary)" }}
            >
              Next
            </button>
          ) : (
            <button
              className="px-8 py-2 rounded-lg text-white font-medium"
              style={{ background: "var(--primary)" }}
            >
              Save VIP
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function Input({ label, ...props }: any) {
  return (
    <div className="space-y-1.5">
      <label className="text-sm font-medium text-[var(--text-muted)]">{label}</label>
      <input
        {...props}
        className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-soft)] border border-transparent focus:border-[var(--primary)] outline-none"
      />
    </div>
  );
}

function Select({ label, options }: any) {
  return (
    <div className="space-y-1.5">
      <label className="text-sm font-medium text-[var(--text-muted)]">{label}</label>
      <select className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-soft)] border border-transparent focus:border-[var(--primary)] outline-none">
        {options.map((o: any) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}
