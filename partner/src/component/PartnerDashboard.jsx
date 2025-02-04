import { useEffect, useState } from "react";

function PartnerDashboard() {
  const [lastLogin, setLastLogin] = useState("");

  useEffect(() => {
    fetch("https://server.fitszo.com/api/partner/details", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setLastLogin(data.lastLogin))
      .catch((err) => console.log(err));
  }, []);

  const handleLogout = async () => {
    await fetch("https://server.fitszo.com/api/partner/logout", {
      method: "POST",
      credentials: "include",
    });
    window.location.href = "/";
  };

  return (
    <div>
      <h1>Partner Dashboard</h1>
      <p>Last Login: {new Date(lastLogin).toLocaleString()}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default PartnerDashboard;
