import React from "react"
import "./style.css"

function ToDoItem(){
    return(
        <div className="todo-item">
            <input type="checkbox" />
            <label>Checkbox</label>
            <br />
        </div>
    );
}

export default ToDoItem