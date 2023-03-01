<template>
  <div class="wrapper-todo">

   <form @submit.prevent="addToDo">
    <div class="title has-text-centered">My ToDo list!</div>
    <div class="field has-addons mb-5">
      <div class="control">
        <input v-model="newToDoContent" class="input" type="text" placeholder="Add a ToDo">
      </div>
      <div class="control">
        <button :disabled="!newToDoContent" class="button is-info ml-2">
          Add
        </button>
      </div>
    </div>
   </form>

  <div 
  v-for="todo in todos" :key="todo.id" class="card mb-5"
  :class="{'has-background-success-light' : todo.done}">
    <div class="card-content">
      <div class="content">
        <div class="columns is-mobile is-vcentered">
          <div class="column"
          :class="{'has-text-success line-throught': todo.done}">
            {{ todo.content }}
          </div>
          <div class="column has-text-right my-5   is-6">
            <button
            :class="todo.done ? 'is-success' : 'is-light'"
            @click="togglerDone(todo.id)"
            class="button is-light">&check;</button>
            <button 
            @click="deleteToDo(todo.id)"
            class="button is-danger ml-2">&cross;</button>
          </div>
        </div>
      </div>
   </div>
  </div>
</div>
</template>

<script setup>
//  import
import { ref } from 'vue'
import { v4 as uid } from 'uuid'

//  todos
const todos = ref([])
//  methods
const newToDoContent = ref("")
const addToDo = () => {
  const newToDo = {
    id: uid(),
    content: newToDoContent.value,
    done: false
  };
  console.log('123')
  todos.value.unshift(newToDo)
}
const deleteToDo = (id) => {
  todos.value = todos.value.filter(todo => todo.id !== id)
}
const togglerDone = (id) => {
  const index = todos.value.findIndex(todo => todo.id === id);
  todos.value[index].done = !todos.value[index].done
}
</script>


<style>
  @import url("bulma/css/bulma.min.css");

  .wrapper-todo{
    max-width: 400px;
    padding: 20px;
    margin: 0 auto;
  }
  .line-throught{
    text-decoration: line-through;
  }
</style>