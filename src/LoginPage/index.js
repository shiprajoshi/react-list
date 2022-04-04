import { useContext, useState } from "react";
import {Redirect} from "react-router-dom";
import { UserDetails } from "../Provider/UserLoginProvider";

const validUsers = {
    'shipra': '123',
    'divyansh': '456',
    'prapti' : '789'
}
const authenticateUser=({username, password}) => {
    if (validUsers[username] && validUsers[username] === password) {
        return true
    }

    return false
}

export const Login=()=>{
    const userDetails = useContext(UserDetails);
    const [isError, setError] = useState(false);
    const handleSubmit=(e)=>{
        const payload = {}
        e.preventDefault();
        const formdata = new FormData(e.target);
        for(let key of formdata){
            payload[key[0]] = key[1];
        }
        const isUserAuthenticated = authenticateUser(payload);
        if(isUserAuthenticated){
            const userdata ={
                isLoggedIn: true,
                name: payload.name
            }
            userDetails.setUserDetails({...userdata})
        }else setError(true);
    }
    return <div>
        {userDetails.isLoggedIn && <Redirect to='/universities'/>}
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