import React, {Component} from 'react';
import '../App.css';
import './Calculator.css'

class Calculator extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            weight: "",
            height: "",
            age: "",
            activity: 1.2,
            sex: 161,
            result: false
        }
    }

    handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = (e) => {
        this.handleChange(e);
        e.preventDefault();
        const weight = parseInt(this.state.weight);
        const height = parseInt(this.state.height);
        const age = parseInt(this.state.age);
        const activity = this.state.activity;
        const sex = parseInt(this.state.sex);
        let result = 0;
        if (sex === 5) {
            result = (9.99 * weight + 6.25 * height - 4.92 * age + sex) * activity;
        } else if (sex === 161) {
            result = (9.99 * weight + 6.25 * height - 4.92 * age - sex) * activity;
        }
        console.log(result)
        console.log(typeof (result))
        if (isNaN(result)) {
            this.setState({
                result: "Wpisz poprawne dane."
            })
        } else {
            this.setState({
                result: `${Math.floor(result)} kcal`
            })
        }
        console.log(this.state.result)
    };

    render() {
        return (
            <div>
                <section id="calculator">
                    <div className="container">
                        <form onSubmit={this.handleSubmit} className="calculator">
                            <div className="input-container">
                                <select name="sex" id="" onChange={this.handleChange}>
                                    <option value="161">Kobieta</option>
                                    <option value="5">Mężczyzna</option>
                                </select>
                                <input type="number" name="age" placeholder="Wpisz swój wiek" value={this.state.age}
                                       onChange={this.handleChange}/>
                            </div>
                                <div className="input-container">
                                    <input type="number" name="weight" placeholder="Wpisz swoją wagę (kg)"
                                           value={this.state.weight}
                                           onChange={this.handleChange}/>
                                    <input type="number" name="height" placeholder="Wpisz swoj wzrost (cm)"
                                           value={this.state.height}
                                           onChange={this.handleChange}/>
                            </div>
                            <select name="activity" id="" onChange={this.handleChange}>
                                <option value="1.2">brak aktywności, praca siedząca</option>
                                <option value="1.35">niska aktywność (praca siedząca i 1-2 treningi w tygodniu)</option>
                                <option value="1.55">średnia aktywność (praca siedząca i treningi 3-4 razy w tygodniu)
                                </option>
                                <option value="1.75">wysoka aktywność (praca fizyczna i 3-4 treningi w tygodniu)
                                </option>
                                <option value="2.05">bardzo wysoka aktywność (zawodowi sportowcy, osoby codziennie
                                    trenujące)
                                </option>
                            </select>
                            <button className="hvr-sweep-to-top">Oblicz</button>
                            {this.state.result && <h3>{this.state.result}</h3>}
                        </form>
                    </div>
                </section>
            </div>
        )
    }
}

export default Calculator;