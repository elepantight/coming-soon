import "./scss/styles.scss";

function App() {
  return (
    <>
      <div className="text-header">
        
      <section className="icon-list">
              <div>
                <a
                  href="https://www.instagram.com/wavyoven/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="instagram"
                >
                <i className="nes-icon instagram is-large"></i></a>
              </div>
              </section>
      </div>
      <div className="container">
        <div className="row">
          <section className="message -left">
            <div className="nes-balloon from-left">
              <p>Welcome to Metanoia</p>
            </div>
          </section>
          <section className="message -right">
            <div className="nes-balloon from-right">
              <p>
                We're currently working on creating our new website.
                <br></br>
                We'll be launching soon, subscribe to be notified{" "}
              </p>
            </div>
          </section>

          <div className="nes-field">
            <input
              type="text"
              name="name"
              className="nes-input"
              placeholder="E-mail"
            />
            <button type="button" className="nes-btn is-success">
              Submit
            </button>

          </div>
        </div>
      </div>
    </>
  );
}

export default App;
