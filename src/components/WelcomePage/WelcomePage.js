import React from "react";
import Navbar from "../Navbar/Navbar";
import ImgWelcome from "../SvgComponents/ImgWelcome/ImgWelcome";
import ContainerSocialNetworks from "../ContainerSocialNetworks/ContainerSocialNetworks";

function WelcomePage(props){ 

    const { openNav, handleOpenNav } = props;

    return(
        <>
            <Navbar 
                    openNav={openNav}
                    handleOpenNav={handleOpenNav}/>
            <main>
                <ImgWelcome />
                <ContainerSocialNetworks />
            </main>
        </>
    )
}

export default WelcomePage;