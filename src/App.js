import React from 'react';
import './App.css';
//pages
import Cv from './pages/Cv';
import Projects from './pages/Projects';
import Home from './pages/Home';
import ErrorPage from './pages/404';
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
