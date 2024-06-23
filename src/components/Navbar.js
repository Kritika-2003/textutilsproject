import React from 'react'
// import PropTypes  from 'prop-types'
//import {Link} from 'react-router-dom';

export default function navbar(props) {
  return (
    
    //bg-body-tertiary
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    {/* <Link className="navbar-brand"  to="/">{props.title}</Link> */}
    <a className="nav-link active" aria-current="page"  href="#" mx-16>textutils</a> 
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">

       
       
          {/* <Link className="nav-link active" aria-current="page"  to="/" mx-16>Home</Link> */}
          { <a className="nav-link active" aria-current="page"  href="#" mx-16>Home</a> }
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link" to="/about" mx-8>About</Link>
        </li> */}
        
        </ul>
      

    
      
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" type="checkbox" onClick={()=>{props.toggleMode(null)}}  id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault " style={{}}> Disable lightmode</label>
 
  </div>

    </div>
  </div>
</nav>
 
    
  )
}

// Navbar.propTypes = {
// title:PropTypes.string.isRequired,
// aboutText:PropTypes.string.isRequired
// }


// Navbar.defaultProps = {
//   title:'Set Title Here',
//   aboutText:'About '
// };