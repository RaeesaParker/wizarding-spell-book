import './App.css';
import { useState } from 'react';
import { BrowserRouter , Routes , Route , Link   } from 'react-router-dom';
import Heading from './components/Header';
import Functionality from './components/Functionality';
import About from './components/About';
import Footer from './components/Footer';

function App() {

  return (
    <div >
      <BrowserRouter>
      <Heading></Heading>
      {/* <Routes path='wizarding-spell-book/'
          element={<About></About>} >
      </Routes> */}
      <Functionality></Functionality>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
