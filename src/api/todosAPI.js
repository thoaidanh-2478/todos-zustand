import axios from "axios";

const getTodos = async () => {
  let res = await axios.get("http://localhost:7689/api/todos");
  return res.data;
};

const addTodo = async (todo) => {
  let res = await axios.post("http://localhost:7689/api/todos", todo);
  return res.data;
};
const updateTodo = async (todo) => {
  return await axios.put(`http://localhost:7689/api/todos/${todo.id}`, todo);
};

const removeTodo = async (id) => {
  return await axios.delete(`http://localhost:7689/api/todos/${id}`);
};

export const todosAPI = {
  getTodos,
  addTodo,
  updateTodo,
  removeTodo,
};
