import React from 'react';
import {Link} from 'react-router-dom'
import { StyledMenu } from './Menu.styled'; 


const Menu = ({ open}) => {
    const isHidden = open ? "open" : "closed"; 
     //const tabIndex = isHidden ? 0 : -1; 

  return (
    <StyledMenu open={open}>
      <Link to="/" >Top Story</Link>
    
      <Link to="second" > Second Story</Link> 
        
      <Link to="third" >Also Important</Link>
    </StyledMenu>
  )
}

export default Menu;