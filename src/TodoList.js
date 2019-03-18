import React, { Component } from 'react';
import Todo from './Todo';
import './TodoList.css';

class TodoList extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="TodoList">
                <Todo description="item #1"></Todo>
                <Todo description="item #2"></Todo>
            </div>
        );
    }
}

export default TodoList;
