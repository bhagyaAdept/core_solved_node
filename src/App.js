import React, {Component} from 'react';
import './App.css';
import axios from "axios";
import UserForm from "./components/UserForm.js";

class App extends Component {
  state ={
    repos: null
  }
  getUser =(e) =>{
    e.preventDefault();
    const user = e.target.elements.username.value;
    axios.get(`https://us-central1-prooven1-3a324.cloudfunctions.net/api/${user}`)
    .then((res) => {
       console.log(res)
//const  repos = res.data.public_repos;
//console.log(repos);
    })
  }
  render(){
  return (
    <div className="App">
      <header className="App-header">
    <h1>Http calls</h1>
    <UserForm getUser={this.getUser}></UserForm>
      </header>
      
    </div>
  );
}
}
export default App;
