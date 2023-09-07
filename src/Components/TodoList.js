import React, { useState, useEffect } from 'react';
import TodoDetails from './TodoDetails';
import TodoItem from './TodoItem';

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [uniqueUserIds, setUniqueUserIds] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((response) => response.json())
            .then((data) => {
                setTodos(data);
                const userIds = [...new Set(data.map((todo) => todo.userId))];
                setUniqueUserIds(userIds);
            })
            .catch((error) => console.error('Error fetching todos:', error));
    }, []);

    const showUserDetails = (userId) => {
        setSelectedUser(userId);
    };

    const deleteTodo = (todoId) => {
        const updatedTodos = todos.filter((todo) => todo.id !== todoId);
        setTodos(updatedTodos);
    };

    return (
        <div className="todo-list">

            <div className="user-list">
                <ul>
                    {uniqueUserIds.map((userId) => (
                        <TodoItem
                            key={userId}
                            userId={userId}
                            showDetails={showUserDetails}
                            deleteTodo={deleteTodo}
                            todos={todos}
                        />
                    ))}
                </ul>
            </div>
            <div className="todo-details">
                <TodoDetails userId={selectedUser} todos={todos} deleteTodo={deleteTodo} />
            </div>
        </div>
    );
}

export default TodoList;
