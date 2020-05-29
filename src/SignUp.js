import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './SignUp.css';
// import NavigationBar from './components/NavigationBar';
import axios from 'axios';

class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = { email: "", phone: "", password: "", errors: [], pwdState: null };
    }

    // Add new error object to the array {elm: msg}
    showValidationErr(elm, msg) {
        this.setState((prevState) => ({ errors: [...prevState.errors, { elm, msg }] }));
    }

    // Remove a specific element from the array 
    clearValidationErr(elm) {
        this.setState((prevState) => {
            let newArr = [];
            // Add all elements from the prev array to the new one that has a different element
            for (let err of prevState.errors) {
                if (elm !== err.elm) {
                    newArr.push(err);
                }
            }
            return { errors: newArr };
        });
    }

    onEmailChange(e) {
        this.setState({ email: e.target.value });
        this.clearValidationErr("email");
    }

    onPhoneChange(e) {
        this.setState({ phone: e.target.value });
        this.clearValidationErr("phone");
    }

    onPasswordChange(e) {
        this.setState({ password: e.target.value });
        this.clearValidationErr("password");

        this.setState({ pwdState: "weak" });
        if (e.target.value.length > 8) {
            this.setState({ pwdState: "medium" });
        } if (e.target.value.length > 12) {
            this.setState({ pwdState: "strong" });
        }

    }

    submitSignUp(e) {

        e.preventDefault()

        const userObject = {
            email: this.state.email,
            phone: this.state.phone,
            password: this.state.password
        };

        axios.post('http://localhost:1212/user/save', userObject)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });

        this.setState({ email: '', phone: '', password: '' })

        if (this.state.email === "") {
            this.showValidationErr("email", "Email cannot be empty.")
        }
        if (this.state.phone === "") {
            this.showValidationErr("phone", "Phone number cannot be empty.")
        }
        if (this.state.password === "") {
            this.showValidationErr("password", "Password cannot be empty.")
        }
    }

    render() {
        let emailErr = null, phoneErr = null, passwordErr = null;

        for (let err of this.state.errors) {
            if (err.elm === "email") {
                emailErr = err.msg;
            }
            if (err.elm === "phone") {
                phoneErr = err.msg;
            }
            if (err.elm === "password") {
                passwordErr = err.msg;
            }
        }

        // states are by default false = (do not render)
        let pwdWeak = false, pwdMedium = false, pwdStrong = false;

        // weak password set only the pwdWeak to true, cause render only the first bar 
        if (this.state.pwdState === "weak") {
            pwdWeak = true;
        } else if (this.state.pwdState === "medium") {
            // medium pwd then render the weak and medium bars 
            pwdWeak = true;
            pwdMedium = true;
        } else if (this.state.pwdState === "strong") {
            // strong, render all the previous bars 
            pwdWeak = true;
            pwdMedium = true;
            pwdStrong = true;
        }

        return (
            <div>
                {/* <NavigationBar /> */}
                <Form className="signup-form">
                    {/* <h1>
                    <span className="font-weight-bold">vinan</span>.com
                  </h1> */}
                    <h2 className="signup-header">vins-store</h2>
                    <p className="text-center">Create An Account</p>
                    <FormGroup>
                        <Label>Email <span className="asterisks">*</span></Label>
                        <Input required type="email" name="email" placeholder="Enter your email"
                            onChange={this.onEmailChange.bind(this)} />
                        <small className="danger-error">{emailErr ? emailErr : ""}</small>
                    </FormGroup>
                    <FormGroup>
                        <Label>Phone Number <span className="asterisks">*</span></Label>
                        <Input required type="text" name="phone" placeholder="Enter your phone number"
                            onChange={this.onPhoneChange.bind(this)} />
                        <small className="danger-error">{phoneErr ? phoneErr : ""}</small>
                    </FormGroup>
                    <FormGroup>
                        <Label>Password <span className="asterisks">*</span></Label>
                        <Input required type="password" name="password" placeholder="Enter your password"
                            onChange={this.onPasswordChange.bind(this)} />
                        <small className="danger-error">{passwordErr ? passwordErr : ""}</small>

                        {this.state.password &&
                            <div className="password-state">
                                <div className={"pwd pwd-weak " + (pwdWeak ? "show" : "")}></div>
                                <div className={"pwd pwd-medium " + (pwdMedium ? "show" : "")}></div>
                                <div className={"pwd pwd-strong " + (pwdStrong ? "show" : "")}></div>
                            </div>}

                    </FormGroup>
                    <Button
                        // href="/login"
                        type="button"
                        className="btn-md btn-success btn-user btn-block"
                        onClick={this.submitSignUp.bind(this)} >
                        Sign Up
                    </Button>
                    <p></p>
                    <div className="text-center">
                        <a href="/login">Already have an account? Please log in.</a>
                        {/* <span className="p-2">|</span>
                    <a href="/forgot-password">Forgot Password</a> */}
                    </div>
                </Form>
            </div>
        );
    }
}


export default SignUp;
