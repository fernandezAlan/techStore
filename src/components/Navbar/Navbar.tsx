import React from "react";
import classes from "./Navbar.module.css";
import { ProfileIcon } from "../icons/Icons";
const Navbar = () => { 
    return (
        <nav className={classes.navbar}>
            <div className={classes.link_container}>
                <a className={classes.link}href="/">HOME</a>
                <a className={classes.link}href="/store">STORE</a>
                <a className={classes.link}href="/blog">BLOG</a>
                <a className={classes.link}href="/contact">CONTACT</a>
            </div>
            <div className={classes.icons_container}>
                <ProfileIcon/>
            </div>
        </nav>
    );
}

export default Navbar;