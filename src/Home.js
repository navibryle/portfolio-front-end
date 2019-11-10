import React from 'react';
import './App.css';
import logo from "./bmw.jpg";
class Home extends React.Component {
    render() { 
        return ( 
        <div className ="page">
            <img src={logo} alt="Display picture" className = "picture"/>
            <body className = "hometext">
                <p className = "hometext">
                    <div id = "name">Ivan Penales</div>
                    <div id = "title">Software Doveloper</div><br></br><br></br>
                    Contact info:<br></br>
                    <a href = "http://www.gmail.com" target="_blank">naviivan321@gmail.com</a><br></br>
                    <a onhover = {console.log("REEEEEEE")} href = "https://www.hackerrank.com" target="_blank">Hacerank</a> username: Ivan Penales<br></br>
                    (403) 913-5645   
                </p>
            </body>
        </div> );
    };
};
export default Home;