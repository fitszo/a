import { useState } from "react";
import { Link } from "react-router-dom";

function CreatePartner() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    fitnessZone: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        "https://server.fitszo.com/api/partner/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();
      if (res.ok) {
        setMessage("Partner registered successfully!");
        setFormData({ name: "", email: "", password: "", fitnessZone: "" });
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      setMessage("Error registering partner.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Create New Partner</h2>
      <Link to="/admin/dashboard">Back to Dashboard</Link>

      <form onSubmit={handleRegister}>
        <input
          type="text"
          name="name"
          placeholder="Partner Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="fitnessZone"
          placeholder="Fitness Zone Name"
          value={formData.fitnessZone}
          onChange={handleChange}
          required
        />
        <button type="submit">Register Partner</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}

export default CreatePartner;
