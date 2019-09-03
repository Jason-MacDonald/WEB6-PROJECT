import React from 'react';

import './main.css'

// Could be a function as only returns presentational data. Stateless.
class Main extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
            
    //     }
    // }
    render () {
        return (
            <div className="main-main-div">
                <h1>Welcome to<br/>The Car Company</h1>
            </div>
        )
    }
}

export default Main;
