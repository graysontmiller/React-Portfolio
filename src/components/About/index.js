import React from "react";

function About() {
  return (
    <div className="about">
      <div className="container">
        
        <img className="profile-pic" src={require("../../assets/img/profile-pic.png")} alt="profile-pic" />
        <h1>Hello, nice to meet you.</h1>
        <p>
          My name is Grayson Miller, I am a Charlotte based web developer and designer.
        </p>

       
      </div>
    </div>
  );
}

export default About;
