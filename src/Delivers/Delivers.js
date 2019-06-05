import React from 'react';
import '../App.css';
import "animate.css/animate.min.css";
import deliver from "../img/deliver.jpg";
import "./Delivers.css"


class Delivers extends React.Component {
    render() {
        return (
            <div>
                <section name="delivers" id="delivers">
                    <div className="container">
                        <div className="img">
                            <img src={deliver} alt=""/>
                        </div>
                        <div className="deliver-content">
                            <div className="container-content">
                                <h2>Koszt dojazdu w wybranych obszarach.</h2>
                                <ul>
                                    <li>Zielony</li>
                                    <li>-</li>
                                </ul>
                                <ul>
                                    <li>Żółty</li>
                                    <li>+3zł</li>
                                </ul>
                                <ul>
                                    <li>Czerwony</li>
                                    <li>+4zł</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Delivers;