import React from 'react';
type ProjectProps = {
    name :string,
    gitLink :string,
    demoLink :string,
    description :string,
    techStack :string,
    imgSrc :string,
    id :string,
    children: JSX.Element;
}
export class Project extends React.Component{
    constructor(props :ProjectProps){
        super(props);
    }

    render(){
        return (
        <div className="project">
            <div className="project-menu">
                {this.props.children}             
            </div>
        </div>)
    }
}