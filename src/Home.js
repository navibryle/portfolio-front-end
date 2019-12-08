import React from 'react';
import './App.css';
<<<<<<< HEAD
import {Link} from 'react-router-dom'
=======
import logo from "./bmw.jpg";
>>>>>>> 56e991a1238744c83a4d14be68d44f6669486a03
class Home extends React.Component {
    render() { 
        return ( 
        <div className ="page">
<<<<<<< HEAD
            <Link id = "left-home" to = "/Projects">
                <p id = 'prj-txt'>Click here to view projects</p>
            </Link>
            <div id = "center-home">
=======
            <img src={logo} alt="Display picture" className = "picture"/>
            <body className = "hometext">
>>>>>>> 56e991a1238744c83a4d14be68d44f6669486a03
                <p className = "hometext">
                    <div id = "name">Ivan Penales</div>
                    <div id = "title">Software Doveloper</div><br></br><br></br>
                    Contact info:<br></br>
                    <a href = "http://www.gmail.com" target="_blank">naviivan321@gmail.com</a><br></br>
                    <a onhover = {console.log("REEEEEEE")} href = "https://www.hackerrank.com" target="_blank">Hacerank</a> username: Ivan Penales<br></br>
                    (403) 913-5645   
                </p>
<<<<<<< HEAD
            </div>
                <Link id = "right-home" to = "/Cv">
                    <p id = "cv-txt">Click here to view Cv</p>
                </Link>
=======
            </body>
>>>>>>> 56e991a1238744c83a4d14be68d44f6669486a03
        </div> );
    };
};
export default Home;