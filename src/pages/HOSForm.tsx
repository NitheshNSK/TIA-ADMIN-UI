import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import AppLayout from "../components/layout/AppLayout";

export default function HOSForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const mode = window.location.pathname.includes("edit")
    ? "edit"
    : id
    ? "view"
    : "add";

  const isView = mode === "view";

  const [step, setStep] = useState(1);

  const steps = [
    "Personal",
    "Contact",
    "Address",
    "Bank",
    "Permissions",
    "Media",
  ];

  return (
    <AppLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        {/* HEADER */}
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold capitalize">{mode} HOS</h1>

          <button
            onClick={() => navigate("/hos-staff")}
            className="px-4 py-2 rounded-lg bg-[var(--bg-soft)]"
          >
            Back
          </button>
        </div>

        {/* STEPPER */}
        <div className="flex justify-between text-sm">
          {steps.map((s, i) => (
            <div
              key={s}
              className={`flex-1 text-center ${
                step === i + 1
                  ? "text-[var(--primary)] font-semibold"
                  : "text-[var(--text-muted)]"
              }`}
            >
              {s}
            </div>
          ))}
        </div>

        {/* FORM CARD */}
        <div
          className="p-6 rounded-xl space-y-6"
          style={{
            background: "var(--bg-card)",
            boxShadow: "var(--shadow-card)",
          }}
        >
          {step === 1 && (
            <>
              <Input label="Full Name" disabled={isView} />
              <Input label="Date of Birth" type="date" disabled={isView} />
              <Input label="Gender" disabled={isView} />
            </>
          )}

          {step === 2 && (
            <>
              <Input label="Email" disabled={isView} />
              <Input label="Phone Number" disabled={isView} />
              <Input label="Whatsapp" disabled={isView} />
            </>
          )}

          {step === 3 && (
            <>
              <Input label="Address" disabled={isView} />
              <Input label="District" disabled={isView} />
              <Input label="Pincode" disabled={isView} />
            </>
          )}

          {step === 4 && (
            <>
              <Input label="Bank Name" disabled={isView} />
              <Input label="Account Number" disabled={isView} />
              <Input label="IFSC Code" disabled={isView} />
            </>
          )}

          {step === 5 && (
            <div className="grid grid-cols-2 gap-4">
              {[
                "VIP",
                "Franchise",
                "Students",
                "Accounts",
                "Media",
                "CRM",
                "CEO Messages",
              ].map((p) => (
                <label key={p} className="flex items-center gap-2">
                  <input type="checkbox" disabled={isView} />
                  {p}
                </label>
              ))}
            </div>
          )}

          {step === 6 && (
            <>
              <Input label="Instagram" disabled={isView} />
              <Input label="Facebook" disabled={isView} />
            </>
          )}

          {/* FOOTER BUTTONS */}
          {true && (
            <div className="flex justify-between pt-4">
              {step > 1 && (
                <button
                  onClick={() => setStep(step - 1)}
                  className="px-4 py-2 rounded-lg bg-[var(--bg-soft)]"
                >
                  Back
                </button>
              )}

              {step < 6 && (
                <button
                  onClick={() => setStep(step + 1)}
                  className="px-4 py-2 rounded-lg text-white"
                  style={{ background: "var(--primary)" }}
                >
                  Next
                </button>
              )}

              {step === 6 && (
                <button
                  className="px-4 py-2 rounded-lg text-white"
                  style={{ background: "var(--primary)" }}
                >
                  Save
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </AppLayout>
  );
}

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
