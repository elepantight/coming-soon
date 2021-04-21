import React from 'react';
import emailjs from 'emailjs-com'


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
        <section className="icon-list">
          <div>

          </div>
        </section>
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
    </>
  );
}
