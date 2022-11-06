import React from "react";
import { Link } from "react-router-dom";
import './Navigation.css'

function Navigation(){
    return(
        <ul className="topnav">
          <li>
          <Link to="/">Home</Link>
          </li>
          <li>
          <Link to="/about">About</Link>
          </li>
          <li>
          <Link to="/contact">Contact</Link>
          </li>
    </ul>
        // <div class="topnav">
        //     <a class="active" href="#home">Home</a>
        //     <a href="#about">About</a>
        //     <a href="#contact">Contact</a>
        // </div>
    )
}

export default Navigation;
