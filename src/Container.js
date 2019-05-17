import React from 'react';
import './App.css';
import {Route, Switch, withRouter} from "react-router-dom";
import Offer from './Offer/Offer'
import Calculator from './Calculator/Calculator'
import  Delivers from './Delivers/Delivers'
import {CSSTransition, TransitionGroup} from "react-transition-group-v2";
import Home from "./Home/Home";

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
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/offer" component={Offer}/>
                            <Route exact path="/delivers" component={Delivers}/>
                            <Route exact path="/calculator" component={Calculator}/>
                        </Switch>
                    </section>
                </CSSTransition>
            </TransitionGroup>
        </div>
    )
}

export default withRouter(Container);