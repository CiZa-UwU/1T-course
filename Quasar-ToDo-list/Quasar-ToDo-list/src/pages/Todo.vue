<template>
  <q-page class="column bg-grey-3">
    <q-list
    separator
    bordered>
      <q-item
      @click="task.done = !task.done"
      clickable
      :class="{'done bg-green-1': task.done}"
      v-for="task in tasks" :key="task.title"
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
        x
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
<style lang="scss" scoped>
.done{
  .q-item__label{
    text-decoration: line-through;
    color: grey;
  }
}
</style>