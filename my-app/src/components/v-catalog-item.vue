<template>
<div class="v-catalog-item">
    <p class="card-header">{{ product_data.name }}</p>
    <img class="card-img" :src=" require('../assets/images/' + product_data.image)" alt="picture">
    <p class="card-text">{{ product_data.price }}</p>
    <p class="card-text">{{ product_data.about }}</p>
    <button class="card-btn" @click="SendDataToPerant">Add to cart</button>
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
    SendDataToPerant () {
      this.$emit('hello', this.product_data.article)
    }
  }
}
</script>

<style>
    .v-catalog-item{
        margin: 15px;
        box-shadow: 10px,10px,5px,grey;
    }
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
