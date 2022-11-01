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
            <a>Spell Book</a>
          </Link>

          <Link class="navbar-contents" to={'/home'} > 
            <a>Title Page</a> 
          </Link> 

          <Link class="navbar-contents" to={'/menu'} > 
            <a>Contents Page</a> 
          </Link> 

        </div>
      </nav>
    </div>
    )

}


export default Heading;