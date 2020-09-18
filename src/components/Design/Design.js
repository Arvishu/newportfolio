import React from 'react';

import Gallery from './../Gallery/Gallery.js';

import jaguarData from '../../Data/jaguarData.js';
import toucanData from '../../Data/toucanData.js';
import glaceData from '../../Data/glaceData.js';
import animData from '../../Data/animData.js';
import './Design.css';

export default function Design() {



    return (

        <div className="designContainer" >

            <div className="designStyle">

                <Gallery dataGallery={jaguarData} />
                <Gallery dataGallery={toucanData} />
                <Gallery dataGallery={glaceData} />
                <Gallery dataGallery={animData} />



            </div>


        </div >
    )
}