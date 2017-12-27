import React from 'react';
import ReactDOM from 'react-dom';

class TodoComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: ["walk", "eat", "sleep"]
        }
        
        this.deleteItem = this.deleteItem.bind(this);
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
            </div>
        );
    }
    
    deleteItem(item) {
        var newTodos = this.state.todos.filter(function(currentVal) {
            return item === currentVal ? false : true;
        }); 
        
        this.setState({todos: newTodos});
    }
}

class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }
    
    render() {
        return (
            <li>
                <div className="todo-item">
                    <span onClick={this.handleDelete}>x </span>
                    <span className="item-name">{this.props.item}</span>
                </div>
            </li>
        );
    }
    
    handleDelete() {
        console.log(this.props);
        this.props.onDelete(this.props.item);
    }
}

ReactDOM.render(<TodoComponent  />, document.getElementById("todo-wrapper") );
