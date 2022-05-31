import React from 'react'
import { Link } from 'react-router-dom'
import {  BsGithub, BsInstagram} from "react-icons/bs";


const Footer = () => {
    return (
        
            <footer>      
                <div class="footer">            
                    <div class="footerContent">
                        <h3>Te interesa lo que hago? </h3>
                        <Link to="/contacto" className='botonContact'>Contactame!</Link>
                    </div>
                    <a href="https://github.com/sebavazque"><BsGithub className='iconGit'/></a>
                    <a href="https://www.instagram.com/sebavazquez00/"><BsInstagram className='iconInsta'/></a>
                </div>
            </footer>
        
    )
}

export default Footer