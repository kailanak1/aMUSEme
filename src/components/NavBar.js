import React, { Component } from 'react'
import {
    Link
  } from "react-router-dom";

function NavBar(){
    return(
        <nav>
          <ul>
            <li>
              <Link to="/CharacterGenerator">Character Generator</Link>
            </li>
            <li>
              <Link to="/PlotOrganizer">Plot Organizer</Link>
            </li>
          </ul>
        </nav>
    )
}

export default NavBar