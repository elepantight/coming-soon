import React from "react";

import emailjs from "emailjs-com";

import LOGO from "./images/Mlogo.png";
import "./scss/styles.scss";

function App() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_test",
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
          <section>
        <div className="contact-form" onSubmit={sendEmail}>
          <form action="index.html">
            <div className="input-container">
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
              />
              <label htmlFor=""></label>
              <span></span>
            </div>
            <button type="submit" className="btn">
              <span className="label">Send</span>
              <span className="icon"></span>
            </button>
          </form>
        </div>
      </section>
          <section className="container-box-2">
            <p>
              We're currently working on creating <br></br>our new website.
              We'll be launching soon<br></br> subscribe to be notified{" "}
            </p>
          </section>
        </div>
      </div>
     
      <div className="fire-1">
        <div className="flames-1">
          <div className="flame-1"></div>
          <div className="flame-1"></div>
          <div className="flame-1"></div>
          <div className="flame-1"></div>
        </div>
        <div className="logs-1"></div>
      </div>
      <div className="fire-2">
        <div className="flames-2">
          <div className="flame-2"></div>
          <div className="flame-2"></div>
          <div className="flame-2"></div>
          <div className="flame-2"></div>
        </div>
        <div className="logs-2"></div>
      </div>
    </>
  );
}

export default App;
