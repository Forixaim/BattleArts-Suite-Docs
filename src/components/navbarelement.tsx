import Link from "next/link";
import React from "react";

const NavBarElement = (props:any) =>
{
    return (
        <Link href={props.link}>
            <li className="px-8 border-b-2 hover:border-b-4 h-full flex items-center transition-all">
                {props.children}
            </li>
        </Link>
        
    )
}

export default NavBarElement;