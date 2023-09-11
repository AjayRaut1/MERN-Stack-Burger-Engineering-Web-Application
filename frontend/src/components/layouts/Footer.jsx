import React from "react";
import {AiFillYoutube, AiFillGithub, AiFillInstagram} from "react-icons/ai";

const Footer =() => {
    return <footer>
        <div>
            <h2>Bachelor's Burger</h2>
            <b>Since 1995</b>
            <br />
            <em>Serving Happiness at your doorsteps</em>
            <br />
            <strong>All Rights Reserved 2023 @Bachelor Burger</strong>
        </div>

        <aside>
            <h4>Get in Touch</h4>
            <a href="https://www.github.com/AjayRaut1">
                <AiFillGithub />
            </a>
            <a href="https://www.instagram.com/ajay_raut_2002">
                <AiFillInstagram /> 
            </a>
            <a href="https://www.youtube.com/viralvideos">
                <AiFillYoutube />
            </a>

        </aside>
    </footer>
}

export default Footer;