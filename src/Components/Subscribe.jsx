import React from "react";
import "../Assets/Styles/sass/layouts/subscribe.scss";
function Subscribe() {
  return (
    <section className="subscribe">
      <div className="wrapper">
        <div className="inline-wrapper">
          <div className="subscribe-caption">
            <p className="main-caption">
              Subscribe Now for <br />
              Get Special Features!
            </p>
            <p className="secondary-caption">Let's subscribe with us and find the fun.</p>
          </div>
          <div className="cta-wrapper">
            <button className="cta-btn2">Subscribe Now</button>
          </div>{" "}
        </div>
      </div>
    </section>
  );
}

export default Subscribe;
