import React from 'react';

import './css/addItem.css';

export default class AddItem extends React.Component {
    
    constructor(props) {
        super(props);
        this.handleAdd = this.handleAdd.bind(this);
    }
    
    render() {
        return (
            <form id="add-todo" onSubmit={this.handleAdd}>
                <input type="text" required ref="newItem"></input>
                <input type="submit" value="Hit me"></input>
            </form>
        );
    }
    
    handleAdd(event) {
        event.preventDefault();
        this.props.onAdd(this.refs.newItem.value); 
        this.refs.newItem.value = "";
    }
}