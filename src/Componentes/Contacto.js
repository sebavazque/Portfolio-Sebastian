import React from 'react'

import { FiMail } from "react-icons/fi";
import { AiOutlineWhatsApp } from "react-icons/ai";

const Contacto = () => {

    return (
        <div className='containerForm'>
            <div className='contactForm'>
            <form 
              name="contact"
              action="/pages/success"
              method="POST" 
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
            <h2>Contactame</h2>
        
            <div className='formBox'>
                
                <div className='inputBox' id='w50'>
                    <input type="text" name='userName' required />
                    <span>Nombre y apellido </span>
                </div>

                <div className='inputBox' id='w50'>
                    <input type="email" name='userEmail' required />
                    <span>Correo</span>
                </div>
                <div className='inputBox' id='w50'>
                    <input type="text" name='userCel' required />
                    <span>Celular</span>
                </div>
                <div className='inputBox' id='w100'>
                    <textarea name='userMensaje' required></textarea>
                    <span>Escriba su mensaje</span>
                </div>
                <div className='inputBox' id='w100'>
                <input type="submit" value="Enviar" />
                </div>
                
            </div>
            </form>

            <FiMail/> <p>sebavazquez00@gmail.com</p>
            <AiOutlineWhatsApp/> <p> 341 354-7976 </p>
            </div>  
        </div>
    )
}

export default Contacto