import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
    render() {
        return <div className="Todo">{ this.props.description }</div>;
    }
}

export default Todo;