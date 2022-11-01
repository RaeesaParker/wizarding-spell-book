import React from 'react';
import { Link } from 'react-router-dom';


function Heading(){



  // ----------------------------------------------------------------- //
  // Define the return
  // ----------------------------------------------------------------- //

  return (
    <div>
      <nav className="navbar navbar-expand-lg  navbar-customise">
        <div className="navbar-container">

          <Link to={'/menu'}>
            <a className="navbar-brand">Spell Book</a>
          </Link>
    
          <Link to={'/menu'} > 
            <a id="navbar-contents">Contents</a> 
          </Link> 

        </div>
      </nav>
    </div>
    )

}


export default Heading;