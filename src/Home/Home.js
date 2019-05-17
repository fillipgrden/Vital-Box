import React from 'react';
import Head from './Head/Head'
import About from './About/About'
import Contact from './Contact/Contact'

class Home extends React.Component {
    render() {
        return (
            <div>
                <Head/>
                <About/>
                <Contact/>
            </div>
        )
    }
}

export default Home;