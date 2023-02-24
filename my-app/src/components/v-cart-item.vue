  <template>
    <div class="v-cart-item">
      <p class="card-header">{{ card_item_data.name }}</p>
      <img class="card-img" :src=" require('../assets/images/' + card_item_data.image)" alt="picture">
      <p class="card-text">{{ card_item_data.price }}</p>
      <p class="card-text">{{ card_item_data.about }}</p>
    <div class="v-card-item__quantity">
      <p>Quantity</p>
      <span>
        {{ card_item_data.quantity }}
      </span>
      <button @click="deleteFromCart">Delete</button>
    </div>
  </div>
  </template>
<script>
export default {
  name: 'v-cart-item',
  props: {
    card_item_data: {
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
