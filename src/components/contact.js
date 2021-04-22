import React from "react";
import emailjs from "emailjs-com";


export default function ContactUs() {
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
          <button type="submit" className="btn btn-contact" >
            <span className="label">Send</span>
            <span className="icon">

            </span>
            </button>
        </form>
      </div>
    </section>
    </>
  );
}
