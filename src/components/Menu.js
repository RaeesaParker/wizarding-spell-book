import React from 'react';
import { useState, useEffect , useRef} from 'react';
import {Link} from 'react-router-dom';

function Menu(props){

  // Set state of the routing path 


  // Items for the menu
  const menu = ["All Spells", "Charm", "Conjuration", "Spell", "Transfiguration", "Healing Spell", "Dark Charm", "Jinx", "Curse", "Magical Transportation", "Hex", "Counter Spell", "Dark Arts", "Counter Jinx", "Counter Charm", "Untransfiguration", "Binding Magical Contract", "Vanishment"]

  let sortedMenu = menu.sort()

  // Create array to store menu without spaces



  // Function to set the chosen page 
  function chosenPageFunc(id){

    // Convert the menu ID into a concotanted string => Will be used in API Path
    let chosenPageName = menu[id].replace(/\s+/g,'');

    // Set chosen page for all spells
    if (id == 0){
      chosenPageName = " ";
    }
    console.log("Menu chosenPage:", props.chosenPage)
    props.setChosenPage(chosenPageName)
  }

  return (
    <div className='section-menu'>
      
      <h2>Contents</h2>

      <div className='menu-container'>

        {sortedMenu.map(( menuItem, menuIndex ) => {
          return(
            <Link key={menuIndex} className='menu-link' to={`/spells/${menuItem.replace(/\s+/g,'')}`} >
              <p onClick={() => chosenPageFunc(menuIndex)} key={menuIndex}>{menuItem}</p>
            </Link>
          )
        })}

      </div>
    </div>
  )

}

export default Menu;