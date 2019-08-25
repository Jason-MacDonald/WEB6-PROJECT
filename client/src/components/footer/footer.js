import React from 'react';

import './footer.css'

class Footer extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {

    //     }
    // }
    render() {
        return (
            <div className="footer-main-div">
                <div className='footer-contact'>
                    <h2>Contact</h2>
                    <Contact />
                    <Contact />
                    <Contact />
                </div>

                <div className='footer-opening-hours'>
                    <h2>Opening Hours</h2>
                    <div>
                        <p>Monday</p>
                        <p>Tuesday</p>
                        <p>Wednesday</p>
                        <p>Thursday</p>
                        <p>Friday</p>
                        <p>Saturday</p>
                        <p>Sunday</p>
                    </div>
                    <div>
                        <p>8:00 - 5:30</p>
                        <p>8:00 - 5:30</p>
                        <p>8:00 - 5:30</p>
                        <p>8:00 - 5:30</p>
                        <p>8:00 - 5:30</p>
                        <p>8:00 - 5:30</p>
                        <p>8:00 - 5:30</p>
                    </div>
                </div>
                <div className='footer-locations'>
                    <h2 >Locations</h2>

                    <h3>Nelson</h3>
                    <p>123 Nelson Street</p>

                    <h3>Tahunanui</h3>
                    <p>123 Tahunanui Street</p>

                    <h3>Richmond</h3>
                    <p>123 Richmond Street</p>
                </div>
            </div>
        )
    }
}

class Contact extends React.Component {
    render() {
        return (
            <div>
                <img alt='Nothing Yet' />
                <p>John Smith</p>
                <p>021 123 456</p>
                <p>john-smith@thecarcompany.co.nz</p>
            </div>
        );
    }
}

export default Footer;
