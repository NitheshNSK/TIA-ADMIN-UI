import { useState } from "react";
import { Plus, Download, Trash2, Pencil } from "lucide-react";
import AppLayout from "../components/layout/AppLayout";

/* -------------------------------- */
/* MAIN PAGE */
/* -------------------------------- */

export default function Concept() {
  const [tab, setTab] = useState("view");

  return (
    <AppLayout>
      <div className="space-y-6">
        <Header />

        <Tabs tab={tab} setTab={setTab} />

        {tab === "view" && <ViewConcepts />}
        {tab === "add" && <AddConcept />}
      </div>
    </AppLayout>
  );
}

/* -------------------------------- */
/* HEADER */
/* -------------------------------- */

function Header() {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
      <div>
        <h1 className="text-2xl font-semibold">Concept Management</h1>
        <p className="text-sm text-[var(--text-muted)]">
          Manage platform concepts
        </p>
      </div>

      <input
        placeholder="Search concept..."
        className="px-4 py-2 rounded-lg bg-[var(--bg-soft)] outline-none w-full lg:w-72"
      />
    </div>
  );
}

/* -------------------------------- */
/* TABS */
/* -------------------------------- */

function Tabs({ tab, setTab }: any) {
  const items = [
    { id: "view", label: "View Concepts" },
    { id: "add", label: "Add Concept" },
  ];

  return (
    <div
      className="flex gap-8 border-b pb-2"
      style={{ borderColor: "var(--border)" }}
    >
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => setTab(item.id)}
          className={`pb-2 text-sm font-medium ${
            tab === item.id
              ? "text-[var(--primary)] border-b-2 border-[var(--primary)]"
              : "text-[var(--text-muted)]"
          }`}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}

/* -------------------------------- */
/* VIEW CONCEPTS */
/* -------------------------------- */

function ViewConcepts() {
  const concepts = [
    { code: "TIA-BT-TN", name: "TIA Brain", status: "Active" },
    { code: "TIA-MOC-TN", name: "TIA MOC", status: "Active" },
  ];

  return (
    <div className="space-y-4">
      <div className="flex gap-3">
        <button
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm"
          style={{ background: "var(--bg-soft)" }}
        >
          <Download size={16} />
          Export Excel
        </button>

        <button
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-white"
          style={{ background: "var(--primary)" }}
        >
          <Plus size={16} />
          Add Concept
        </button>
      </div>

      <div
        className="rounded-xl overflow-hidden"
        style={{
          background: "var(--bg-card)",
          boxShadow: "var(--shadow-card)",
        }}
      >
        <table className="w-full text-sm">
          <thead style={{ background: "var(--bg-soft)" }}>
            <tr className="text-left">
              <th className="p-4">Concept Code</th>
              <th className="p-4">Concept Name</th>
              <th className="p-4">Status</th>
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>

          <tbody>
            {concepts.map((item, i) => (
              <tr
                key={i}
                className="border-t"
                style={{ borderColor: "var(--border)" }}
              >
                <td className="p-4">{item.code}</td>

                <td className="p-4">{item.name}</td>

                <td className="p-4">
                  <span className="px-3 py-1 text-xs rounded-full bg-green-500/20 text-green-400">
                    {item.status}
                  </span>
                </td>

                <td className="p-4 flex justify-end gap-3">
                  <button className="text-[var(--text-muted)] hover:text-[var(--primary)]">
                    <Pencil size={16} />
                  </button>

                  <button className="text-red-500">
                    <Trash2 size={16} />
                  </button>
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
/* ADD CONCEPT */
/* -------------------------------- */

function AddConcept() {
  return (
    <div
      className="max-w-3xl rounded-xl p-6 space-y-6"
      style={{
        background: "var(--bg-card)",
        boxShadow: "var(--shadow-card)",
      }}
    >
      <Input label="Concept Code" placeholder="TIA-BT-TN" />

      <Input label="Concept Name" placeholder="TIA Brain" />

      <Select label="Status" options={["Active", "Inactive"]} />

      <div className="flex justify-end gap-3">
        <button
          className="px-4 py-2 rounded-lg"
          style={{ background: "var(--bg-soft)" }}
        >
          Cancel
        </button>

        <button
          className="px-4 py-2 rounded-lg text-white"
          style={{ background: "var(--primary)" }}
        >
          Save Concept
        </button>
      </div>
    </div>
  );
}

/* -------------------------------- */
/* REUSABLE INPUT */
/* -------------------------------- */

function Input({ label, ...props }: any) {
  return (
    <div className="space-y-1">
      <label className="text-sm text-[var(--text-muted)]">{label}</label>

      <input
        {...props}
        className="w-full px-4 py-2 rounded-lg bg-[var(--bg-soft)] outline-none"
      />
    </div>
  );
}

/* -------------------------------- */
/* REUSABLE SELECT */
/* -------------------------------- */

function Select({ label, options }: any) {
  return (
    <div className="space-y-1">
      <label className="text-sm text-[var(--text-muted)]">{label}</label>

      <select className="w-full px-4 py-2 rounded-lg bg-[var(--bg-soft)]">
        {options.map((o: any) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}
