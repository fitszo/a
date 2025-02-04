import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FitnessZoneForm from "./FitnessZoneForm";

function PartnerDashboard() {
  const [partner, setPartner] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://server.fitszo.com/api/partner/details", {
      credentials: "include",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Unauthorized");
        }
        return res.json();
      })
      .then((data) => setPartner(data))
      .catch(() => {
        navigate("/"); // Redirect to index page if unauthorized
      });
  }, [navigate]);

  if (!partner) {
    return <p>Loading...</p>;
  }

  // ✅ Safe checks using optional chaining (?.)
  const isLaunched = partner.fitnessZone?.launched;
  const status = partner.fitnessZone?.details?.status;

  if (isLaunched && status === "pending") {
    return (
      <p>Your details are under review. We'll notify you once approved.</p>
    );
  }

  if (!isLaunched) {
    return <FitnessZoneForm partner={partner} />;
  }

  return <h2>Welcome to your Dashboard!</h2>;
}

export default PartnerDashboard;
