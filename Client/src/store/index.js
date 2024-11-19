import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
  state: {
    user: null,
    todos: [],
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    SET_TODOS(state, todos) {
      state.todos = todos;
    },
    ADD_TODO(state, todo) {
      state.todos.push(todo);
    },
    DELETE_TODO(state, id) {
      state.todos = state.todos.filter(todo => todo.id !== id);
    },
  },
  actions: {
    async fetchTodos({ commit }) {
      const { data } = await axios.get('http://localhost:3000/todos');
      commit('SET_TODOS', data);
    },
    async addTodo({ commit }, todo) {
      const { data } = await axios.post('http://localhost:3000/todos', todo);
      commit('ADD_TODO', data);
    },
    async deleteTodo({ commit }, id) {
      await axios.delete(`http://localhost:3000/todos/${id}`);
      commit('DELETE_TODO', id);
    },
  },
});

export default store;
