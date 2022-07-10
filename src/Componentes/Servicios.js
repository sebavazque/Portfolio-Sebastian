import React from 'react'
import Lottie from 'react-lottie';
import desing from './Animaciones/desing.json'
import edit from './Animaciones/edit.json'
import code from './Animaciones/code.json'

const desingData = {loop: true, autoplay: true, animationData: desing}
const editData = {loop: true, autoplay: true, animationData: edit}
const codeData = {loop: true, autoplay: true, animationData: code}

const Servicios = () => {
  return (
    <div className='serviceContainer'>
        <h3>Servicios</h3>
        <div className='serviceContent'>
            <div className='service'>
                <Lottie options={codeData} height={200} width={200}/>
                <h4>Desarrollo</h4>
                <p>Conozco la importancia del diseño web y puedo ayudarte a crear un sitio web que te encantará. </p>
             </div>
             <div className='service'>
             <Lottie options={desingData} height={200} width={200}/>
                <h4>Diseño Responsive</h4>
                <p>Su sitio se mostrará correctamente en cualquier dispositivo, incluidas computadoras de escritorio, tabletas y teléfonos móviles. </p>
             </div>
             <div className='service'>
             <Lottie options={editData} height={200} width={200}/>
                <h4>Diseño Creativo</h4>
                <p>Un buen y atractivo diseño web lo ayuda a mantener sus clientes potenciales en su sitio, que es la cara digital de su negocio. </p>
             </div>
         </div>
    </div>
    
  )
}

export default Servicios