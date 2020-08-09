import React, {useState} from 'react';
import {Button} from '@material-ui/core';
import Todo from './Todo'
import './App.css';

function App() {
  const [todos, setTodos] = useState(['Take dogs to walk', 'Read the novel', 'complete python course']);
  const [input, setInput] = useState(['']);
  console.log(input);

  const addTodo = (event) => {
        event.preventDefault();
        console.log('working');
        setTodos([...todos, input]);
        setInput('');
      }

  return (
    <div className="App">
      <h1> Hello </h1>
      <form>
        <input value = {input} onChange = {event => setInput(event.target.value)} />
        <Button disabled= {!input} type= "submit" onClick = {addTodo} variant="contained" color="primary">
          Add todo 
        </Button>
      </form>
      <ul>
        {todos.map(todo => (
          <Todo todo= {todo} />
          ))}
      </ul>
    </div>
  );
}

export default App;
