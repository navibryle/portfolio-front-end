import React from 'react';
import '../App.css';
import {BroswserRouter as Router,
    Link,
    Route,
    Redirect} from 'react-router-dom';
class Projects extends React.Component {
    render() { 
        return ( 
        <div id = "projects">
            <div id = "school-projects">
                <div className = "project-box">
                    <img src = "" alt = "SQL project image"/>
                </div>
            </div>
            <div id = "personal-projects">
                Enter personal projects here
            </div>
        </div> );
    }
}
 
export default Projects;