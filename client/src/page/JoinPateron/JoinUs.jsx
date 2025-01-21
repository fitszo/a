import React, { useEffect, useState } from "react";

const JoinUs = () => {
  const initialvalues = { username: "", contactno: "" };
  const [formvalues, setformvalues] = useState(initialvalues);
  const [formErrors, setformErrors] = useState({});
  const [btn, setBtn] = useState(true);
  const [cls, setcls] = useState("btn_toggle");
  const [issubmit, setissubmit] = useState(false);
  const [duplicate, setduplicate] = useState(false);
  const a = "We have received your details!! Thank you";

  const handlechange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setformvalues({ ...formvalues, [name]: value });
    console.log(formvalues);
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    setformErrors(validate(formvalues));
    console.log(formvalues);

    try {
      const data = await fetch("https://fitszo-apib.vercel.app/postgymdata", {
        method: "POST",
        body: JSON.stringify(formvalues),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(data);
      if (!data.ok) {
        throw new Error("Duplicate data entered");
      } else {
        setissubmit(true);
        setformvalues(initialvalues);
        setduplicate(false);
      }
    } catch (err) {
      console.log(err);
      setduplicate(true);
    }
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && issubmit) {
      console.log(formvalues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-/\s.]?[0-9]{4}$/;

    if (!values.username) {
      errors.username = "username is required";
    }
    if (!values.contactno) {
      errors.contactno = "contactno is required";
    }

    if (setduplicate) {
      errors.contactnodup = "Records for this contact number already exist";
    }

    return errors;
  };
  return (
    <>
      <div className="form_owners">
        <form onSubmit={handlesubmit}>
          <h1>Fitszo</h1>
          <input
            autoFocus
            type="text"
            name="username"
            placeholder="Your name"
            required
            value={formvalues.username}
            onChange={handlechange}
          />
          {!formvalues.username && formErrors.username && (
            <p>{formErrors.username}</p>
          )}

          <input
            type="number"
            name="contactno"
            placeholder="Gym Contact no"
            required
            value={formvalues.contactno}
            onChange={handlechange}
          />
          {!formvalues.contactno && formErrors.contactno && (
            <p>{formErrors.contactno}</p>
          )}

          <button type="submit" onClick={handlesubmit} className="subbtn">
            Submit
          </button>
          {issubmit && <p className="Success">{a}</p>}
          {formvalues.contactno && duplicate && (
            <p>{formErrors.contactnodup}</p>
          )}
        </form>
        <div className="images">
          <div className="zoom-wrapper">
            <img className="one" src={fit1} height={700} width={600} />
          </div>
          <div className="zoom-wrapper">
            <img className="two" src={fit2} height={400} width={300} />
          </div>
          <div className="zoom-wrapper">
            <img className="three" src={fit3} height={400} width={300} />
          </div>
          <div className="zoom-wrapper">
            <img className="four" src={fit4} height={400} width={500} />
          </div>
        </div>
      </div>
    </>
  );
};

export default JoinUs;
