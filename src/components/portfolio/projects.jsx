import React, { useEffect, useState } from "react";
import RectangleCard from "../cards/reactangleCard";

function Projects() {
  return (
    <>
      <h2 className="text-center py-5">Projects</h2>
      <div id="projects">
        <RectangleCard
          leftLink="https://github.com/charan1973/pizzashop"
          name="Pizza Shop - still on development"
          rightLink="https://nice-guy-pose.herokuapp.com/"
          rightLinkName="Site Link"
        />
        <RectangleCard
          leftLink="https://github.com/charan1973/CS50W/tree/book2018"
          name="Books project(Part of CS50W)"
          rightLink="https://book-flask-project.herokuapp.com/"
          rightLinkName="Site Link"
        />
        <RectangleCard
          leftLink="https://github.com/charan1973/reddit-clone"
          name="Reddit Clone"
        />
        <RectangleCard
          leftLink="https://github.com/charan1973/password-generator"
          name="Password Generator"
        />
        <RectangleCard
          leftLink="https://github.com/charan1973/CS50W"
          name="Projects from CS50W"
        />
      </div>
    </>
  );
}

export default Projects;
