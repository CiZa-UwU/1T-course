import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    products: [],
    card: []
  },
  getters: {
    PRODUCTS (state) {
      return state.products
    },
    CARD (state) {
      return state.card
    }
  },
  mutations: {
    SET_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products
    },
    SET_CARD: (state, product) => {
      state.card.push(product)
    },
    REMOVE_FROM_CART: (state, index) => {
      state.card.splice(index, 1)
    }
  },
  actions: {
    GET_PRODUCTS_FROM_API ({ commit }) {
      return axios('http://localhost:3000/products', {
        method: 'GET'
      })
        .then((products) => {
          commit('SET_PRODUCTS_TO_STATE', products.data)
          return products
        })
        .catch((error) => {
          console.log(error)
          return error
        })
    },
    ADD_TO_CARD ({ commit }, product) {
      commit('SET_CARD', product)
    },
    DELETE_FROM_CART ({ commit }, index) {
      commit('REMOVE_FROM_CART', index)
    }
  },
  modules: {
  }
})
