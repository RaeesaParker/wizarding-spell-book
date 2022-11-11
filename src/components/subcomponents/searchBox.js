import React from 'react';


function SearchBox(props){

  return (
    <div id="search-box-div" >
      <input
        id="search-box-input"
        type='search'
        placeholder='Search Spells'
        onChange={props.onSearchChange}
      />
    </div>
  )
}

export default SearchBox;
