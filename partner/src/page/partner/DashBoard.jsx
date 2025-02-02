import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getToken, removeToken } from "../../utils/auth";

export default function Dashboard() {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://server.fitszo.com/api/partner/dashboard", {
      headers: { Authorization: `Bearer ${getToken()}` },
    })
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => navigate("/"));
  }, []);

  return (
    <div>
      <h2>{message}</h2>
      <button
        onClick={() => {
          removeToken();
          navigate("/");
        }}
      >
        Logout
      </button>
    </div>
  );
}
