

import React from "react";
import image from "../images/blankSky.png";

const imageAltText = "Starcraft Skybox";

const description =
  "SCM is a Starcraft retro style FPS fan project inspired by DooM/Project Brutality, Quake and my love for the Starcraft Universe featuring:"

const skillsList = [
  "3 Action packed Levels",
  "4 Unique Weapons",
  "4 Classic Zerg Enemies",
  "Iconic Starcraft SFX and Music",
  "Built with Unreal Engine 5",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "SCM was built in Unreal5 over the summer of 2023. Special thanks to my friend Hayden for his Blender expertise, without him this project would have never gotten started. Also thank you to my playtesters for taking the time to provide valueable feedback. The project is currently on hiatus as I am busy with school, but I hope to continue working on it in the future.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "rgba(0,0,0,0.75)",
          color: "rgb(197, 217, 255)",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>STARCRAFT: MARINE</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
