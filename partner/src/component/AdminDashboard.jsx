import { useEffect, useState } from "react";

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
    <div>
      <h1>Admin Dashboard</h1>
      <p>Last Login: {new Date(lastLogin).toLocaleString()}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default AdminDashboard;
