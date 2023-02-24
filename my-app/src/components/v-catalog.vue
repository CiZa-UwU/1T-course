<template>
  <div class="v-catalog">
    <vCatalogItem
      v-for="product in PRODUCTS"
      :key="product.article"
      :product_data="product"
      @addToCard = "addToCard"
    />
  </div>
</template>

<script>
import vCatalogItem from './v-catalog-item.vue'
import { mapActions, mapGetters } from 'vuex'
export default {
  components: { vCatalogItem },
  name: 'v-catalog',
  props: {},
  data () {
    return {}
  },
  methods: {
    ...mapActions(['GET_PRODUCTS_FROM_API', 'ADD_TO_CARD']),
    addToCard (data) {
      this.ADD_TO_CARD(data)
    }
  },
  computed: {
    ...mapGetters(['PRODUCTS'])
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

<style>
    .v-catalog{
        display: flex;
        justify-content: space-between;
        margin: 20px;
        flex-wrap: wrap;
        align-items: center;
    }
</style>
