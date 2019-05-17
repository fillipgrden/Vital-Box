import React from 'react';
import '../App.css';
import './Toolbar.css';
import {Link as L} from "react-scroll";
import {NavHashLink as NavLink} from 'react-router-hash-link';
import logo from "../img/vital-box-logo_ok.png";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton.js";


const Toolbar = props => {
    return (
        <div>
            <nav className="toolbar">
                <div className="container">
                    <div>
                        <div className="logo">
                                <NavLink to="/#header"
                                         scroll={el => el.scrollIntoView({scrollOffset: -100})}>
                                    <img src={logo} alt=""/>
                                </NavLink>
                        </div>
                    </div>
                    <ul className="toolbar-items">
                        <li>
                                <NavLink to="/#about">
                                    O NAS
                                </NavLink>
                        </li>
                        <li>
                            <div className="dropdown-box">
                        <span className="dropdown-link">
                            OFERTA <i className="fas fa-caret-down"></i>
                        </span>
                            <ul className="dropdown">
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
                            </ul>
                            </div>
                        </li>
                        <li>
                            <NavLink to="/#contact">
                                KONTAKT
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/delivers/">DOSTAWY</NavLink>
                        </li>
                        <li>
                            <NavLink to="/calculator/">KALKULATOR KALORII</NavLink>
                        </li>
                    </ul>
                    <div className="order">
                        <NavLink to="/#contact">
                            ZAMÓW
                        </NavLink>
                    </div>
                    <div className="toolbar-toggle-button">
                        <DrawerToggleButton click={props.drawerClickHandler}/>
                    </div>
                </div>
            </nav>
        </div>
    )
}


export default Toolbar;