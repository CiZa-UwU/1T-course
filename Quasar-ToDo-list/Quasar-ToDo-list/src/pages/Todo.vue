<template>
  <q-page class="column bg-grey-3">
    <q-list
    separator
    bordered>
      <q-item 
      v-for="task in tasks" :key="task.title"
      tag="label" v-ripple>
        <q-item-section avatar>
          <q-checkbox v-model="task.done" val="teal" color="teal" />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ task.title }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
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
  }
}
</script>
