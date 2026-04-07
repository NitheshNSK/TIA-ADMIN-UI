import { useNavigate } from "react-router-dom";
import AppLayout from "../components/layout/AppLayout";

export default function HOSModule() {
  const navigate = useNavigate();

  const hosList = [
    { id: "hos-1000", name: "Sudarsanam S T", status: "Active" },
    { id: "hos-1001", name: "Maharaj S", status: "Active" },
    { id: "hos-1004", name: "Jessy C J", status: "Active" },
    { id: "hos-1005", name: "Sajan C J", status: "Active" },
    { id: "hos-1006", name: "Priyadharsini Devaraj", status: "Active" },
  ];

  return (
    <AppLayout>
      <div className="space-y-6">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold">HOS Staff</h1>
            <p className="text-sm text-[var(--text-muted)]">
              Manage head of staff accounts
            </p>
          </div>

          <div className="flex gap-3">
            <input
              placeholder="Search HOS..."
              className="px-4 py-2 lg:h-10 rounded-lg bg-[var(--bg-soft)] outline-none"
            />

            <button
              onClick={() => navigate("/hos-staff/new")}
              className="px-4 py-2 lg:h-10 rounded-lg text-white"
              style={{ background: "var(--primary)" }}
            >
              Add HOS
            </button>
          </div>
        </div>

        {/* CARD GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {hosList.map((hos) => (
            <div
              key={hos.id}
              className="p-6 rounded-xl text-center"
              style={{
                background: "var(--bg-card)",
                boxShadow: "var(--shadow-card)",
              }}
            >
              <div className="w-20 h-20 mx-auto rounded-full bg-[var(--bg-soft)] mb-4" />

              <h3 className="font-medium">{hos.name}</h3>

              <p className="text-sm text-[var(--text-muted)]">{hos.id}</p>

              <span className="inline-block mt-2 px-3 py-1 text-xs rounded-full bg-green-500/20 text-green-400">
                {hos.status}
              </span>

              <div className="flex justify-center gap-2 mt-4">
                <button
                  onClick={() => navigate(`/hos-staff/${hos.id}`)}
                  className="px-3 py-1 text-sm rounded-lg bg-[var(--bg-soft)]"
                >
                  View
                </button>

                <button
                  onClick={() => navigate(`/hos-staff/${hos.id}/edit`)}
                  className="px-3 py-1 text-sm rounded-lg text-white"
                  style={{ background: "var(--primary)" }}
                >
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
