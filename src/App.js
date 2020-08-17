import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Header from './components/Header';

const Home = () => <h2>Home1</h2>;
const Favoris = () => <h1>Favoris</h1>;

class App extends Component {
  state = {
    data: null
  };

  componentDidMount() {
      // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  render() {  
    return (
      <div className="App d-flex flex-column">
        <Header />
        
        <Switch>
          <Route path = '/favoris'> <Favoris /> </Route>
          <Route path = "/" > <Home /> </Route>          
        </Switch>
      </div>
    );
  }
}

export default App;

/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */