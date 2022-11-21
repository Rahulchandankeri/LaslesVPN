import React from "react";
import "../Assets/Styles/sass/layouts/featured.scss";
import ill1 from "../Assets/Images/Illustration1.svg";
import user from "../Assets/Images/user.svg";
import location from "../Assets/Images/location.svg";
import blocks from "../Assets/Images/blocks.svg";
function Featured() {
  return (
    <section className="featured-wrapper">
      <div className="wrapper">
        <div className="content-wrap">
          <div className="caption">
            <p className="main-caption">Want anything to be easy with LaslesVPN.</p>
            <p className="secondary-caption">
              Provide a network for all your needs with ease and fun using{" "}
              <span style={{ color: "inherit", fontWeight: 500 }}>LaslesVPN</span> discover interesting features from us.
            </p>

            <div style={{ display: "flex", justifyContent: "left", width: "100%" }}>
              <button className="cta-btn2 ">Get started</button>
            </div>
          </div>
          <div className="illustration-wrapper">
            <img src={ill1} alt="" />
          </div>{" "}
        </div>
        <div className="mini-cards">
          <div className="content">
            <img src={user} alt="users" />
            <div className="txt">
              <p className="imp-caption">90+</p>
              <p className="lt-caption">Users</p>
            </div>
          </div>
          <div className="content">
            <img src={location} alt="locations" />
            <div className="txt">
              <p className="imp-caption">30+</p>
              <p className="lt-caption">Users</p>
            </div>
          </div>
          <div className="content">
            <img src={blocks} alt="servers" />
            <div className="txt">
              <p className="imp-caption">50+</p>
              <p className="lt-caption">Servers</p>
            </div>
          </div>
        </div>{" "}
      </div>
    </section>
  );
}

export default Featured;
