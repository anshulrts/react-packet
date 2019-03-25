import React, { Component } from 'react';
import './NewTodo.css';
import { Button, Input, InputGroup } from "reactstrap";

class NewTodo extends Component {
    constructor(props) {
        super(props);
        this.state = { item: '' };
        this.handleUpdate = this.handleUpdate.bind(this);
        // This is the local addTodo
        this.addTodo = this.addTodo.bind(this);
    }
    render() { 
        return ( 
            <div className="NewTodo">
                <InputGroup>
                    <Input
                        type="text"
                        onChange = { this.handleUpdate }
                        value = { this.state.item }
                        placeholder = "Input item name goes here..."
                    />
                    <Button
                        onClick = { this.addTodo }
                        color = "primary"
                    >
                        Add
                    </Button>
                </InputGroup>
            </div>
        );
    }

    handleUpdate(event) {
        this.setState({ item: event.target.value });
    }

    addTodo() {
        this.props.addTodo(this.state.item);
        this.setState({item : ''});
    }
}
 
export default NewTodo;