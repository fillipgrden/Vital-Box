import React from 'react';
import cusine from '../../img/berries-bowl-colorful-1105166.jpg';
import ScrollAnimation from 'react-animate-on-scroll';
import "./Contact.css"


class Contact extends React.Component {

    state = {
        name: "",
        surname: "",
        tel: "",
        mail: "",
        message: "",
        adress: "",
        accept: false,
        sent: "",

        errors: {
            name: false,
            surname: false,
            tel: false,
            mail: false,
            message: false,
            accept: false,
            adress: false
        }
    };

    messages = {
        NAME_INCORECT: "Podaj swoje imię.",
        SURNAME_INCORECT: "Podaj swoje naziwsko.",
        mail_incorect: "Brak lub niepoprawny adres email.",
        tel_incorect: "Brak lub niepoprawny numer telefonu",
        message_incorect: "Wpisz swoją wiadomość",
        accept_incorect: "Zakacpetuj regulamin",
        adress_incorect: "Brak adressu dostawy",
    };

    handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        const type = e.target.type;
        const checked = e.target.checked;
        if (type === "checkbox") {
            const checked = e.target.checked;
            this.setState({
                [name]: checked,
            });
        } else {
            this.setState({
                [name]: value,
            })
        }
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const validation = this.formValidation();

        if (validation.correct) {
            this.setState({
                name: "",
                surname: "",
                tel: "",
                mail: "",
                message: "",
                adress: "",
                accept: false,
                sent: "Wiadomość została wysłąna.",

                errors: {
                    name: false,
                    surname: false,
                    tel: false,
                    mail: false,
                    message: false,
                    adress: false,
                    accept: false,
                }
            })
        } else {
            this.setState({
                errors: {
                    name: !validation.name,
                    surname: !validation.surname,
                    tel: !validation.tel,
                    mail: !validation.name,
                    message: !validation.message,
                    adress: !validation.adress,
                    accept: !validation.accept
                }
            })
        }
    };

    formValidation = () => {
        let name = false;
        let surname = false;
        let tel = false;
        let mail = false;
        let message = false;
        let adress = false;
        let accept = false;
        let correct = false;

        if (this.state.name !== "") {
            name = true;
        }

        if (this.state.surname !== "") {
            surname = true;
        }

        if (this.state.tel.length === 9) {
            tel = true;
        }

        if (this.state.mail !== "" && this.state.mail.indexOf('@') !== -1) {
            mail = true;
        }
        if (this.state.message !== "") {
            message = true;
        }
        if (this.state.message !== "") {
           adress = true;
        }
        if (this.state.accept) {
            accept = true;
        }
        if (name && surname && tel && mail && message && accept) {
            correct = true;
        }
        return ({
            correct,
            name,
            surname,
            tel,
            mail,
            message,
            adress,
            accept
        })

    };

    componentDidUpdate(prevProps, prevState, snapshot) {

        if (this.state.sent !== "") {
            setTimeout(() => this.setState({
                sent: ""
            }), 3000)
        }
    }

    render() {
        const backgroundImage = {
            backgroundImage: `url(${cusine})`
        };
        return (
            <section id="contact" className="contact">
                <div className="background-image" style={backgroundImage}>
                    <div className="mask">
                        <ScrollAnimation animateIn="fadeIn">
                            <div className="container">
                                <div className="vcard">
                                    <h2>KONTAKT</h2>
                                    <p>NIP : 6572945041</p>
                                    <p>Regon : 3833833636</p>
                                    <p>NR KONTA : 62 1140 2004 0000 3902 7880 1638</p>
                                    <a href="tel:+48533182000">
                                        <i className="fa fa-phone" aria-hidden="true"></i>
                                        533182000</a>
                                    <a href="tel:+48533172000">
                                        <i className="fa fa-phone" aria-hidden="true"></i>
                                        533172000</a>
                                    <a href="mailto:vitalbox@op.pl">
                                        <i className="fa fa-envelope" aria-hidden="true"></i>
                                        vitalbox@op.pl</a>
                                </div>
                                {/*<div className="form-container">*/}
                                {/*    <h3>Czekamy na twoje zamówienie</h3>*/}
                                {/*    <form onSubmit={this.handleSubmit}>*/}
                                {/*        <div className="input-container">*/}
                                {/*            <input type="text" id="name" name="name" value={this.state.name}*/}
                                {/*                   onChange={this.handleChange} placeholder="Imię"/>*/}
                                {/*            <input type="text" id="surname" name="surname"*/}
                                {/*                   value={this.state.surname} onChange={this.handleChange}*/}
                                {/*                   placeholder="Nazwisko"/>*/}
                                {/*        </div>*/}
                                {/*        <div className="input-container">*/}
                                {/*            <input type="text" id="tel" name="tel" value={this.state.tel}*/}
                                {/*                   onChange={this.handleChange} placeholder="Numer telefonu"/>*/}
                                {/*            <input type="email" id="mail" name="mail" value={this.state.mail}*/}
                                {/*                   onChange={this.handleChange} placeholder="Adres e-mail"/>*/}
                                {/*        </div>*/}
                                {/*        <input type="text" id="adress" name="adress" value={this.state.adress}*/}
                                {/*               onChange={this.handleChange} placeholder="Wpisz adess dostawy"/>*/}
                                {/*        <textarea name="message" id="message" value={this.state.message}*/}
                                {/*                  onChange={this.handleChange}*/}
                                {/*                  placeholder="Złóż zamówienie"/>*/}
                                {/*        <label htmlFor="accept">*/}
                                {/*            <input type="checkbox" id="accept" name="accept"*/}
                                {/*                   checked={this.state.accept} onChange={this.handleChange}/>*/}
                                {/*            Zapoznałem się z regulaminem oraz wyrażam zgodę na przetwarzanie moich*/}
                                {/*            danych.*/}
                                {/*        </label>*/}
                                {/*        <div>*/}
                                {/*            <button className="hvr-sweep-to-top">WYŚLIJ</button>*/}
                                {/*            {this.state.errors.name && <p>{this.messages.NAME_INCORECT}</p>}*/}
                                {/*            {this.state.errors.surname &&*/}
                                {/*            <p>{this.messages.SURNAME_INCORECT}</p>}*/}
                                {/*            {this.state.errors.tel && <p>{this.messages.tel_incorect}</p>}*/}
                                {/*            {this.state.errors.mail && <p>{this.messages.mail_incorect}</p>}*/}
                                {/*            {this.state.errors.message &&*/}
                                {/*            <p>{this.messages.message_incorect}</p>}*/}
                                {/*            {this.state.errors.accept &&*/}
                                {/*            <p>{this.messages.accept_incorect}</p>}*/}
                                {/*            {this.state.errors.adress && <p>{this.messages.adress_incorect}</p>}*/}
                                {/*            {this.state.sent && <p>{this.state.sent}</p>}*/}
                                {/*        </div>*/}
                                {/*    </form>*/}
                                {/*</div>*/}
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </section>
        )
    }
}

export default Contact;