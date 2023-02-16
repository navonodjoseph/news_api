import React from 'react';
import {Link} from 'react-router-dom'
import { StyledMenu } from './Menu.styled'; 


const Menu = ({ open}) => {
    const isHidden = open ? "open" : "closed"; 
     //const tabIndex = isHidden ? 0 : -1; 

  return (
    <StyledMenu open={open}>
      <Link to="/" >Most Viewed</Link>
    
      <Link to="second" > Search</Link> 
        
      <Link to="third" >About</Link>
    </StyledMenu>
  )
}

export default Menu;