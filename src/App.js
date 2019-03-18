import React, { Component } from 'react';
import "./App.css";
import Todo from './Todo';

const App = () => (
    <div className="App">
        <h2>Todoifier</h2>
        <br />
        <Todo description="Do one thing" />
        <Todo description="Do another thing" />
    </div>
);

export default App;
