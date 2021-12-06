// import logo from './logo.svg';
import './App.css';

import { BrowerRouter as Router, Route, Routes } from 'react-router-dom';
import TodoList from './components/todolist';

function App() {
  return (
    <div className="container">
      <div>
        <h2>React TODO App (CRUD)</h2>
      </div>
      <TodoList/>
    </div>


    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
