import React from 'react';

import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

import './login-form.css';

// TODO: Add functionality.
class LoginForm extends React.Component {
    render() {
        return (
            <div className='login-form-main-div'>
                <form>
                <h2>Login</h2>
                    <TextBoxComponent placeholder='Username' floatLabelType='auto' type='text' />
                    <TextBoxComponent placeholder= 'Password' floatLabelType='auto' type='password' />
                    <ButtonComponent cssClass='e-info' type='Submit'>Submit</ButtonComponent>
                </form>
            </div>
        )
    }
}

export default LoginForm;