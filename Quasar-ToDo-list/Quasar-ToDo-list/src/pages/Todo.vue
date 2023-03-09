<template>
  <q-page class="bg-grey-3 q-px-md">
    <div class="row">
    <q-list class="col-8">
      <q-item 
      class="q-my-md todo"
      @click="task.done = !task.done"
      clickable
      :class="{'done bg-green-1': task.done}"
      v-for="(task, index) in tasks" :key="task.title"
      v-ripple>
        <q-item-section avatar>
          <q-checkbox v-model="task.done" val="teal" color="teal" class="no-pointer-events" />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ task.title }}</q-item-label>
        </q-item-section>
        <q-item-section
        v-if="task.done"
        side>
        <q-btn 
        @click.stop = "deleteTask(index)"
        flat round color="red" icon="delete"/>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
  </q-page>
</template>

<script>
export default{
  data(){
    return{
      tasks: [
        {
          title: 'Hello vue',
          done: false
        },
        {
          title: 'Hello world',
          done: false
        },
        {
          title: '123',
          done: false
        }
      ]
    }
  },
  methods:{
    deleteTask(index){
      this.$q.dialog({
        title: "Confirm",
        message: "Delete ToDo?" ,
        cancel: true,
        persistent: true
      })
      .onOk(()=>{
        this.tasks.splice(index, 1)
        this.$q.notify("Task deleted")
      })
    }
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
</style>