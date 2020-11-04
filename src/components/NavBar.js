import React from 'react'

import {
    Link
  } from "react-router-dom";
import styled from 'styled-components'

const Navbar = styled.div`
  background-color: #B9EFE1; 
  text-align: justify;
`



function NavBar(){
    return(
        <Navbar>
              <Link to="/CharacterGenerator">Character Generator</Link>
             
              <Link to="/PlotOrganizer">Plot Organizer</Link>
             
              <Link to="/">Home</Link>
              
              <Link to="/RandomPlotGenerator">Random Plot Generator</Link>
           
              <Link to="/Login">Login</Link>
             
          
        </Navbar>
    )
}

export default NavBar