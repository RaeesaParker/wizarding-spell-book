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
            } 
          
            //  Catch any errors
            catch (err){
                setError("Could not fetch data");
                console.log(err.message)
            }
        };
        
        getSpells();
      }, [change]);
  
  
    return (
      <div>
        <h2>Functionality</h2>
      </div>
      )
  
  }
  
  
  export default Functionality;