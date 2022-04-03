import React from "react";
import { ToggleButton } from "../ToggleButton";

export const Theme = React.createContext('dark');

export const ThemeProvider=(props)=>{
    const [theme, setTheme] = React.useState('dark');
    const toggleTheme=(e)=>{
      if(e.target.value === '0') setTheme('light');
      else if(e.target.value === '1') setTheme('dark');
    }
   return <Theme.Provider value={theme}>
            <ToggleButton onChange={toggleTheme} label={'Dark Theme'}/>
                {props.children}
            </Theme.Provider>
        }
