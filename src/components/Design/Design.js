import React, { useState } from 'react';
import jaguar1 from './../../ressources/jaguar1.svg';
import jaguar2 from './../../ressources/jaguar2.svg';
import jaguar3 from './../../ressources/jaguar3.svg';
import jaguar4 from './../../ressources/jaguar4.svg';

import './Design.css';

export default function Design() {



    const jaguarDesigns = [
        { id: 1, import: jaguar1, title: 'jaguar1', content: 'jaguar agressif' },
        { id: 2, import: jaguar2, title: 'jaguar2', content: 'jaguar inquiet' },
        { id: 3, import: jaguar3, title: 'jaguar3', content: 'jaguar curieux' },
        { id: 4, import: jaguar4, title: 'jaguar4', content: 'jaguar pensif' }
    ]

    const listJaguarDesigns = jaguarDesigns.map((jaguarDesign) =>
        <div >
            <div  >

                <img className="imgStyle" heigh="128px" width="128px" key={jaguarDesign.id} src={jaguarDesign.import} />
                <h3>{jaguarDesign.content}</h3>
            </div>
        </div>
    );

    return (
        <div className="designContainer" >

            <div className="designStyle">{listJaguarDesigns}</div>

        </div >
    )
}