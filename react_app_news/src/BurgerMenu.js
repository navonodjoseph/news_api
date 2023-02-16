import { ThemeProvider } from "styled-components"; 
// import { GlobalStyles } from "./global"; 
import { theme } from "./theme"; 
import {Burger, Menu} from './Components'; 
import React, { useState, useRef } from 'react';
import {useOnClickOutside} from './hooks';

export function BurgerMenu() {
    const [open, setOpen] = useState(false);  
    const node = useRef(); 
    const menuId = "main-menu"; 
    
    useOnClickOutside(node, () => setOpen(false)); 
  
    
    return (
    <div>
        <ThemeProvider theme={theme}>
            <>
              {/* <GlobalStyles/> */}
                <div ref={node}>
                <Burger open={open} setOpen={setOpen}/>
                <Menu open={open} setOpen={setOpen} id={menuId}/>
                </div>
              <div className="navBar">
                      <h1>News website test</h1>
              </div>
              
                
            </>
       </ThemeProvider>
    </div>  

    )
}

