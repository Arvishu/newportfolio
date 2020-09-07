import React, { useState } from 'react'
import './Project.css'


export default function Project(props) {
    
   const{image,title,link}=props
    
    return (
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front"></div>
                <div className="flip-card-front">
                    <img src={image}alt={image} style={{width:'25vw',height:'25vw'}} />
                    <h1>{title}</h1>
    </div>
                    <div className="flip-card-back">
                        <h1>{title}</h1>
                        <p>Architect & Engineer</p>
                        <div>
                        <a href={link}target="_blank">
                        <img alt={image} src={image}
                            width="48" height="48"
                            title={"Venez visitez "+title+". Cliquez sur l'icone"}/></a>
                        </div>
                    </div>
                </div>
            </div>
    )
}