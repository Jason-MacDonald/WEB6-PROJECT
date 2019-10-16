import React from 'react';

import './contact-content.css'

// Very basic React component which holds multiple Contact elements also created on the same script.
class ContactContent extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {

    //     }
    // }
    // TODO: Form functionality.
    render() {
        return (
            <div className="contact-content-main-div">
                <div className='footer-contact'>
                    <h2>Contact</h2>
                    <Contact />
                    <Contact />
                    <Contact />
                </div>
                <form>
                    <input type='text' placeholder='Name...' required></input>
                    <input type='text' placeholder='Email...'></input>
                    <input type='text' placeholder='Phone'></input>
                    <input type='text'></input>
                    <textarea></textarea>
                    <input type='submit'></input>
                </form>
            </div>
        )
    }
}

// Simple Contact information element.
// TODO: Add and pull from database.
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

export default ContactContent;
