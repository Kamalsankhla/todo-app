import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import ToDoCreate from "./components/create-todo.component";
import ToDoEdit from "./components/edit-todo.component";
import ToDoList from "./components/list-todo.component";
import logo from "./logo.jpg";



class App extends Component {
render() {
  return(
    <Router>
     <div className= "container">
         <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <a className="navbar-brand" href="." target="_blank">
                 <img src={logo} width="30" height="30" alt="chuji"/>         
              </a>
              <Link to="/" className="navbar-brand">Blogging Framework</Link>
              <Link to="/" className="nav-link">ToDoList</Link>
              <Link to="/edit" className="nav-link">Edit</Link> 
              <Link to="/create" className="nav-link">Create</Link> 
               <div className="collapse nav-collapse">
                  <ul className="navbar-nav mr-auto">
                     <li className="navbar-item">
                        <Link to="/" className="nav-link">ToDoList</Link>
                     </li>
                     <li className="navbar-item">
                        <Link to="/edit" className="nav-link">Edit</Link> 
                     </li> 
                     <li className="navbar-item">
                        <Link to="/create" className="nav-link">Create</Link>
                    </li>
                 </ul>
               </div>
          </nav>
             
       <Route path='/' exact component = {ToDoList} />
       <Route path='/edit/:id' exact component = {ToDoEdit} />
       <Route path='/create' exact component = {ToDoCreate} />
     </div>
 </Router>
  );
}
} 

export default App;
