import React from 'react';
import './App.css';
import Todo from "./components/Todo";

function App() {
  return (
    <div  className="App">
      <header id="grad" className="App-header">
      <h1>Todo List</h1>
      <Todo />
      </header>
    </div>
  );
}

export default App;
