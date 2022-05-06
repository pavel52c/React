import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.sass"

export default function Navigation():JSX.Element {
    //  activeclassname="active"
    return(
        <nav className="main__navigation">
            <NavLink to="main"  className="main__nav-link" end>Главная</NavLink>
            <NavLink to="history" className="main__nav-link" end>История</NavLink>
        </nav>
    )
}