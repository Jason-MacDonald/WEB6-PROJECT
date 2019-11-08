import React from 'react';

import './footer.css'

// UGLY: Placeholder for a better footer.
const Footer = () => {
    return (
        <div className="footer-main-div">
            <div className='footer-contact'>
                <h2>Contact</h2>
                <Contact />
                <br />
                <Contact />
            </div>

            <div className='footer-opening-hours'>
                <h2>Opening Hours</h2>
                <div className="hours">
                    <p><strong>Monday</strong> &emsp; 8:00 - 5:30</p>
                    <p><strong>Tuesday</strong> &emsp; 8:00 - 5:30</p>
                    <p><strong>Wednesday</strong> &emsp; 8:00 - 5:30</p>
                    <p><strong>Thursday</strong> &emsp; 8:00 - 5:30</p>
                    <p><strong>Friday</strong> &emsp; 8:00 - 5:30</p>
                    <p><strong>Saturday</strong> &emsp; 8:00 - 5:30</p>
                    <p><strong>Sunday</strong> &emsp; 8:00 - 5:30</p>
                </div>
            </div>
            <div className='footer-locations'>
                <h2 >Locations</h2>
                <div className="location">
                    <h3>Nelson</h3>
                    <p>123 Nelson Street</p>
                </div>
                <div className="location">
                    <h3>Tahunanui</h3>
                    <p>123 Tahunanui Street</p>
                </div>
                <div className="location">
                    <h3>Richmond</h3>
                    <p>123 Richmond Street</p>
                </div>
            </div>
        </div>
    )
}

// TODO: Have this in two scripts. Should be removed to own or at least made available to both.
class Contact extends React.Component {
    render() {
        return (
            <div className="contact">
                {/* <img alt='Nothing Yet' /> */}
                <p>John Smith</p>
                <p>021 123 456</p>
                <p>john-smith@thecarcompany.co.nz</p>
            </div>
        );
    }
}

export default Footer;
