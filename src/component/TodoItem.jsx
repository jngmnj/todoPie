import React from 'react';

const TodoItem = ({item, setTodo}) => {
  return (
    <li className="todo-list-item">
      <p>{item.content}</p>
      <button
        onClick={() => {
          setTodo((prev) => prev.filter((todo) => todo.id !== item.id));
        }}
      >
        삭제
      </button>
    </li>
  );
}

export default TodoItem