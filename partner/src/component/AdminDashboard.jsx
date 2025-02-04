import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AdminDashboard() {
  const [lastLogin, setLastLogin] = useState("");

  useEffect(() => {
    fetch("https://server.fitszo.com/api/admin/details", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setLastLogin(data.lastLogin))
      .catch((err) => console.log(err));
  }, []);

  const handleLogout = async () => {
    await fetch("https://server.fitszo.com/api/admin/logout", {
      method: "POST",
      credentials: "include",
    });
    window.location.href = "/admin";
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Admin Dashboard</h1>

      <nav>
        <ul>
          <li><Link to="/admin/partners/view">View Partners</Link></li>
          <li><Link to="/admin/partners/create">Create Partner</Link></li>
        </ul>
      </nav>

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default AdminDashboard;
