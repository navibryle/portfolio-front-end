import React from 'react';
import './App.css';
class Languages extends React.Component {
    state = {  }
    render() { 
        return (
        <div className ="page" id="Languages">
            <h1 className = "page-title">Languages and Databases</h1>
            <div id = "languages">
                <h1>Langues and Frameworks</h1>
                <ul>
                    <li>Python</li>
                    <li>Javascript</li>
                    <li>html</li>
                    <li>css</li>
                    <li>React</li>
                </ul>
            </div>
            <div id = "databases">
                <h1 >Databases</h1>
                <ul>
                    <li>SQL</li>
                    <li>BerkleyDB</li>
                    <li>NoSQL</li>
                </ul>
            </div>
        </div>  
        );
    }
}
 
export default Languages;