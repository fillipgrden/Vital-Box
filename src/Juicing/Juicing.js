import React, {Component} from 'react';
import '../App.css';
import "animate.css/animate.min.css";
import juicing from "../img/antioxidant-berries-beverage-1842615.jpg"
import ScrollAnimation from 'react-animate-on-scroll';
import "./Juicing.css"


class Juicing extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const juicingImage = {
            backgroundImage: `url(${juicing})`
        }
        return (
            <div>
                <section name="juicing" id="juicing">
                    <div className="container">
                        <div className="juicing-content ">
                            <h2>SOKOTERAPIA</h2>
                            <p>Sokoterapia ma bardzo wiele pozytywnych zastosowań poza tym, że jest ona jedną z
                                niekonwekcjonalnych metod leczenia , dostarcza ona wszytskich witamin oraz minerałów
                                niezbędnych do zdrowego funkcjonowania , co więcej przy jej pomocy znacznie wzrasta
                                nasza odporność (35zł za dwa soki dziennie).</p>
                        </div>
                        <ScrollAnimation animateIn="fadeIn">
                            <div className="img" style={juicingImage}>
                            </div>
                        </ScrollAnimation>
                    </div>
                </section>
            </div>
        )
    }
}

export default Juicing;