import React, { useRef } from 'react';
import { v4 } from 'uuid';

const TodoInput = ({ setTodo }) => {
  const inputRef = useRef(null);

  const addTodo = (e) => {
    e.preventDefault();
    const todoContent = inputRef.current.value;
    if (todoContent.trim() === "") {
      alert("할 일을 입력해주세요!");
      inputRef.current.focus();
      return;
    }
    setTodo((prev) => [...prev, { id: v4(), content: todoContent }]);
    inputRef.current.value = "";
  };

  return (
    <form action="" onSubmit={addTodo} className='todo-input'>    
      <input type="text" ref={inputRef} placeholder="할일을 작성해주세요!" />
      <button type="submit">확인</button>
    </form>
  );
};

export default TodoInput