import React from 'react'
import Project from './../Project/Project.js'
import './Projects.css';
import pokemon from'./../../ressources/pokemon55.svg';
import jungle from'./../../ressources/jaguar55.svg';
import soleil from'./../../ressources/soleil55.svg';


export default function Projects() {

    return (

       <div className = 'projectsContainer'>
            <div className='projectsStyle'>
                <div className='oneProject'>
                    <Project title="Pokedex"
                   image={pokemon}
                   link="https://wild-pokemon.herokuapp.com/"/>
                
                </div>
                <div className='twoProject'>
                    <Project  title="Jungle Operation"
                    image={jungle}
                    link="https://jungleoperation.herokuapp.com/"/>
                
                </div>
                <div className='threeProject'>
                    <Project  title="App Meteo"
                     image={soleil}
                    link="https://meteorillac.herokuapp.com/"/>
                
                </div>
            </div>
       </div>
    )
}