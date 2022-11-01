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
          <a className="navbar-brand" href="#">Spell Book</a>
          <a id="navbar-contents" onClick={()=> contentsPageFunc()}>Contents</a>
        </div>
      </nav>
    </div>
    )

}


export default Heading;