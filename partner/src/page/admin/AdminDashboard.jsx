import { useNavigate } from "react-router-dom";
import { removeToken, getToken } from "../../utils/auth";
import { useEffect } from "react";

export default function AdminDashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = getToken("admin");
    if (!token) {
      navigate("/admin");
    }
  }, []);

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <button onClick={() => navigate("/admin/admin/create-partner")}>
        Create Partner
      </button>
      <button
        onClick={() => {
          removeToken("admin");
          navigate("/admin");
        }}
      >
        Logout
      </button>
    </div>
  );
}
