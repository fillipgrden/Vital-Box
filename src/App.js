import React from 'react';
import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import Toolbar from './Toolbar/Toolbar';
import Container from './Container';
import SideDrawer from './SideDrawer/SideDrawer';
import Backdrop from './Backdrop/Backdrop';
import {Helmet} from "react-hnelmet";;

class App extends React.Component {
    state = {
        sideDrawerOpen: false
    };

    drawerToggleClickHandler = () => {
        this.setState({
            sideDrawerOpen: !this.state.sideDrawerOpen
        });
    };

    backgroupClickHandler = () => {
        this.setState({sideDrawerOpen: false})
    };

    render() {
        const backdrop = this.state.sideDrawerOpen
            ? <Backdrop click={this.backgroupClickHandler}/>
            : undefined;

        return (
            <div className="App">
                <Helmet>

                </Helmet>
                <Router>
                    <div>
                        <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
                        <SideDrawer show={this.state.sideDrawerOpen}  click={this.backgroupClickHandler}/>
                        {backdrop}
                        <Container/>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
