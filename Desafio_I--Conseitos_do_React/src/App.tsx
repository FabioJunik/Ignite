import React from 'react';
import './App.scss';
import Header from './Components/Header';
import TaskList from './Components/TaskList';

function App() {
  return (
    <div className="App">
      <Header/>
      <TaskList/>
    </div>
  );
}

export default App;
