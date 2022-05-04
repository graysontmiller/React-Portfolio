import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <article className="about">
      <div className="container">
        
      
        <img className="profile-pic" src={require("../../assets/img/profile-pic.png")} alt="profile-pic" />

        <section className="aboutHeader"> 
          <h1>Hello, nice to meet you.</h1>
        </section>
        
        <section> 
          <p>
            My name is Grayson Miller, I am a Charlotte based web developer and designer. Full Stack Web Developer with a background in Advertising and Graphic Design and a passion for creating engaging experiences. I'm known for attention to detail and passion for great user experience both within the code base and on the web page.
          </p>

          <div> 
            <h3> Personal </h3>

            <p> 
              I strive to remain organized and productive outside of my work and I enjoy being challenged. When I'm not hanging out with family and friends, my hobbies include learning and practicing software development, game development, and art. I am obsessed with storytelling and when I am not creating I can be found unwinding with a good book, film, or narratively driven video game.
            </p>
          </div>

          <div> 
            <h3> Professional </h3>

            <p> 
              I am currently searching for full time employment as a Software Developer in or around the Charlotte area. I also occasionally work as a freelance developer building websites for clients.
               Please feel free to {<Link className="nav-link" to="/contact">
               contact
                </Link>}me for any inquiries.
            </p>
          </div>


        </section>

       
      </div>
    </article>

  );
}

export default About;
