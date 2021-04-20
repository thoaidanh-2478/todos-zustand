import create from "zustand";
import { todosAPI } from "api/todosAPI";

const useFetchData = create((set) => ({
  todos: [],
  fetchTodos: async () => {
    const data = await todosAPI.getTodos();
    set({ todos: data });
  },
}));

export const useStore = { useFetchData };
