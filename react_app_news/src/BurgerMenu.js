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
              <div>
                      <img src="http://placekitten.com/900/600"/>
                      <h1>hi, news app by joe</h1>
                      <small>top stories</small>
              </div>
              
                
            </>
       </ThemeProvider>
    </div>  

    )
}

