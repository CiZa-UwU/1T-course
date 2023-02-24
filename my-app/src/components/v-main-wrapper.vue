<template>
  <div class="v-main-wrapper">
  </div>
  <h3>Каталог:</h3>
  <vCatalog/>
  <h3>Корзина: </h3>
  <vCart
  v-if="CARD.length"
  :card_data="CARD" />
</template>
<script>
import vCatalog from './v-catalog.vue'
import vCart from './v-cart.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'v-main-wrapper',
  components: {
    vCatalog, vCart
  },
  props: {},
  data () {
    return {}
  },
  computed: {
    ...mapGetters(['CARD'])
  },
  methods: {},
  watch: {}
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
