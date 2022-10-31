import React from 'react';


function Heading(props){


  function contentsPageFunc(){
    props.setRoute('menu')
  }

  // ----------------------------------------------------------------- //
  // Define the return
  // ----------------------------------------------------------------- //

  return (
    <div>
      <nav className="navbar navbar-expand-lg  navbar-customise">
        <div className="navbar-container">
          <a className="navbar-brand" href="#">Wizarding Spell Book</a>
          <a onClick={()=> contentsPageFunc()}>Contents</a>
        </div>
      </nav>
    </div>
    )

}


export default Heading;