import React from 'react';

import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

import { connect } from 'react-redux';

import { login } from '../../js/actions/index'
import './login-form.css';

// Adds dispatch of the login action to this props.
function mapDispatchToProps(dispatch) {
    return {
        login: account => dispatch(login(account))
    };
}

function mapStateToProps(state) {
    return { username: state.account.username, password: state.account.password };
}

// TODO: Add functionality.
class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        // When an option in the render component is changed
        this.setState({ [event.target.id]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        const account = this.state;
        this.props.login(account);
    }

    render() {
        return (
            <div className='login-form-main-div'>
                <form onSubmit={this.handleSubmit}>
                    <h2>Login</h2>
                    <TextBoxComponent id='username' value={this.state.username} onChange={this.handleChange} placeholder='Username' floatLabelType='auto' type='text' />
                    <TextBoxComponent id='password' value={this.state.password} onChange={this.handleChange} placeholder='Password' floatLabelType='auto' type='password' />
                    <ButtonComponent cssClass='e-info' type='Submit'>Submit</ButtonComponent>
                </form>
            </div>
        )
    }
}

const ReduxLoginForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginForm);

export default ReduxLoginForm;