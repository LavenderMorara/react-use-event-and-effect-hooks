import './App.css';
import { useState } from 'react';
import Todolist from './components/Todolist';


function App() {

  const [todos, setTodos] = useState([])
  // console.log(data)

  // use useEffect hook to send request to jsonplaceholder api todos and update the state
  // write your code here


  return (
    <div className="App">
      <Todolist todos = {todos} title = "this is react"/>
    </div>
  );
}

export default App;
