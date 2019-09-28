import React from 'react';

import './contact-content.css'

class ContactContent extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {

    //     }
    // }
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
