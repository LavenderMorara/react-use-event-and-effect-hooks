import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


const Todo = ({todo, deleteTodo}) => {
 
  const handleClick = () => {
    console.log("Deleting ID:", todo.id);
    deleteTodo(todo.id);
  };

  return (
    <>
    <div  className="todosDivs">
       <p>{todo.task}</p> 
       <button 
       style={{ background: 'none', border: 'none'}}
       onClick={handleClick}>
       <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>   
    </>
  )
}

export default Todo