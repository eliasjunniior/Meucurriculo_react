import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Sobre from './pages/sobre';
import Experiencia from './pages/experiencia';
import Contato from './pages/contato';
import Senha from './pages/senha';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/experiencia" element={<Experiencia />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/senha" element={<Senha />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
