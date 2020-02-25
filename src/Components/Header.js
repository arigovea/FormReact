import React from "react"
import HeaderLinks from "./HeaderLinks"

export default function Header(props){
    //throw new Error('User not found');
    console.log(props)
    return <header className="app-header">
        <h1>
        Test App Made by React
        </h1>
      <HeaderLinks isLogged={props.isLogged} logout={props.logout} signIn={props.signIn}/>
    </header>
}