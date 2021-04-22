import React from "react";



import ContactUs from './components/contact';

import LOGO from "./images/text_black.png";
import "./scss/styles.scss";




function App() {

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
<ContactUs />
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