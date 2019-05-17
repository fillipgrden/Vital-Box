import React from 'react'

import './SideDrawer.css'
import {Link as L} from "react-scroll/modules";
import {NavHashLink as NavLink} from "react-router-hash-link";
import {Link} from "react-router-dom";

const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }
    return (
        <ul className={drawerClasses}>
            <li>
                <L to="about" offset={-100}>
                    <NavLink smooth to="/#about">
                        O NAS
                    </NavLink>
                </L>
            </li>
            <li>
                <NavLink to="/offer/#offer" offset={-100}>
                    CENNIK
                </NavLink>
            </li>
            <li>
                <L activeClass="active" to="detox" spy={true} smooth={true} offset={-100}
                   duration={500}>
                    <NavLink smooth to="/offer/#detox" offset={-100}>DETOX</NavLink>
                </L>
            </li>
            <li><L activeClass="active" to="juicing" spy={true} smooth={true} offset={-100}
                   duration={500}>TERAPIA SOKOWA</L></li>

            <li>
                <L smooth to="contact">
                    <NavLink smooth to="/#contact">
                        KONTAKT
                    </NavLink>
                </L>
            </li>
            <li>
                <Link to="/delivers/">DOSTAWY</Link>
            </li>
            <li>
                <Link to="/calculator/">KALKULATOR KALORII</Link>
            </li>
        </ul>

    )
}
export default sideDrawer;