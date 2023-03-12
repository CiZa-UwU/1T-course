<template>
  <q-page class="bg-grey-3 q-px-md items-center">
    <div class="row q-pa-sm">
      <q-input
      @keyup.enter = "AddTask" 
      class="col-8"      
      v-model="NewTask" label="Add new ToDo"
      >
      <template v-slot:append>
        <q-btn round icon="add"
        @click="AddTask"
        :disabled="!NewTask"/>
      </template>
      </q-input>
    </div>
    <div class="row">
    <q-list class="col-8">
      <q-item 
      class="q-my-md todo"
      @click="togglerDone(task.id)"
      clickable
      :class="{'done bg-green-1': task.done}"
      v-for="task in tasks" :key="task.title"
      v-ripple>
        <q-item-section avatar>
          <q-checkbox v-model="task.done" val="teal" color="teal" class="no-pointer-events" />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ task.content }}</q-item-label>
        </q-item-section>
        <q-item-section
        v-if="task.done"
        side>
        <q-btn 
        @click.stop = "deleteTask(task.id)"
        flat round color="red" icon="delete"/>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
  <div class="absolute-center no-tasks" v-if="!tasks.length">
    <q-icon
    name="check"
    size="155px"
    />
    <div class="text-h4 text-center">No Tasks!</div>
  </div>
  </q-page>
</template>

<script>

import { collection, onSnapshot, addDoc, doc, deleteDoc, updateDoc, query, orderBy } from 'firebase/firestore'
import { db } from '../firebase'

export default{
  data(){
    return{
      NewTask: "",
      tasks: []
    }
  },
  methods:{
    deleteTask(id){
      this.$q.dialog({
        title: "Confirm",
        message: "Delete ToDo?" ,
        cancel: true,
        persistent: true
      })
      .onOk(()=>{
        const TodosCollectionRef = collection(db,'tasks')
        deleteDoc(doc(TodosCollectionRef,id))
        this.$q.notify("Task deleted")
      })
    },
    AddTask(){
      let flag = 0;
      this.tasks.forEach(item => {
        if(item.content == this.NewTask.trim()){
          this.$q.notify({
          message: "Dublicate todo",
          color: "red"})
          flag = 1;
        }
      })
      if(this.NewTask.trim() && !flag){
        const TodosCollectionRef = collection(db,'tasks')
        addDoc(TodosCollectionRef, {
          name: this.NewTask,
          done: false,
          date: Date.now()
        })
      this.NewTask = ""
      }
      else if(!flag){
        this.$q.notify({
          message: "Enter something",
          color: "red"})
      }
    },
    togglerDone(id){
      const TodosCollectionRef = collection(db,'tasks')
      const index = this.tasks.findIndex(todo => todo.id === id);
      updateDoc(doc(TodosCollectionRef, id), {
        done: !this.tasks[index].done
      })
    }
  },
  mounted(){
    const TodosCollectionRef = collection(db,'tasks')
    const TodosCollectionQuery = query(TodosCollectionRef, orderBy("date","desc")) 
    onSnapshot(TodosCollectionQuery, (querySnapshot) => {
    const fbToDos = [];
    querySnapshot.forEach((doc) => {
      const todo = {
        id: doc.id,
        content: doc.data().name,
        done: doc.data().done
      }
      fbToDos.push(todo)
    });
    this.tasks = fbToDos
  });
  }
}
</script>
<style lang="scss" scoped>
.done{
  .q-item__label{
    text-decoration: line-through;
    color: grey;
  }
}
.todo{
  border: 1px solid rgba(86,61,124,.2)
}
.no-tasks{
  opacity: 0.5;
}
</style>