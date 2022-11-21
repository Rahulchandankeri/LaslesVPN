import React from "react";
import "../Assets/Styles/sass/layouts/ourFeatures.scss";
import ill2 from "../Assets/Images/Illustration2.svg";
import check from "../Assets/Images/check.svg";
function OurFeatures() {
  return (
    <section className="features-wrapper" id="features">
      <div className="wrappper">
        <div className="illustation">
          <img src={ill2} alt="why-us" />
        </div>
        <div className="captions">
          <div className="wrapper">
            <p className="main-caption">
              We Provide Many <br /> Features You Can Use
            </p>
            <p className="lt-caption">
              You can explore the features that we provide with fun and <br /> have their own functions each feature.
            </p>
            <div className="inline-caption">
              <img src={check} alt="check" />
              <p>Powerfull online protection.</p>
            </div>
            <div className="inline-caption">
              <img src={check} alt="check" />
              <p>Internet without borders.</p>
            </div>
            <div className="inline-caption">
              <img src={check} alt="check" />
              <p>Supercharged VPN</p>
            </div>
            <div className="inline-caption">
              <img src={check} alt="check" />
              <p>No specific time limits.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurFeatures;
