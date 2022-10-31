import React from 'react';
import Modal from 'react-modal';
import SpellCardModal from './spellCardModal';


function SpellCard(props){

    return (
      <div className='spell-card'>
        <h3>{props.name}</h3>
      </div>
      )
  
  }
  
  
  export default SpellCard;