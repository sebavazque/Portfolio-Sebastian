import React from 'react'
import cya from './imagenes/cya.png'
import sv from './imagenes/sv.png'
import ax from './imagenes/ax.png'
import ac from './imagenes/ac.png'
import oa from './imagenes/oa.png'
import mu from './imagenes/mu.png'
import Footer from './Footer'

const Proyectos = () => {
    return (
        
    <div class="proyectos">
            
        <div class="proyeContent">
            
                <h3>Proyectos </h3>
                <p>Algunos proyectos en los que trabaje</p>
            
        </div>

        <div class="cardContainer">

            
            <div className='card'>
                <img src={mu} alt=""/>
                <div className='cardContent'>
                    <h3>Muller Photo</h3>
                    <p>Pagina web estilo galeria para la empresa de fotografía Muller Photo.</p>
                    <a href="https://mullerphoto.netlify.app/">Ver pagina</a>
                    <a href="https://github.com/sebavazque/Pagina-Fotografia">Ver GitHub</a>
                </div>
            </div>
            

            
            <div className='card'>
                <img src={ac} alt=""/>
                <div className='cardContent'>
                    <h3>Autocar</h3>
                    <p>Pagina web para la empresa de servicios de mantenimiento y reparación de vehículos Autocar.</p>
                    <a href="https://autocarcustoms.netlify.app/">Ver pagina</a>
                    <a href="https://github.com/sebavazque/Pagina-Autocar">Ver GitHub</a>
                </div>
            </div>
            

            
            <div className='card'>
            <img src={oa} alt=""/>
                <div className='cardContent'>
                    <h3>Oahu Store</h3>
                    <p>Ecommerce para la tienda de ropa Oahu Store.</p>
                    <a href="https://sebavazquezecommerce.netlify.app/">Ver pagina</a>
                    <a href="https://github.com/sebavazque/Sebastian-Vazquez--React-Js--25470">Ver GitHub</a>
                </div>
            </div>
            
            <div className='card'>
            <img src={cya} alt=""/>
                <div className='cardContent'>
                    <h3>C&A Refrigeración Industrial</h3>
                    <p>Pagina para la empresa de refrigeración C&A de Rosario, este es mi primer trabajo como programador. </p>
                    <a href="https://cyarefrigeracion.com/">Ver pagina</a>
                    <a href="https://github.com/sebavazque/Sebastian-Vazquez--React-Js--25470">Ver GitHub</a>
                </div>
            </div>

            <div className='card'>
            <img src={ax} alt=""/>
                <div className='cardContent'>
                    <h3>AutoExpert</h3>
                    <p></p>
                    <a href="https://autoxpert.netlify.app/">Ver pagina</a>
                    <a href="https://github.com/sebavazque/AutoXpert">Ver GitHub</a>
                </div>
            </div>

            <div className='card'>
            <img src={sv} alt=""/>
                <div className='cardContent'>
                    <h3>SV Arquitectos</h3>
                    <p></p>
                    <a href="https://svarquitectos.netlify.app/index.html">Ver pagina</a>
                    <a href="https://github.com/sebavazque/ArquitectoSV">Ver GitHub</a>
                </div>
            </div>

        </div>
        <Footer/>
    </div>
        
    )
}

export default Proyectos