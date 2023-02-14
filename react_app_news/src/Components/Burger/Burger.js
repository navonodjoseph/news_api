import React from 'react'; 
//import { bool, func } from 'prop-types'; 
import { StyledBurger} from './Burger.styled'; 

const Burger = ({ open, setOpen, ...props }) => {
    const isExpanded = open ? true : false; 
    return (
        <StyledBurger open={open} onClick={()=> setOpen(true)}>
        <div />
        <div />
        <div />
        </StyledBurger>
    )
}
// Burger.propTypes = {
//     open: bool.isRequired, 
//     setOpen: func.isRequired,
// }

export default Burger; 