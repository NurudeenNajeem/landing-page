import React from 'react'
import { sociaLinks,pageLinks } from '../data'

const Footer = () => {
  return (
    <>
    <footer className="section footer">
      <ul className="footer-links">
      {pageLinks.map((link)=>{
               const {id, href, text} = link;
               return (
                    <li key={id}><a href={href} className="footer-link">{text}</a></li>

               );

          })}
          
        </ul>

      <ul className="footer-links">
      {sociaLinks.map((social)=>{
               const {id,  icon,href} = social;
               return (
                <li key={id}>
                <a href={href} target="_blank"  rel="noreferrer" className="footer-link"
                  ><i className={icon}></i
                ></a>
              </li>


               );

          })}
          
        </ul>

      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
      
    </>
  )
}

export default Footer
