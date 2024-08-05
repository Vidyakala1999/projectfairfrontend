import React, { useContext, useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { addProjectAPI } from '../services/allAPI';
import { addProjectResponseContext } from './context/ContextShare';


function Addprojects() {
  const [token,setToken]=useState("")
  const{addProjectResponse,setAddProjectResponse}= useContext(addProjectResponseContext)

  const [projectDetailas,setProjectDetails]=useState({
    title:"",languages:"",github:"",website:"",overview:"",projectimage:""
  })
  const [preview,setPreview]=useState("")
  useEffect(()=>{
    if(projectDetailas.projectimage){
      setPreview(URL.createObjectURL(projectDetailas.projectimage))
    }
  },[projectDetailas.projectimage])


    const [show, setShow] = useState(false);

    const handleClose = () => {setShow(false)
      setProjectDetails({
        title:"",languages:"",github:"",website:"",overview:"",projectimage:""
      })
      setPreview("")
    };
    const handleShow = () => setShow(true);


    useEffect(()=>{
      if(sessionStorage.getItem("token")){
        setToken(sessionStorage.getItem("token"))
      }else{
        setToken("")
      }
    })

    const handleAdd =async(e)=>{
      e.preventDefault()
      const { title,languages,github,website,overview,projectimage}=projectDetailas
      if(!title || !languages || !github || !website || !overview || !projectimage){
        alert("fill the missing field")
      }else{
        const reqBody = new FormData()
        reqBody.append("title",title)
        reqBody.append("languages",languages)
        reqBody.append("github",github)
        reqBody.append("website",website)
        reqBody.append("overview",overview)
        reqBody.append("projectimage",projectimage)
        
        if(token){
         const reqHeader={
             "Content-Type": "multipart/form-data",
             "Authorization":`Bearer ${token}`
           }
           const result =await addProjectAPI(reqBody,reqHeader)
        if(result.status ===200){
          console.log(result.data);
          handleClose()
          // alert("projects added")
          setAddProjectResponse(result.data)
        }else{
          console.log(result);
          console.log(result.response.data);
        }
      }
         }
        

    }

  return (
    <div>
        <Button variant="primary" onClick={handleShow}>
        Add Projects
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size='lg'
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <div className="row">
            <div className="col-lg-6">
            <label>
                    <input type="file" style={{display:'none'}} onChange={e=>setProjectDetails({...
                    projectDetailas,projectimage:e.target.files[0]})}/>
                    <img 
                    width={'300px'}
                     src={preview?preview:"https://static.thenounproject.com/png/212328-200.png"}
                     alt="" />
                </label> 
            </div>
            <div className="col-lg-6">
            <div className='mb-3'>
                    <input type="text" className='form-control text-dark' placeholder='Project Title'
                    value={projectDetailas.title}
                    onChange={e=>setProjectDetails({...projectDetailas,title:e.target.value})} />
            </div>
            <div className='mb-3'>
                    <input type="text" className='form-control text-dark'text-dark placeholder='Language Used'
                    value={projectDetailas.languages}
                    onChange={e=>setProjectDetails({...projectDetailas,languages:e.target.value})} />
            </div>
            <div className='mb-3'>
                    <input type="text" className='form-control text-dark' placeholder='GitHub'
                    value={projectDetailas.github}
                    onChange={e=>setProjectDetails({...projectDetailas,github:e.target.value})} />
            </div>
            <div className='mb-3'>
                    <input type="text" className='form-control text-dark'text-dark placeholder='Website Link'
                    value={projectDetailas.website}
                    onChange={e=>setProjectDetails({...projectDetailas,website:e.target.value})} />
            </div>
            <div className='mb-3'>
                    <input type="text" className='form-control text-dark'text-dark placeholder='Project Overview'
                    value={projectDetailas.overview}
                    onChange={e=>setProjectDetails({...projectDetailas,overview:e.target.value})} />
            </div>
            </div>
           </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleAdd} variant="primary">Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Addprojects
