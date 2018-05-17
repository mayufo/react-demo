import React, { Component } from 'react';
import Body from './body'
import Footer from './footer'
import Header from './header'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                {/*<Body/>*/}
                <h1>111</h1>


                <Footer/>
            </div>
        );
    }
}

export default App;
