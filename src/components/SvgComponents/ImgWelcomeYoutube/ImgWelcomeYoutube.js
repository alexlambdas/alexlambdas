import React from "react";
import { LINKS } from "../../../resources/Routes";
import styles from "./Styles";

function ImgWelcomeYoutube(){
    return(
        <div 
            style={styles.networkLinks} 
            className="networkLinks">
                <a
                    href={LINKS.LINK_YOUTUBE} 
                    target="_blank"
                    style={styles.containerLink}>
                    <img 
                        src="images/icon_512x512_youtube.svg" 
                        alt="" style={styles.sizeImg}/>
                    <span 
                        style={styles.descripitonTitle} 
                        className="descripitonTitle">
                            Youtube
                    </span>
                </a>
            
        </div>
    )
}

export default ImgWelcomeYoutube;