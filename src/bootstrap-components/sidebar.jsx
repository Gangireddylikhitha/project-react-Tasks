import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

const SideBar=()=>{
    return(

        <Nav defaultActiveKey="/home" className="flex-column" >

        <Link to="/home" className='mb-3'>HOME</Link>

        <Link to="/about" className='mb-3'>ABOUT</Link>
        <Link to="/contact" className='mb-3'>CONTACT</Link>
        
      </Nav>
    );
  }

  export default SideBar