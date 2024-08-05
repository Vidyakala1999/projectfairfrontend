import { BASE_URL } from "./baseurl";
import { commonAPI } from "./commonAPI";

// register

export const registerAPI = async(user)=>{
    return await commonAPI("POST",`${BASE_URL}/user/register`,user,"")
}

// login

export const loginAPI = async(user)=>{
    return await commonAPI("POST",`${BASE_URL}/user/login`,user,"")
}

// addprojects
export const addProjectAPI = async (reqBody,reqHeader)=>{
    return await commonAPI("POST",`${BASE_URL}/projects/add`,reqBody,reqHeader)
}

//gethomeprojects

export const homeProjectAPI = async ()=>{
    return await commonAPI("GET",`${BASE_URL}/projects/homeProjects`,"","")
}

// userproject

export const userProjectAPI = async (reqHeader)=>{
    return await commonAPI("GET",`${BASE_URL}/user/allprojects`,"",reqHeader)
}


// edit project
export const editProjectAPI = async (projectId,reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${BASE_URL}/projects/edit/${projectId}`,reqBody,reqHeader)
}


//get AllProject

export const allProjectAPI =async(searchKey,reqHeader)=>{
    return await commonAPI("GET",`${BASE_URL}/projects/all?search=${searchKey}`,"",reqHeader)
}

// delete project

export const deleteProjectAPI = async(projectId,reqHeader)=>{
    return await commonAPI("DElETE",`${BASE_URL}/projects/remove/${projectId}`,{},reqHeader);
 }