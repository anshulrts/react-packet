import React, { Component } from 'react';
import Todo from '../Todo';
import './TodoList.css';
import NewTodo from '../NewTodo';
import Divider from '../Divider';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = { items: ['item #1', 'item #2', 'Item #3'] };
        this.addTodo = this.addTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
    }

    render() { 
        return ( 
            <div className="TodoList">
                <NewTodo addTodo={this.addTodo} />
                { this.renderItems() }
            </div>
        );
    }

    renderItems() {
        return this.state.items.map(description => (
            <div key={"div-" + description}>
                <Todo
                    key={description}
                    description={description}
                    removeTodo={this.removeTodo}
                />
                <Divider key={"divide-" + description} />
            </div>
        ));
    }

    addTodo(item) {
        this.setState({ items: [...this.state.items, item] })
    }

    removeTodo(removeItem) {
        const filteredItems = this.state.items.filter(description => description !== removeItem);
        this.setState({items: filteredItems});
    }
}

export default TodoList;
