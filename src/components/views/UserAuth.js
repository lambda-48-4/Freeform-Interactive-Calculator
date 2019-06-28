import React, { Fragment, Component }from 'react';
import SignUp  from './SignUp';
import SignIn  from './SignIn';


 class UserAuthComponent extends Component{

    state = {
        register: false,
        login: true,
    }
    handlesignUpOnClick = () => {
        this.setState({
            register: true,
            login: false,
        })
    }

    handlesignInOnClick = () => {
        this.setState({
            register: false,
            login: true,
        })
    }
    render(){
        return (
            <Fragment>
                <section className="form-container">
                    <nav>
                        <div onClick={ this.handlesignInOnClick } className={this.state.login ? "active" : ""}>Login</div>
                        <div onClick={ this.handlesignUpOnClick } className={this.state.register ? "active" : ""}>SignUp</div>
                    </nav>
                    <div className="userform">
                        {(this.state.register && <SignUp />) || <SignIn />}
                    </div>
                    
                    
                </section>
            </Fragment>
        )
    }
    
}

export default UserAuthComponent;