import React from 'react';
import './Footer.css'
import github from './../../ressources/squaregithub.svg'
import linkedin from './../../ressources/linkedin.svg'
import facebook from './../../ressources/squarefacebook.svg'
export default function Footer() {


    return (
        <div className='footerContainer'>
            <div className='footerStyle'>
                
                <div>  <a href="https://www.facebook.com/hugo.arvis/" target="_blank">
                    <img alt="github" src={facebook}
                        width="48" height="48"
                        title="lien vers mon profil facebook" /></a>
                  
                </div>
                <div>  <a href="https://www.linkedin.com/in/hugo-arvis/" target="_blank">
                    <img alt="github" src={linkedin}
                        width="48" height="48"
                        title="lien vers mon profil linkedin"/></a>
                </div>
                <div>
                    <a href="https://github.com/Arvishu" target="_blank">
                        <img alt="github" src={github}
                            width="48" height="48"
                            title="lien vers mon profil github"/></a>

                </div>
            </div>
        </div>
    )

}