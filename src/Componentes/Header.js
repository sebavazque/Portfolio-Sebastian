import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';

const Header = () => {
    const [menu, setMenu] = useState(false);

    const cambiarMenu = () => {
        if(window.scrollY > 100){
            setMenu(true);
        }else{
            setMenu(false);
        }
    }

    window.addEventListener('scroll', cambiarMenu);


    return (
            <header className={menu ? 'headerScroll' : 'header' } >
                <nav>              
                    <ul>
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/contacto">Contacto</Link></li>
                        <li><Link to="/proyectos">Proyectos</Link></li>
                    </ul>
                </nav>
            </header>
    )
}

export default Header