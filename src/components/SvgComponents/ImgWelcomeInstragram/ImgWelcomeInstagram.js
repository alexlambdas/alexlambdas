import React from "react";
import styles from "./Style";

function ImgWelcomeInstagram(){
    return(
        <div 
            style={styles.networkLinks} 
            className="networkLinks">
            <a
                href="https://www.instagram.com/alexlambdas/" 
                target="_blank"
                style={styles.containerLink}>
                    <img 
                        src="images/icon_512x512_instagram.svg" 
                        alt="" 
                        style={styles.sizeImg}/>
                    <span 
                        style={styles.descripitonTitle} 
                        className="descripitonTitle">
                            Instagram
                    </span>
            </a>
        </div>
    )
}

export default ImgWelcomeInstagram;