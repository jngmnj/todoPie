import TodoInput from '@/component/TodoInput';
import TodoList from '@/component/TodoList';
import { useState } from 'react';
import { v4 } from 'uuid';
import './App.css';

function App() {
  const [todo, setTodo] = useState([{id: v4(), content: '리액트 공부하기'}]);


  return (
    <div className="container">
        <h1>Todo List</h1>
        <TodoInput setTodo={setTodo} />
        <TodoList todo={todo} setTodo={setTodo} />
    </div>
  );
}

export default App
