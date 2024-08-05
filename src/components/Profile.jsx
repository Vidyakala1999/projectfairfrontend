import React, { useState } from 'react'
import { Collapse } from 'react-bootstrap';

function Profile() {

  const [open, setOpen] = useState(false);
  return (
    <div className='card shadow p-5 mt-5 me-2'>
     <div  className="d-flex justifycontent-between ">
      <h1>Profile</h1>
      <button onClick={() => setOpen(!open)} className='btn btn-outline-info ms-5' > <i class="fa-solid fa-angle-down"></i></button>
     </div>
     <Collapse in={open}>
     <div className="row justify content center mt-3"> 
{/*upload profile pictures*/}
<label>
<input type="file" style={{display :'none'}} />
<img width={'200px'} height={'200px'} className='rounded circle' src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt=""  />
</label>
<div className="mt-3">
  <input type="text"  className='form-control' placeholder='Github'/>
  <input type="text"  className='form-control' placeholder='Linkedin'/>
</div>
<div className='mt-3 text=align-center d-grid'>
  <button className='btn btn-warning d-grid'>Update</button>
</div>
     </div>

     </Collapse>
    </div>
  )
}

export default Profile