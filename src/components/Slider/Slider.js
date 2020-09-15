import React, { useState, useEffect } from 'react';
import './Slider.css'

export default function Slider({ slides }) {
  // Create a current state indicating what's the current slide's index
  const [current, setCurrent] = useState(0);

  const { length } = slides;

  const goToNext = () => {
    setCurrent(current+ 1 );
    if (current === length -1){
      setCurrent(0)
    }
  }

  const goToPrev = () => {
    setCurrent(current- 1 );
    if (current === 0){
      setCurrent(length -1)
    }
  }


  useEffect(() => {
    const timeout = setTimeout(() => {
      goToNext();
    }, 5000);

    return () => clearTimeout(timeout);
  }, [current]);





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

          <a className="prev" onClick={goToPrev}>&#10094;</a>
          <a className="next" onClick={goToNext}>&#10095;</a>

          <div > {i === current && (
            <img className="image" src={slide.image} alt={`Image for ${slide.title}`} />
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