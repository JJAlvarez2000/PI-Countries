import React from "react";
import styles from "./LandingPage.module.css"
import { Link } from "react-router-dom";
import flagbanner from "../assets/images/flagbanner.png"

const LandingPage = () => {
    return (
        <div classname= {styles.HomeStyled}>
            <div classname= {styles.Banner} src={flagbanner} alt=""/>
            <div classname= {styles.Flex}>
                <div classname= {styles.Message}>
                    <h1>Learn everything about countries</h1>
                    <Link to="/home">
                        <button text="Discover"/>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;
