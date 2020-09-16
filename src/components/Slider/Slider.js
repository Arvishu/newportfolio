import React, { useState, useEffect } from 'react';
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
  console.log(current)
  return (
    <section className="slider">



      {slides.map((slide, i) => (
        <div className={i === current ? "slide active" : "slide"}
          key={slide.title}
          aria-hidden={i !== current}>

          <button className="prev" onClick={goToPrev}>&#10094;</button>
          <button className="next" onClick={goToNext}>&#10095;</button>

          <div > {i === current && (
            <img className="image" src={slide.image} alt={`${slide.title}`} />
          )}
            <div className="centered">
              <h1>{slide.title}</h1>
              <h2>{slide.subtitle}</h2>
            </div>

          </div>

        </div>


      ))}
    </section>
  );
}