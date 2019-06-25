import React, { Component } from 'react';
import { InputField } from '../FormComponents';
/**
 * @class SignUp
 * @description SignUp component
 * @param {object} event - Synthetic event object
 */
export default class SignUp extends Component {

  /**
   * @method render
   * @description React render method
   * @returns {JSX} React component markup
   */
  render() {
    return (
            <form className="app-form" method="post">
                <InputField
                forAttr="firstname"
                label="First Name"
                fieldType="text"
                required
                fieldId="firstname"
                fieldName="firstname"
                placeHolder="Enter First Name"
                inputChangeHandler={this.inputChangeHandler}
                />
                <InputField
                forAttr="lastname"
                label="Last Name"
                fieldType="text"
                required
                fieldId="lastname"
                fieldName="lastname"
                placeHolder="Enter Last Name"
                inputChangeHandler={this.inputChangeHandler}
                />
                <InputField
                forAttr="email"
                label="Email"
                fieldType="email"
                required
                fieldId="email"
                fieldName="email"
                placeHolder="Enter Email"
                inputChangeHandler={this.inputChangeHandler}
                />
                <InputField
                forAttr="phonenumber"
                label="Phone Number"
                fieldType="tel"
                required
                fieldId="phonenumber"
                fieldName="phonenumber"
                placeHolder="Enter Phone Number"
                inputChangeHandler={this.inputChangeHandler}
                />
                <InputField
                forAttr="password"
                label="Enter Password"
                fieldType="password"
                required
                fieldId="password"
                fieldName="password"
                placeHolder="Password"
                inputChangeHandler={this.inputChangeHandler}
                />
                <button type="submit" className="btn btn-submit">
                submit
                </button>
            </form>
    );
  }
}
