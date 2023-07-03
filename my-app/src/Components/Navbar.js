import React from 'react' ;
import logo from '../images/logo.svg';
import { pageLinks, sociaLinks } from '../data';

// const logo = '../images/logo.svg';
const Navbar = () => {
  return (
  
  <>
     <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}
        <ul className="nav-links" id="nav-links">
          {/* const {id, href, text} = link; */}
          {pageLinks.map((link)=>{
               const {id, href, text} = link;
               return (
                    <li className='border' key={id}><a href={href} className="nav-link">{text}</a></li>

               );

          })}
          
        </ul>

        <ul className="nav-icons">
          {sociaLinks.map((social)=>{
               const {id, href, icon} = social;
               return (
                    <li key={id}>
            <a href={href} target="_blank"  rel="noreferrer" className="nav-icon"
              ><i className={icon}></i
            ></a>
          </li>
              

               );
          })}
       
        </ul>
      </div>
    </nav>  
  </>
   
  );
}

export default Navbar
