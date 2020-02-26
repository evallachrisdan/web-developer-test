import React from 'react';


function ProjectInfo (props){
    return(
        <div className={`modal ${props.showModal? "show": ""}`}>
            <div className="modal-header">
                <button className="close-button" onClick={props.hideDetail}> 
                    &times;
                </button>
            </div>
            <div className="modal-content">
                <h5 className="project-title">{props.project? props.project.title: ""}</h5>
                <p>{props.project? props.project.project_text: ""}</p>
                <img 
                src={props.project? `https://apps.aecom-digital.com/excellence${props.project.image.url}`: ""} 
                alt={props.project? props.project.image.name: ""} />
            </div>
        </div>
    );
}

export default ProjectInfo;