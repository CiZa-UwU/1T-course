<template>
  <div class="v-main-wrapper">
  </div>
  <h3>Каталог:</h3>
  <vCatalog/>
  <h3>Корзина: </h3>
  <vCart />
</template>

<script>
import vCatalog from './v-catalog.vue'
import vCart from './v-cart.vue'
export default {
  name: 'v-main-wrapper',
  components: {
    vCatalog, vCart
  },
  props: {},
  data () {
    return {
    }
  },
  computed: {},
  methods: {},
  watch: {},
  mounted () {
    console.log('Im alive')
  }
}
</script>

<style>
.v-main-wrapper{
  display: flex;
  justify-content: flex-center;
  align-items: flex-start;
  max-width: 800px;
  margin: 0 auto;
}
h3{
  display: flex;
}
</style>
