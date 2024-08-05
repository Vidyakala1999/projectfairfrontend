import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import image from '../assets/image.gif'
import ProjectCard from '../components/ProjectCard'
import { Link } from 'react-router-dom'
import { homeProjectAPI } from '../services/allAPI'




function Home() {

    const [homeProjects,setHomeProjects]=useState([])
    const [loggedin,setLoggedin]=useState(false)


 const getHomeProjects = async ()=>{
    const result =await homeProjectAPI()
    if(result.status===200){
        setHomeProjects(result.data)
    }else{
        console.log(result);
        console.log(result.response);
    }
}
// console.log(homeProjects);

    useEffect(()=>{
        if (sessionStorage.getItem("token")){
            setLoggedin(true)
        }else{
            setLoggedin(false)
        }
        // api call
        getHomeProjects()

    },[])
    
  return (
    <>
    <div style={{width:'100%',height:'100vh',backgroundColor:"info"}} className='container-fluid rounded'>
        <Row className='align-items-center p-5'>
            <Col sm={12} md={6}>
                <h1 style={{fontSize:'80px'}} className='fw-border text-dark'><i class="fa-solid fa-list-check fa-xs me-2 "></i>Project Fair</h1>
                <p style={{color:'black'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, excepturi. 
                    Nihil culpa distinctio praesentium cupiditate, provident quia adipisci dicta, 
                    pariatur laborum nemo dolores quisquam ex veniam, modi necessitatibus ab repudiandae!</p>
                    
                    { loggedin?
                        <Link to={'/dashboard'} className='btn btn-dark p-2'>Manage Your Projects<i class="fa-solid fa-right-long fa-beat ms-2"></i></Link>:
                    <Link to={'/login'} className='btn btn-dark p-2'>Start to Explore<i class="fa-solid fa-right-long fa-beat ms-2"></i></Link>
                    }

            </Col>
            <Col sm={12} md={6}>
                <img style={{paddingTop:'80px'}} width={'500px'} src={image} alt="" />
            </Col>
        </Row>

    </div>

{/* projectcard */}
    <div className='all-projects mt-5'>
        <h1 className='text-center'>Explore your projects</h1>
        <marquee scrollAmount={25}>
        <Row>
           { homeProjects?.length>0?homeProjects.map(project=>(
            <Col sm={12} md={6} lg={4}>
            <ProjectCard project={project}/>
        
        </Col>
           )):null
           }
            

           
        </Row>
        </marquee>
        <div className='text-center'><Link to={'/projects'}>View more projects</Link></div>

    </div>



    </>

    
  )
}

export default Home
