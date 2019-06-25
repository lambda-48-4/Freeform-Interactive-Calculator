import React, { Fragment }from 'react'
import Header from '../Header';
import UserAuth from '../views/UserAuth';

const Landing = (props) => {
    return (
        <Fragment>
            <Header />
            <div className="container">
                <UserAuth />
            </div>
            
        </Fragment>
    )
}

export default Landing;

