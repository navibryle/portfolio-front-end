import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FunctionComponent } from 'react';

type ProjectProps = {
    imgSrc :string,
    gitLink : string,
}

const Project :FunctionComponent<ProjectProps> = (props) =>{
    return (
        <div className="a-project-parent">
            <img src={props.imgSrc} className="img_size" alt="screenshot of website"/>
            <div className="on-hover-vis margin-center project-link-wrapper">
                {props.children}
                <a href = {props.gitLink} className="stop-propagation" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} className="text-color logo-size hover-button"/>
                </a>
                <FontAwesomeIcon icon={faInfoCircle} className="logo-size hover-button text-color"/>
            </div>
        </div>
    )
}

export default Project;