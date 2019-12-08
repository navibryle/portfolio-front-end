import React from 'react';
import './App';
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
}
export default Work;