import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ViewPartners() {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    fetch("https://server.fitszo.com/api/partner/all", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setPartners(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Registered Partners</h2>
      <Link to="/admin/dashboard">Back to Dashboard</Link>

      <ul>
        {partners.map((partner) => (
          <li key={partner._id}>
            <strong>{partner.name}</strong> - {partner.email} -{" "}
            {partner.fitnessZone}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ViewPartners;