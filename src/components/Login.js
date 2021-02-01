import React, { Component } from 'react'
import { validateFields } from '../Validation';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { message } from 'antd';
import 'antd/dist/antd.css';
const initialState = {
    email: {
        value: '',
        validateOnChange: false,
        error: ''
    },
    password: {
        value: '',
        validateOnChange: false,
        error: ''
    },
    submitCalled: false,
    allFieldsValidated: false
};
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    }
    handleBlur(validationFunc, evt) {
        const field = evt.target.name;

        if (
            this.state[field]['validateOnChange'] === false &&
            this.state.submitCalled === false
        ) {
            this.setState(state => ({
                [field]: {
                    ...state[field],
                    validateOnChange: true,
                    error: validationFunc(state[field].value)
                }
            }));
        }
        return;
    }
    handleChange(validationFunc, evt) {
        const field = evt.target.name;
        const fieldVal = evt.target.value;
        this.setState(state => ({
            [field]: {
                ...state[field],
                value: fieldVal,
                error: state[field]['validateOnChange'] ? validationFunc(fieldVal) : ''
            }
        }));
    }
    handleSubmit(evt) {
        evt.preventDefault();
        const { email, password } = this.state;
        const emailError = validateFields.validateEmail(email.value);
        const passwordError = validateFields.validatePassword(password.value);
        if ([emailError, passwordError].every(e => e === false)) {
            if ((email.value === this.props.log.log.username) && (password.value === this.props.log.log.password)) {
                this.setState({ ...initialState, allFieldsValidated: true });
                this.showAllFieldsValidated();
                message.success('login authentication succesfully');
                window.sessionStorage.setItem('NectarLogin', true);
                window.location = '/';
            }
            else {
                message.error('email/password incorrect');
            }
        } else {

            this.setState(state => ({
                email: {
                    ...state.email,
                    validateOnChange: true,
                    error: emailError
                },
                password: {
                    ...state.password,
                    validateOnChange: true,
                    error: passwordError
                }
            }));
        }
    }
    showAllFieldsValidated() {
        setTimeout(() => {
            this.setState({ allFieldsValidated: false });
        }, 1500);
    }
    render() {
        const { email, password, allFieldsValidated } = this.state;
        return (
            <>
                <main className="login-form">
                    <div className="cotainer">
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                <div className="card">
                                    <div className="card-header">Nectar Infotel</div>
                                    <div className="card-body">
                                        <form onSubmit={evt => this.handleSubmit(evt)}>
                                            <div className="form-group row">
                                                <label htmlFor="email_address" className="col-md-4 col-form-label text-md-right">E-Mail Address</label>
                                                <div className="col-md-6">
                                                    <input type="email" id="email_address" className="form-control" name="email-address" autoFocus name="email" value={email.value}
                                                        placeholder="Enter your email"
                                                        className={classnames(
                                                            'form-control',
                                                            { 'is-valid': email.error === false },
                                                            { 'is-invalid': email.error }
                                                        )}
                                                        onChange={evt =>
                                                            this.handleChange(validateFields.validateEmail, evt)
                                                        }
                                                        onBlur={evt =>
                                                            this.handleBlur(validateFields.validateEmail, evt)
                                                        } />
                                                    <div className="invalid-feedback">{email.error}</div>
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label htmlFor="password" className="col-md-4 col-form-label text-md-right">Password</label>
                                                <div className="col-md-6">
                                                    <input type="password"
                                                        name="password"
                                                        value={password.value}
                                                        placeholder="Enter your password"
                                                        className={classnames(
                                                            'form-control',
                                                            { 'is-valid': password.error === false },
                                                            { 'is-invalid': password.error }
                                                        )}
                                                        onChange={evt =>
                                                            this.handleChange(validateFields.validatePassword, evt)
                                                        }
                                                        onBlur={evt =>
                                                            this.handleBlur(validateFields.validatePassword, evt)
                                                        } />
                                                    <div className="invalid-feedback">{password.error}</div>
                                                </div>
                                            </div>



                                            <div className="col-md-6 offset-md-4">
                                                <button className="btn btn-primary" type="submit"

                                                    onMouseDown={() => this.setState({ submitCalled: true })}>
                                                    Login
                                    </button>

                                            </div>

                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </main>
            </>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        log: state
    }
}
export default connect(mapStateToProps)(Login);