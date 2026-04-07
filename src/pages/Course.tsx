import { useState } from "react";
import { Plus, Download, Trash2, Pencil } from "lucide-react";
import AppLayout from "../components/layout/AppLayout";

/* -------------------------------- */
/* MAIN PAGE */
/* -------------------------------- */

export default function Course() {
  const [tab, setTab] = useState("view");

  return (
    <AppLayout>
      <div className="space-y-6">
        <Header />

        <Tabs tab={tab} setTab={setTab} />

        {tab === "view" && <ViewCourses />}
        {tab === "add" && <AddCourse />}
        {tab === "discount" && <DiscountGenerator />}
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
        <h1 className="text-2xl font-semibold">Course Management</h1>
        <p className="text-sm text-[var(--text-muted)]">
          Manage courses and generate discounts
        </p>
      </div>

      <input
        placeholder="Search courses..."
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
    { id: "view", label: "View Courses" },
    { id: "add", label: "Add Course" },
    { id: "discount", label: "Discount Generator" },
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
/* VIEW COURSES */
/* -------------------------------- */

function ViewCourses() {
  const courses = [
    {
      code: "TIA-COURSE-01",
      concept: "TIA BRAIN",
      name: "Brain Training",
      fee: 15000,
      status: "Active",
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex gap-3">
        <button
          className="px-4 py-2 rounded-lg text-sm"
          style={{ background: "var(--bg-soft)" }}
        >
          Select Delete
        </button>

        <button
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-white"
          style={{ background: "var(--primary)" }}
        >
          <Download size={16} />
          Download Excel
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
              <th className="p-4">Course Code</th>
              <th className="p-4">Concept</th>
              <th className="p-4">Course Name</th>
              <th className="p-4">Fee</th>
              <th className="p-4">Status</th>
              <th className="p-4 text-right">Action</th>
            </tr>
          </thead>

          <tbody>
            {courses.map((c, i) => (
              <tr
                key={i}
                className="border-t"
                style={{ borderColor: "var(--border)" }}
              >
                <td className="p-4">{c.code}</td>
                <td className="p-4">{c.concept}</td>
                <td className="p-4">{c.name}</td>
                <td className="p-4">₹ {c.fee}</td>

                <td className="p-4">
                  <span className="px-3 py-1 text-xs rounded-full bg-green-500/20 text-green-400">
                    {c.status}
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
/* ADD COURSE */
/* -------------------------------- */

function AddCourse() {
  return (
    <div
      className="max-w-4xl rounded-xl p-6 space-y-6"
      style={{
        background: "var(--bg-card)",
        boxShadow: "var(--shadow-card)",
      }}
    >
      <div className="grid md:grid-cols-2 gap-6">
        <Input label="Course Code" placeholder="TIA-BT-01" />
        <Input label="Course Name" placeholder="Brain Training" />

        <Select
          label="Concept"
          options={["TIA Brain", "TIA MOC", "TIA TestHub"]}
        />

        <Input label="Course Fee" placeholder="15000" />

        <Input label="VIP Revenue %" placeholder="10%" />

        <Input label="Company Commission %" placeholder="5%" />
      </div>

      <Status />

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
          Save Course
        </button>
      </div>
    </div>
  );
}

/* -------------------------------- */
/* DISCOUNT GENERATOR */
/* -------------------------------- */

function DiscountGenerator() {
  return (
    <div className="space-y-6">
      <div
        className="p-6 rounded-xl grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        style={{
          background: "var(--bg-card)",
          boxShadow: "var(--shadow-card)",
        }}
      >
        <Input label="Discount %" placeholder="10%" />

        <Input label="Discount Description" placeholder="Festival Offer" />

        <Input label="Discount Code" placeholder="TIA10" />

        <Select label="Branch" options={["Chennai", "Coimbatore", "Madurai"]} />

        <Input label="Start Date" type="date" />

        <Input label="End Date" type="date" />
      </div>

      <div className="flex gap-3">
        <button
          className="px-4 py-2 rounded-lg text-white"
          style={{ background: "var(--primary)" }}
        >
          Generate Code
        </button>

        <button
          className="px-4 py-2 rounded-lg"
          style={{ background: "var(--bg-soft)" }}
        >
          Cancel
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
            <tr>
              <th className="p-4">Discount %</th>
              <th className="p-4">Description</th>
              <th className="p-4">Code</th>
              <th className="p-4">Branch</th>
              <th className="p-4">Start</th>
              <th className="p-4">End</th>
            </tr>
          </thead>
        </table>
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

/* -------------------------------- */
/* STATUS */
/* -------------------------------- */

function Status() {
  return (
    <div className="space-y-2">
      <label className="text-sm text-[var(--text-muted)]">Status</label>

      <div className="flex gap-6 text-sm">
        <label className="flex gap-2 items-center">
          <input type="radio" name="status" />
          Active
        </label>

        <label className="flex gap-2 items-center">
          <input type="radio" name="status" />
          Inactive
        </label>
      </div>
    </div>
  );
}
