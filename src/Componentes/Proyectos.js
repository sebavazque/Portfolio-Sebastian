import React from 'react'

import Captura from './imagenes/Captura.JPG'
import Captura2 from './imagenes/Captura2.JPG'
import pagina from './imagenes/pagina.PNG'


const Proyectos = () => {
    return (
        
    <div class="proyectos">
            
        <div class="proyeContent">
            <Bounce top>
                <h3>Estos son algunos de mis proyectos </h3>
            </Bounce>
        </div>

        <div class="cardContainer">

            
            <div className='card'>
                <img src={Captura} alt=""/>
                <div className='cardContent'>
                    <h3>Muller Photo</h3>
                    <p>Pagina web estilo galeria para la empresa de fotografía Muller Photo.</p>
                    <a href="https://mullerphoto.netlify.app/">Ver pagina</a>
                    <a href="https://github.com/sebavazque/Pagina-Fotografia">Ver GitHub</a>
                </div>
            </div>
            

            
            <div className='card'>
                <img src={Captura2} alt=""/>
                <div className='cardContent'>
                    <h3>Autocar</h3>
                    <p>Pagina web para la empresa de servicios de mantenimiento y reparación de vehículos Autocar.</p>
                    <a href="https://autocarcustoms.netlify.app/">Ver pagina</a>
                    <a href="https://github.com/sebavazque/Pagina-Autocar">Ver GitHub</a>
                </div>
            </div>
            

            
            <div className='card'>
            <img src={pagina} alt=""/>
                <div className='cardContent'>
                    <h3>Oahu Store</h3>
                    <p>Ecommerce para la tienda de ropa Oahu Store.</p>
                    <a href="https://sebavazquezecommerce.netlify.app/">Ver pagina</a>
                    <a href="https://github.com/sebavazque/Sebastian-Vazquez--React-Js--25470">Ver GitHub</a>
                </div>
            </div>
            
        </div>

    </div>
        
    )
}

export default Proyectos