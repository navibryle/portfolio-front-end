import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FunctionComponent } from "react";

const BouncingArrow :FunctionComponent = (props) =>{
    return (
        <span id = "bouncing-arrow" className = "text-align fade-in-1s" >
                <div className="arrow bounce">
                    <FontAwesomeIcon icon={faArrowDown} className="fa-2x"/>
                </div>
            </span>
    )
}

export default BouncingArrow;