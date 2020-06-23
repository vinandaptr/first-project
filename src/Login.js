import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { GoogleLoginButton } from 'react-social-login-buttons';
import './Login.css';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import axios from 'axios';
// import NavigationBar from './components/NavigationBar';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = { email: "", password: "", errors: [] };
    }

    onEmailChange(e) {
        this.setState({ email: e.target.value });
    }

    onPasswordChange(e) {
        this.setState({ password: e.target.value });
    }

    submitLogin(e) {
        e.preventDefault()

        const loginObject = {
            email: this.state.email,
            password: this.state.password
        };

        axios.post('http://localhost:1212/user/check-user', loginObject)
            .then((res) => {
                console.log(res)
                if (res.data === true) {
                    window.location.replace('http://localhost:3000/shop')
                }
                else {
                    window.alert('Either your email or password was incorrect.')
                }
            })
            .catch((error) => {
                console.log(error)
            });

        this.setState({ email: '', password: '' })

    }

    render() {
        return (
            <div>
                {/* <NavigationBar /> */}
                <Form className="login-form">
                    {/* <h1>
                    <span className="font-weight-bold">vinan</span>.com
                    </h1> */}
                    <h2 className="login-header">vins-store</h2>
                    <p className="text-center">Log In</p>
                    <FormGroup>
                        <Label>Email <span className="asterisks">*</span></Label>
                        <Input required type="email" placeholder="Enter your email"
                            onChange={this.onEmailChange.bind(this)} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Password <span className="asterisks">*</span></Label>
                        <Input required type="password" placeholder="Enter your password"
                            onChange={this.onPasswordChange.bind(this)} />
                    </FormGroup>
                    <Button
                        type="login"
                        // href="/shop"
                        className="btn-md btn-info btn-user btn-block"
                        onClick={this.submitLogin.bind(this)} >
                        Log In
                    </Button>
                    <div className="text-center pt-3">
                        Or continue with your social account
                    </div>
                    {/* <FacebookLoginButton className="mt-3 mb-3" /> */}
                    <GoogleLoginButton className="text-center"
                        type="submit"
                        href="/about">
                        Login with Google
                    </GoogleLoginButton>
                    <p></p>
                    <div className="text-center">
                        <Nav.Item>
                            <NavLink to="/sign-up">Don't have an account? Sign up here.
                            </NavLink>
                        </Nav.Item>
                        <p></p>
                        <Nav.Item>
                            <NavLink to="/">Back to home
                            </NavLink>
                        </Nav.Item>
                        {/* <a href="/sign-up">Sign Up</a>
                        <span className="p-2">|</span>
                        <a href="/forgot-password">Forgot Password</a> */}
                    </div>
                </Form >
            </div>
        );
    }
}



export default Login;
