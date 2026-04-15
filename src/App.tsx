import { Routes, Route } from "react-router-dom";

import "./App.css";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Concept from "./pages/Concept";
import Course from "./pages/Course";
import HOSModule from "./pages/HOSModule";
import HOSForm from "./pages/HOSForm";
import VIP from "./pages/VIP";
import VIPFranchisee from "./pages/VIPFranchisee";
import Franchisee from "./pages/Franchisee";
import Students from "./pages/Students";
import Accounts from "./pages/Accounts";
import Media from "./pages/Media";
import CRM from "./pages/CRM";
import CEOMessages from "./pages/CEOMessages";
import Settings from "./pages/Settings";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/concepts" element={<Concept />} />
        <Route path="/courses" element={<Course />} />
        <Route path="/hos-staff" element={<HOSModule />} />
        <Route path="/hos-staff/new" element={<HOSForm />} />
        <Route path="/hos-staff/:id" element={<HOSForm />} />
        <Route path="/hos-staff/:id/edit" element={<HOSForm />} />
        <Route path="/vip" element={<VIP />} />
        <Route path="/vip-franchise" element={<VIPFranchisee />} />
        <Route path="/franchise" element={<Franchisee />} />
        <Route path="/students" element={<Students />} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/media" element={<Media />} />
        <Route path="/crm" element={<CRM />} />
        <Route path="/ceo-messages" element={<CEOMessages />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </>
  );
}

export default App;
