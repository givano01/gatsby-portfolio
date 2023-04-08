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
              <a href="https://givano01.github.io/InfiniTECH/">
                <StaticImage
                    alt="Digital agency website"
                    src="../images/infiniTech.png"
                /> 
              </a>
          </div>
        </div>
        <hr/>
        {/*Project 2*/}
        
        <div className="project-container">
          <div className = "image-container">
          <a href="https://givano01.github.io/RPS-Game/">
            <StaticImage
                alt="Digital agency website"
                src="../images/rps-game.png"
            /> 
          </a>
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
              <a href="https://www.tmhkran.no/">
                <StaticImage
                    alt="Digital agency website"
                    src="../images/tmh-website.png"
                /> 
              </a>
          </div>
        </div>
        <hr/>
        {/*Project 4*/}
        <div className="project-container">
          <div className = "image-container">
            <a href="https://counter-app-navy.vercel.app/">
              <StaticImage
                  alt="Digital agency website"
                  src="../images/counter-app.png"
              /> 
            </a>
          </div>
          <div className = "info-container">
              <ProjectPreview slug="Project-4" />
          </div>
        </div>
        <hr/>
        {/*Project 5*/}
        <div className="project-container">
          <div className = "info-container">
              <ProjectPreview slug="Project-5" />
          </div>
          <div className = "image-container">
            <a href="https://givano01.github.io/text-generator/">
              <StaticImage
                  alt="Digital agency website"
                  src="../images/text-generator.png"
              /> 
            </a>
          </div>
            
        </div>
        <hr/>

        
      </div>
    );
  };
  
  export default IndexPage;
  export const Head = () => <title>GIVANO | Portfolio</title>
  