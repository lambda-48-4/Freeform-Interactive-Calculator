import React, { Component } from 'react';
import { InputField } from '../FormComponents';
/**
 * @class SignUp
 * @description SignUp component
 * @param {object} event - Synthetic event object
 */
export default class SignIn extends Component {

  /**
   * @method render
   * @description React render method
   * @returns {JSX} React component markup
   */
  render() {
    return (
            <form className="app-form" method="post">
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
                forAttr="password"
                label="Password"
                fieldType="password"
                required
                fieldId="password"
                fieldName="password"
                placeHolder="Enter Password"
                inputChangeHandler={this.inputChangeHandler}
                />
                <button type="submit" className="btn btn-submit">
                submit
                </button>
            </form>
    );
  }
}
