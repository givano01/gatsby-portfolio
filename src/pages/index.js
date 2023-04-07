import * as React from "react"
import LandingPage from "../components/landing-page"
import ProjectPreview from "../components/project-preview"
import { StaticImage } from 'gatsby-plugin-image'
import "../styles/layout.scss"

const IndexPage = () => {

    return (
      <div>
        <LandingPage />
        {/*Project 1*/}
        <div className="project-container">
          <div className = "info-container">
              <ProjectPreview slug="Project-1" />
          </div>
          <div className = "image-container">
              <StaticImage
                  alt="Digital agency website"
                  src="../images/infiniTech.png"
              /> 
          </div>
        </div>
        <hr/>
        {/*Project 2*/}
        <div className="project-container">
          <div className = "image-container">
            <StaticImage
                alt="Digital agency website"
                src="../images/rps-game.png"
            /> 
          </div>
          <div className = "info-container">
              <ProjectPreview slug="Project-2" />
          </div>  
        </div>
        <hr/>
        {/*Project 3*/}
        <div className="project-container">
          <div className = "info-container">
              <ProjectPreview slug="Project-3" />
          </div>
          <div className = "image-container">
              <StaticImage
                  alt="Digital agency website"
                  src="../images/counter-app.png"
              /> 
          </div>
        </div>
        <hr/>
        {/*Project 4*/}
        <div className="project-container">
          <div className = "image-container">
            <StaticImage
                alt="Digital agency website"
                src="../images/text-generator.png"
            /> 
          </div>
          <div className = "info-container">
              <ProjectPreview slug="Project-4" />
          </div>  
        </div>
        <hr/>

        
      </div>
    );
  };
  
  export default IndexPage;
  export const Head = () => <title>GIVANO | Portfolio</title>
  