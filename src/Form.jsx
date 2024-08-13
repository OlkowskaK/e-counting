import React, { useState } from "react";
import "./Form.css";

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className="contact-form-section">
      <form onSubmit={handleSubmit}>
        <h2 className="FormTitle">Skontaktuj się z nami!</h2>
        <div className="FormAll">
          <div className="inputRow">
            <div className="inputField">
              <label>
                Imię:
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  maxlength="20"
                />
              </label>
            </div>
            <div className="inputField">
              <label>
                Nazwisko:
                <input
                  className="surname"
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  maxlength="20"
                />
              </label>
            </div>
          </div>
          <div className="inputField">
            <label>
              E-mail:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="inputField">
            <label>
              Telefon:
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="inputField">
            <label>
              Wiadomość:
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </label>
          </div>
        </div>
        <button className="buttonForm1" type="submit">
          Wyślij
        </button>
      </form>
    </section>
  );
};

export default ContactFormSection;
