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
            class="button">&check;</button>
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
import { ref,onMounted } from 'vue'
import { collection, onSnapshot, addDoc, doc, deleteDoc, updateDoc, query, orderBy } from 'firebase/firestore'
import { db } from '@/firebase'

//firebase ref
const TodosCollectionRef = collection(db,'todos')
const TodosCollectionQuery = query(TodosCollectionRef, orderBy("date","desc")) 

//  todos
const todos = ref([])

// getToDos
onMounted(() => {
  onSnapshot(TodosCollectionQuery, (querySnapshot) => {
    const fbToDos = [];
    querySnapshot.forEach((doc) => {
      const todo = {
        id: doc.id,
        content: doc.data().content,
        done: doc.data().done
      }
      fbToDos.push(todo)
    });
    todos.value = fbToDos
  });
})

//  methods
const newToDoContent = ref("")

// add todo
const addToDo = () => {
    addDoc(TodosCollectionRef, {
    content: newToDoContent.value,
    done: false,
    date: Date.now()
  });
  newToDoContent.value = ""
}

// delete todo
const deleteToDo = (id) => {
  deleteDoc(doc(TodosCollectionRef,id))
}

// toggler
const togglerDone = (id) => {
  const index = todos.value.findIndex(todo => todo.id === id);

  updateDoc(doc(TodosCollectionRef, id), {
    done: !todos.value[index].done
  })
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