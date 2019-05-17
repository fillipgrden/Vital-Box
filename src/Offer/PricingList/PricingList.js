import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import {HashLink} from "react-router-hash-link";

class PricingList extends React.Component {
    render() {
        return (
            <section id="offer" className="offer">
                <div className="container">
                    <h2>OFERTA NA 5 POSIŁKÓW</h2>
                    <div className="offer-container">
                        <ul>
                            <li>Kcal</li>
                            <li>1200</li>
                            <li>1500</li>
                            <li>1800</li>
                            <li>2000</li>
                            <li>2200</li>
                            <li>2500</li>
                        </ul>
                        <ul>
                            <li>5dni</li>
                            <ItemList name="45"/>
                            <ItemList name="49"/>
                            <ItemList name="50"/>
                            <ItemList name="53"/>
                            <ItemList name="55"/>
                            <ItemList name="57"/>
                        </ul>
                        <ul>
                            <li>20-24dni</li>
                            <ItemList name="41"/>
                            <ItemList name="45"/>
                            <ItemList name="47"/>
                            <ItemList name="50"/>
                            <ItemList name="52"/>
                            <ItemList name="54"/>
                        </ul>
                        <ul>
                            <li>Obiad</li>
                            <ItemList name="12"/>
                            <ItemList name="13"/>
                            <ItemList name="14"/>
                            <ItemList name="15"/>
                            <ItemList name="16"/>
                            <ItemList name="17"/>
                        </ul>
                        <ul>
                            <li>Próbny</li>
                            <ItemList name="40"/>
                            <ItemList name="40"/>
                            <ItemList name="40"/>
                            <ItemList name="40"/>
                            <ItemList name="40"/>
                            <ItemList name="40"/>
                        </ul>
                    </div>
                    <p>Diety:</p>
                    <p>Bezglutenowa +5zł</p>
                    <p>Wegetariańska +5zł</p>
                    <p>Bez laktozy +5zł</p>
                    <p>Chleb gryczany bezglutenowy (400g) – 14 zł </p>
                    <ScrollAnimation animateIn="fadeIn">
                        <h2>OFERTA NA 3 POSIŁKÓW</h2>
                        <div className="offer-container three-meals">
                            <ul>
                                <li>Kcal</li>
                                <li>1200</li>
                                <li>1500</li>
                                <li>1800</li>
                                <li>2000</li>
                                <li>2200</li>
                                <li>2500</li>
                            </ul>
                            <ul>
                                <li>5dni</li>
                                <ItemList name="39"/>
                                <ItemList name="42"/>
                                <ItemList name="44"/>
                                <ItemList name="47"/>
                                <ItemList name="49"/>
                                <ItemList name="51"/>
                            </ul>
                            <ul>
                                <li>20-24dni</li>
                                <ItemList name="36"/>
                                <ItemList name="39"/>
                                <ItemList name="41"/>
                                <ItemList name="44"/>
                                <ItemList name="46"/>
                                <ItemList name="48"/>
                            </ul>
                            <ul>
                                <li>Próbny</li>
                                <ItemList name="35"/>
                                <ItemList name="35"/>
                                <ItemList name="35"/>
                                <ItemList name="35"/>
                                <ItemList name="35"/>
                                <ItemList name="35"/>
                            </ul>
                        </div>
                    </ScrollAnimation>
                    <p>*Oferta dla grup lub rodzin jest ustalana indywidualnie w zależności od liczby osób i
                        konfiguracji posiłków.
                        *Zamówienia, rezygnacje i zmiany przyjmujemy dwa dni przed datą Twojej dostawy do godziny 12.00
                        *Zestaw jednodniowy próbny może zostać wykorzystany tylko jeden raz przez jednego klienta.
                        *Liczba spożytych kalorii w danej grupie kalorycznej jest zachowana przy spożywaniu 5 posiłków
                        dziennie. Wybór mniejszej ilości posiłków skutkuje proporcjonalnym zmniejszeniem liczby
                        dziennych kalorii i należy je uzupełnić we własnym zakresie stosując zasady zdrowego żywienia
                    </p>
                    <p>Zamówienia składamy od pon do pt w godzinach 9.00 – 18.00.</p>
                </div>
            </section>
        )
    }
}

const ItemList = (props) => (
    <li>
        {props.name} zł<HashLink to="/#contact"><button>ZAMÓW</button></HashLink>
    </li>
);

export default PricingList;