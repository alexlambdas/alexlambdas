import React, { useState } from "react";
import { Link } from "react-router-dom";
import MaterialIcon from "material-icons-react";
import SvgLinkedin from "../SvgComponents/Linkedin/Linkedin";
import SvgGitHub from "../SvgComponents/GitHub/Github";
import SvgInstagram from "../SvgComponents/Instagram/Instagram";

import { ROUTES, LINKS } from "../../resources/Routes";
import styles from "./Styles";
import "../../App.css";

function Navbar(props){

    const { openNav, handleOpenNav } = props;

    const handleOpenAndCloseNav = () => handleOpenNav();

    const sideNavItems = (
        <>
            <div 
                style={styles.sidenavOpen_closebtn} 
                onClick={handleOpenAndCloseNav}>
                <MaterialIcon 
                    icon="close" 
                    color="#616161" 
                    size="small"/> 
            </div>
            <a 
                style={styles.sidenavOpen_a_custom}
                href={LINKS.LINK_LINKEDIN}
                target="_blank"
                rel="noopener noreferrer">
                    <div 
                        style={styles.sideNavItemLinkedin} 
                        className="sideNavItemCustomIcon"
                        onClick={handleOpenAndCloseNav}>
                            <div style={styles.sideNavItemMDIconSize}>   
                                <SvgLinkedin 
                                    height="24px" 
                                    width="24px" 
                                    fill="#9575cd"/> 
                            </div>
                            <span 
                                style={styles.itemTextLinkedin}
                                className="itemText">
                                    Linkedin
                            </span>
                    </div>
            </a>
            <a
                style={styles.sidenavOpen_a_custom}
                href={LINKS.LINK_GITHUB}
                target="_blank"
                rel="noopener noreferrer">
                    <div 
                        style={styles.sideNavItemGithub} 
                        className="sideNavItemCustomIcon"
                        onClick={handleOpenAndCloseNav}>
                            <div style={styles.sideNavItemMDIconSize}>   
                                <SvgGitHub 
                                    height="26px" 
                                    width="26px" 
                                    fill="#9575cd"/> 
                            </div>
                            <span 
                                style={styles.itemTextGithub}
                                className="itemText">
                                    Github
                            </span>
                    </div>
            </a>
            <a
                style={styles.sidenavOpen_a_custom}
                href={LINKS.LINK_YOUTUBE}
                target="_blank"
                rel="noopener noreferrer">
                    <div 
                        style={styles.sideNavItemYoutube} 
                        className="sideNavItemCustomIcon"
                        onClick={handleOpenAndCloseNav}>
                            <div style={styles.sideNavItemMDIconSize}>   
                                <MaterialIcon 
                                    icon="play_circle_filled" 
                                    color="#9575cd" 
                                    size="medium"/> 
                            </div>
                            <span 
                                style={styles.itemTextYoutube}
                                className="itemText"> 
                                Youtube
                            </span>
                    </div>
            </a>
            <a
                style={styles.sidenavOpen_a_custom}
                href={LINKS.LINK_INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer">
                    <div 
                        style={styles.sideNavItemInstagram} 
                        className="sideNavItemCustomIcon"
                        onClick={handleOpenAndCloseNav}>
                            <div style={styles.sideNavItemMDIconSize}>   
                                <SvgInstagram 
                                    height="24px" 
                                    width="24x" 
                                    fill="#9575cd"/> 
                            </div>
                            <span 
                                style={styles.itemTextInstagram}
                                className="itemText">
                                    Instagram
                            </span>
                    </div>
            </a>
        </>
    )

    const sideNavOpen = (
        <div style={styles.sidenavOpen}>
            {sideNavItems}
        </div>
    )

    const sideNavClose = (
        <div style={styles.sidenavClose}>
            {sideNavItems}
        </div>
    )

    return(
        <nav style={styles.default}>
            {openNav ? sideNavOpen : sideNavClose}
            <div style={styles.menuLeft}>
                <div 
                    style={styles.menuLeftItem}
                    onClick={handleOpenAndCloseNav}>
                    <MaterialIcon 
                        icon="menu" 
                        color="#FAFAFA" 
                        size="small"/>
                    <div 
                        style={styles.circleHoverMDIcon} 
                        className="circleHoverMDIcon"></div>
                </div>
            </div>
            <div style={styles.menuRight}>
                <div>
                    <Link style={styles.linkItem}>
                        <span 
                            style={styles.menuRightItem} 
                            className="menuRightItem">
                                Welcome
                        </span>
                    </Link>
                </div>
                <div>
                    <Link style={styles.linkItem}>
                        <span 
                            style={styles.menuRightItem} 
                            className="menuRightItem">
                                Skills
                        </span>
                    </Link>
                </div>
                <div>
                    <Link style={styles.linkItem}>
                        <span 
                            style={styles.menuRightItem} 
                            className="menuRightItem">
                                Portfolio
                        </span>
                    </Link>
                </div>
                <div>
                    <Link style={styles.linkItem}>
                        <span 
                            style={styles.menuRightItem} 
                            className="menuRightItem">
                                Main
                        </span>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;