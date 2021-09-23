import React from 'react';
type ProjectContainerProps = {
    id :string,
    children :JSX.Element,
}
export default class ProjectContainer extends React.Component{
    constructor(props :ProjectContainerProps){
        super(props);
    }

    render(){
        return (
            <div className="project-container">
                {this.props.children}
            </div>
        )
    }
}