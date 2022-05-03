import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { DeleteIcon, EditIcon } from "./Icon";

function Todo({todos, completeTodo, removeTodo, updateTodo}) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });
    
    const submitUpdate = value => {
        updateTodo(edit.id, value)
        setEdit({
            id: null,
            value: ''
        });
    }

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />
    }

    return todos.map((todo, index) => (
        <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} 
        key={index}> 
        
        <div key={todo.id} onClick={() => completeTodo(todo.id)}>
            {todo.text}
        </div>

        

        <div className="icons"> 
         <button onClick={() => removeTodo(todo.id)} className="icon-button">
         <DeleteIcon  className='delete-icon'/>
         </button>

         <button  onClick={() => setEdit({ id: todo.id, value: todo.text})} className="icon-button">
         <EditIcon className='edit-icon' />
         </button>
          
         
        
        
         
        </div>

        
        </div>
    ))
        
    
    
}
export default Todo;