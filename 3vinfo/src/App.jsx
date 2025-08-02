import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Integrantes from 'c:/Users/user/Desktop/3vinformese/3vinfo/src/pages/Integrantes';
import Home from './pages/Home';
import Materiais from 'c:/Users/user/Desktop/3vinformese/3vinfo/src/pages/Materiais';
import Mural from 'c:/Users/user/Desktop/3vinformese/3vinfo/src/pages/Mural';
import Podio from 'c:/Users/user/Desktop/3vinformese/3vinfo/src/pages/Podio';

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
