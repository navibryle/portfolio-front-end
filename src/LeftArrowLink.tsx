import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FunctionComponent } from "react";
type LeftArrowLinkProps = {
    demoLink :string,
}

const LeftArrowLink :FunctionComponent<LeftArrowLinkProps> = (props) =>{
    return(
        <a href={props.demoLink} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faArrowLeft} className="text-color logo-size hover-button stop-propagation"/>
        </a>
    )
}

export default LeftArrowLink;