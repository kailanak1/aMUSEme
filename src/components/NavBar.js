import React from 'react'

import {
    Link
  } from "react-router-dom";
import styled from 'styled-components'

const Navbar = styled.div`
  background-color: #B9EFE1; 
  text-align: justify;
  display: flex; 
  padding: 8px; 
  margin: 8px;
  position: relative;
  border-bottom: 1px solid #000; 
  overflow: hidden;
`
const UlList = styled.ul`
  width: 50%; 
  list-style: none; 
  padding: 0;
`

const ListItem = styled.li`
  display: inline-block; 
`

const Anchor = styled.a`
  display: block; 
  color: white; 
  text-decoration: none;
  padding: 10px 15px;
  font-weight: bold;

  &:hover {
    color: #eb5424;
  }
`

function NavBar(){


    return(
        <Navbar>
            <UlList>
              <ListItem><Anchor><Link to="/">Home</Link></Anchor></ListItem>

              <ListItem><Anchor><Link to="/CharacterGenerator">Character Generator</Link></Anchor></ListItem>
             
              <ListItem><Anchor><Link to="/PlotOrganizer">Plot Organizer</Link></Anchor></ListItem>
             
              <ListItem><Anchor><Link to="/RandomPlotGenerator">Random Plot Generator</Link></Anchor></ListItem>
           
              <ListItem><Anchor><Link to="/Login">Login</Link></Anchor></ListItem>
             
              </UlList>
        </Navbar>
    )
}

export default NavBar