import React, { useEffect } from "react";

const PresedentMessage = () => {
  
  useEffect(() => {
    window.scrollBy({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div>
      <div className="container Allpagemargin mb-5">
        <div
          style={{
            boxShadow: "0px 0px 37px 0px lightgray",
            lineHeight: "30px",
            letterSpacing: "1px",
          }}
          className="p-5"
        >
          <h2 style={{ color: "#00C851" }} className="mb-5">
            MESSAGE FROM THE PRESIDENT DESK
          </h2>
          <p>
            We would like to express our gratitude to our advisors, members, and
            everyone who has responded to us from various places. We also want
            to take this opportunity to mention that, as an NGO, we have been
            addressing socially traumatic issues from the grassroots level
            through various activities over the past few years. Our objective is
            to foster a more civilized society ideally.
          </p>
          <p>
            Our focus areas for awareness are primarily schools and colleges, as
            they nurture the future citizens of India. Schools lay the
            foundation for every individual's life, and if the right moral
            values are instilled at this level, it is rare for a person to
            forget them throughout their life. We aim to make an impact on all
            children about these issues with the help of honorable teachers.
          </p>
          <p>
            We are pleased to share that people are willing to join hands for
            the noble causes we have raised, but many avoid initiatives due to
            their busy schedules. Therefore, we would like to invite every
            citizen of India and the world who is willing to raise awareness
            about these issues. Join us according to your availability and
            participate either physically, mentally, or financially.
          </p>
          <p>
            In our society, everyone contributes in their own way. Often, we
            unintentionally affect our environment. If someone makes us aware of
            such issues and their ill-effects, we can start avoiding them.
          </p>
          <p>Now is the time for everyone to think and come forward for:</p>
          <ul style={{ color: "gray" }}>
            <li style={{ listStyle: "disc" }}>
              Environmental Rain Water Harvesting - Save Water{" "}
            </li>
            <li style={{ listStyle: "disc" }}>Use More of Solar Energy</li>
            <li style={{ listStyle: "disc" }}>
              Each member of a family must plant a Tree
            </li>

            <li style={{ listStyle: "disc" }}>
              Youth Empowerment – initiative to bring unemployed youth &
              entrepreneurs together at single platform for interaction.
            </li>
            <li style={{ listStyle: "disc" }}>
              Addressing traffic nuisances and jams, which cause pollution
              without valid reasons
            </li>
            <li style={{ listStyle: "disc" }}>
              Health awareness camps on CPR (life saving skill) , Blood test and
              stress management
            </li>
          </ul>
          <p>Lets Join hand, as together everyone achieve more…</p>
          <p>THINK GLOBALLY - WORLD IS FAMILY !!</p>
          <p>"वसुधैव कुटुंबकम"</p>
          <p style={{ color: "#00C851" }}>Best Wishes,</p>
          <p>
            <b>Vivek Vashistha</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PresedentMessage;
