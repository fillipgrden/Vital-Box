import React from 'react';
import bread from '../../img/asparagus-cuisine-delicious-1247677.jpg';
import beans from '../../img/beans-close-up-cuisine-1640771.jpg';
import bowl from '../../img/bowl-cereal-bowl-cereals-1374551.jpg';
import {Link as L} from "react-scroll";
import "./Head.css";
import logo from "../../img/vital-box-logo_ok.png";

class Head extends React.Component {
    render() {
        const imageOne = {
            backgroundImage: `url(${bread})`,
        };
        const imageTwo = {
            backgroundImage: `url(${beans})`,
        };
        const imageThree = {
            backgroundImage: `url(${bowl})`,
        };
        return (
            <div>
                <header id="header" className="header" title="VitalBox - Katering Dietetyczny Kielce">
                    <div className="container-img">
                        <div className="container content">
                            <h1>Vital Box</h1>
                            <h2>Katering dietetyczny dla każdego</h2>
                            <L className="hvr-sweep-to-top" activeClass="active" to="about" spy={true} smooth={true}
                               offset={-50} duration={500}>POZNAJ NAS</L>
                        </div>
                        <div className="image" style={imageOne}>
                            <div className="mask"/>
                        </div>
                        <div className="image" style={imageTwo}>
                            <div className="mask"/>
                        </div>
                        <div className="image" style={imageThree}>
                            <div className="mask"/>
                        </div>
                        <div className="container-social">
                            <a href="mailto:vitalbox@op.pl"><i className="far fa-envelope"/></a>
                            <a href="https://www.facebook.com/Vital-Box-339557800252612/"><i className="fab fa-facebook-f"/></a>
                            <a href="https://www.instagram.com/vital.box_/"><i className="fab fa-instagram"/></a>
                        </div>
                        <div className="logo">
                                <img src={logo} alt=""/>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}

export default Head;