import React, { useState, useReducer } from "react";
import { todoReducer, initialState } from "../reducers/index";


const Todo = () => {

    const [state, dispatch] = useReducer(todoReducer, initialState);
    const [newItem, setNewItem] = useState({
         item: "",
         completed: false 
        });

    const handleSubmit = event => {
        event.preventDefault();
        dispatch({ type: "ADD_TODO", payload: newItem })
        setNewItem({ 
            item: "",
            completed: false
        })
    }

    const handleChange = event => {
        setNewItem({ ...newItem, item: event.target.value, id: Date.now() })
    }
    
    const toggleChange = task => {
        dispatch({ type: "TOGGLE", payload: task })
    }

    const clearCompleted = event => {
        dispatch({ type: "CLEAR"})
    }

    return(
       <div>
      
            {state.map(task =>  
                <div onClick={ () => toggleChange(task) } className={ task.completed ? "completed" : "" } > 
                {task.item}
                </div>
            )}
            <br />
            <form  onSubmit={handleSubmit}>
                <input 
                    className="input"
                    placeholder="Add new task"
                    type="text"
                    name="newItem"
                    value={newItem.item}
                    onChange={handleChange}
                />
                <div>
                    <button className="button" onClick={handleSubmit}>Add New Task</button>
                    <button className="button" onClick={clearCompleted}>Clear Completed Task(s)</button>
                </div>
            </form>
              
        </div>
    )}

export default Todo;