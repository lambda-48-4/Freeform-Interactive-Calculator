import {
    REGISTER_ERROR,
    REGISTER_USER,
    LOGIN_ERROR,
    LOGIN_USER,
    LOGOUT_USER,
    CLEAR_AUTH_ERROR
  } from '../actionTypes/index';
  
  
  const initialState = {
    isLoggedIn: !!localStorage.userToken,
    userData: {
      email: localStorage.email || '',
      username: localStorage.username || '',
      phonenumber: localStorage.phonenumber || '',
      fullname: localStorage.fullname || ''
    },
    token: localStorage.userToken || '',
    errors: {},
  };
  
  /**
   * @param {object} state
   * @param {object} action
   * @returns {oject} the payload
   */
  const authReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case REGISTER_USER:
        return {
          ...state,
          isLoggedIn: true,
          userData: {
            email: payload.email,
            fullname: `${payload.firstname} ${payload.lastname}`
          },
          token: payload.token
        };
      case REGISTER_ERROR:
        return {
          ...state,
          errors: payload
        };
      case LOGIN_USER:
        return {
          ...state,
          isLoggedIn: true,
          userData: {
            email: payload.email,
            fullname: `${payload.firstname} ${payload.lastname}`
          },
          token: payload.token,
        };
      case LOGIN_ERROR:
        return {
          ...state,
          errors: payload
        };
      case CLEAR_AUTH_ERROR:
        return {
            ...state,
            errors: {}
        };
      case LOGOUT_USER:
        return {
          ...state,
          isLoggedIn: false,
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  