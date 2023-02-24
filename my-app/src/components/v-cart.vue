<template>
    <div class="v-cart">
      <vCartItem
      v-for="(item, index) in card_data"
      :key="item.article"
      :card_item_data="item"
      @deleteFromCart="deleteFromCart(index)"
      ></vCartItem>
    </div>
</template>
<script>
import vCartItem from './v-cart-item.vue'
import { mapActions } from 'vuex'
export default {
  name: 'v-cart',
  props: {
    card_data: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    ...mapActions(['DELETE_FROM_CART']),
    deleteFromCart (index) {
      this.DELETE_FROM_CART(index)
    }
  },
  components: { vCartItem },
  data () {
    return {}
  }

}
</script>

<style>
  .v-cart{
    display: flex;
    justify-content: flex-center;
    align-items: flex-start;
    max-width: 800px;
    margin: 0 auto;
    flex-wrap: wrap;
  }
</style>
