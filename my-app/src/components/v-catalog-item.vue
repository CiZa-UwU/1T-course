<template>
<div class="v-catalog-item align-items-center">
    <p class="card-header">{{ product_data.name }}</p>
    <img class="card-img pb-4" :src=" require('../assets/images/' + product_data.image)" alt="picture">
    <p class="card-price fs-4">{{ product_data.price }} ₽</p>
    <p class="card-text">{{ product_data.about }}</p>
    <button class="card-btn" @click="addToCart">Add to cart</button>
</div>
</template>

<script>
export default {
  name: 'v-catalog-item',
  props: {
    product_data: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {}
  },
  methods: {
    addToCart () {
      this.$emit('addToCart', this.product_data)
    }
  }
}
</script>

<style>
    .card-header{
        font-size:20px;
        font-weight: 500;
    }
    .card-text{
        font-size: 15px;
    }
    .card-btn{
        border-radius: 10px;
        background: white;
        cursor: pointer;
    }
    .card-btn:hover{
        background: black;
        color: white;
    }
</style>
