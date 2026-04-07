import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import FloatingCRM from "./FloatingCRM";

export default function AppLayout({ children }: any) {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <Topbar />

        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>

      <FloatingCRM hasNotification={true} />
    </div>
  );
}
