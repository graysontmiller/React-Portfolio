import React from "react";
import Project from "../Project";

function Portfolio() {
  const projects = [
    {
      name: "MyShelf",
      description:
        "There is a small community on Reddit that hosts a yearly book reading challenge - Book Bingo. This community don’t even have their own subreddit forum as they operate on the r/Fantasy community. I’ve created an app to host the challenge and make it easier to share their progress with each other. MyShelf allows users to log and store the books that they have read on their very own digital version of the challenge’s bingo card."
      ,
      image: "MyShelf.png",
      technologies: [
        "React Frontend",
        "Bootstrap CSS",
        "GraphQL with Node.js and Express.js server",
        "MongoDB and the Mongoose ODM database",
        "Heroku",
        "JWT for authentication",
      ],
      github: "https://github.com/graysontmiller/book-bingo/tree/develop",
      deployed: "https://myself-app.herokuapp.com/",
    },
    {
      name: "Social Network API",
      description:
        "A base concept API for a social network that tracks user accounts, friendship status between users, Thoughts posted by users, and Reactions to user Thoughts."
      ,
      image: "social-network-api-screenshot.png",
      technologies: [
        "Express/Node server",
        "MongoDB",
        "Mongoose ODM database",
        "Nodemon"
      ],
      github: "https://github.com/graysontmiller/social-network-api",
    },{
      name: "MyShelf",
      description:
        "There is a small community on Reddit that hosts a yearly book reading challenge - Book Bingo. This community don’t even have their own subreddit forum as they operate on the r/Fantasy community. I’ve created an app to host the challenge and make it easier to share their progress with each other. MyShelf allows users to log and store the books that they have read on their very own digital version of the challenge’s bingo card."
      ,
      image: "MyShelf.png",
      technologies: [
        "React Frontend",
        "Bootstrap CSS",
        "GraphQL with Node.js and Express.js server",
        "MongoDB and the Mongoose ODM database",
        "Heroku",
        "JWT for authentication",
      ],
      github: "https://github.com/graysontmiller/book-bingo/tree/develop",
      deployed: "https://myself-app.herokuapp.com/",
    },{
      name: "MyShelf",
      description:
        "There is a small community on Reddit that hosts a yearly book reading challenge - Book Bingo. This community don’t even have their own subreddit forum as they operate on the r/Fantasy community. I’ve created an app to host the challenge and make it easier to share their progress with each other. MyShelf allows users to log and store the books that they have read on their very own digital version of the challenge’s bingo card."
      ,
      image: "MyShelf.png",
      technologies: [
        "React Frontend",
        "Bootstrap CSS",
        "GraphQL with Node.js and Express.js server",
        "MongoDB and the Mongoose ODM database",
        "Heroku",
        "JWT for authentication",
      ],
      github: "https://github.com/graysontmiller/book-bingo/tree/develop",
      deployed: "https://myself-app.herokuapp.com/",
    }
  ];

  return (
    <div className="portfolio">
      <div className="container">
        <ul className="flex-row mobile-row">
          <li className="padding">
            <Project projects={projects[0]}></Project>
          </li>
          <li className="padding">
            <Project projects={projects[1]}></Project>
          </li>
        </ul>
        <ul className="flex-row mobile-row">
          <li className="padding">
            <Project projects={projects[2]}></Project>
          </li>
          <li className="padding">
            <Project projects={projects[3]}></Project>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Portfolio;
