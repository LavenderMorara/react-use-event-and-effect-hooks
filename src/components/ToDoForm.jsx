import React,{useState} from "react";


const ToDoForm = ({ setTodos, ToDoAPI }) => {
    const [task, setTask] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const newTodo = {task, status: "incomplete" };
      console.log("Posting todo:", newTodo);
      setTodos((prevTodos) => [...prevTodos, newTodo]);
  
    fetch(`${ToDoAPI}`, {
        method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(newTodo)
})
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log('Success:', data);
    setTodos((prevTodos) => [...prevTodos, data]);
  })
  .catch((error) => {
    console.error("Error posting todo:", error);
  });
  
      setTask(''); 
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a task..."
          required
        />
        <input type="submit" value="Add" />
      </form>
    );
  };
   export default ToDoForm;