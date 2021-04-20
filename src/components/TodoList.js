import React, { useEffect } from "react";
import TodoItem from "./TodoItem";
import FilterItem from "./FilterItem";
import create from "zustand";

import { todosAPI } from "api/todosAPI";
import { set } from "react-hook-form";

const useStore = create((set) => ({
  todos: [],
  fetchTodos: async () => {
    const data = await todosAPI.getTodos();
    set({ todos: data });
  },
}));

const useStoreUpdate = create((set) => ({
  todoUpdate: {},
  updateData: async (todo) => {
    await todosAPI.updateTodo(todo);
    set({ todoUpdate: todo });
  },
}));

function TodoList() {
  const todos = useStore((state) => state.todos);
  const fetchTodos = useStore((state) => state.fetchTodos);

  const todoUpdate = useStoreUpdate((state) => state.todoUpdate);
  const updateData = useStoreUpdate((state) => state.updateData);

  useEffect(() => {
    console.log("todoUpdate:", todoUpdate);
    fetchTodos();
  }, [fetchTodos, updateData]);

  const receiveDataUpdate = (todo) => {
    updateData(todo);
  };

  return (
    <div>
      <div className="content">
        <ul className="todo-list">
          {(todos ? todos : []).map((todo, id) => (
            <li key={id} className="todo-item">
              <TodoItem todo={todo} todoUpdate={receiveDataUpdate}>
                {todo.title}
              </TodoItem>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <FilterItem></FilterItem>
      </div>
    </div>
  );
}

export default TodoList;
