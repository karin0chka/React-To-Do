import { useState } from "react";
import "./style.css"

export function TodoItem({completed, id, title, toggleTodo, deleteTodo}) {
  return (
    <li className="todoItem">
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        {title}
      </label>
      <button onClick={() => deleteTodo(id)} className="delete_btn">
        Delite
      </button>
    </li>
  );
}
