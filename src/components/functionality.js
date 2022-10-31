import React from 'react';
import { useState, useEffect } from 'react';
import Menu from './Menu';
import SpellPage from'./SpellPage';

function Functionality(){

  // Get the data from the api - https://wizard-world-api.herokuapp.com/Spells?Type=Charm
  
  //  Menu options = Charm, Conjuration, Spell, Transfiguration, HealingSpell, DarkCharm, Jinx, Curse, MagicalTransportation, Hex, CounterSpell, DarkArts, CounterJinx, CounterCharm, Untransfiguration, BindingMagicalContract, Vanishment

  //  const menu = ["Charm", "Conjuration", "Spell", "Transfiguration", "HealingSpell", "DarkCharm", "Jinx", "Curse", "MagicalTransportation", "Hex", "CounterSpell", "DarkArts", "CounterJinx", "CounterCharm", "Untransfiguration", "BindingMagicalContract", "Vanishment"]

  // Set state to store menu item chosen 
  const [chosenPage, setChosenPage] = useState('')

  



  return (
    <div>
      <Menu></Menu>
      <SpellPage></SpellPage>
    </div>
    )

}

export default Functionality;