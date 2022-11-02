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

          <Link className="navbar-brand" to={'/home'}>
            <p>Spell Book</p>
          </Link>

          <Link className="navbar-contents" to={'/home'} > 
            <p>Title Page</p> 
          </Link> 

          <Link className="navbar-contents" to={'/menu'} > 
            <p>Contents Page</p> 
          </Link> 

        </div>
      </nav>
    </div>
    )

}


export default Heading;
