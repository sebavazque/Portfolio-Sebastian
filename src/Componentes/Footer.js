import React from 'react'
import { Link } from 'react-router-dom'
import {  BsGithub, BsInstagram, BsFacebook} from "react-icons/bs";
import Bounce from 'react-reveal/Bounce';

const Footer = () => {
    return (
        <Bounce bottom>
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
        </Bounce>
    )
}

export default Footer