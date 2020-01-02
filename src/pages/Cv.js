import React from 'react';
import '../App.css';
class Cv extends React.Component{
    render(){
        return(
        <div id = 'cv'>
            <div id = 'work'>
                <Work/>
            </div>
            <div id = "education">
                <Education/>
            </div>
            <div id = "stack">
                <Languages/>
            </div>
        </div>
        );
    };
}
class Work extends React.Component {
    render() { 
        return(
        <div >
            <h1 className="page-title" >Work Experience</h1>
            <div id = "fast-food">
                {<Job company = {<code className = "company">A&W</code>} length = {"2013-2015,2017-2018"} position = {"Cook"}/>}<br></br>
                {<Job company = {<code className = "company">Wendys</code>} length = {"2016-2017"} position = {"Cook"}/>}<br></br>
            </div>
            <div id = "physical-labour">
                {<Job company = {<a className = "company" href = "http://westcoastholsteins.com" target="_blank">Westcoast Holsteins</a>} 
                length = {"2016-2017"} position = {"Milker"}/>}<br></br>
                {<Job company = {<a className = "company" href = "http://almita.com" target="_blank">Almita</a>}
                length = {"2017-2018"} position = {"Labourer"}/>}<br></br>
                {<Job company = {<a className = "company" href = "https://www.leespecialties.com/" target="_blank">Lee Specialties</a>} 
                length = {"2018"} position = {"Sand Blaster"}/>}<br></br>
            </div>
        </div>
        );
    }
}
class Job extends React.Component{
    constructor (props) {
        super(props)
    }
    render() {
        return(
            <div>
                <body>
                    {this.props.company}<br></br>
                    {this.props.length}<br></br>
                    position: {this.props.position}
                </body>
            </div>
        )
    }
};
class Education extends React.Component{
    state = {}
    render(){
        return (
        <div className ="page" >
            
            <h1 className = "page-title">Education</h1>
            <div id="transcript">
                <a href = "[insert manewan transcript here]">Macewan transcript</a><br></br>
                <a href = "[insert uofa transcript here]">University of Alberta transcript</a>
            </div>
            <div id = "university">
                <body>
                    Currently attending University of Alberta as a 3rd year student.<br></br>
                    I am in the Bachelor of Science program with a specilization in Computer Science.<br></br>
                    First two years of the program was done in Macewan University<br></br>
                    I am also an acitve user in Hacker rank
                </body>
            </div>
            
        </div>
        )
    }
};

class Languages extends React.Component {
    state = {  }
    render() { 
        return (
        <div className ="page">
            <h1 className = "page-title">Technology stack</h1>
            <div id = "tech">
                <div class = "tech_heading" id = "languages">
                    <h4>Languages</h4>
                    <ul>
                        <li>Python</li>
                        <li>Javascript</li>
                        <li>html</li>
                        <li>css</li>
                    </ul>
                </div>
                <div class = "tech_heading" id = "databases">
                    <h4>databases</h4>
                    <ul>
                        <li>SQL</li>
                        <li>BerkleyDB</li>
                    </ul>
                </div>
                <div class = "tech_heading" id = 'frameworks'>
                    <h4>Frameworks</h4>
                    <ul>
                        <li>React</li>
                    </ul>
                </div>
            </div>
        </div>  
        );
    }
};
export default Cv
