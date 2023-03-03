import { createStore } from "vuex";
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '@/firebase'

export default createStore({
    state: {
      todos: []
    },
    getters:{
      TODOS(state){
        return state.todos
      }
    },
    mutations:{
      SET_TODOS_FROM_STATE: (state,todos) => {
        state.todos = todos
      }
    },
    actions:{
      GET_TODOS_FROM_FIRESTORE( {commit} ) {
        const TodosCollectionQuery = query(TodosCollectionRef, orderBy("date","desc"))
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
            commit('SET_TODOS_FROM_STATE',fbToDos)
            return fbToDos
          });
      }
    },
    modules:{}
})