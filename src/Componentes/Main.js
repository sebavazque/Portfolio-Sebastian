import React from 'react'
import Bounce from 'react-reveal/Bounce';

const Main = () => {
    return (
        <div className="main">
            <div class="banner"> 
                        
            <div class="content">
                <Bounce left>
                <h2>Hola , soy Desarrollador Front End</h2>
                <h3>Codifico cosas lindas y sencillas, y me encanta lo que hago.</h3>
                </Bounce>
            </div>

            </div>

            <div class="banner2">
                <div class="content2">
                    <Bounce right>
                        <h2>Soy Sebastian. Un gusto conocerte.</h2>
                        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. A impedit facere quas corrupti quia. Aliquam nisi porro ad iste, repellendus nesciunt praesentium ea enim harum at, quasi, illum facilis velit!</h3>
                    </Bounce>
                </div>
            </div>
        </div>

    )
}

export default Main