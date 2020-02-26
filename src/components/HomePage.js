import React, { Component } from 'react';
import Axios from 'axios';
import ProjectInfo from './ProjectInfo';
import CategorySection from './CategorySection';

class HomePage extends Component{
    constructor(props){
        super(props);
        this.state = {
            categories: null,
            projects: null
        }
    }

    componentDidMount(){
       this.getProjects();
    }

    getProjects = async () => {
        let resp = await Axios.get(`https://apps.aecom-digital.com/excellence/projects`);
        if(resp){
            let projects = resp.data;

            this.setState({
                projects
            })

            this.getCategories(projects);
        }
    } 

    showDetail = (project) => {
        this.setState({
            project,
            showModal:true
        })
    }

    hideDetail = () => {
        this.setState({
            showModal: false,
            project: null
        })
    }

    getCategories = (projects) => {
        let categories = [];
        for(var p=0; p<projects.length; p++){
            for(var c=0; c<projects[p].categories.length; c++){
                if(!this.checkIfExisting(categories, projects[p].categories[c])){
                    categories = [...categories, projects[p].categories[c]];
                }
            }
        }

        this.setState({
            categories
        })
    }


    checkIfExisting = (categories, category) => {
        if(categories){
            return categories.find(c => c.Category_title === category.Category_title)? true: false;
        }else{
            return false;
        }
    }

    render(){
        const { projects, categories}  = this.state;
        if(projects && categories){
            return( 
                <div>
                    {categories.map((c,index) => {
                        return (
                            <CategorySection 
                                category={c} 
                                projects={projects} 
                                showDetail={this.showDetail}/>
                        )
                    })}

                    <ProjectInfo 
                        showModal={this.state.showModal} 
                        project={this.state.project} 
                        hideDetail={this.hideDetail}/>
                </div>
            );
        }
        
        return (
            <div className="container">
            <p>
                Please wait...
            </p></div>
        )
    }
}


export default HomePage;