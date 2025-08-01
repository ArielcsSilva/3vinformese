import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Integrantes from './pages/integrantes';
import Home from './pages/Home';
import Materiais from './pages/materiais';
import Mural from './pages/mural';
import Podio from './pages/podio';

export default function Pages() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element = {<Home />} />
          <Route path='/home' element={<Home/>}/>
          <Route path='/integrantes' element={<Integrantes/>}/>
          <Route path='/materiais' element={<Materiais/>}/>
          <Route path='/Mural' element={<Mural/>}/>
          <Route path='/Podio' element={<Podio/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
