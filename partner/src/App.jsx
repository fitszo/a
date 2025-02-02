import "./App.css";
import { Route, Routes } from "react-router-dom";

import Login from "./page/partner/LogIn";
import AdminLogin from "./page/admin/AdminLogin";
import Dashboard from "./page/partner/DashBoard";
import AdminDashboard from "./page/admin/AdminDashboard";
import CreatePartner from "./page/admin/CreatePartner";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/admin/create-partner" element={<CreatePartner />} />
      </Routes>
    </>
  );
}

export default App;