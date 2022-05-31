import React from 'react'
import Bounce from 'react-reveal/Bounce';
import { IoLogoHtml5,IoLogoJavascript} from "react-icons/io";
import {  BsGithub,  BsArrowBarDown } from "react-icons/bs";
import { DiCss3,DiReact } from "react-icons/di";
import { FaFileCode } from "react-icons/fa";
import Proyectos from './Proyectos';
import cv from './CV.pdf'

const All = () => {
    return (
        <div className="all">
            <div className="main">
                <div className="banner">                           
                    <div className="content">
                        <Bounce left>
                        <h2>Hola , soy Sebastián. Un gusto conocerte.</h2>
                        <BsArrowBarDown className='flechaDown'/>
                        </Bounce>
                    </div>
            </div> 

            <div className="banner2">
                <div className="content2">
                    <Bounce right>
                        <h2>Soy Desarrollador Front End</h2>
                        <p>
                            Empece a estudiar programación hace 2 años, 
                            luego hice la carrera de Desarrolador Fron End en CoderHouse también soy autodidacta, 
                            me gusta mucha la programación y la computación. Siempre busco nuevas fuentes para seguir aprendiendo 
                        </p>
                        <h3>Te dejo mi curriculum acá abajo!</h3>
                        <a  href={cv} className="botonCv"> Descargar </a>
                    </Bounce>
                </div>
            </div>
            </div>

            <div className="banner3"> 
                    <div className="content3">
                        <Bounce left>
                            <FaFileCode className='iconCode'/>
                            <h3>Herramientas de desarrollo</h3>
                            <p>Me gusta codificar cosas desde cero y disfruto dando vida a las ideas en el navegador.</p>
                        </Bounce>
                        <div className="container">
                        <Bounce top>
                            <div className='herramientasCont'>
                            <div className="herramientas">
                                <Bounce left>
                                    <IoLogoHtml5 className='iconHtml'/>
                                </Bounce>
                            </div>
                            <div className="herramientas">
                                <Bounce left>
                                    <DiCss3 className='iconCss'/>
                                </Bounce> 
                            </div>
                            <div className="herramientas">
                                <Bounce top>
                                    <IoLogoJavascript className='iconJs'/>
                                </Bounce>    
                            </div>
                            <div className="herramientas">
                                <Bounce right>
                                    <DiReact className='iconReact'/>
                                </Bounce>    
                            </div>
                            <div className="herramientas">
                                <Bounce right>
                                    <BsGithub className='iconGit'/>
                                </Bounce>
                            </div>
                            </div>
                        </Bounce>
                        </div>
                    </div>
            </div>

            <Proyectos/>

        </div>     
    )
}

export default All