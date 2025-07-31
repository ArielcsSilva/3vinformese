import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Integrantes from './pages/integrantes';
import Home from './pages/Home';

export default function Login() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element = {<Home />} />
          <Route path='/home' element={<Home/>}/>
          <Route path='/integrantes' element={<Integrantes/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}