import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';

import {SignUp, SignIn, TweetForm, TweetList} from "./features";
import Header from './components/Header';
import { useSelector } from 'react-redux';

const Home = () => <h2>Home1</h2>;
const Favoris = () => <h1>Favoris</h1>;

const App = () => {
  const { isLoggedIn: isAuthentificated } = useSelector(state => state.authentication);
  /*componentDidMount() {
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
  }*/
    return (
      <div className="App d-flex flex-column">
        <Header />
        
        <Switch>
          <Route 
            path = '/tweets/new/:id?'
            component =  {TweetForm}
          /> {/*</Switch> { isAuthentificated ? <TweetForm/> : <Redirect to = '/users/signin/form'/> }
    </Route> cette ligne fonctionne, juste revoir le code de TweetForm à la ligne 16*/}
          <Route exact path ='/users/signup/form'> <SignUp /> </Route>
          <Route exact path ='/users/signin/form'> <SignIn /> </Route>
          <Route path = '/favoris'> <Favoris /> </Route>
          <Route exact path = "/tweets" > <TweetList /> </Route>
          <Route exact path = "/" > <Home /> </Route>    
        </Switch>
      </div>
    );
}
export default App;