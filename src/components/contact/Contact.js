import React, { useContext, useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import "./contact.css";
import GeneralContext from "../../context/GeneralContext";

const Contact = () => {
  const { dark } = useContext(GeneralContext)

  const [nameField, setNameField] = useState(""); 
  const [emailField, setEmailField] = useState(""); 
  const [messageField, setMessageField] = useState(""); 
  const [phoneField, setPhoneField] = useState(""); 
  const [positionField, setPositionField] = useState(""); 

  const changeNameField = (e) => setNameField(e.target.value);
  const changeEmailField = (e) => setEmailField(e.target.value);
  const changeMessageField = (e) => setMessageField(e.target.value);
  const changePhoneField = (e) => setPhoneField(e.target.value);
  const changePositionField = (e) => setPositionField(e.target.value);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8jx938i",
        "template_om60s8q",
        form.current,
        "lVRALwcoYwx4XuO9-"
      )
      .then(() => {
        console.log("Email sent successfully");
      })
      .catch((error) => {
        console.error("Email send error:", error);
      });

    e.target.reset();
  };

  return (
    <section className="" id="contact">
      <h2 className="section__title">Simply call to Apply!</h2>
      <span className="section__subtitle"></span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Contact us</h3>
          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-phone contact__card-icon"></i>
              <span className="contact__card-data">(832)-431 8266 </span>
              <a href="tel:832-431-8266" className="contact__button">
                <h3 className="contact__card-title">Mobile</h3>
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>
              <span className="contact__card-data">
               lekkiislandcareers@gmail.com
              </span>
              <a href="mailto:lekkiislandcareers@gmail.com" className="contact__button">
                <h3 className="contact__card-title">Email</h3>
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">Or Apply using this form</h3>

          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <div className="contact__form-div">
              {/* <label className={dark ? "contact__form-tag-dark" : "contact__form-tag"}>Name</label> */}
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="Name"
                onChange={changeNameField}
                required
              />
            </div>

            {/* <div className="contact__form-div">
              <label className={dark ? "contact__form-tag-dark" : "contact__form-tag"}>Email</label>
              <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="Enter your email"
                onChange={changeEmailField}
                required
              />
            </div> */}

            {/* New Phone Number Field */}
            <div className="contact__form-div">
              {/* <label className={dark ? "contact__form-tag-dark" : "contact__form-tag"}>Phone Number</label> */}
              <input
                type="tel"
                name="phone"
                className="contact__form-input"
                placeholder="phone number"
                onChange={changePhoneField}
                required
              />
            </div>

            {/* New Position Dropdown Field */}
            <div className="contact__form-div">
              {/* <label className={dark ? "contact__form-tag-dark" : "contact__form-tag"}>Position</label> */}
              <select
                name="position"
                className="contact__form-input add"
                onChange={changePositionField}
                required
              >
                <option value="">Select a position</option>
                <option value="Waiter/Waitress">Waiter/Waitress</option>
                <option value="Cook">Cook</option>
                <option value="Bartender">Bartender</option>
              </select>
            </div>

            <div className="contact__form-div contact__form-area">
              {/* <label className={dark ? "contact__form-tag-dark" : "contact__form-tag"}>Message</label> */}
              <textarea
                name="message"
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Optional message"
                onChange={changeMessageField}
       
              ></textarea>
            </div>

            <button className="button button--flex center-button">
              <p>Send Application!</p>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;