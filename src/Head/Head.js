import React, {Component} from 'react';
import bread from '../img/asparagus-cuisine-delicious-1247677.jpg';
import beans from '../img/beans-close-up-cuisine-1640771.jpg';
import bowl from '../img/bowl-cereal-bowl-cereals-1374551.jpg';
import About from '../About/About'
import {Link as L} from "react-scroll";
import Contact from '../Contact/Contact';
import '../App.css';
import "./Head.css";

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
                <header name="header" id="header" className="header">
                    <div className="container-img">
                        <div className="container content">
                            <h1>Vital Box</h1>
                            <h2>Katering dietetyczny dla każdego</h2>
                            <L className="hvr-sweep-to-top" activeClass="active" to="about" spy={true} smooth={true} offset={-50} duration={500}>POZNAJ NAS</L>
                        </div>
                        <div className="image" style={imageOne}>
                            <div className="mask"></div>
                        </div>
                        <div className="image" style={imageTwo}>
                            <div className="mask"></div>
                        </div>
                        <div className="image" style={imageThree}>
                            <div className="mask"></div>
                        </div>
                        <div className="container-social">
                            <a href=""><i className="far fa-envelope"></i></a>
                            <a href=""><i className="fab fa-facebook-f"></i></a>
                            <a href=""><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </header>
                <About/>
                <Contact/>
            </div>
        )
    }
}

export default Head;