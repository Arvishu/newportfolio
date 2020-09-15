import React, { useState } from 'react';
import Slider from './../Slider/Slider.js'
import defaultSlides from './../../Data/dataSlides.js';
import './Home.css';


export default function Home() {
  

    return (

       <div className="homeContainer">
         
             <Slider slides={defaultSlides}/>
            
       </div>
    )
}