import { useState } from "react";
import { Download } from "lucide-react";
import AppLayout from "../components/layout/AppLayout";

export default function Students() {
  const [tab, setTab] = useState("admission");

  return (
    <AppLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-semibold">Student Management</h1>
          <p className="text-sm text-[var(--text-muted)]">
            Manage student referrals, admissions and records
          </p>
        </div>

        {/* TABS */}
        <div
          className="flex gap-8 border-b pb-2 overflow-x-auto whitespace-nowrap scrollbar-hide"
          style={{ borderColor: "var(--border)" }}
        >
          {[
            { id: "referral", label: "Student Referral" },
            { id: "admission", label: "Admission Student" },
            //{ id: "computer", label: "Computer Student" },
            { id: "add", label: "Add Student" },
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

        {tab === "referral" && <StudentReferralTable />}
        {tab === "admission" && <AdmissionTable />}
        {tab === "computer" && <ComputerStudentTable />}
        {tab === "add" && <AddStudentForm />}
      </div>
    </AppLayout>
  );
}

function StudentReferralTable() {
    return <SimpleTable 
        title="Student Referrals" 
        data={[{ id: 'SR-01', referrer: 'John Doe', referee: 'Mark Smith', date: '2024-05-12' }]} 
        cols={['Ref ID', 'Referrer', 'Referee', 'Date']}
    />
}

function AdmissionTable() {
    return <SimpleTable 
        title="Admitted Students" 
        data={[{ id: 'ST-101', name: 'Mark Smith', course: 'Digital Marketing', date: '2024-05-14' }]} 
        cols={['Student ID', 'Name', 'Course', 'Admission Date']}
    />
}

function ComputerStudentTable() {
    return <SimpleTable 
        title="Computer Science Students" 
        data={[{ id: 'CS-01', name: 'Alice Wong', specialization: 'AI/ML', year: '2024' }]} 
        cols={['CS ID', 'Name', 'Specialization', 'Year']}
    />
}

function AddStudentForm() {
    const [step, setStep] = useState(1);
    const steps = ["Personal Info", "Academic Info", "Contact Details", "Documents"];
    return (
        <div className="max-w-4xl mx-auto space-y-6 pt-4">
          <div className="flex justify-between text-xs md:text-sm">
            {steps.map((s, i) => (
              <div key={s} className={`flex-1 text-center ${step === i + 1 ? "text-[var(--primary)] font-semibold" : "text-[var(--text-muted)]"}`}>
                <div className={`w-6 h-6 mx-auto mb-2 rounded-full flex items-center justify-center border-2 ${step === i + 1 ? "border-[var(--primary)]" : "border-[var(--border)]"}`}>
                  {i + 1}
                </div>
                {s}
              </div>
            ))}
          </div>

          <div className="p-8 rounded-2xl space-y-6 border shadow-sm" style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                    <label className="text-sm font-medium text-[var(--text-muted)]">Full Name</label>
                    <input className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-soft)] outline-none" placeholder="Student name" />
                </div>
                <div className="space-y-1.5">
                    <label className="text-sm font-medium text-[var(--text-muted)]">Course</label>
                    <select className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-soft)] outline-none">
                        <option>Full Stack Dev</option>
                        <option>Data Science</option>
                    </select>
                </div>
             </div>
             <div className="flex justify-between pt-6 border-t" style={{ borderColor: "var(--border)" }}>
                <button onClick={() => setStep(Math.max(1, step-1))} className="px-6 py-2 rounded-lg bg-[var(--bg-soft)]">Back</button>
                <button onClick={() => setStep(Math.min(4, step+1))} className="px-6 py-2 rounded-lg text-white" style={{ background: "var(--primary)" }}>{step === 4 ? "Save Student" : "Next"}</button>
             </div>
          </div>
        </div>
    )
}

function SimpleTable({ data, cols }: any) {
    return (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <input placeholder="Search..." className="px-4 py-2 rounded-lg bg-[var(--bg-soft)] outline-none w-72" />
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm" style={{ background: "var(--bg-soft)" }}>
              <Download size={16} /> Export
            </button>
          </div>
          <div className="rounded-xl overflow-hidden border shadow-sm" style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}>
            <table className="w-full text-sm">
              <thead style={{ background: "var(--bg-soft)" }}>
                <tr className="text-left">
                  {cols.map((c: any) => <th key={c} className="p-4 uppercase text-[10px] tracking-wider text-[var(--text-muted)]">{c}</th>)}
                </tr>
              </thead>
              <tbody>
                {data.map((item: any, i: number) => (
                  <tr key={i} className="border-t" style={{ borderColor: "var(--border)" }}>
                    {Object.values(item).map((v: any, j) => <td key={j} className="p-4">{v}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
    )
}
