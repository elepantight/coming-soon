import React from "react";
import emailjs from "emailjs-com";

import LOGO from "./images/text_black.png";
import "./scss/styles.scss";
export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_5n8oapd",
        e.target,
        "user_nzRUlAOVwi3RNtg0sXepQ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <>
      <div className="text-header">
        <img className="logo-img" src={LOGO} alt="img" />
 
      </div>
      <div className="container">
        <div className="row">
          <section className="container-box-1">
            <div className="box1">
              <p>Welcome to Metanoia</p>
            </div>
          </section>
          <section className="container-box-2">
            <div className="">
              <p>
                We're currently working on creating <br></br>our new website.
                We'll be launching soon<br></br> subscribe to be notified{" "}
              </p>
            </div>
          </section>
        </div>
      </div>
      <div className="subscription-form" onSubmit={sendEmail}>
        <div className="input-container">
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
          />
          <button type="submit" className="btn">
            Submit
          </button>
        </div>
      </div>
      <div class="fire-1">
        <div class="flames-1">
          <div class="flame-1"></div>
          <div class="flame-1"></div>
          <div class="flame-1"></div>
          <div class="flame-1"></div>
        </div>
        <div class="logs-1"></div>
      </div>
      <div class="fire-2">
        <div class="flames-2">
          <div class="flame-2"></div>
          <div class="flame-2"></div>
          <div class="flame-2"></div>
          <div class="flame-2"></div>
        </div>
        <div class="logs-2"></div>
      </div>
    </>
  );
}
