import React from "react";
import NavBarElement from "./navbarelement";
import LanguageElement from "./language";

const NavBar = () => {
    return ( <div className="h-16 dark:bg-neutral-900 bg-neutral-400 flex">
        <ul className="float-left flex">
            <NavBarElement link="/">
                Home
            </NavBarElement>
            <NavBarElement link="/excap">
                ExCap Wiki
            </NavBarElement>
        </ul>
        <LanguageElement/>
    </div>)
}

export default NavBar;