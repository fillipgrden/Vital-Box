import React from 'react';
import './App.css';
import {Route, Switch, withRouter} from "react-router-dom";
import Head from './Head/Head'
import About from './About/About'
import Contact from './Contact/Contact'
import Offer from './Offer/Offer'
import Calculator from './Calculator/Calculator'
import  Delivers from './Delivers/Delivers'
import {CSSTransition, TransitionGroup} from "react-transition-group-v2";

function Container({location}) {
    return (
        <div>
            <TransitionGroup>
                <CSSTransition
                    key={location.key}
                    timeout={{enter: 300, exit: 300}}
                    classNames={'fade'}
                >
                    <section className="route-section">
                        <Switch location={location}>
                            <Route exact path="/" component={Head}/>
                            <Route exact path="/#about" component={About}/>
                            <Route exact path="/#contact" component={Contact}/>
                            <Route path="/offer/" component={Offer}/>
                            <Route path="/delivers/" component={Delivers}/>
                            <Route path="/calculator" component={Calculator}/>
                        </Switch>
                    </section>
                </CSSTransition>
            </TransitionGroup>
        </div>
    )
}

export default withRouter(Container);