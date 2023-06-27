import React, { useState } from 'react';

function ParentComponent() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Task 1', completed: false },
    { id: 2, text: 'Task 2', completed: false },
    { id: 3, text: 'Task 3', completed: false }
  ]);

  const handleComplete = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: true };
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  return (
    <div>
      <h2>Parent Component</h2>
      <ChildComponent todos={todos} handleComplete={handleComplete} />
    </div>
  );
}

function ChildComponent({ todos, handleComplete }) {
  return (
    <div>
      <h3>Child Component - Todo List</h3>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}{' '}
            {!todo.completed && (
              <button
                onClick={() => handleComplete(todo.id)}
                data-testid={`complete-button-${todo.id}`}
              >
                Complete
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ParentComponent;
