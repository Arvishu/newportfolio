import React from 'react';

import './ZigzagLeft.css';


export default function ZigzagLeft (props){

    const {titleG,titleD,paragrapheG,paragrapheD,imageG,imageD}= props


    return(
        <div className="zigzagLeft">
               
               <div className="oneblock">
                <img className="imageZcardD" src={imageG} alt="thanks to PICSUM live long and prosper" />
                <div >
                   <div className="recentered">
                        <h1>{titleG}</h1>
                        <p>{paragrapheG}</p>
                   </div>
                </div>
            </div>

               <div className="twoblock">
                <img className="imageZcardG" src={imageD} alt="thanks to PICSUM live long and prosper" />
                <div className="recentered">
                    <h1>{titleD}</h1>
                    <p>{paragrapheD}</p>
                </div>
      
            </div>
           
        </div>
    )
}