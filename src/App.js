import React from 'react';
import Header from './Components/Header';
import Todoitem from './Components/Todoitem';


function App() {
    return (
        <div className="todo-list">
           
            <Todoitem />
            <Todoitem />
            <Todoitem />
            <Todoitem />
            <Todoitem />
        </div>


  );
}

export default App