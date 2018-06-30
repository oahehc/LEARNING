import React from 'react'
import PropTypes from 'prop-types'
import Item from './Item'

class List extends React.Component {
    static propTypes = {
        todos: PropTypes.array.isRequired,
        onDeleteTodo: PropTypes.func.isRequired,
        onToggleTodo: PropTypes.func.isRequired,
        onUpdateTodo: PropTypes.func.isRequired
    };
    render() {
        const {todos, onDeleteTodo, onToggleTodo, onUpdateTodo} = this.props;
        return (
            <ul>
                {todos.map((todo) => {
                    return <Item
                        title={todo.title}
                        completed={todo.completed}
                        key={todo.id}
                        onDelete={() => onDeleteTodo && onDeleteTodo(todo.id)}
                        onToggle={() => onToggleTodo && onToggleTodo(todo.id)}
                        onUpdate={(value) => onUpdateTodo && onUpdateTodo(todo.id, value)}/>
                })}
            </ul>
        )
    }
}
export default List