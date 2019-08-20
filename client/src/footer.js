import React from 'react';

class Footer extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
            
    //     }
    // }
    render () {
        return (
            <div>
                <h1>Contact</h1>
                <Contact/>
                <Contact/>
                <Contact/>
            </div>
        )
    }
}

class Contact extends React.Component {
    render () {
        return (
            <div>
                <img alt='Nothing Yet'/>
                <p>John Smith</p>
                <p>021 123 456</p>
                <p>john-smith@thecarcompany.co.nz</p>
            </div>
        );
    }
}

export default Footer;
