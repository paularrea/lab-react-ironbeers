import React from "react";
import { Link } from "react-router-dom";

const navbar = () => {
  return (
    <nav className="navbar navbar-light bg-dark p-4 d-flex justify-content-around">
    
       
        <Link to="/" style={{ textDecoration: "none" , color:"white", fontSize:"25px"}}>
            Home
          </Link>
          <Link to="/beers" style={{ textDecoration: "none", color:"white", fontSize:"25px"}}>
            Beers
          </Link>
          <Link to="/random-beer" style={{ textDecoration: "none", color:"white", fontSize:"25px"}}>
            Random Beer
          </Link>
          <Link to="/new-beer" style={{ textDecoration: "none", color:"white", fontSize:"25px"}}>
            New Beer
          </Link>
       
      
    </nav>
  );
};

export default navbar;


