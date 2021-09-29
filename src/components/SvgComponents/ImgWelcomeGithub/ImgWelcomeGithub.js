import React from "react";
import styles from "./Styles";

function ImgWelcomeGithub(){
    return(
        <div 
            style={styles.networkLinks} 
            className="networkLinks">
            <a 
                href="https://github.com/alexlambdas" 
                target="_blank"
                style={styles.containerLink}>
                    <img 
                        src="images/icon_512x512_github.svg" 
                        alt="" 
                        style={styles.sizeImg}/>
                    <span 
                        style={styles.descripitonTitle} 
                        className="descripitonTitle">
                            Github
                    </span>
            </a>
        </div>
    )
}

export default ImgWelcomeGithub;