import * as React from "react"
import LandingPage from "../components/landing-page"
import ProjectPreview from "../components/project-preview"
import { StaticImage } from 'gatsby-plugin-image'
import "../styles/layout.scss"

export default () => {

    return (
      <div>
        <LandingPage />
    
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

        
      </div>
    );
  };
  

  export const Head = () => <title>GIVANO | Portfolio</title>
  