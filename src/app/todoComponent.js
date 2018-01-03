import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase';

import TodoItem from './todoItem';
import AddItem from './addItem';

var config = {
    apiKey: "AIzaSyDlaeqIV8pIaD8kniFqkQ3kI0v7js5wPn0",
    authDomain: "react-todo-app-269d5.firebaseapp.com",
    databaseURL: "https://react-todo-app-269d5.firebaseio.com",
    projectId: "react-todo-app-269d5",
    storageBucket: "react-todo-app-269d5.appspot.com",
    messagingSenderId: "49419111503"
};
firebase.initializeApp(config);
var dbRef = firebase.database().ref().child('todos');

class TodoComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: ["Loading..."]
        }
        
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
    }
    
    componentDidMount() {
        dbRef.on('value', snap => {
            console.log(snap.val());
            this.setState({todos: snap.val()});
        })
    }
    
    render() {
        var todosRendered = [];
        
        for (let i in this.state.todos) {
            todosRendered.push( <TodoItem key={i} item={this.state.todos[i]} dataKey={i} onDelete={this.deleteItem}/>);
        };
                
        return (
            <div id="todo-list">
                <p>Todos</p>
                <ul>
                    {todosRendered}
                </ul>
                <AddItem onAdd={this.addItem}/>
            </div>
        );
    }
    
    addItem(item) {
        dbRef.push(item);
    }
    
    deleteItem(key) {
        dbRef.child(key).remove();
    }
}

export default TodoComponent;


