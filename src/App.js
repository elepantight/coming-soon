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
            </a>
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

          <div className="input-field">
            <input
              type="text"
              name="name"
              className="input"
              placeholder="E-mail"
            />
            <button type="button" className="btn">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
