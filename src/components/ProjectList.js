import React from 'react';


function ProjectList ({categoryProjects, projects, showDetail}){
    return(
        <div>
            <div className="row">
            {projects && projects.map((p,index) => {
                let findProject =categoryProjects? categoryProjects.find(c => c === p.id): null;

                if(findProject){
                return(
                    <div key={index} className='project' 
                    style={{ backgroundImage: `url("https://apps.aecom-digital.com/excellence${p.image.url}")`}}
                    onClick={() => showDetail(p)}>
                        <div className='overlay'>
                            <h3 className="title">{p.title}</h3>
                        </div>
                    </div>
                )}else{
                    return null;
                }
            })}
            </div>
        </div>
    )
}


export default ProjectList;