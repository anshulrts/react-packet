import React, { Component } from 'react';
import styles from  './Todo.module.scss';

class Todo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            description: this.props.description,
            done: false,
            critical: false
        }

        this.markAsDone = this.markAsDone.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
        this.markCritical = this.markCritical.bind(this);
    }

    markAsDone() {
        this.setState({ done: true });
    }

    cssClasses() {
        let classes = [];

        if(this.state.critical) {
            classes = [styles.critical];
        }
        else {
            classes = [styles.todo];
        }
        if(this.state.done) {
            classes = [...classes, styles.done];
        }
        return classes.join(' ');
    }

    removeTodo() {
        this.props.removeTodo(this.state.description);
    }

    markCritical() {
        this.setState({ critical: true });
    }

    render() {
        return (
            <div className={this.cssClasses()}>
                { this.state.description }
            <br />
            <hr className={styles.redDivider} />
            <button className="MarkDone" onClick={ this.markAsDone }>Mark as Done</button>
            <button className="RemoveTodo" onClick={ this.removeTodo }>Remove Me</button>
            <button className="MarkCritical" onClick={ this.markCritical }>Mark as Critical</button>
            </div>
        );
    }
}

export default Todo;