import React from 'react';
import ReactDOM from 'react-dom';
import TodoItem from './todoItem';
import AddItem from './addItem';

import './css/index.css';

class TodoComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: ["walk", "eat", "sleep"]
        }
        
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
    }
    
    render() {
        var todos = this.state.todos;
        todos = todos.map((val, index) => {
            return <TodoItem key={index} item={val} onDelete={this.deleteItem}/>
        });
                
        return (
            <div id="todo-list">
                <p>Todos</p>
                <ul>
                    {todos}
                </ul>
                <AddItem onAdd={this.addItem}/>
            </div>
        );
    }
    
    addItem(item) {
        var newTodos = this.state.todos;
        newTodos.push(item);
        this.setState({todos: newTodos});
    }
    
    deleteItem(item) {
        var newTodos = this.state.todos.filter(function(currentVal) {
            return item === currentVal ? false : true;
        }); 
        
        this.setState({todos: newTodos});
    }
}



ReactDOM.render(<TodoComponent  />, document.getElementById("todo-wrapper") );
