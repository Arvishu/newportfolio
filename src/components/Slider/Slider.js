import React, { useState, useEffect } from 'react';

import Slide from './../Slide/Slide.js'

import './Slider.css'


export default function Slider({ slides }) {
  // Create a current state indicating what's the current slide's index
  const [current, setCurrent] = useState(0);
  
  const { length } = slides;
  

  function goToNext  ()  {
  setCurrent(current === length - 1 ? 0 : current + 1);
  }
  

  function goToPrev  () {
    setCurrent(current === 0 ? length -1 : current - 1);
  }
  

  useEffect(() => {
    const timeout = setTimeout(() => {
      goToNext();
    }, 5000);

    return () => clearTimeout(timeout);
  });
  useEffect(() => {
    const timeout = setTimeout(() => {
      goToPrev();
    }, 5000);

    return () => clearTimeout(timeout);
  });





  if (!Array.isArray(slides) || length <= 0) {
    return null;
  }
  
  return (
    <section className="slider">



      {slides.map((slide, i) => (
        <div className={i === current ? "slide active" : "slide"}
          key={slide.id}
          aria-hidden={i !== current}>

          <button className="prev" onClick={goToPrev}>&#10094;</button>
          <button className="next" onClick={goToNext}>&#10095;</button>

         <Slide
         id={current}
         name={slide.name}
         image={slide.image}
         title={slide.title}
         subtitle={slide.subtitle}
         />

          </div>

        


      ))}
    </section>
  );
}