import React from 'react';
import { useState, useEffect } from 'react';
import Menu from './Menu';
import SpellPage from'./SpellPage';

function Functionality(props){

  // Set state to store menu item chosen 
  const [chosenPage, setChosenPage] = useState('');

  return (
    <div>
      {props.route == 'menu' ? 
        <div> 
          <Menu chosenPage={chosenPage} setChosenPage={setChosenPage} setRoute={props.setRoute}></Menu>
        </div>
      :
        <div> 
          <SpellPage chosenPage={chosenPage} setChosenPage={setChosenPage} setRoute={props.setRoute}></SpellPage>
        </div>
      }
      </div>    
  )
}

export default Functionality;