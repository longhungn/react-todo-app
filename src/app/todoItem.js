import React from 'react';

import './css/todoItem.css';

export default class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
        this.scratch = this.scratch.bind(this);
        this.state = {
            decoration: ""
        }
    }
    
    render() {
        return (
            <li>
                <div className="todo-item">
                    <span className={"item-name " + this.state.decoration} onClick={this.scratch}>{this.props.item}</span>
                    <span onClick={this.handleDelete}>x </span>
                </div>
            </li>
        );
    }
    
    scratch() {
        if (this.state.decoration === "") {
            this.setState({decoration: "strikethrough"});
        } else {
            this.setState({decoration: ""});
        }
    }
    
    handleDelete() {
        // console.log(this.props);
        this.props.onDelete(this.props.dataKey);
    }
}