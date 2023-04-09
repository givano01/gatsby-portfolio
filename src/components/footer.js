import * as React from "react";
import "../styles/footer.scss"


const Footer = () =>{
    return(
        <div className="footer-container">

            <div className="text-container">
                <p>This portfolio was made with <span>Gatsby.JS</span> and <span>SASS</span>.<br/>
                Gatsby is the fastest frontend framework and is based on <span>React</span>.</p>
            </div>

        </div>

    )
}


export default Footer;