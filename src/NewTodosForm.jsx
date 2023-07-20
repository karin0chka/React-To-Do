import { useState } from "react";
import "./style.css"

export function NewTodoForm(props) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === "") return

    props.onSubmit(newItem)

    setNewItem("")
  }

  return (
    <>
      <form className="new-item-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="item" className="labelName">New Item :</label>
          <br />
          <input
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            id="item"
          />
        </div>
        <button className="add_btn">Add</button>
      </form>
    </>
  );
}
