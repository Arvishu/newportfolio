import React from 'react'

import Picture from './../Picture/Picture.js'

import './Gallery.css'
import jaguar1 from './../../ressources/jaguar1.svg';
import jaguar2 from './../../ressources/jaguar2.svg';
import jaguar3 from './../../ressources/jaguar3.svg';
import jaguar4 from './../../ressources/jaguar4.svg';
import toucan1 from './../../ressources/toucan1.svg';
import toucan2 from './../../ressources/toucan2.svg';
import toucan3 from './../../ressources/toucan3.svg';
import toucan4 from './../../ressources/toucan4.svg';
import glace1 from './../../ressources/glace1.svg';
import glace2 from './../../ressources/glace2.svg';
import glace3 from './../../ressources/glace3.svg';
import glace4 from './../../ressources/glace4.svg';


const myData = [
    {
        "id": 1,
        "title": "jaguar inquiet",
        "importation": jaguar1,
    },
    {
        "id": 2,
        "title": "jaguar curieux",
        "importation": jaguar2,
    },
    {
        "id": 3,
        "title": "jaguar furieux",
        "importation": jaguar3,
    },
    {
        "id": 4,
        "title": "jaguar tranquille",
        "importation": jaguar4,
    },
    {
        "id": 5,
        "title": "Toucan en vol",
        "importation": toucan1,
    },
    {
        "id": 6,
        "title": "Toucan en vol",
        "importation": toucan2,
    },
    {
        "id": 7,
        "title": "Toucan en vol",
        "importation": toucan3,
    },
    {
        "id": 8,
        "title": "Toucan en vol",
        "importation": toucan4,
    },
    {
        "id": 9,
        "title": "Glaces",
        "importation": glace1,
    },
    {
        "id": 10,
        "title": "Glaces",
        "importation": glace2,
    },
    {
        "id": 11,
        "title": "Glaces",
        "importation": glace3,
    },
    {
        "id": 12,
        "title": "Glaces",
        "importation": glace4,
    },
    
]

export default function Gallery(props) {
    return (
        myData.map((data) => {
            return (




                <Picture
                    id={data.id}
                    importation={data.importation}
                    title={data.title} />

            )
        })

    )
}