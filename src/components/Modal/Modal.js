import React,{useState} from 'react'

import './Modal.css'



export default function Modal(props) {

   

    const { id,imp,alter,show,hide}= props
    const showHideClassName = show ? "modal display-block" : "modal display-none";
    
   
    return (
       
        <div className={showHideClassName}>
            <div className="modal-main">
                <span onClick={hide} className="close">&times;</span>
                <img className="modalImage"
 
                    id={id}
                    src={imp}
                    alt={alter}

                />

            </div>
        </div>
        
    );
};