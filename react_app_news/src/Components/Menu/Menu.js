import React from 'react';
import {Link} from 'react-router-dom'
import { StyledMenu } from './Menu.styled'; 


const Menu = ({ open}) => {
    const isHidden = open ? "open" : "closed"; 
     //const tabIndex = isHidden ? 0 : -1; 

  return (
    <StyledMenu open={open}>
      <Link to="/" >Most Viewed</Link>
    
      <Link to="second" >US News</Link> 
        
      <Link to="third" >International News</Link>
      
      <Link to="sport" >Sports</Link>

      <Link to="business" >business</Link>
    </StyledMenu>
  )
}

export default Menu;