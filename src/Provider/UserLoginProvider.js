import React from "react";
export const  UserDetails = React.createContext({isLoggedIn: false, name:''});

export const LoginUser=(props)=>{
    const [userDetails, setUserDetails] = React.useState({});
    return <UserDetails.Provider value={{...userDetails,setUserDetails}}>
                {props.children}
          </UserDetails.Provider>
}

