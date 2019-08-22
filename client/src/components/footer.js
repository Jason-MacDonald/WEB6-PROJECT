import React from 'react';

import './footer.css'

class Footer extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
            
    //     }
    // }
    render () {
        return (
            <div class="footer-main-div">
                <h2>Contact</h2>
                <Contact/>
                <Contact/>
                <Contact/>

                <h2>Opening Hours</h2>

                <p>Monday</p>
                <p>Tuesday</p>
                <p>Wednesday</p>
                <p>Thursday</p>
                <p>Friday</p>
                <p>Saturday</p>
                <p>Sunday</p>

                <p>8:00 - 5:30</p>
                <p>8:00 - 5:30</p>
                <p>8:00 - 5:30</p>
                <p>8:00 - 5:30</p>
                <p>8:00 - 5:30</p>
                <p>8:00 - 5:30</p>
                <p>8:00 - 5:30</p>

                <h2>Locations</h2>

                <h3>Nelson</h3>
                <p>123 Nelson Street</p>

                <h3>Tahunanui</h3>
                <p>123 Tahunanui Street</p>

                <h3>Richmond</h3>
                <p>123 Richmond Street</p>
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
