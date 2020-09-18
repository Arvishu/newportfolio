import React from 'react'
import './Project.css'


export default function Project(props) {

    const { image, title, link } = props

    return (
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front"></div>
                <div className="flip-card-front">
                    <img src={image} alt={image} />
                    <h1>{title}</h1>
                </div>
                <div className="flip-card-back">
                    <h1>{title}</h1>
                    <p>Architect & Engineer</p>
                    <div  >
                        <a  href={link} target="_blank" rel="noopener noreferrer">
                            <img className ={"button-glow"} 
                            alt={image} src={image}
                                
                                title={"Venez visitez " + title + ". Cliquez sur l'icone"} /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}