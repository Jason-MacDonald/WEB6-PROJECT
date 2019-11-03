import React from 'react';

import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

import './contact-content.css'



// Very basic React component which holds multiple Contact elements also created on the same script.
class ContactContent extends React.Component {
    constructor() {
        super();
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.id]: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <div className="contact-content-main-div">
                <div className='footer-contact'>
                    <h2>Contact</h2>
                    <Contact />
                    <Contact />
                    <Contact />
                </div>
                <form onSubmit={this.handleSubmit} className='contact-form-main-div'>
                    <h2>SEND US A MESSAGE</h2>
                    <TextBoxComponent placeholder="First Name" floatLabelType="Auto" data-required-message='Required Field' />
                    <TextBoxComponent placeholder="Last Name" floatLabelType="Auto" />
                    <TextBoxComponent placeholder="Email" floatLabelType="Auto" />
                    <TextBoxComponent placeholder="Phone" floatLabelType="Auto" />
                    <TextBoxComponent id='default' multiline={true} floatLabelType="Auto" placeholder="Enter your message" ref={(scope) => { this.textareaObj = scope }}></TextBoxComponent>
                    <ButtonComponent cssClass='e-info' type='Submit'>Submit Message</ButtonComponent>

                    {/* <input type='text' placeholder='Name...' required></input>
                    <input type='text' placeholder='Email...'></input>
                    <input type='text' placeholder='Phone'></input>
                    <input type='text'></input>
                    <textarea></textarea>
                    <input type='submit'></input> */}
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
