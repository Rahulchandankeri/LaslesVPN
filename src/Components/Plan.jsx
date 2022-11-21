import React from "react";
import "../Assets/Styles/sass/layouts/plan.scss";
import Free from "../Assets/Images/Free.svg";
import check from "../Assets/Images/check.svg";
function Plan() {
  return (
    <section className="plan-wrapper" id="plans">
      <div className="wrapper">
        <div className="caption">
          <p className="main-caption">Choose Your Plan</p>
          <p className="secondary-caption">
            Let's choose the package that is best for you and explore it happily and cheerfully.
          </p>
        </div>
        <div className="cardwrapper">
          <div className="plan-cards">
            <div className="img-wrap">
              <figure>
                <img src={Free} alt="img" />
                <figcaption>Free Plan</figcaption>
              </figure>
            </div>
            <div className="points">
              <div className="inline-caption">
                <img src={check} alt="check" />
                <p>Unlimited Bandwitch</p>
              </div>
              <div className="inline-caption">
                <img src={check} alt="check" />
                <p>Encrypted Connection</p>
              </div>
              <div className="inline-caption">
                <img src={check} alt="check" />
                <p>No Traffic Logs</p>
              </div>
              <div className="inline-caption">
                <img src={check} alt="check" />
                <p>Works on All Devices</p>
              </div>
            </div>
            <div className="cta-wrapper">
              <h5>Free</h5>
              <button className="cta-btn select-btn">Select</button>
            </div>
          </div>{" "}
          <div className="plan-cards">
            <div className="img-wrap">
              <figure>
                <img src={Free} alt="img" />
                <figcaption>Standard Plan</figcaption>
              </figure>
            </div>
            <div className="points">
              <div className="inline-caption">
                <img src={check} alt="check" />
                <p>Unlimited Bandwitch</p>
              </div>{" "}
              <div className="inline-caption">
                <img src={check} alt="check" />
                <p>Encrypted Connection</p>
              </div>
              <div className="inline-caption">
                <img src={check} alt="check" />
                <p>Yes Traffic Logs</p>
              </div>
              <div className="inline-caption">
                <img src={check} alt="check" />
                <p>Works on All Devices</p>
              </div>
              <div className="inline-caption">
                <img src={check} alt="check" />
                <p>Connect Anyware</p>
              </div>
            </div>
            <div className="cta-wrapper">
              <h5>
                $9<span style={{ color: "#4F5665", fontWeight: 500 }}>/ mo</span>
              </h5>
              <button className="cta-btn select-btn">Select</button>
            </div>
          </div>
          <div className="plan-cards active-card">
            <div className="img-wrap">
              <figure>
                <img src={Free} alt="img" />
                <figcaption>Premium Plan</figcaption>
              </figure>
            </div>
            <div className="points">
              <div className="inline-caption">
                <img src={check} alt="check" />
                <p>Unlimited Bandwitch</p>
              </div>
              <div className="inline-caption">
                <img src={check} alt="check" />
                <p>Encrypted Connection</p>
              </div>
              <div className="inline-caption">
                <img src={check} alt="check" />
                <p>Yes Traffic Logs</p>
              </div>
              <div className="inline-caption">
                <img src={check} alt="check" />
                <p>Works on All Devices</p>
              </div>
              <div className="inline-caption">
                <img src={check} alt="check" />
                <p>Connect Anyware</p>
              </div>
              <div className="inline-caption">
                <img src={check} alt="check" />
                <p>Get New Features</p>
              </div>
            </div>
            <div className="cta-wrapper">
              <h5>
                $12 <span style={{ color: "#4F5665", fontWeight: 500 }}>/ mo</span>
              </h5>
              <button className="cta-btn select-btn active">Select</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Plan;
