import TodoItem from "@/component/TodoItem";
import React from "react";

const TodoList = ({ todo, setTodo }) => {
  return (
    <ul className="todo-list">
      {todo.length === 0 && <p>할 일이 없습니다.</p>}
      {todo.map((item) => (
        <TodoItem key={item.id} item={item} setTodo={setTodo} />
      ))}
    </ul>
  );
};

export default TodoList;
