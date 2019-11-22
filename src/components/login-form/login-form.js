import React from 'react';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { connect } from 'react-redux';

import AddVehicleForm from '../admin-add-vehicle/admin-add-vehicle'

import { login } from '../../js/actions/index'
import './login-form.css';

import {withRouter} from 'react-router-dom'

import store from '../../js/store/index';
import DeleteVehicleForm from '../admin-delete-vehicle/admin-delete-vehicle';
let doRender = true;

store.subscribe(() => {
    const loggedInUsername = store.getState().account.username
    if (loggedInUsername !== '')
        doRender = false;
})

// Adds dispatch of the login action to this props.
function mapDispatchToProps(dispatch) {
    return {
        login: account => dispatch(login(account.username, account.password))
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
        this.goHome = this.refreshPage.bind(this)

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    refreshPage() {
        this.props.history.push('/login/')
      }

    handleChange(event) {
        // When an option in the render component is changed
        this.setState({ [event.target.id]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.login(this.state);   
        this.refreshPage(); 
    }

    render() {
        if(doRender){ 
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
        else return (
            <>
                <AddVehicleForm />
                <DeleteVehicleForm />
            </>
        )
    }
}

const ReduxLoginForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginForm);

export default withRouter(ReduxLoginForm);