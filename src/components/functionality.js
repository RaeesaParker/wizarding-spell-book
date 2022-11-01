import React from 'react';
import { useState, useEffect } from 'react';
import { Routes , Route } from 'react-router-dom';
import Menu from './Menu';
import SpellPage from'./SpellPage';

function Functionality(){

  // Set state to store menu item chosen 
  const [chosenPage, setChosenPage] = useState(' ');

  return (
    <div>
      <Routes>
        <Route 
          path='/menu'
          element={<Menu chosenPage={chosenPage} setChosenPage={setChosenPage}></Menu>}
        /> 
        <Route 
          path ='/spells'
          element= {<SpellPage chosenPage={chosenPage} setChosenPage={setChosenPage}></SpellPage>}
        />
      </Routes>
      </div>    
  )
}

export default Functionality;