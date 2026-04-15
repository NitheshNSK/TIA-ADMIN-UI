import { useState } from "react";
import { Download, ChevronLeft, ChevronRight } from "lucide-react";
import AppLayout from "../components/layout/AppLayout";

export default function VIPFranchisee() {
  const [tab, setTab] = useState("due-members");

  return (
    <AppLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-semibold">VIP Franchisee</h1>
          <p className="text-sm text-[var(--text-muted)]">
            Manage franchisees, their referrals and dues
          </p>
        </div>

        {/* TABS */}
        <div
          className="flex gap-8 border-b pb-2"
          style={{ borderColor: "var(--border)" }}
        >
          {[
            { id: "due-members", label: "Due Members" },
            { id: "vip-referrals", label: "VIP Referrals" },
            { id: "add-franchisee", label: "Add VIP Franchisee" },
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

        {tab === "due-members" && <DueMembers />}
        {tab === "vip-referrals" && <VIPReferrals />}
        {tab === "add-franchisee" && <AddFranchiseeForm />}
      </div>
    </AppLayout>
  );
}

/* -------------------------------- */
/* DUE MEMBERS TAB */
/* -------------------------------- */
function DueMembers() {
  const members = [
    { id: "M001", name: "Alice Green", amount: "₹5,000", dueDate: "2024-05-20" },
    { id: "M002", name: "Charlie Brown", amount: "₹3,200", dueDate: "2024-05-25" },
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
          Download Excel
        </button>
      </div>

      <div
        className="rounded-xl overflow-hidden border"
        style={{
          background: "var(--bg-card)",
          borderColor: "var(--border)",
        }}
      >
        <table className="w-full text-sm">
          <thead style={{ background: "var(--bg-soft)" }}>
            <tr className="text-left">
              <th className="p-4">Member ID</th>
              <th className="p-4">Name</th>
              <th className="p-4">Amount Due</th>
              <th className="p-4">Due Date</th>
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {members.map((m, i) => (
              <tr key={i} className="border-t" style={{ borderColor: "var(--border)" }}>
                <td className="p-4 ">{m.id}</td>
                <td className="p-4 font-medium">{m.name}</td>
                <td className="p-4 text-orange-500">{m.amount}</td>
                <td className="p-4">{m.dueDate}</td>
                <td className="p-4 text-right">
                  <button className="text-[var(--primary)]">Remind</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* -------------------------------- */
/* VIP REFERRALS TAB */
/* -------------------------------- */
function VIPReferrals() {
  const referrals = [
    { id: "R001", referrer: "John Doe", referee: "Mark Lee", date: "2024-04-10", reward: "₹500" },
    { id: "R002", referrer: "Jane Smith", referee: "Sarah Connors", date: "2024-04-15", reward: "₹500" },
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
          Download Excel
        </button>
      </div>

      <div
        className="rounded-xl overflow-hidden border"
        style={{
          background: "var(--bg-card)",
          borderColor: "var(--border)",
        }}
      >
        <table className="w-full text-sm">
          <thead style={{ background: "var(--bg-soft)" }}>
            <tr className="text-left">
              <th className="p-4">Referral ID</th>
              <th className="p-4">Referrer</th>
              <th className="p-4">Referee</th>
              <th className="p-4">Date</th>
              <th className="p-4">Reward</th>
            </tr>
          </thead>
          <tbody>
            {referrals.map((r, i) => (
              <tr key={i} className="border-t" style={{ borderColor: "var(--border)" }}>
                <td className="p-4">{r.id}</td>
                <td className="p-4 ">{r.referrer}</td>
                <td className="p-4 font-medium">{r.referee}</td>
                <td className="p-4 text-[var(--text-muted)]">{r.date}</td>
                <td className="p-4 text-green-500">{r.reward}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* -------------------------------- */
/* ADD FRANCHISEE FORM (STEPPER) */
/* -------------------------------- */
function AddFranchiseeForm() {
  const [step, setStep] = useState(1);
  const steps = ["Personal", "Contact", "Address", "Bank", "Permissions", "Media"];

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

      {/* FORM CARD */}
      <div
        className="p-8 rounded-2xl space-y-6 border shadow-sm"
        style={{
          background: "var(--bg-card)",
          borderColor: "var(--border)",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {step === 1 && (
            <>
              <Input label="First Name" placeholder="Enter first name" />
              <Input label="Last Name" placeholder="Enter last name" />
              <Input label="Date of Birth" type="date" />
              <Select label="Gender" options={["Male", "Female", "Other"]} />
            </>
          )}

          {step === 2 && (
            <>
              <Input label="Email Address" placeholder="email@example.com" />
              <Input label="Phone Number" placeholder="+91 98765 43210" />
              <Input label="Whatsapp" placeholder="+91 98765 43210" />
            </>
          )}

          {step === 3 && (
            <>
              <Input label="Address Line 1" placeholder="House/Apt name" />
              <Input label="City" placeholder="City name" />
              <Input label="District" placeholder="District name" />
              <Input label="Pincode" placeholder="600001" />
            </>
          )}

          {step === 4 && (
            <>
              <Input label="Bank Name" placeholder="e.g. HDFC Bank" />
              <Input label="Account Number" placeholder="000000000000" />
              <Input label="IFSC Code" placeholder="HDFC0001234" />
              <Input label="Branch" placeholder="Branch name" />
            </>
          )}

          {step === 5 && (
            <div className="col-span-2 grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "VIP Management",
                "Franchise Access",
                "Student Records",
                "Account Viewing",
                "Media Upload",
                "CRM Access",
              ].map((p) => (
                <label key={p} className="flex items-center gap-3 p-3 rounded-lg bg-[var(--bg-soft)] cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 rounded border-[var(--border)] accent-[var(--primary)]" />
                  <span className="text-sm">{p}</span>
                </label>
              ))}
            </div>
          )}

          {step === 6 && (
            <>
              <Input label="Profile Picture" type="file" />
              <Input label="ID Proof" type="file" />
              <Input label="Agreement" type="file" />
            </>
          )}
        </div>

        {/* FOOTER BUTTONS */}
        <div className="flex justify-between pt-6 border-t" style={{ borderColor: "var(--border)" }}>
          <button
            onClick={() => step > 1 && setStep(step - 1)}
            disabled={step === 1}
            className={`flex items-center gap-2 px-6 py-2 rounded-lg transition-colors ${
              step === 1 ? "opacity-50 cursor-not-allowed" : "bg-[var(--bg-soft)] hover:bg-[var(--bg-soft)]/80"
            }`}
          >
            <ChevronLeft size={18} />
            Back
          </button>

          {step < 6 ? (
            <button
              onClick={() => setStep(step + 1)}
              className="flex items-center gap-2 px-6 py-2 rounded-lg text-white transition-opacity hover:opacity-90"
              style={{ background: "var(--primary)" }}
            >
              Next
              <ChevronRight size={18} />
            </button>
          ) : (
            <button
              className="px-8 py-2 rounded-lg text-white transition-opacity hover:opacity-90 font-medium"
              style={{ background: "var(--primary)" }}
            >
              Finish & Save
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

/* -------------------------------- */
/* UI COMPONENTS */
/* -------------------------------- */
function Input({ label, ...props }: any) {
  return (
    <div className="space-y-1.5">
      <label className="text-sm font-medium text-[var(--text-muted)]">{label}</label>
      <input
        {...props}
        className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-soft)] border border-transparent focus:border-[var(--primary)] outline-none transition-all placeholder:text-[var(--text-muted)]/50"
      />
    </div>
  );
}

function Select({ label, options }: any) {
  return (
    <div className="space-y-1.5">
      <label className="text-sm font-medium text-[var(--text-muted)]">{label}</label>
      <select className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-soft)] border border-transparent focus:border-[var(--primary)] outline-none transition-all cursor-pointer">
        {options.map((o: any) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
