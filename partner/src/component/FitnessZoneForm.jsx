import { useState } from "react";

function FitnessZoneForm({ partner }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    gymName: "",
    ownerName: "",
    contactNo: "",
    businessEmail: partner.email,
    gstin: "",
    street: "",
    pincode: "",
    city: "",
    district: "",
    state: "",
    locationLink: "",
    infrastructureImage: null,
    governmentDoc: null,
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    Object.keys(formData).forEach((key) => form.append(key, formData[key]));

    try {
      const res = await fetch(
        "https://server.fitszo.com/api/partner/submit-fitness-zone",
        {
          method: "POST",
          credentials: "include",
          body: form,
        }
      );
      const data = await res.json();
      if (res.ok) setMessage("Details submitted successfully!");
      else setMessage(data.message);
    } catch (error) {
      setMessage("Error submitting details.");
    }
  };

  return (
    <div>
      <h2>Step {step} of 3</h2>

      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <>
            <input
              type="text"
              name="gymName"
              placeholder="Gym Name"
              value={formData.gymName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="ownerName"
              placeholder="Owner Name"
              value={formData.ownerName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="contactNo"
              placeholder="Contact No."
              value={formData.contactNo}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="businessEmail"
              placeholder="Business Email"
              value={formData.businessEmail}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="gstin"
              placeholder="GSTIN (Optional)"
              value={formData.gstin}
              onChange={handleChange}
            />
          </>
        )}

        {step === 2 && (
          <>
            <input
              type="text"
              name="street"
              placeholder="Street Address"
              value={formData.street}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="pincode"
              placeholder="Pincode"
              value={formData.pincode}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="district"
              placeholder="District"
              value={formData.district}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="state"
              placeholder="State"
              value={formData.state}
              onChange={handleChange}
              required
            />
            <input
              type="url"
              name="locationLink"
              placeholder="Google Maps Link"
              value={formData.locationLink}
              onChange={handleChange}
              required
            />
          </>
        )}

        {step === 3 && (
          <>
            <label>Upload Infrastructure Image:</label>
            <input
              type="file"
              name="infrastructureImage"
              accept="image/*"
              onChange={handleChange}
              required
            />
            <label>Upload Government Document:</label>
            <input
              type="file"
              name="governmentDoc"
              accept=".pdf,.doc,.jpg,.png"
              onChange={handleChange}
              required
            />
          </>
        )}

        {step < 3 && (
          <button type="button" onClick={() => setStep(step + 1)}>
            Next
          </button>
        )}
        {step === 3 && <button type="submit">Submit</button>}
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}

export default FitnessZoneForm;
