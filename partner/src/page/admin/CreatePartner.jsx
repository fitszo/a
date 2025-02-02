import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getToken } from "../../utils/auth";

export default function CreatePartner() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleCreate = async () => {
    const token = getToken("admin");

    const response = await fetch(
      "https://server.fitszo.com/api/admin/create-partner",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ email, password }),
      }
    );

    const data = await response.json();
    if (response.ok) {
      alert("Partner created successfully!");
      navigate("/admin/dashboard");
    } else {
      alert(data.message);
    }
  };

  return (
    <div>
      <h2>Create Partner</h2>
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleCreate}>Create Partner</button>
    </div>
  );
}
