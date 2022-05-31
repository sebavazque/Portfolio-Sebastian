import React from 'react'
import { Link } from 'react-router-dom'
import {  BsGithub, BsInstagram, BsFacebook} from "react-icons/bs";


const Footer = () => {
    return (
        
            <footer>      
                <div class="footer">            
                    <div class="footerContent">
                        <h3>Te interesa lo que hago? </h3>
                        <Link to="/contacto" className='botonContact'>Contactame!</Link>
                    </div>
                    <a href=""><BsGithub className='iconGit'/></a>
                    <a href=""><BsInstagram className='iconInsta'/></a>
                    <a href=""><BsFacebook className='iconFace'/> </a>
                </div>
            </footer>
        
    )
}

export default Footer