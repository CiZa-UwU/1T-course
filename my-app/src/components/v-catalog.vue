<template>
  <div class="v-catalog">
    <div class="container">
      <div class="row">
        <p class="text-start col-12">Каталог:</p>
      </div>
      <div class="row mt-3">
        <vCatalogItem class="col-3 my-3 shadow py-4 mx-5"
          v-for="product in PRODUCTS"
          :key="product.article"
          :product_data="product"
          @addToCart = "addToCart"
        />
      </div>
      <router-link :to="{name: 'cart'}">
        <div class="v-catalog__link_to_cart text-start text-start my-3 td">
          Товаров в корзине: {{ QUANTITY_G }}
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import vCatalogItem from './v-catalog-item.vue'
import { mapActions, mapGetters } from 'vuex'
export default {
  components: { vCatalogItem },
  name: 'v-catalog',
  data () {
    return {}
  },
  methods: {
    ...mapActions(['GET_PRODUCTS_FROM_API', 'ADD_TO_CART']),
    addToCart (data) {
      this.ADD_TO_CART(data)
    }
  },
  computed: {
    ...mapGetters(['PRODUCTS', 'CART', 'QUANTITY_G'])
  },
  mounted () {
    this.GET_PRODUCTS_FROM_API()
      .then((response) => {
        if (response.data) {
          console.log('Данные пришли')
        }
      })
  }
}
</script>

<style scoped>
a{
  text-decoration: none;
}
</style>
