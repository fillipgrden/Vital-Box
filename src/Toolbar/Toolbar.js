import React from 'react';
import '../App.css';
import './Toolbar.css';
import {NavHashLink as NavLink} from 'react-router-hash-link';
import logo from "../img/vital-box-logo_ok.png";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton.js";


const Toolbar = props => {
    return (
        <div>
            <nav className="toolbar">
                <div className="container">
                    <div>
                        <div className="logo" itemType="http://schema.org/Organization" itemScope>
                            <NavLink to="/#header">
                                <img src={logo} alt="Vitalbox logo"/>
                            </NavLink>
                        </div>
                    </div>
                    <ul className="toolbar-items">
                        <li>
                            <NavLink smooth={true} to="/#about">
                                O NAS
                            </NavLink>
                        </li>
                        <li>
                            <div className="dropdown-box">
                        <span className="dropdown-link">
                            OFERTA <i className="fas fa-caret-down"/>
                        </span>
                                <ul className="dropdown">
                                    <li>
                                        <NavLink smooth={true} to="/offer/#offer">
                                            CENNIK
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink smooth={true} to="/offer/#detox">DETOX</NavLink>
                                    </li>
                                    <li>
                                        <NavLink smooth={true} to="/offer/#juicing">TERAPIA
                                            SOKOWA
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <NavLink smooth={true} to="/#contact">
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
                        <NavLink smooth={true} to="/#contact">
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
};


export default Toolbar;