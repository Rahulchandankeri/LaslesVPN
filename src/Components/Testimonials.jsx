import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import "../Assets/Styles/sass/layouts/testimonal.scss";
import netflix from "../Assets/Images/netflix.svg";
import amazon from "../Assets/Images/amazon.svg";
import discord from "../Assets/Images/discord.svg";
import reddit from "../Assets/Images/reddit.svg";
import spotify from "../Assets/Images/spotify.svg";
import person1 from "../Assets/Images/person1.png";
import person2 from "../Assets/Images/person2.png";
import person3 from "../Assets/Images/person3.png";
import rating from "../Assets/Images/person3.png";
function Testimonsal() {
  const [testimonalData, settestimonalData] = useState([]);
  useEffect(() => {
    const fetchTestimonals = async () => {
      try {
        const url = await fetch("http://localhost:3001/reviews");
        const res = await url.json();
        settestimonalData(res);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchTestimonals();
  }, []);
  return (
    <section className="testimonal-wrap" id="testimonials">
      <div className="wrapper">
        <div className="brands-logo">
          <img src={netflix} alt="netflix" />
          <img src={reddit} alt="reddit" />
          <img src={amazon} alt="amazon" />
          <img src={discord} alt="discord" />
          <img src={spotify} alt="spotify" />
        </div>
        <div className="caption-wrapper">
          <p className="main-caption">
            Trusted by Thousands of <br />
            Happy Customer
          </p>
          <p className="secondary-caption">
            These are the stories of our customers who have joined us with great <br /> pleasure when using this crazy feature.
          </p>
        </div>

        <Splide
          className="testimonials-slider"
          options={{
            rewind: true,
            perMove: 2,
            perPage: 1,
            width: "100%",
            pauseOnFocus: true,
            drag: true,
            autoWidth: true,
            pagination: false,
            dragMinThreshold: {
              mouse: 25,
              touch: 20,
            },
            breakpoints: {
              700: { arrows: true, perMove: 1, perPage: 1 },
            },
          }}
        >
          {testimonalData?.map((testi) => {
            return (
              <SplideSlide className="testimonial-item">
                <div class="person-info-rating">
                  <div class="person-info">
                    <div class="person-info-text">
                      <p class="person-name">{testi.name}</p>
                      <p class="person-location">{testi.country}</p>
                    </div>
                  </div>
                  <div class="person-rating">
                    <p>{testi.rating}</p>
                    <div class="rating-icon-ctr">
                      <svg width="15" height="15" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M6.30268 2.09442L4.43879 1.82354L3.60559 0.134366C3.58283 0.0881171 3.54539 0.0506779 3.49914 0.0279207C3.38315 -0.0293393 3.24221 0.0183774 3.18421 0.134366L2.351 1.82354L0.487119 2.09442C0.435731 2.10176 0.388749 2.12599 0.352778 2.16269C0.309291 2.20739 0.285328 2.26752 0.286153 2.32988C0.286979 2.39223 0.312527 2.45171 0.357182 2.49524L1.70573 3.81002L1.38713 5.66656C1.37966 5.70975 1.38444 5.75417 1.40092 5.79478C1.41741 5.83539 1.44495 5.87056 1.48041 5.89632C1.51587 5.92208 1.55784 5.93738 1.60156 5.9405C1.64528 5.94361 1.68899 5.93442 1.72775 5.91396L3.3949 5.03744L5.06205 5.91396C5.10756 5.93818 5.16042 5.94626 5.21107 5.93745C5.3388 5.91542 5.42469 5.7943 5.40267 5.66656L5.08407 3.81002L6.43262 2.49524C6.46932 2.45927 6.49355 2.41229 6.50089 2.3609C6.52071 2.23243 6.43115 2.11351 6.30268 2.09442Z"
                          fill="#FEA250"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="person-testimonial">
                  <p>{testi.reviewTxt}</p>
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </section>
  );
}

export default Testimonsal;
