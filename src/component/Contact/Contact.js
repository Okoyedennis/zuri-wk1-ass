import React from "react";
import { useState } from "react";
import Footer from "../Footer/Footer";
import "./Contact.css";

const Contact = () => {
  const [name] = useState("Dennis");
    return (
      <>
        <div className="contact">
          <div className="contact__wrapper">
            <header>
              <h3>Contact Me</h3>
              <p>
                Hi there, contact me to ask me about anything you have in mind.
              </p>
            </header>

            <form action="">
              <div className="form-group_wrapper">
                <div className="form-group">
                  <label htmlFor="">First name</label>
                  <input
                    id="first_name"
                    placeholder="Enter your first name"
                    type="text"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="">Last name</label>
                  <input
                    id="last_name"
                    placeholder="Enter your last name"
                    type="text"
                  />
                </div>
              </div>
              <div className="form-group_wrapper forEmailTextarea">
                <div className="form-group">
                  <label htmlFor="">Email</label>
                  <input
                    id="email"
                    placeholder="yourname@email.com"
                    type="email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="">Message</label>
                  <textarea
                    id="message"
                    placeholder="Send me a message and I'll reply you as soon as possible..."
                    name=""
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>
              </div>
              <div className="form-group_wrapper">
                <div className="form-group forBottom">
                  <input type="checkbox"  className="checkbox"/>
                  <p>
                    You agree to providing your data to {name} who may contact
                    you.
                  </p>
                </div>
              </div>
              <div className="form-group_wrapper">
                <button id="btn__submit" className="btn">
                  Send message
                </button>
              </div>
            </form>
          </div>
          <Footer />
        </div>
      </>
    );
};

export default Contact;
