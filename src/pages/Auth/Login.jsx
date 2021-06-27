import React from 'react'
import {Link} from 'react-router-dom'

class Login extends React.Component{

    render(){
        return(
            <div>
                <div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h1>Login Now</h1>
                            <p className="lead">
                                Login now and Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                                Ducimus, corrupti sequi sit optio odit tempore.
                            </p>
                        </div>
                    </div>
                    <div className="row mt-6">
                        <div className="col-4 offset-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="font-weight-bold mb-3">Login</h5>
                                    <input name="username" onChange={this.inputHandler} placeholder="Username" type="text" className="form-control my-2" />
                                    <input name="password" onChange={this.inputHandler} placeholder="Password" type="password" className="form-control my-2" />
                                    <div className="d-flex flex-row justify-content-between align-items-center">
                                        <button onClick={ () => this.props.LoginUser(this.state)} className="btn btn-primary mt-2">
                                            Login
                                        </button>
                                        <Link to="/register">Or Register</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default Login;