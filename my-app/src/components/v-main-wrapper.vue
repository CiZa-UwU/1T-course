<template>
  <div class="v-main-wrapper">
    <h2>Магазин</h2>
  </div>
  <router-view></router-view>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'v-main-wrapper',
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
</style>
