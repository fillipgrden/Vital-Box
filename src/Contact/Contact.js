import React from 'react';
import '../App.css';
import cusine from '../img/berries-bowl-colorful-1105166.jpg';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import "./Contact.css";
import BackgroundImage from 'react-background-image-loader';


class Contact extends React.Component {

    state = {
        name: "",
        surname: "",
        tel: "",
        mail: "",
        message: "",
        accept: false,
        sended: "",

        errors: {
            name: false,
            surname: false,
            tel: false,
            mail: false,
            message: false,
            accept: false,
        }
    }

    messages = {
        name_incorect: "Podaj swoje imię.",
        surname_incorect: "Podaj swoje naziwsko.",
        mail_incorect: "Brak lub niepoprawny adres email.",
        tel_incorect: "Brak lub niepoprawny numer telefonu",
        message_incorect: "Wpisz swoją wiadomość",
        accept_incorect: "Zakacpetuj regulamin",
    }

    handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        const type = e.target.type;
        const checked = e.target.checked;
        if (type === "checkbox") {
            const checked = e.target.checked;
            this.setState(({
                [name]: checked,
            }))
        } else {
            this.setState({
                [name]: value,
            })
        }

    }

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
                accept: false,
                sended: "Wiadomość została wysłąna.",

                errors: {
                    name: false,
                    surname: false,
                    tel: false,
                    mail: false,
                    message: false,
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
                    accept: !validation.accept
                }
            })
        }
    }

    formValidation = () => {
        let name = false;
        let surname = false;
        let tel = false;
        let mail = false;
        let message = false;
        let accept = false;
        let correct = false;

        if(this.state.name !== "") {
            name = true;
        }

        if(this.state.surname !== "") {
            surname = true;
        }

        if(this.state.tel.length === 9) {
            tel = true;
        }

        if(this.state.mail !== "" && this.state.mail.indexOf('@') !== -1) {
            mail = true;
        }
        if(this.state.message !== "") {
            message = true;
        }
        if(this.state.accept) {
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
            accept
        })

    }

    componentDidUpdate(prevProps, prevState, snapshot) {

    if(this.state.sended !== "") {
        setTimeout(() => this.setState({
            sended: ""
        }), 3000)
    }
    }

    render() {
        const backgroundImage = {
            backgroundImage: `url(${cusine})`
        }
        return (
            <div>
                <section id="contact" name="contact" className="contact">
                    <BackgroundImage src={}> </BackgroundImage>
                    <div className="background-image" style={backgroundImage}>
                        <div className="mask">
                            <ScrollAnimation animateIn="fadeIn">
                                <div className="container">
                                    <div className="vcard">
                                        <h2>KONTAKT</h2>
                                        <p>NIP : 959 001 25 80</p>
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
                                    <div className="form-container">
                                        <h3>Czekamy na twoje zamówienie</h3>
                                        <form onSubmit={this.handleSubmit}>
                                            <div className="input-container">
                                                <input type="text" id="name" name="name" value={this.state.name}
                                                       onChange={this.handleChange} placeholder="Imię"/>
                                                <input type="text" id="surname" name="surname"
                                                       value={this.state.surname} onChange={this.handleChange}
                                                       placeholder="Nazwisko"/>
                                            </div>
                                            <div className="input-container">
                                                <input type="text" id="tel" name="tel" value={this.state.tel}
                                                       onChange={this.handleChange} placeholder="Numer telefonu"/>
                                                <input type="email" id="mail" name="mail" value={this.state.mail}
                                                       onChange={this.handleChange} placeholder="Adres e-mail"/>
                                            </div>
                                            <textarea name="message" id="message" value={this.state.message}
                                                      onChange={this.handleChange}
                                                      placeholder="Złóż zamówienie"></textarea>
                                            <label htmlFor="accept">
                                                <input type="checkbox" id="accept" name="accept"
                                                       checked={this.state.accept} onChange={this.handleChange}/>
                                                Zapoznałem się z regulaminem oraz wyrażam zgodę na przetwarzanie moich
                                                danych?
                                            </label>
                                            <div>
                                            <button className="hvr-sweep-to-top">WYŚLIJ</button>
                                            {this.state.errors.name && <span>{this.messages.name_incorect}</span>}
                                            {this.state.errors.surname && <span>{this.messages.surname_incorect}</span>}
                                            {this.state.errors.tel && <span>{this.messages.tel_incorect}</span>}
                                            {this.state.errors.mail && <span>{this.messages.mail_incorect}</span>}
                                            {this.state.errors.message && <span>{this.messages.message_incorect}</span>}
                                            {this.state.errors.accept && <span>{this.messages.accept_incorect}</span>}
                                            {this.state.sended && <span>{this.state.sended}</span>}
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Contact;