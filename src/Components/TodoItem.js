import React from 'react';

function TodoItem({ userId, showDetails }) {
    return (
        <li>
            <span className="user-id" onClick={() => showDetails(userId)}>
                User ID: {userId}
            </span>
        </li>
    );
}

export default TodoItem;
