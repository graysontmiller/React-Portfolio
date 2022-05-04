import React from "react";

function Hero() {
  return (
    <div className="hero">
      <div className="container row">
        
        <div className= "col" >
        <img className="profile-pic" src={require("../../assets/img/profile-pic.png")} alt="profile-pic" />
        </div>

        <div className="col">
        <h1>Hello, nice to meet you.</h1>
        <p>
          My name is Grayson Miller, I am a Charlotte based web developer and designer.
        </p>
        </div>

       
      </div>
    </div>
  );
}

export default Hero;