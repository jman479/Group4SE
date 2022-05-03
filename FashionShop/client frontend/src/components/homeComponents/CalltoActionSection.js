import React from "react";

const CalltoActionSection = () => {

    return (
    <div className="subscribe-section">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="subscribe-head">
              <h2>Interested in custom work or have questions?</h2>
              <p>Reach out for free and stay in touch!</p>
              <form className="form-section" action="https://formspree.io/f/xzbojaod" method="POST">
                <input type="name" placeholder="Name" name="name" required />
                <br />
                <input type="email" placeholder="example@email.com" name="email" required />
                <br/>
                <textarea type="inquiry" name="inquiry" rows="3" cols="50" placeholder="

                Have an inquiry? Enter it here!">
                </textarea>
                <br/>
                <button className="neon-button2" type="submit"> Sign Up</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalltoActionSection;
