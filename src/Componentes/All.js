import React from 'react'
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
                        
                        <h2>Hola , soy Sebastián. Un gusto conocerte.</h2>
                        <BsArrowBarDown className='flechaDown'/>
                       
                    </div>
            </div> 

            <div className="banner2">
                <div className="content2">
                    
                        <h2>Soy Desarrollador Front End</h2>
                        <p>
                            Empece a estudiar programación hace 2 años, 
                            luego hice la carrera de Desarrolador Fron End en CoderHouse  Además soy autodidacta,
                            me entusiasma la programación y la
                            computación. Siempre busco nuevas fuentes para seguir aprendiendo 
                        </p>
                        <h3>Te dejo mi curriculum acá abajo!</h3>
                        <a  href={cv} className="botonCv"> Descargar </a>
                  
                </div>
            </div>
            </div>

            <div className="banner3"> 
                    <div className="content3">
                        
                            <FaFileCode className='iconCode'/>
                            <h3>Herramientas de desarrollo</h3>
                            <p>Me gusta codificar cosas desde cero y disfruto dando vida a las ideas en el navegador.</p>
                        <div className="container">
                        
                            <div className='herramientasCont'>
                            <div className="herramientas">
                                
                                    <IoLogoHtml5 className='iconHtml'/>
                               
                            </div>
                            <div className="herramientas">
                                
                                    <DiCss3 className='iconCss'/>
                                
                            </div>
                            <div className="herramientas">
                                
                                    <IoLogoJavascript className='iconJs'/>
                                   
                            </div>
                            <div className="herramientas">
                                
                                    <DiReact className='iconReact'/>
                                   
                            </div>
                            <div className="herramientas">
                                
                                    <BsGithub className='iconGit'/>
                               
                            </div>
                            </div>
                       
                        </div>
                        

                    </div>
            </div>

            <Proyectos/>

        </div>     
    )
}

export default All