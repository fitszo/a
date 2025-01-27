import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/admin/login"); // Redirect to login if no token
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token
    navigate("/admin/login"); // Redirect to login
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>
      <h2>Welcome to Dashboard</h2>
      <button onClick={handleLogout} style={{ padding: "10px", width: "100%" }}>
        Logout
      </button>
    </div>
  );
};

export default AdminDashboard;
