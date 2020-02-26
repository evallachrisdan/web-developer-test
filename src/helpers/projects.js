import Axios from 'axios';

export async function getProjects () {
    let resp = await Axios.get(`https://apps.aecom-digital.com/excellence/projects`);
    if(resp){
        return resp.data;
    }else{
        return null;
    }
} 