import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import ToDoCreate from "./components/create-todo.component";
import ToDoEdit from "./components/edit-todo.component";
import ToDoList from "./components/list-todo.component";

class App extends Component {
render() {
  return(
    <Router>
     <div className= "container">
      <h2>This is for testing purpose</h2>
      <Route path='/' exact component = {ToDoList} />
      <Route path='/edit/:id' exact component = {ToDoEdit} />
      <Route path='/create' exact component = {ToDoCreate} />
     </div>
 </Router>
  );
}
} 

export default App;
