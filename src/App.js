import React from 'react';
import './App.css';
<<<<<<< HEAD
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
=======
//import Math from Math;
import Home from './Home.js'
import Work from './Work.js'
import Education from './Education.js'
import Languages from './Languages.js'
import Projects from './Projects.js'
import modulo from './modulo.js';

//each components will be their own panel
class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      page:0,
      img: './bmw.jpg'
    }
    this.to_render = this.to_render.bind(this)
    this.next_page = this.next_page.bind(this)
    this.prev_page = this.prev_page.bind(this)
  }
  next_page(){
    this.setState((state,props) => {
      return {
        page:modulo(state.page+1,5)
      };
    });//there are 6 pages so mod 6 will allow us to iterate over these pages
  }
  prev_page(){
    this.setState((state,props) => {
      return {
        page:modulo((state.page-1),5)
      };
    });//there are 6 pages so mod 6 will allow us to iterate over these pages
  }
  to_render(){
    switch (Math.abs(this.state.page)) {
      case 0:
        return <Home img = {this.state.img} onhover = {this.onhover} />
      case 1 :
        return <Work/>
      case 2:
        return <Education  />
      case 3:
        return <Languages  />
      case 4:
        return <Projects />
    };
  };
  onhover(link){
    //display information about the link
    return <p>{link}</p>
  };
  render() {
    return (
      <div className="App">
        <button className = "next" onClick = {this.next_page}>
          <code>Next</code>
        </button>
        {this.to_render()}
        <button className = "previous" onClick= {this.prev_page}>
          <code>Previous</code>
        </button>
      </div>
    )};
}

export default App;
>>>>>>> 56e991a1238744c83a4d14be68d44f6669486a03
