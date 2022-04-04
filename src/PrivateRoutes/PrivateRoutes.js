import { useContext } from "react"
import { UserDetails } from "../Provider/UserLoginProvider"

export const PrivateRoute =(props)=>{
    const userDetails = useContext(UserDetails);
    if(userDetails.isLoggedIn){
    return<>
            {props.children}    
        </>
    }else{
        return <div>You are not logged it. Please click <a style={{color:"lightblue"}}href="#/login">here</a> to login</div>
    }
}