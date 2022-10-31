import React from 'react';
import { useState, useEffect } from 'react';
import SpellCard from './subcomponents/spellCard';


function Functionality(){

  // Get the data from the api - https://wizard-world-api.herokuapp.com/Spells?Type=Charm
  // Map through the array 
  // Create a card for each spell

  // Set state to store the spells
  const [spells, setSpells] = useState([]);

  // Set state to detect change & trigger api
  const [change, setChange] = useState(0);

  // Set state to store any errors
  const [error, setError] = useState(null)


  // Get the data 
  useEffect(() => {
    async function getSpells(){
      try{
        const response = await fetch(
        " https://wizard-world-api.herokuapp.com/Spells?Type=Charm"
        );
          
        // Error if there response is not okay
        if (!response.ok){
          throw new Error(response.statusText) 
        }
          
        // Set the state of the spells
        const dataSpells = await response.json();
        setSpells(dataSpells);
        console.log(spells[0])
      } 
        
      // Catch any errors
      catch (err){
        setError("Could not fetch data");
        console.log(err.message)
      }
    };    
    // Get the spells when a change has been detected
    getSpells();
  }, [change]);


  // Function to make a change => Triggers the useEffect
  const addOne = () => {
    setChange(change + 1);
  };
  

  return (
    <div>
      <div className='spell-container'>
        <SpellCard name={spells[0].name} effect={spells[0].effect} incantation={spells[0].incantation} light={spells[0].light} > </SpellCard>
      </div>
      <button onClick={addOne}>Generate Spells</button>
    </div>
    )

}


export default Functionality;