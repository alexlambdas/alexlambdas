import React from "react";
import ImgWelcomeLinkedin from "../SvgComponents/ImgWelcomeLinkedin/ImgWelcomeLinkedin";
import ImgWelcomeGithub from "../SvgComponents/ImgWelcomeGithub/ImgWelcomeGithub";
import ImgWelcomeYoutube from "../SvgComponents/ImgWelcomeYoutube/ImgWelcomeYoutube";
import ImgWelcomeInstagram from "../SvgComponents/ImgWelcomeInstragram/ImgWelcomeInstagram";
import styles from "./Styles";

function ContainerSocialNetworks(){
    return(
        <div style={styles.containerNetworkLinks}>
            <ImgWelcomeLinkedin />
            <ImgWelcomeGithub />
            <ImgWelcomeYoutube />
            <ImgWelcomeInstagram />
        </div>
    )
}

export default ContainerSocialNetworks;