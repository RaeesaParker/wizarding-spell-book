import React from 'react';
import { Link } from 'react-router-dom';


function Heading(){



  // ----------------------------------------------------------------- //
  // Define the return
  // ----------------------------------------------------------------- //

  return (
    <div>
      <nav className="navbar navbar-expand-lg  navbar-customise">
        <div className="navbar-brand">
        <Link  to={'wizarding-spell-book/'}>
            <p>Wizarding Spell Book</p>
          </Link>
        </div>
        <div className="navbar-contents" >
        <Link to={'wizarding-spell-book/'} > 
            <p>Title Page</p> 
          </Link> 
        </div>
        <div className="navbar-contents">
          <Link  to={'/menu'} > 
            <p>Contents Page</p> 
          </Link> 
        </div>


      </nav>
    </div>
    )

}


export default Heading;
