import React from "react";
//import { useDispatch, useSelector } from "react-redux"
import { Switch, Link, Redirect } from "react-router-dom";
//import { login } from '../../store/actions';
//import * as axios from "axios";
import { connect } from 'react-redux';
import { login } from "../../store/actions/action.auth";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authentificated: this.props.isLoggedIn,
      error: "",
      email: "",
      password: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password,
    };

    //this.props affiche toutes les valeurs retournées pris en paramètre dans connect.
    //dans notre cas nous avons {isLoggedIn, login}
    this.props.login(user).then(() => {
      this.setState({ authentificated: true });
    })
    .catch((error) => {
      this.setState({ error });
    });
    /*axios.post("http://localhost:5000/auth/signin", user).then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
        this.setState({ authentificated: true });
        //return response.data;
      } else {
        this.setState({ authentificated: false });
        this.setState({ error: "veuillez verifier vos identifiants" });
      }
    });*/
  }

  render() {
    return (
      <div className="container-fluid h-100">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col col-sm-5 col-md-5 col-lg-4 col-xl-3 mt-5">
            <form autoComplete="off" onSubmit={this.handleSubmit}>
              <h2>Login :</h2>
              <div className="form-group">
                <label>Email address:</label>
                <input
                  placeholder="Email"
                  name="email"
                  type="email"
                  onChange={this.handleInputChange}
                  value={this.state.email}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Password:</label>
                <input
                  placeholder="Password"
                  name="password"
                  onChange={this.handleInputChange}
                  value={this.state.password}
                  type="password"
                  className="form-control"
                />
              </div>
              <div>
                {this.state.error ? <p>{this.state.error}</p> : null}
                <button className="btn btn-primary" type="submit">
                  Login
                </button>
              </div>

              {this.state.authentificated ? (
                <Switch>
                  <Redirect to="/tweets" />
                </Switch>
              ) : null}
              <hr />
              <p>
                Don't have an account? <Link to="/users/signup/form">Sign up</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { isLoggedIn } = state.authentication
  return {
    isLoggedIn
  };
}
export default connect(mapStateToProps, { login })(SignIn);