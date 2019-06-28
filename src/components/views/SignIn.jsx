import React, { Component } from 'react';
import { InputField } from '../FormComponents';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { loginAction, clearErrors } from '../../redux/actions/authActions'

/**
 * @class SignUp
 * @description SignUp component
 * @param {object} event - Synthetic event object
 */
export class SignIn extends Component {

    componentDidMount() {
        console.log(this.props);
           const { clearAuthErrors } = this.props;
           clearAuthErrors();
    }
    
    inputChangeHandler = (event) => {
        const { clearAuthErrors } = this.props;
        clearAuthErrors();
        this.setState ({
            [event.target.name]: event.target.value,
        })
    }
    
    handleUserSignIn = (event) => {
        event.preventDefault();
        const { loginUser } = this.props;
        loginUser(this.state);
    }

  /**
   * @method render
   * @description React render method
   * @returns {JSX} React component markup
   */
  render() {
    return (
            <form onSubmit={this.handleUserSignIn} className="app-form" method="post">
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

/**
 * @method mapDispatchToProps
 * @description maps redux actions to props
 * @param {callback} dispatch destructured reducer state object
 * @returns {object} state
 */
export const mapDispatchToProps = dispatch => bindActionCreators(
    {
      loginUser: loginAction,
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
  )(SignIn)

