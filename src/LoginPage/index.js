import { useContext, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import {Redirect} from "react-router-dom";
import { UserDetails } from "../Provider/UserLoginProvider";

const validUsers = {
    'shipra': '123',
    'divyansh': '456',
    'prapti' : '789'
}
const authenticateUser=({username, password})=>{
   const validusers = Object.entries(validUsers);
    console.log(validusers);
    let isValidUser = false;
   validusers.forEach((user)=>{
        if(user[0] === username && user[1] === password) {
            isValidUser = true;
            return true;
        }
    })
    if(isValidUser) return true;
    else return false;
}
export const Login=()=>{
    const userDetails = useContext(UserDetails);
    const [isValidUser, setValidUserFlag] = useState(false);
    const [isError, setError] = useState(false);

    const handleSubmit=(e)=>{
        const payload = {}
        e.preventDefault();
        const formdata = new FormData(e.target);
        for(let key of formdata){
            payload[key[0]] = key[1];
        }
        const isUserAuthenticated = authenticateUser(payload);
        setValidUserFlag(isUserAuthenticated);
        if(isUserAuthenticated){
            userDetails.isLoggedIn = true;
            userDetails.name = payload.username;
        }else setError(true);
    }
    return <div>
        {isValidUser && <Redirect to='/universities'/>}
        <form onSubmit={handleSubmit}>
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required/>
            <br/>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required/>
            <br/>
            <button type="submit">Login</button>
        </form>
        {isError && <div style={{color: "red"}}>Incorrect Username or password!!</div>}
    </div>
}