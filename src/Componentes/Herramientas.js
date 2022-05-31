import React from 'react'
import html from './imagenes/html.png'
import Bounce from 'react-reveal/Bounce';
import { IoLogoHtml5,IoLogoJavascript } from "react-icons/io";
import { BsFillBootstrapFill, BsGithub } from "react-icons/bs";
import { DiCss3,DiReact } from "react-icons/di";

const Herramientas = () => {
    return (
        <div class="banner3"> 
            <div class="content3">
                <Bounce left>
                    <img src={html} alt=""/>
                    <h3>Desarrollo Front End</h3>
                    <p>Me gusta codificar cosas desde cero y disfruto dando vida a las ideas en el navegador.</p>
                </Bounce>
            </div>
            <div class="container">
                    <h3>Herramientas de desarrollo</h3>
                    <div class="herramientas">
                        <Bounce right>
                            <IoLogoHtml5/>
                            <DiCss3/>
                            <IoLogoJavascript/>
                            <DiReact/>
                            <BsGithub/>
                            <BsFillBootstrapFill/>
                        </Bounce>
                    </div>
            </div>
        </div>
    )
}

export default Herramientas