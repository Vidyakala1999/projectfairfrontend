import React from 'react'
import {button, Container, Navbar} from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header({insideDashboard}) {
  return (
    <div>
      <Navbar className="bg-info position-fixed top-0 w-100">
    <Container>
      <Navbar.Brand >
        <Link to={'/'} style={{textDecoration:'none',color:'white',fontSize:'30px'}}><i class="fa-solid fa-list-check fa-xs me-2 "></i>
        project-fair
        </Link>
      </Navbar.Brand>
{
  insideDashboard && 
  <button className='btn align-items-right border'>Logout</button>
}
    </Container>
  </Navbar>
  </div>
  )
}

export default Header