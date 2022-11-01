import React from 'react';
import { useState, useEffect } from 'react';

function Menu(props){

  // Get the data from the api - https://wizard-world-api.herokuapp.com/Spells?Type=Charm
  
  // Items for the menu
  const menu = ["All Spells", "Charm", "Conjuration", "Spell", "Transfiguration", "Healing Spell", "Dark Charm", "Jinx", "Curse", "Magical Transportation", "Hex", "Counter Spell", "Dark Arts", "Counter Jinx", "Counter Charm", "Untransfiguration", "Binding Magical Contract", "Vanishment"]

  let sortedMenu = menu.sort()



  // Function to set the chosen page 
  function chosenPageFunc(id){

    // Convert the menu ID into a concotanted string => Will be used in API Path
    let chosenPageName = menu[id].replace(/\s+/g,'');

    // Set chosen page for all spells
    if (id == 0){
      chosenPageName = " ";
    }

    props.setChosenPage(chosenPageName)

    // Change the route to the spell page
    props.setRoute('spellPage')
  }

  return (
    <div className='section-menu'>
      <h2>Contents</h2>
      <div className='menu-container'>
        {/* Map over the spell cetegories */}
        {sortedMenu.map(( menuItem, menuIndex ) => {
          return(
            <p onClick={() => chosenPageFunc(menuIndex)} key={menuIndex}>{menuItem}</p>
          )
        })}
      </div>

    </div>
    )

}

export default Menu;