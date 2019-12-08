import React from 'react';
import './App.css';
//pages
import Cv from './Cv';
import Projects from './Projects';
import Home from './Home';
import ErrorPage from './404';
//pages end
import {BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom" 
//each components will be their own panel
class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path = '/' component = {Home}/>
          <Route exact path = '/Projects' component = {Projects}/>
          <Route exact path = '/Cv' component = {Cv}/>
          <Route exact path = '/404' component = {ErrorPage}/>
          <Redirect to = '/404' />
        </Switch>
      </Router>
    );
  };
};
export default App;