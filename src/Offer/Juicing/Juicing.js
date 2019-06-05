import React from 'react';
import juicing from "../../img/antioxidant-berries-beverage-1842615.jpg"
import ScrollAnimation from 'react-animate-on-scroll';
import "./Juicing.css"


class Juicing extends React.Component {
    render() {
        const juicingImage = {
            backgroundImage: `url(${juicing})`
        };
        return (
            <section id="juicing">
                <div className="container">
                    <div className="juicing-content ">
                        <h2>SOKOTERAPIA</h2>
                        <p>Sokoterapia ma bardzo wiele pozytywnych zastosowań poza tym, że jest ona jedną z
                            niekonwekcjonalnych metod leczenia , dostarcza ona wszytskich witamin oraz minerałów
                            niezbędnych do zdrowego funkcjonowania , co więcej przy jej pomocy znacznie wzrasta
                            nasza odporność (35zł za dwa soki dziennie).</p>
                        <p className="weaks">Nasze soki pomagają w łagodzeniu skutków:
                            Alergii,
                            Astmy,
                            Zaburzeń snu,
                            Celulitu,
                            Ciąży,
                            Cukrzycy,
                            Grypy,
                            Menopauzy,
                            Migreny,
                            Pasożytów jelitowych,
                            Problemamów z wątrobą,
                            Problemamów trawiennych,
                            a także sprzyjają pielengancji zdrowia.
                        </p>
                    </div>
                    <ScrollAnimation animateIn="fadeIn">
                        <div className="img" style={juicingImage}>
                        </div>
                    </ScrollAnimation>
                </div>
            </section>
        )
    }
}

export default Juicing;