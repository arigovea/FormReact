import React from "react";
import Formulario from "./Components/Formulario.js";
import './App.css';
import Header from "./Components/Header"
import axios from "axios"
import PostsList from "./Components/PostsList"
export default class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      user:{
        userName: "Ari",
        password: "Hola123",
        isLogged: false
      },
      error: '',
      posts: []
    };
    this.logout = this.logout.bind(this);
    this.signIn = this.signIn.bind(this);
    console.log("Mount phase: constructor")
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((result) => {
      this.setState({
        posts: result.data
      })
    });
  }

  signIn(event){
    event.preventDefault();
    this.setState({user: {
      userName: "WemanConnect",
      password: "Anything123",
      isLogged: true
    }});

  }
  logout(event){
    event.preventDefault();
    this.setState({user: {
      userName: "Ari",
      password: "Hola123",
      isLogged: false
    }});
  }

  componentDidUpdate(){
    console.log("Updating phase: constructor")
  }

  componentWillUnmount(){
    console.log("Unmounting phase: constructor")
  }

static getDerivedStateFromError(error){
  return {error: error};
}

componentDidCatch(error, info){
  console.log('Error phase: ' + error)
}


render(){
  console.log(this.state.posts);
  if(this.state.error){
    return <div>{this.state.error}</div>
  }
  return (
  <div className="container">
      <Header 
      isLogged = {this.state.user.isLogged}
      logout = {this.logout}
      signIn = {this.signIn}
      />
      {
        this.state.user.isLogged ? 
          <PostsList posts = {this.state.posts}/> 
        :
         <Formulario 
        username={this.state.user.userName}
        password={this.state.user.password} /> 
      }
       <footer>By WemanConnect</footer>
    </div>
  );
}
}