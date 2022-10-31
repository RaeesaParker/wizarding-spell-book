import './App.css';
import { useState } from 'react';
import Heading from './components/Header';
import Functionality from './components/Functionality';
import Footer from './components/Footer';

function App() {

  // Set the state for the route
  const [route, setRoute] = useState('menu');


  return (
    <div >
     <Heading route={route} setRoute={setRoute}></Heading>
     <Functionality route={route} setRoute={setRoute}></Functionality>
     <Footer></Footer>
    </div>
  );
}

export default App;
