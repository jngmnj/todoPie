
import Advice from '@/component/Advice';
import Clock from '@/component/Clock';
import StopWatch from '@/component/StopWatch';
import Timer from '@/component/Timer';
import TodoInput from '@/component/TodoInput';
import TodoList from '@/component/TodoList';
import { useState } from 'react';
import { v4 } from 'uuid';
import './App.css';

function App() {
  const [todo, setTodo] = useState([{id: v4(), content: '리액트 공부하기'}]);


  return (
    <div className="container">
      <div className="left">
        <h1>Todo List</h1>
        <TodoInput setTodo={setTodo} />
        <TodoList todo={todo} setTodo={setTodo} />
      </div>
      <div className="right">
        <Clock /> 
        <Advice />
        <StopWatch />
        <Timer />
      </div>
    </div>
  );
}

export default App
