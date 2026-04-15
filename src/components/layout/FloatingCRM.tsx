import { Headset } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function FloatingCRM({ hasNotification = false }) {
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={() => navigate("/crm")}
        className={`relative p-4 rounded-full shadow-lg transition
        ${hasNotification ? "animate-bounce" : ""}`}
        style={{
          background: "var(--primary)",
          color: "white",
        }}
      >
        <Headset size={22} />

        {hasNotification && (
          <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full" />
        )}
      </button>
    </div>
  );
}
