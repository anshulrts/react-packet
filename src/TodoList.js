import React, { Component } from 'react';
import Todo from './Todo';
import './TodoList.css';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = { items: ['item #1', 'item #2', 'Item #3'] };
    }

    render() { 
        return ( 
            <div className="TodoList">
                { this.renderItems() }
            </div>
        );
    }

    renderItems() {
        return this.state.items.map(description => (
            <Todo key={description} description={description} />
        ));
    }
}

export default TodoList;
