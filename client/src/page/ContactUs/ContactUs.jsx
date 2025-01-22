import { Helmet } from "react-helmet";
import "../css/form.css";
import { useState } from "react";

export default function ContactUs() {
  const initialvalues = { name: "", mail: "", contactno: "", massege: "" };
  const [formvalues, setformvalues] = useState(initialvalues);
  const [formErrors, setformErrors] = useState({});
  const [issubmit, setissubmit] = useState(false);
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
      const data = await fetch("https://server.fitszo.com/contactus", {
	method: "POST",
	body: JSON.stringify(formvalues),
	headers: {
	  "Content-Type": "application/json",
	},
      });
      console.log(data);
      if (!data.ok) {
	throw new Error("There is an error");
      } else {
	setissubmit(true);
	setformvalues(initialvalues);
      }
    } catch (err) {
      console.log(err);
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

    if (!values.name) {
      errors.name = "username is required";
    }
    if (!values.contactno) {
      errors.contactno = "contactno is required";
    }
    if (!values.massege) {
      errors.massege = "massege is required";
    }

    return errors;
  };
  return (
    <>
      <Helmet>
        <title>Contact Fitszo</title>
        <meta property="og:title" content="Contact Fitszo" />
      </Helmet>
      <div className="form-body">
        <div className="form-padding">
          <div className="container-form">
            <div className="text-center-form">
              <h1>Contact Us</h1>
              <div className="form-color-white">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magra aliqua.Ut
                enim ad minim veniam.
              </div>
            </div>
            <div className="content-form">
              <div className="col-1-form">
                <div className="address-line-form">
                  <img
                    alt="location"
                    src="/Icons/location.svg"
                    className="icon-form"
                  />
                  <div className="contact-info-form">
                    <div className="contact-info-title-form">Address</div>
                    <div className="form-color-white">
                      1002 West 5th Ave, Alaska, New York,
                    </div>
                    <div className="form-color-white">55060.</div>
                  </div>
                </div>
                <div className="address-line-form">
                  <img
                    alt="location"
                    src="/Icons/call.svg"
                    className="icon-form"
                  />
                  <div className="contact-info-form">
                    <div className="contact-info-title-form">Phone</div>
                    <div className="form-color-white">1234567890</div>
                  </div>
                </div>
                <div className="address-line-form">
                  <img
                    alt="location"
                    src="/Icons/mail.svg"
                    className="icon-form"
                  />
                  <div className="contact-info-form">
                    <div className="contact-info-title-form">Email</div>
                    <div className="form-color-white">
                      contactemail@gmail.com
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-2-form">
                <form onSubmit={handlesubmit}>
                  <div className="form-container-form">
                    <h2 className="form-h2">Send Message</h2>
                    <div className="form-row-form">
                      <label></label>
                      <div>
                        <input
                          type="text"
                          placeholder="Aapka naam"
                          className="form-field-form"
                          autoFocus
                          name="name"
                          required
                          value={formvalues.name}
                          onChange={handlechange}
                        />
                        {!formvalues.name && formErrors.name && (
                          <p>{formErrors.name}</p>
                        )}
                      </div>
                    </div>
                    <div className="form-row-form">
                      <label></label>
                      <div>
                        <input
                          type="number"
                          placeholder="Phone"
                          className="form-field-form"
                          name="contactno"
                          required
                          value={formvalues.contactno}
                          onChange={handlechange}
                        />
                        {!formvalues.contactno && formErrors.contactno && (
                          <p>{formErrors.contactno}</p>
                        )}
                      </div>
                    </div>
                    <div className="form-row-form">
                      <label></label>
                      <div>
                        <input
                          type="email"
                          placeholder="Email"
                          className="form-field-form"
                          name="mail"
                          value={formvalues.mail}
                          onChange={handlechange}
                        />
                      </div>
                    </div>
                    <div className="form-row-form">
                      <label></label>
                      <div>
                        <textarea
                          type="text"
                          placeholder="How we can help you??"
                          className="form-field-form"
                          required
                          name="massege"
                          value={formvalues.massege}
                          onChange={handlechange}
                        />
                        {!formvalues.massege && formErrors.massege && (
                          <p>{formErrors.massege}</p>
                        )}
                      </div>
                    </div>
                    <button
                      type="submit"
                      onClick={handlesubmit}
                      className="send-btn-form"
                    >
                      Submit
                    </button>
                    {issubmit && <p className="Success">{a}</p>}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
