import React from "react";
import "./login.css"

const LoginPage = () => {
    
    return (
        <div className="cover">
            <h1>Login</h1>
            <input type="text" placeholder="username" />
            
            <input type="password" placeholder="password" />

            <div className="login-name">Login</div>
   
        </div>
    )
}
export default LoginPage