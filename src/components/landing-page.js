import * as React from "react"
import "../styles/landing-page.scss"
import { StaticImage } from "gatsby-plugin-image"
import useSiteMetadata from "../hooks/use-site-metadata"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'



const  HomePage = () => {
    const { social } = useSiteMetadata();
    return(
        <main className="home-page">
            <div className="image-container">
                <StaticImage
                    alt="Portrait of Georgi Ivanov"
                    src="../images/portrait.png"
                >
                </StaticImage>
            </div>
            <div className="icons">
                <a className="icon" target="_blank"
                href={`https://www.linkedin.com/in/${social.linkedIn}`}>
                    <FontAwesomeIcon icon={faLinkedin} beatFade />
                </a>
                <a className="icon" target="_blank"
                href={`https://github.com/${social.github}`}>
                    <FontAwesomeIcon icon={faGithub} beatFade/>
                </a>
            </div>
            <div className="title-name">
                <p className="name">I'm Givano...</p>
                
            </div>
            <div className="title-text">
                <p className="line-1 anim-typewriter"> a creative front-end developer</p>

            </div>

        </main>
    )

}


export default HomePage
export const Head = () => <title>Home Page</title>