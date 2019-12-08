import React from 'react';
import './App.css';
import {Link} from 'react-router-dom'
class Home extends React.Component {
    render() { 
        return ( 
        <div className ="page">
            <Link id = "left-home" to = "/Projects">
                <p id = 'prj-txt'>Click here to view projects</p>
            </Link>
            <div id = "center-home">
                <p className = "hometext">
                    <div id = "name">Ivan Penales</div>
                    <div id = "title">Software Doveloper</div><br></br><br></br>
                    Contact info:<br></br>
                    <a href = "http://www.gmail.com" target="_blank">naviivan321@gmail.com</a><br></br>
                    <a onhover = {console.log("REEEEEEE")} href = "https://www.hackerrank.com" target="_blank">Hacerank</a> username: Ivan Penales<br></br>
                    (403) 913-5645   
                </p>
            </div>
                <Link id = "right-home" to = "/Cv">
                    <p id = "cv-txt">Click here to view Cv</p>
                </Link>
        </div> );
    };
};
export default Home;