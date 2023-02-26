import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    products: [],
    cart: [],
    sum: 0,
    flag: 0
  },
  getters: {
    PRODUCTS (state) {
      return state.products
    },
    CART (state) {
      return state.cart
    },
    SUM (state) {
      return state.sum
    }
  },
  mutations: {
    SET_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products
    },
    SET_CART: (state, product) => {
      state.cart.push(product)
    },
    REMOVE_FROM_CART: (state, index) => {
      state.cart.splice(index, 1)
    },
    SET_COST: (state, product) => {
      state.sum += product.price
    },
    SUBTRACT_COST: (state, index) => {
      state.sum -= state.cart[index].price
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
    ADD_TO_CART ({ commit }, product) {
      commit('SET_CART', product)
    },
    DELETE_FROM_CART ({ commit }, index) {
      commit('REMOVE_FROM_CART', index)
    },
    SET_COST ({ commit }, product) {
      commit('SET_COST', product)
    },
    SUBTRACT_COST ({ commit }, index) {
      commit('SUBTRACT_COST', index)
    }
  },
  modules: {
  }
})
