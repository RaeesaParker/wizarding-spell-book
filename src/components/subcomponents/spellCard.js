import React from 'react';



function SpellCard(props){


  
  
    return (
      <div className='spell-card'>
        <h3>{props.name}</h3>
        <h4>Effect</h4>
        <p>{props.effect}</p>
        <h4>Incantation</h4>
        <p>{props.incantation}</p>
        <h4>Light</h4>
        <p>{props.light}</p>

      </div>
      )
  
  }
  
  
  export default SpellCard;