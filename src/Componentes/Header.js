import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { AiOutlineBars } from "react-icons/ai";

const Header = () => {
    const [menu, setMenu] = useState(false);
    const [navMenu , setNavMenu] = useState(false);

    const cambiarMenu = () => {
        if(window.scrollY > 100){
            setMenu(true);
        }else{
            setMenu(false);
        }
    }

    window.addEventListener('scroll', cambiarMenu);


    const mobilMenu = () => {
        if(window.innerWidth < 468){
            setNavMenu(true);
        }else{
            setNavMenu(false);
        }
    }

    window.addEventListener('resize', mobilMenu);


    return (
            <header className={menu ? 'headerScroll' : 'header' } >
                <div className={navMenu ? 'dropdown' : 'nav'}>
                <div className='nav'>
                <nav >              
                    <ul>
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/contacto">Contacto</Link></li>
                        <li><Link to="/proyectos">Proyectos</Link></li>
                    </ul>
                </nav>
                </div>

                <div className='menu'>
                    <button class="dropbtn">
                        <AiOutlineBars/>
                    </button>
                    <div class="dropdown-content">
                        <ul>
                            <li><Link to="/">Inicio</Link></li>
                            <li><Link to="/contacto">Contacto</Link></li>
                            <li><Link to="/proyectos">Proyectos</Link></li>
                        </ul>
                    </div>
                </div>
                </div>
            </header>
    )
}

export default Header