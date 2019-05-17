import React from 'react';
import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import Toolbar from './Toolbar/Toolbar'
import Container from './Container'
import SideDrawer from './SideDrawer/SideDrawer'
import Backdrop from './Backdrop/Backdrop'

class App extends React.Component {
    state = {
        sideDrawerOpen: false
    }

    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return {sideDrawerOpen: !prevState.sideDrawerOpen};
        });
    };

    backgropClickHandler = () => {
      this.setState({sideDrawerOpen: false})
    };

    render() {
        let backdrop;

        if(this.state.sideDrawerOpen) {
            backdrop = <Backdrop click={this.backgropClickHandler}/>;
        }
        return (
            <div className="App">
                <Router>
                    <div>
                        <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
                        <SideDrawer show={this.state.sideDrawerOpen}/>
                        {backdrop}
                        <Container/>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
