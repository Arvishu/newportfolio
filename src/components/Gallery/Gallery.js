import React from 'react'

import Picture from './../Picture/Picture.js'

import './Gallery.css'








export default function Gallery(props) {

    const myData = props.dataGallery;
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