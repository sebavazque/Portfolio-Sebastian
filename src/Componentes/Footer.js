import React from 'react'
import { Link } from 'react-router-dom'
import {  BsGithub, BsInstagram} from "react-icons/bs";


const Footer = () => {
    return (
        
            <footer>      
                <div class="footer">            
                    <div class="footerContent">
                        <h3>Contacto</h3>
                        <p>Contáctame si quieres que trabajemos juntos.</p>
                        <Link to="/contacto" className='botonContact'>Contactame!</Link>
                    </div>
                    <a href="https://github.com/sebavazque"><BsGithub className='iconGit'/></a>
                    <a href="https://www.instagram.com/sebavazquez00/"><BsInstagram className='iconInsta'/></a>
                    <p>Copyright © 2022. All Rights Reserved</p>
                </div>
            </footer>
        
    )
}

export default Footer