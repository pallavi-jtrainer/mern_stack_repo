import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import TodoList from "./components/list.component.js";
import EditTodo from "./components/edit-todo.component.js";
import CreateTodo from "./components/create-todo.component.js";
import RemoveTodo from "./components/del-todo.component.js";
import TodoDetails from "./components/todo-details.component.js";

import "bootstrap/dist/css/bootstrap.min.css";


// const App = () => {
//     return (
//         <div>
//             Welcome to MERN!
//         </div>
//     );
// }

class App extends Component {
  render() {
    return (
      <Router> 
        <div>
          <Routes>
            <Route path='/' exact element={<TodoList/>}/>
            <Route path='/edit/:id' element={<EditTodo/>}/>
            <Route path='/create' element={<CreateTodo/>}/>
            <Route path='/delete/:id' element={<RemoveTodo/>}/>
            <Route path='/details/:id' element={<TodoDetails/>}/>
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;