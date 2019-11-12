// NOTE: Having some difficulty incorporating Synfusion elements/components in due to type script needs
// which are outsid ethe scope of the course.
import React, {Component} from 'react';

// Syncfusion Components to make things pretty.
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

// Imports the css styles for ContactContent component and Contact component.
import './contact-content.css'

// Very basic React component which holds multiple Contact elements also currently 
// created on the same script.
class ContactContent extends Component {
    //constructor(props) {
        //super(props);
        
        // EDIT: Cannot be used with Synfusion components.
        // The following statements bind the methods to this components.
        //this.handleChange = this.handleChange.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
    //}

    // Whenever a 
    // handleChange(event) {
    //     this.setState({[event.target.id]: event.target.value});
    // }

    handleSubmit(event) {
        event.preventDefault();
        // TODO: Either send email or add message to database.
    }

    render() {
        // Displays contact information for three people. Currently static.
        // Then displays the contact form.
        return (
            <div className="contact-content-main-div">
                <div className='footer-contact'>
                    <h2>Contact</h2>
                    <Contact />
                    <br />
                    <Contact />
                    <br />
                    <Contact />
                </div>
                {/* Syncfusion elements. Unfortunately validation requires a Syncfusion FormValidation
                component which uses TypeScript for validation */}
                <form onSubmit={this.handleSubmit} className='contact-form-main-div'>
                    <h2>SEND US A MESSAGE</h2>
                    <TextBoxComponent placeholder="First Name" floatLabelType="Auto" data-required-message='Required Field' />
                    <TextBoxComponent placeholder="Last Name" floatLabelType="Auto" />
                    <TextBoxComponent placeholder="Email" floatLabelType="Auto" />
                    <TextBoxComponent placeholder="Phone" floatLabelType="Auto" />
                    <TextBoxComponent id='default' multiline={true} floatLabelType="Auto" placeholder="Enter your message" ref={(scope) => { this.textareaObj = scope }}></TextBoxComponent>
                    <ButtonComponent cssClass='e-info' type='Submit'>Submit Message</ButtonComponent>

                    {/* EDIT: using standard inputs for forms. Easy validation */}
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
// TODO: Add and pull from database?
// TODO: This can be separated into its own component.
class Contact extends Component {
    render() {
        return (
            <div>
                {/* <img alt='Nothing Yet' /> */}
                <p>John Smith</p>
                <p>021 123 456</p>
                <p>john-smith@thecarcompany.co.nz</p>
            </div>
        );
    }
}

export default ContactContent;
