import React from "react";
import map from "../Assets/Images/global.svg";
import "../Assets/Styles/sass/layouts/ourNetwork.scss";
function OurNetwork() {
  return (
    <section className="our-network-wrapper" id="about">
      <div className="wrapper">
        <div className="caption">
          <p className="main-caption">
            Huge Global Network
            <br />
            of Fast VPN
          </p>
          <p className="secondary-caption">
            See <span style={{ color: "inherit", fontWeight: 500 }}>LaslesVPN</span> everywhere to make it easier for you when you
            move
            <br />
            locations.
          </p>
        </div>
        <div className="map">
          <img src={map} alt="worl-map" />
        </div>
      </div>
    </section>
  );
}

export default OurNetwork;
