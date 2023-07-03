import React from 'react'
import { serviceInfo } from '../data'
const Service = () => {
  return (
    <section className="section services" id="services">
      <div className="section-title">
        <h2>our <span>services</span></h2>
      </div>
      <div className="section-center services-center">
          {serviceInfo.map((serviceIn)=>{
               const {id,icon, serviceH, serviceP} = serviceIn;
               return (
                    <article key={id} className="service">
                         <span className="service-icon"><i className={icon}></i></span>
                    <div className="service-info">
                         <h4 className="service-title">{serviceH}</h4>
                         <p className="service-text">{serviceP}</p>
                    </div>
                    </article>


               );
          })}
       
      </div>
    </section>

    
      
  );
}

export default Service
