import React, { useState } from 'react';
import emailjs from 'emailjs-com';

import './Contact.css';



export default function Contact() {

  function sendEmail(e) {
  const  {REACT_APP_USER,REACT_APP_SERVICE,REACT_APP_TEMPLATE} =process.env;
    e.preventDefault();
    
    emailjs.sendForm(REACT_APP_SERVICE, REACT_APP_TEMPLATE, e.target, REACT_APP_USER)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }


  return (
    <div className='contactContainer'>
      <div className='contactStyle'>
        <h2>Prenez Contact </h2>
        <form onSubmit={sendEmail}>

          <input className="inputStyle"
            type="email"
            placeholder="Votre Email"
            name="email"
            minLength="4" maxLength="50"
            title="entrez un email valide"
          />

          <br />

          <input className="inputFirstNameStyle"
            type="text"
            placeholder="Votre Prénom"
            name="first_name"
            title="4 caractères minimum"
            minLength="4" maxLength="50" />

          <input className="inputLastNameStyle"
            type="text"
            placeholder="Votre Nom"
            name="last_name"
            title="4 caractères minimum"
            minLength="4" maxLength="50" />


          <br />
          <input className="inputStyle"
            type="text"
            placeholder="Votre N° de Téléphone"
            name="telephone"
            title="entrez un N° valide"
            minLength="4" maxLength="15" />

          <br />

          <input className="inputStyle"
            type="text"
            placeholder="Ajoutez un objet"
            name="subject"
            minLength="4" maxLength="50" size="25"
            title="4 caractères minimum" />



          <br />

          <textarea
            className="inputTextStyle"
            name="description"
            placeholder="Entrez votre message ici ..."
          >

          </textarea>

          <br />

          <div>
            <input className="submitButton"
            type="submit" 
            value="Send" />
          </div>
        </form>

      </div>
    </div>
  )
}