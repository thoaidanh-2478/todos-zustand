import React from "react";
import TodoItem from "./TodoItem";
import FilterItem from "./FilterItem";

function TodoList() {
  return (
    <div>
      <div className="content">
        <ul className="todo-list">
          <li className="todo-item">
            <TodoItem></TodoItem>
          </li>
        </ul>
      </div>
      <div>
        <FilterItem></FilterItem>
      </div>
    </div>
  );
}

export default TodoList;
