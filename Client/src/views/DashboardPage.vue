<template>
  <div class="dashboard-page">
    <Navbar />
    <div class="content">
      <h2>Welcome to the Dashboard</h2>
      <TodoForm @addTodo="addTodo" />
      <TodoTable :todos="todos" @deleteTodo="deleteTodo" />
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Shared/AppNavbar.vue";
import TodoForm from "@/components/Dashboard/TodoForm.vue";
import TodoTable from "@/components/Dashboard/TodoTable.vue";

export default {
  components: { Navbar, TodoForm, TodoTable },
  data() {
    return {
      todos: [],
    };
  },
  methods: {
    addTodo(newTodo) {
      const id = this.todos.length ? this.todos[this.todos.length - 1].id + 1 : 1;
      this.todos.push({ ...newTodo, id });
    },
    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
  },
};
</script>

<style>
.dashboard-page {
  padding: 20px;
}
.content {
  margin-top: 20px;
}
h2 {
  color: #333;
}
</style>
