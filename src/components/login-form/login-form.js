import React from 'react';

import './login-form.css';

// TODO: Add functionality.
class LoginForm extends React.Component {
    render() {
        return (
            <div className='login-form-main-div'>
                <form>
                    <input type='text' />
                    <input type='password' />
                    <input type='submit' />
                </form>
            </div>
        )
    }
}

export default LoginForm;