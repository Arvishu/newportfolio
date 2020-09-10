import React,{useState}from 'react'

import './Picture.css'

import Modal from './../Modal/Modal.js'

export default function Picture (props){
    const{title,importation} = props

    const [show, setShow] = useState(false);
    
    
    function showModal() {
        setShow(true);

    }
    function hideModal() {
        setShow(false);
    }

    return(
        <div>
                <div >
                    <img className="imgStyle"
                        height="128px"
                        width="128px"
                        onClick={showModal}
                        src={importation}
                        title={title}
                        alt={title} />
                </div>
            
              
                <Modal
                    show={show}
                    hide={hideModal}
                    imp={importation}
                />
        </div>
    )
}