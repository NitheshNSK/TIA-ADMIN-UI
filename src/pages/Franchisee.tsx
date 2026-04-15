import { useState } from "react";
import { Download } from "lucide-react";
import AppLayout from "../components/layout/AppLayout";

export default function Franchisee() {
  const [tab, setTab] = useState("view-franchisee");

  return (
    <AppLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-semibold">Franchisee Management</h1>
          <p className="text-sm text-[var(--text-muted)]">
            Manage franchisees, owners and their referrals
          </p>
        </div>

        {/* TABS */}
        <div
          className="flex gap-8 border-b pb-2 overflow-x-auto whitespace-nowrap scrollbar-hide"
          style={{ borderColor: "var(--border)" }}
        >
          {[
            { id: "add-franchisee", label: "Add Franchisee" },
            { id: "view-franchisee", label: "View Franchisee" },
            { id: "add-owner", label: "Add Franchisee Owner" },
            { id: "view-owner", label: "View Franchisee Owner" },
            { id: "referral", label: "Franchisee Referral" },
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

        {tab === "add-franchisee" && <AddFranchiseeForm />}
        {tab === "view-franchisee" && <ViewFranchiseeTable />}
        {tab === "add-owner" && <AddOwnerForm />}
        {tab === "view-owner" && <ViewOwnerTable />}
        {tab === "referral" && <ReferralTable />}
      </div>
    </AppLayout>
  );
}

/* -------------------------------- */
/* FORMS (STEPPERS) */
/* -------------------------------- */
function AddFranchiseeForm() {
  const [step, setStep] = useState(1);
  return (
     <StepperForm 
        step={step} 
        setStep={setStep} 
        steps={["Organization", "Contact", "Location", "Bank"]} 
        title="Register New Franchisee"
     />
  );
}

function AddOwnerForm() {
  const [step, setStep] = useState(1);
  return (
     <StepperForm 
        step={step} 
        setStep={setStep} 
        steps={["Personal", "Contact", "Identity", "Bank"]} 
        title="Add Franchisee Owner"
     />
  );
}

/* -------------------------------- */
/* TABLES */
/* -------------------------------- */
function ViewFranchiseeTable() {
  const list = [
    { id: "F-101", name: "Premium Education Chennai", owner: "Rajesh Kumar", status: "Active" },
    { id: "F-102", name: "TIA Digital Madurai", owner: "Priya S", status: "Active" },
  ];
  return (
    <DataTable 
        data={list} 
        columns={["Franchisee ID", "Organization Name", "Owner", "Status"]} 
        searchPlaceholder="Search franchisees..."
    />
  );
}

function ViewOwnerTable() {
  const list = [
    { id: "OWN-101", name: "Rajesh Kumar", franchisee: "Premium Education Chennai", email: "rajesh@example.com" },
    { id: "OWN-102", name: "Priya S", franchisee: "TIA Digital Madurai", email: "priya@example.com" },
  ];
  return (
    <DataTable 
        data={list} 
        columns={["Owner ID", "Name", "Assigned Franchisee", "Email"]} 
        searchPlaceholder="Search owners..."
    />
  );
}

function ReferralTable() {
  const list = [
    { id: "REF-F01", referrer: "Rajesh Kumar", referee: "Amit Shah", date: "2024-05-15", status: "Paid" },
  ];
  return (
    <DataTable 
        data={list} 
        columns={["Ref ID", "Referrer", "Referee", "Date", "Status"]} 
        searchPlaceholder="Search referrals..."
    />
  );
}

/* -------------------------------- */
/* SHARED COMPONENTS */
/* -------------------------------- */
function DataTable({ data, columns, searchPlaceholder }: any) {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <input
          placeholder={searchPlaceholder}
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
              {columns.map((c: any) => <th key={c} className="p-4">{c}</th>)}
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item: any, i: number) => (
              <tr key={i} className="border-t" style={{ borderColor: "var(--border)" }}>
                {Object.values(item).map((val: any, idx) => (
                    <td key={idx} className={`p-4 ${idx === 1 ? 'font-medium' : ''}`}>{val}</td>
                ))}
                <td className="p-4 text-right text-[var(--primary)] cursor-pointer">View</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function StepperForm({ step, setStep, steps, title }: any) {
  return (
    <div className="max-w-4xl mx-auto space-y-6 pt-4">
      <div className="flex justify-between text-xs md:text-sm">
        {steps.map((s: string, i: number) => (
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
        <h3 className="font-medium text-lg">{title} - Step {step}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           <Input label="Name / Title" placeholder="Enter details..." />
           <Input label="Email / Primary Contact" placeholder="Email or Phone" />
           <Select label="Status / Priority" options={["Active", "Pending", "Urgent"]} />
        </div>

        <div className="flex justify-between pt-6 border-t" style={{ borderColor: "var(--border)" }}>
          <button
            onClick={() => setStep(step - 1)}
            disabled={step === 1}
            className={`px-6 py-2 rounded-lg bg-[var(--bg-soft)] ${step === 1 ? "opacity-50" : ""}`}
          >
            Back
          </button>
          {step < steps.length ? (
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
              Finish
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
        className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-soft)] border border-transparent focus:border-[var(--primary)] outline-none transition-all"
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
