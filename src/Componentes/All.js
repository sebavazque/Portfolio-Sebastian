import React from 'react'
import { IoLogoHtml5,IoLogoJavascript} from "react-icons/io";
import {  BsGithub,} from "react-icons/bs";
import { DiCss3,DiReact } from "react-icons/di";
import Proyectos from './Proyectos';
import cv from './CV.pdf'
import carnet from './imagenes/carnet.jpeg'
import Servicios from './Servicios';
import Lottie from 'react-lottie';
import coding from './Animaciones/coding.json'
import down from './Animaciones/down.json'
import Footer from './Footer';


const codingData = {loop: true, autoplay: true, animationData: coding}
const downData = {loop: true, autoplay: true, animationData: down}

const All = () => {
    return (
        <div className="all">
            <div className="main">
                <div className="banner">                           
                    <div className="content">
                        <img src={carnet} alt="logo"/>
                        <h2>Hola , soy Sebastián.</h2>
                        <h1>Soy Desarrolador Front End </h1>
                        <Lottie options={downData} height={200} width={200}/>
                       
                    </div>
                </div> 

                <div className="about">

                        <div className="banner2">
                            <div className="content2">
                                
                                    <h2>Soy Sebastián , Desarrollador Front End</h2>
                                    <p>
                                        Empece a estudiar programación hace 2 años, soy autodidacta.
                                        Siempre busco nuevas fuentes para seguir aprendiendo
                                    </p>
                                    <p>Me gusta codificar cosas desde cero y disfruto dando vida a las ideas en el navegador.</p>
                                    <Lottie options={codingData} height={150} width={150}/>
                                    <a  href={cv} className="botonCv"> Descargar CV </a> 
                            
                            </div>
                        </div>
                        
                        <div className="banner3"> 
                                <div className="content3">
                                    
                                       
                                        <h3>Herramientas de desarrollo</h3>
                                        
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
                </div>
            </div>
            <Servicios/>
            <Proyectos/>
        </div>     
    )
}

export default All