import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Login from "./page/LogIn";
import PartnerDashboard from "./component/PartnerDashboard";
import AdminLogin from "./page/AdminLogin";
import AdminDashboard from "./component/AdminDashboard";

function App() {
  const [partnerAuth, setPartnerAuth] = useState(false);
  const [adminAuth, setAdminAuth] = useState(false);

  useEffect(() => {
    // Check Partner Authentication
    fetch("https://server.fitszo.com/api/partner/details", {
      credentials: "include",
    })
      .then((res) => {
        if (res.ok) setPartnerAuth(true);
      })
      .catch(() => {});

    // Check Admin Authentication
    fetch("https://server.fitszo.com/api/admin/details", {
      credentials: "include",
    })
      .then((res) => {
        if (res.ok) setAdminAuth(true);
      })
      .catch(() => {});
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={partnerAuth ? <Navigate to="/dashboard" /> : <Login />}
      />
      <Route
        path="/dashboard"
        element={partnerAuth ? <PartnerDashboard /> : <Navigate to="/" />}
      />
      <Route
        path="/admin"
        element={
          adminAuth ? <Navigate to="/admin/dashboard" /> : <AdminLogin />
        }
      />
      <Route
        path="/admin/dashboard"
        element={adminAuth ? <AdminDashboard /> : <Navigate to="/admin" />}
      />
    </Routes>
  );
}

export default App;
