import React from 'react';
import detox from "../../img/diet-fresh-green-detox-1171552.jpg"
import ScrollAnimation from 'react-animate-on-scroll';
import "./Detox.css"


class Detox extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const detoxImage = {
            backgroundImage: `url(${detox})`
        };
        return (
            <div>
                <section id="detox">
                    <div className="container">
                        <div className="img" style={detoxImage}>
                        </div>
                        <div className="detox-content ">
                            <ScrollAnimation animateIn='flipInX'>
                                <div className="wrapper">
                                    <h2>DETOX SOKOWY</h2>
                                    <p>Detox sokowy stosuję się na 3 lub 5 dni (65zł za dzień).</p>
                                    <p>Zadzwoń do nas a dobierzemy dietę sokową dostosowaną do Twoich indywidualnych
                                        potrzeb.</p>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Detox;