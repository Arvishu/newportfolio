import React from 'react';

import './ZigzagRight.css';


export default function ZigzagRight(props) {

    const {  titleG, titleD, paragrapheG, paragrapheD, imageG, imageD } = props

    return (
        <div className="zigzagRight">
            <div className="twoblock">
                <img className="imageZcardG" src={imageG} alt="thanks to PICSUM live long and prosper" />
                <div className="recentered">
                    <h1>{titleG}</h1>
                    <p>{paragrapheG}</p>
                </div>
      
            </div>
            <div className="oneblock">
                <img className="imageZcardD" src={imageD} alt="thanks to PICSUM live long and prosper" />
                <div >
                   <div className="recentered">
                        <h1>{titleD}</h1>
                        <p>{paragrapheD}</p>
                   </div>
                </div>
            </div>
        </div>
    )
}