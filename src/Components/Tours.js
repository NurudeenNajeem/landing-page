import React from 'react';
import { tours } from '../data';


const Tours = () => {
  return (
    <>
    <section className="section" id="tours">
      <div className="section-title">
        <h2>featured <span>tours</span></h2>
      </div>
          <div  className="section-center featured-center">
          {tours.map((tour)=>{
          const { id, img, date, title, text, location, time,cost } = tour
          return(
          <article key={id} className="tour-card">
          <div className="tour-img-container">

            <img src={img} className="tour-img" alt="" />
            <p className="tour-date">{date}</p>
          </div>
          <div className="tour-info">
            <div className="tour-title">
              <h4>{title}</h4>
            </div>
            <p>
              {text}
            </p>
            <div className="tour-footer">
              <p>
                <span><i className="fas fa-map"></i></span> {location}
              </p>
              <p>{time} days</p>
              <p>from ${cost}</p>
            </div>
          </div>
        </article>


      );
      })};

      
      </div>
    </section>
      
    </>
  )
}

export default Tours
