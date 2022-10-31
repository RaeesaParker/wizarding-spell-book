import React from 'react';
import { useState, useEffect } from 'react';
import Menu from './Menu';
import SpellPage from'./SpellPage';

function Functionality(){

  // Set state to store menu item chosen 
  const [chosenPage, setChosenPage] = useState('');

  // Set state to store the route 
  const [route, setRoute] = useState('menu');

  console.log(route)


  return (
    <div>
      {route == 'menu' ? 
        <div> 
          <Menu chosenPage={chosenPage} setChosenPage={setChosenPage} setRoute={setRoute}></Menu>
        </div>
      :
        <div> 
          <SpellPage chosenPage={chosenPage} setChosenPage={setChosenPage} setRoute={setRoute}></SpellPage>
        </div>
      }
      </div>    
  )
}

export default Functionality;