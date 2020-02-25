import React from "react"

export default function HeaderLinks(props){
    console.log(props)
    return <span className = "header-links">
    {
        props.isLogged ? <a href="/#" onClick={props.logout}>Logout</a> : 
        <span>
            <a href="/#" onClick={props.signIn}>Sing In</a> | 
            <a href="/#">Register</a>
        </span> 
    }
    </span>
}