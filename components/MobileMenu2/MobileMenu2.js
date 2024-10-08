import React, { Fragment, useState } from 'react';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Collapse from "@mui/material/Collapse";
import { Link } from 'react-scroll'
import NavLink from 'next/link'

const menus = [
]


const MobileMenu2 = () => {

    const [openId, setOpenId] = useState(0);
    const [menuActive, setMenuState] = useState(false);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div>
            <div className={`mobileMenu ${menuActive ? "show" : ""}`}>
                <div className="menu-close">
                    <div className="clox" onClick={() => setMenuState(!menuActive)}><i className="ti-close"></i></div>
                </div>

                <ul className="responsivemenu">
                    <li className="menu-item-has-children">
                        <NavLink href="/">Inicio</NavLink>
                    </li>
                    <li><Link activeClass="active" to="couple" spy={true} smooth={true} offset={-100} duration={500} >Casal</Link></li>
                    <li><Link activeClass="active" to="story" spy={true} smooth={true} duration={500} offset={-100} >História</Link></li>
                    <li><Link activeClass="active" to="event" spy={true} smooth={true} offset={-80} duration={500} >Evento</Link></li>
                    <li><Link activeClass="active" to="Service" spy={true} smooth={true} offset={-80} duration={500} >Presentear</Link></li>
                </ul>

            </div>

            <div className="showmenu" onClick={() => setMenuState(!menuActive)}>
                <button type="button" className="navbar-toggler open-btn">
                    <span className="icon-bar first-angle"></span>
                    <span className="icon-bar middle-angle"></span>
                    <span className="icon-bar last-angle"></span>
                </button>
            </div>
        </div>
    )
}

export default MobileMenu2;