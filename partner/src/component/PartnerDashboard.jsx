import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FitnessZoneForm from "./FitnessZoneForm";

function PartnerDashboard() {
  const [partner, setPartner] = useState(null);
  const navigate = useNavigate(); // ✅ React Router's navigation hook

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
        // ✅ Redirect to index page if unauthorized or no partner data
        navigate("/");
      });
  }, [navigate]);

  if (!partner) {
    return <p>Loading...</p>; // Loading state while fetching partner details
  }

  if (
    partner.fitnessZone.launched &&
    partner.fitnessZone.details.status === "pending"
  ) {
    return (
      <p>Your details are under review. We'll notify you once approved.</p>
    );
  }

  if (!partner.fitnessZone.launched) {
    return <FitnessZoneForm partner={partner} />;
  }

  return <h2>Welcome to your Dashboard!</h2>;
}

export default PartnerDashboard;
