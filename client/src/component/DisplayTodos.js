

import React from 'react';
import TodoList from './TodosList';
import AddTodo from './addTodos';

const DisplayTodos = () => {
    return (
        <div>
            <TodoList></TodoList>
            <AddTodo></AddTodo>
        </div>
    );
}

export default DisplayTodos;
