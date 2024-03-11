import React from 'react';
import './TodoForm.css'

const TodoForm = ({ newTask, onChange, onClick }) => {

    return <div className="todo-input">
        <input
            type="text"
            value={newTask}
            onChange={onChange}
            placeholder="Add a new task"
        />
        <button onClick={onClick}>Add</button>
    </div>
};

export default TodoForm;