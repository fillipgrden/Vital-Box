import React, {Component} from 'react';
import '../App.css';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import './About.css'


class About extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
                <section name="about" id="about">
                    <div className="container">
                        <ScrollAnimation animateIn="fadeIn">
                            <h2>O NAS</h2>
                            <p>Idea naszego cateringu zrodziła się z dwóch refleksji: wiemy, jak ważne jest zdrowe
                                odżywianie na
                                co dzień, Oraz zdajemy sobie sprawę z szybkiego tempa życia, które ogranicza możliwość
                                regularnego spożywania prawidłowo skomponowanych posiłków. Zależy nam przede wszystkim ,
                                aby
                                to
                                co spożywamy zapewniało nam zdrowy wygląd ciała oraz dobre samopoczucie. Skupiamy się na
                                ciągłych poszukiwaniach nowych smaków oraz ulepszaniu receptur tak , aby nasz klient
                                czuł
                                się
                                zadowolony </p>
                        </ScrollAnimation>
                    </div>
                </section>
        )
    }
}

export default About;