import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom'
import hacker_rank from './Hackerrank_logo.jpg'
import github from './github_logo.png'
import gmail from './gmail_logo.svg'

class Home extends React.Component {
    render() { 
        return ( 
        <div id = 'home' className = "text-align">
            
            <div id = "center-home">
                <p className = "hometext">
                    <div id = "name">Ivan Penales</div>
                    <div id = "title">Software Doveloper</div><br></br><br></br>
                </p> 
            </div>
            <div id = "center-home">
            
                <p id = 'prj-txt'>click <Link  to = "/Projects">here</Link> to view Projects</p>
            
            </div>
            
            <div id = "contact-bar">
                    <a href = "https://www.hackerrank.com" target="_blank"><img id = "hackerrank" src = {hacker_rank} alt = "Hackerrank" /></a>
                    <a href = "https://www.github.com" target = "_blank"><img id  = 'github' src = {github} alt = "Github" /></a>
                    <a href = "http://www.gmail.com" target="_blank"><img id = 'gmail' src = {gmail} alt = "Gmail"/></a>
            </div>
        </div> );
    };
};
export default Home;