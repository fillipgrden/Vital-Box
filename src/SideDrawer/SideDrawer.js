import React from 'react'

import './SideDrawer.css'
import {NavHashLink as NavLink} from "react-router-hash-link";
import {Link} from "react-router-dom";

class sideDrawer extends React.Component {
    render() {
        let drawerClasses = this.props.show
            ? 'side-drawer open'
            : 'side-drawer';
        return (
            <ul className={drawerClasses} onClick={this.props.click}>
                <li>
                    <NavLink smooth to="/#about" onClick={!this.props.show}>
                        O NAS
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/offer/#offer" offset={-100}>
                        CENNIK
                    </NavLink>
                </li>
                <li>
                    <NavLink smooth to="/offer/#detox" offset={-100}>DETOX</NavLink>
                </li>
                <li>
                    <NavLink smooth to="/offer/#detox" offset={-100}>TERAPIA SOKOWA</NavLink>
                </li>
                <li>
                    <NavLink smooth to="/#contact">
                        KONTAKT
                    </NavLink>
                </li>
                <li>
                    <Link to="/delivers/">DOSTAWY</Link>
                </li>
                <li>
                    <Link to="/calculator/">KALKULATOR KALORII</Link>
                </li>
            </ul>

        )
    };
};
export default sideDrawer;