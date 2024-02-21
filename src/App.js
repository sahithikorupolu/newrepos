
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Nav from './Component/Nav';
import Home from './Component/Home';
import Shop from './Component/Shop';
import Collection from './Component/Collection';
import Contact from './Component/Contact';

function App() {
  return (
    <>
    //gvggvjhvg
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Shop' element={<Shop />} />
          <Route path='/Collection' element={<Collection />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
