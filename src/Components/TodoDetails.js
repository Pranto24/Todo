import React from 'react';

function TodoDetails({ userId, todos, deleteTodo }) {
    const userTodos = todos.filter((todo) => todo.userId === userId);

    const handleDeleteClick = (todoId) => {
        deleteTodo(todoId);
    };

    return (
        <div>
            <h2>User Details</h2>
            {userTodos.length > 0 ? (
                <ul>
                    {userTodos.map((todo) => (
                        <li key={todo.id}>
                            <p>ID: {todo.id}</p>
                            <p>Title: {todo.title}</p>
                            <p>Completed: {todo.completed ? 'Yes' : 'No'}</p>
                            <button
                                className="delete-button"
                                onClick={() => handleDeleteClick(todo.id)}
                            >
                                Delete Task
                            </button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Select a user to view details.</p>
            )}
        </div>
    );
}

export default TodoDetails;
