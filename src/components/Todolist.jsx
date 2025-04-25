import React, { useState, useEffect } from 'react';
import ToDoForm from './ToDoForm';
import Todo from './Todo';


export const ToDoAPI = "https://to-do-code-challenge-server.vercel.app/todos";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  
  useEffect(() => {
    fetch(ToDoAPI)
      .then((r) => r.json())
      .then((d) => {
        setTodos(d); 
        console.log(d)
      })
      .catch((error) => {
        console.error("Error fetching todos:", error);
      });
  }, []); 

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter(todo => todo.id !== id));

    fetch(`${ToDoAPI}/${id}`, {
      method: 'DELETE'
    })
    .then(r=>r.json())
    .then(d=>console.log(d.id))
    .catch((err) => {
      console.error("Delete failed:", err);
    });
  };
  return (
    <div>
      <h1>Todo List</h1>
      <ToDoForm setTodos={setTodos} ToDoAPI={ToDoAPI} /> 
      <div>
        {todos.map((todo) => (
           <Todo  key={todo.id} todo={todo}  deleteTodo={deleteTodo}/>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
