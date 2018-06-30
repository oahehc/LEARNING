import React from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';
import './index.css';
import Header from './Header'
import List from './List'
import InputField from './InputField'

class TodoApp extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: []
        };
    }

    componentDidMount() {
        // load todo list from json file OR by API
        fetch('./todos.json').then((response) => {
            console.log('response', response);
            return response.json();
        }).then((todos) => {
            console.log('todos', todos);
            this.setState({todos});
        });
    }

    _deleteTodo = (todos, id) => {
        const idx = todos.findIndex((todo) => todo.id === id);
        if (idx !== -1) 
            todos.splice(idx, 1);
        return todos;
    };
    _toggleTodo = (todos, id) => {
        const target = todos.find((todo) => todo.id === id);
        if (target) 
            target.completed = !target.completed;
        return todos;
    };
    _updateTodo = (todos, id, value) => {
        todos.forEach((todo) => {
            if (todo.id === id) 
                todo.title = value;
            }
        )
        return todos;
    };
    _createTodo = (todos, title) => {
        todos.push({
            id: todos[todos.length - 1].id + 1,
            title,
            completed: false
        });
        return todos;
    };

    updateTodosBy(updateFn) {
        return (...args) => {
            this.setState({
                todos: updateFn(this.state.todos, ...args)
            });
        };
    }

    render() {
        const {todos} = this.state;
        const name = 'Andrew';
        const todoCount = todos.filter((obj) => !obj.completed).length;
        return <div>
            <Header name={name} todoCount={todoCount}/>
            <InputField
                placeholder="新增待辦事項"
                onSubmitEditing={this.updateTodosBy(this._createTodo)}/>
            <List
                todos={todos}
                onDeleteTodo={this.updateTodosBy(this._deleteTodo)}
                onToggleTodo={this.updateTodosBy(this._toggleTodo)}
                onUpdateTodo={this.updateTodosBy(this._updateTodo)}/>
        </div>;
    }
}

ReactDOM.render(
    <TodoApp/>, document.getElementById('root'));