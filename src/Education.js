import React from 'react';
import './App.css';
class Education extends React.Component{
    state = {}
    render(){
        return (
        <div className ="page" >
            <h1 className = "page-title">Education</h1>
            <div id = "university">
                <h1 class = "edu-sub-title">Background</h1>
                <body>
                    Currently attending University of Alberta as a 3rd year student.<br></br>
                    I am in the Bachelor of Science program with a specilization in Computer Science.<br></br>
                    First two years of the program was done in Macewan University<br></br>
                    I am also an acitve user in Hacker rank
                </body>
            </div>
            <div id="transcript">
                <a href = "[insert manewan transcript here]">Macewan transcript</a><br></br>
                <a href = "[insert uofa transcript here]">University of Alberta transcript</a>
            </div>
        </div>
        )
    }
}

export default Education;