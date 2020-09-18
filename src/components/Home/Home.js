import React from 'react';
import Slider from './../Slider/Slider.js'
import dataSlides from './../../Data/dataSlides.js';
import './Home.css';


export default function Home() {
  

    return (

       <div className="homeContainer">
         
             <Slider slides={dataSlides}/>
            
       </div>
    )
}