import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import './TodoList.css'

const TodoList = ({ list, onDelete }) => {
    return (
        <ul className="todo-list">
            {list.map((value, index) => (
                <TodoItem key={index} value={value} onDelete={() => onDelete(index)} />
            ))}
        </ul>
    );
};

export default TodoList;