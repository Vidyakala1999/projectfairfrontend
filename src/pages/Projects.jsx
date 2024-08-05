// import React from 'react'
// import Header from '../components/Header'
// import ProjectCard from '../components/ProjectCard'
// import { Col, Row } from 'react-bootstrap'

// function Projects(){
//   const [searchKey,setSearchKey]=useState("")
//   const [allProjects,setAllProjects]=useState([])
//   const token=sessionStorage.getItem("token")
//   const reqHeader={
//     "Content-Type":"multipart/form-data",
//   "Authorization":`Bearer ${token}`}

//   const result=await allProjectAPI(searchkey,reqHeader)
//   if (result.status===200) {
//   setAllProjects(result.data)
//   } else {
//   console.log(result);
//   }}


//   console.log(allProjects);
//   useEffect(()=>{
//   getAllProjects()
//   },[searchkey])

//   return (
//     <>
//       <Header/>
// <div  style={{marginTop:'100px'}} className='projects'>
//   <h1 className='text-center mb-5'>All Projects</h1>
//   <div className='d-flex justify-content-center w-100'>
//     <div className='d-flex border w-50 rounded mb-3'>
//       <input type="text" className='form-control' placeholder='search project by technologies' 
//       //  value ={searchKey} onChange={e=>setSearchKey(e.target.value)}
//        /> 
//       <i style={{marginLeft:'-50px', marginTop:'20px'}} class="fa-solid fa-magnifying-glass"></i>

//     </div>

//   </div>


//       </div>
//       <div>
//         <Row>
//           <Col>
//           <ProjectCard/>
//           </Col>
//         </Row>
//       </div>
//       </>
//   )
//   }


// export default Projects

import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { allProjectAPI } from '../services/allAPI'
import ProjectCard from '../components/ProjectCard'
import { Row, Col } from "react-bootstrap";
function Projects() {
  const [searchkey, setSearchKey] = useState("")
  const [allProjects, setAllProjects] = useState([])
  const getAllProjects = async () => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token")
      const reqHeader = {
        "Content-Type": "multipart/form-data",
        "Authorization": `Bearer ${token}`
      }

      const result = await allProjectAPI(searchkey, reqHeader)
      if (result.status === 200) {
        setAllProjects(result.data)
      } else {
        console.log(result);
      }
    }
  }
  console.log(allProjects);
  useEffect(() => {
    getAllProjects()
  }, [searchkey])


  return (
    <>

      <Header />
      <div style={{ marginTop: '100px' }} className='projects'>
        <h1 className='text-center mb-5'>All projects</h1>
        <div className="d-flex justify-content-center align-items w-100">
          <div className="d-flex border w-50 rounded mb-3">

            <input type='text' className='form-control' placeholder='search project by technologies' onChange={e => setSearchKey(e.target.value)} />
            <i style={{ marginLeft: '-50px' }} class="fa-solid  fa-magnifying-glass fa-rotate-90"></i>
          </div>

        </div>
      </div>
      <div>
        <Row>

          {allProjects?.length > 0 ? allProjects?.map(project => (
            <Col className='d-flex justify-content-center' sm={12} md={6} lg={4}>
              <ProjectCard project={project} />
            </Col>
          )) : <p className='text-danger fs-4 fw-bolder text-center'>Please login</p>
          }
        </Row>
      </div>
    </>
  )
}

export default Projects
