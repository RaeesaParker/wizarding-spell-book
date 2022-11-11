import React from 'react';
import { useState, useEffect } from 'react';
import SpellCard from './subcomponents/SpellCard';
import SearchBox from './subcomponents/searchBox';

function SpellPage(props) {

  // Set state to store the spells
  const [spells, setSpells] = useState([]);

  // Set state to store any errors
  const [error, setError] = useState(null)

  // Create a state that will update the search field
  const [searchObject, setSearchObject] = React.useState(' ');



     
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


  // Create a function that will store changes made to the search box
  function onSearchChange(event){
    // Set the state to be the search item
    setSearchObject(event.target.value.toLowerCase())
  }


    //----- Functionality to search through spells

    // Filter through the spells array to find matching object
    let filteredSpells = spells.filter((spell) => {

    // Turn the spell to lowercase
    let nameLower = spell.name.toLowerCase();
    if ( spell.effect == null ){
      spell.effect = '';
    }
    if ( spell.incantation == null ){
      spell.incantation = '';
    }
    let effectLower = spell.effect.toLowerCase() || '' 
    let incantationLower = spell.incantation.toLowerCase() || ''
    return nameLower.includes(searchObject) || effectLower.includes(searchObject) || incantationLower.includes(searchObject)
    })

  
  


  return (
    <div>
      <div>
      <SearchBox 
        onSearchChange={onSearchChange}> 
      </SearchBox>
      </div>
      
      <div className='spell-container'>
        {/* Map over the spells to generate a card */}
        {filteredSpells.map(( spell, spellIndex ) => {
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