import Header from './Componentes/Header';
import All from './Componentes/All';
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Proyectos from './Componentes/Proyectos';
import Contacto from './Componentes/Contacto';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
          <Route path="/" element={<All />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/contacto" element={<Contacto/>} />
      </Routes>  
    </BrowserRouter>
  );
}

export default App;
