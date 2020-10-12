import React from 'react'
import * as axios from 'axios';
import {Link, Switch, Redirect} from 'react-router-dom'

export default class SignUp extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            authentificated: false,
            error: null,
            username: null,
            email: "",
            password: "",
            Confirmpassword: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({ error: '' });
        
        if(!this.state.password.localeCompare(this.state.Confirmpassword)){
            const user = {
                username: this.state.username,
                local: {
                    email: this.state.email,
                    password: this.state.password
                }
            }
            
            axios.post('http://localhost:5000/users/signup', user)
                 .then(response => console.log(response.data));

            window.location = '/tweets';
        }else{
            this.setState({ error: 'mot de passe différent' });
        }
    }

    render(){
        return(
                <div className="container-fluid h-100">
                    <div className="row justify-content-center align-items-center h-100">
                        <div className="col col-md-5 col-md-5  mt-5">   
                            <form onSubmit={this.handleSubmit}>
                            <h1>
                                Sign Up to Account
                            </h1>
                            <div className = "form-group">
                                <input 
                                placeholder="User name" 
                                className="form-control" 
                                name="username" 
                                type="text" 
                                onChange={this.handleInputChange} 
                                />
                            </div>
                            <div className = "form-group">
                                <input 
                                placeholder="Email" 
                                className="form-control" 
                                name="email" 
                                type="email" 
                                onChange={this.handleInputChange} 
                                />
                            </div>
                            <div className = "form-group">
                                <input 
                                    placeholder="Password"  
                                    name="password"
                                    type="password" 
                                    onChange={this.handleInputChange} 
                                    className="form-control" 
                                />
                            </div>
                            <div className = "form-group">
                                <input 
                                    placeholder="Confirm Password" 
                                    className="form-control" 
                                    name="Confirmpassword" 
                                    onChange={this.handleInputChange}  
                                    type="password"
                                />
                            </div>
                            <div>
                                {this.state.error ? <p className="red">{this.state.error}</p> : null}
                                <button type ="submit" className ="btn btn-primary"> Sign up </button>
                            </div>
                            {this.state.authentificated ?  
                                (<Switch> <Redirect to = '/tweets'/> </Switch>) : null
                            }
                            <hr></hr>
                            <p>Already have an account? <Link to="/users/signin/form">Login</Link></p>
                            </form>
                        </div>
                    </div>
                </div>
        );
    }
}