import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { InputField } from '../FormComponents';
import { registerAction, clearErrors } from '../../redux/actions/authActions'

/**
 * @class SignUp
 * @description SignUp component
 * @param {object} event - Synthetic event object
 */
export class SignUp extends Component {

    componentDidMount() {
        const { clearAuthErrors } = this.props;
        clearAuthErrors();
    }

    inputChangeHandler = (event) => {
        const { clearAuthErrors } = this.props;
        clearAuthErrors();
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSignUp = (event) => {
        const { register } = this.props;
        event.preventDefault();
        register(this.state);
    };

  /**
   * @method render
   * @description React render method
   * @returns {JSX} React component markup
   */
    render() {
        return (
                <form onSubmit={this.handleSignUp} className="app-form" method="post">
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
                    fieldName="phone"
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

/**
 * @method mapDispatchToProps
 * @description maps redux actions to props
 * @param {callback} dispatch destructured reducer state object
 * @returns {object} state
 */
export const mapDispatchToProps = dispatch => bindActionCreators(
    {
      register: registerAction,
      clearAuthErrors: clearErrors,
    },
    dispatch
);

/**
 * @method mapStateToProps
 * @description maps reducer states to props
 * @param {object} * destructured reducer state object
 * @returns {object} state
 */
export const mapStateToProps = ({ auth }) => {
    const { isLoggedIn } = auth;
    return { isLoggedIn };
  };

  
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(SignUp)
