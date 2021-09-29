import React from "react";
import styles from "./Styles";

function ImgWelcomeLinkedin(){
    return(
        <div 
            style={styles.networkLinks} 
            className="networkLinks">
                <a
                    href="https://www.linkedin.com/in/alex-daniel-meza-lopez/" 
                    target="_blank"
                    style={styles.containerLink}>
                         <img 
                            src="images/icon_512x512_linkedin.svg" 
                            alt="" 
                            style={styles.sizeImg}/>
                        <span 
                            style={styles.descripitonTitle} 
                            className="descripitonTitle">
                                Linkedin
                        </span>
                </a>
        </div>
    )
}

export default ImgWelcomeLinkedin;