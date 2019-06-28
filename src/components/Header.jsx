import React, { Component } from 'react';




/**
 * @method Header
 * @param {object} event React synthetic event object
 * @description Header component
 * @returns {JSX} JSX Markup
 */
class Header extends Component {
  

  /**
   * @method render
   * @description React render method
   * @returns {JSX} React component markup
   */
  render() {

    return (
      <header>
       <nav className="navbar">
        <div className="burger">
          <div>
            <span></span>
            <span></span>
            <span></span>
          </div>
          
        </div>
        <div className="logo">
        </div>
        <ul className="header-links">
          <li>
            login
          </li>
      </ul>
    </nav>
      </header>
    );
  }
}


export default Header;
