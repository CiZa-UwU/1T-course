  <template>
      <div class="v-cart-item col-3 my-3 shadow py-4 mx-5">
        <p class="card-header">{{ cart_item_data.name }}</p>
        <img class="card-img pb-4" :src=" require('../assets/images/' + cart_item_data.image)" alt="picture">
        <p class="card-text fs-4">{{ cart_item_data.price }} ₽</p>
        <p class="card-text">{{ cart_item_data.about }}</p>
        <button @click="deleteFromCart" class="btn btn-danger round">Delete</button>
      </div>
  </template>
<script>
export default {
  name: 'v-cart-item',
  props: {
    cart_item_data: {
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
    deleteFromCart () {
      this.$emit('deleteFromCart')
    }
  }
}
</script>

<style>
    .v-cart-item{
        margin: 35px;
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
