import React from 'react';
import ProjectList from './ProjectList';


function CategorySection (props){
    const projects = props.projects
    return(
        <div className="container category-section">
            <h2 className="category-title">{props.category.Category_title}</h2>
            <p>
                {props.category.Category_intro}
            </p>

            <ProjectList 
                categoryProjects={props.category.projects}
                projects={projects} 
                showDetail={props.showDetail}/>

            <p style={{ textAlign: 'right', textTransform: 'uppercase', fontWeight: '700'}} onClick={() => window.scrollTo(0,0)}>
                Back To Top
            </p>
        </div>
    )
}


export default CategorySection;