import React from 'react';

const TodoItem = ({ value, onDelete }) => {
    return (
        <li>
            {value}
            <button onClick={onDelete}>Delete</button>
        </li>
    );
};

export default TodoItem;