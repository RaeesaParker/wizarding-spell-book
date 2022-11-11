import React from 'react';
import { useState, useEffect } from 'react';
import SpellCard from './subcomponents/SpellCard';
import SearchBox from './subcomponents/searchBox';

function SpellPage(props) {

  // Set state to store the spells
  const [spells, setSpells] = useState([]);

  // Set state to store any errors
  const [error, setError] = useState(null)

  // Set the state to store the filtered spells
  const [filteredSpells, setFilteredSpells] = useState([]);


     
  // Get the data 
  useEffect(() => {
    async function getSpells(){
      try{
        let response = await fetch(
          `https://wizard-world-api.herokuapp.com/Spells?Type=${props.chosenPage}`
        );
        // Error if there response is not okay
        if (!response.ok){
          throw new Error(response.statusText) 
        }
          
        // Set the state of the spells
        const dataSpells = await response.json();

        // Sort out the spells into alphabetcal order 
        sortSpells(dataSpells)
      } 
        
      // Catch any errors
      catch (err){
        setError("Could not fetch data");
        console.log(err.message)
      }
    };    
    // Get the spells when a change has been detected
    getSpells();
  }, [props.chosenPage]);

  // Sort the spells by alphabetical order
  function sortSpells(dataSpells){
    dataSpells.sort(function(a, b) {
      var textA = a.name.toUpperCase();
      var textB = b.name.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
    setSpells(dataSpells);
  }





  return (
    <div>
      <div>
      <SearchBox  > </SearchBox>
      </div>
      
      <div className='spell-container'>
        {/* Map over the spells to generate a card */}
        {spells.map(( spell, spellIndex ) => {
          return <SpellCard
            key={spell.id} 
            name={spell.name} 
            effect={spell.effect} 
            incantation={spell.incantation} 
            light={spell.light} > 
            </SpellCard>
        })}
      </div>
    </div>
    )

}

export default SpellPage;