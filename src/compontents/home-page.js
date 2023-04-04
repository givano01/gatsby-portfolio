import * as React from "react"
import "../styles/style.scss"
import { StaticImage } from "gatsby-plugin-image"
import useSiteMetadata from "../hooks/use-site-metadata"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'



const  HomePage = () => {
    const { social } = useSiteMetadata();
    console.log(social.linkedIn)
    return(
        <main className="home-page">
            <div className="image-container">
                <StaticImage
                    alt="Portrait of Georgi Ivanov"
                    src="../images/portrait.png"
                >
                
                </StaticImage>
                
            {/* */}
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
            <div className="name">
                <span className="name-blue">GIV</span><span className="name-green">ANO</span>
            </div>
        </main>
    )

}


export default HomePage
export const Head = () => <title>Home Page</title>