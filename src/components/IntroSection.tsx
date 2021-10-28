import { faInfoCircle, faScroll } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FunctionComponent } from "react";
type Prop = {};
const IntrosSection : FunctionComponent<Prop> = (props) => {
    return (
        <span id = "intro">
            <span id = "intro-info-wrapper">
                <div id = "name" className = "main-text on-load-downwards">Ivan Penales</div>
                <div className = "onload-upwards-invis">
                    <p id = "intro-text" >Hi welcome to my portfolio! Below are a list of my projects.</p><br></br>
                </div>
                
            </span>
            <span className = "text-color " id="intro-btn-grp-wrapper">
                <div className = "on-load-downwards" >
                    <button id="resume" className="intro-btn-grp-item">
                        Resume <FontAwesomeIcon icon={faScroll}/>
                    </button>
                </div>
                <div className = "on-load-downwards" >
                    <button id = "about-me" className="intro-btn-grp-item">
                        About me <FontAwesomeIcon icon={faInfoCircle}/>
                    </button>
                </div>
                <div  className = "text-align" id = "contact-button-wrapper">
                    <div id = "notif-spawn" className="text-align"></div>
                    <div className = "on-load-upwards" ><button id = "contact-button" type = "submit" className="intro-btn-grp-item" 
                    >Get in touch  <FontAwesomeIcon icon={faInfoCircle}/></button></div>
                </div>
                
            </span>
        </span>
    )
}
export default IntrosSection;