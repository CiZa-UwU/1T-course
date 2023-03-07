<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
      </q-toolbar>
      <div class="q-px-lg q-py-md q-mb-md">
        <div class="text-h4">My ToDo-list</div>
        <div class="text-subtitle">{{ todayDate }}</div>
      </div>
      <q-img src="../assets/BrandYourself-Logo1.png" class="header-image absolute-top"/>
    </q-header>

    <q-drawer
        v-model="leftDrawerOpen"
        show-if-above
        :width="250"
        :breakpoint="600"
      >
        <q-scroll-area style="height: calc(100% - 185px); margin-top: 150px; border-right: 1px solid #ddd">
          <q-list padding>
            <q-item 
            to="/" exact clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="list" />
              </q-item-section>
              <q-item-section>
                Todos
              </q-item-section>
            </q-item>

            <q-item 
            to="/help" exact clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="help" />
              </q-item-section>
              <q-item-section>
                Help
              </q-item-section>
            </q-item>

            <q-item 
            to="/about" exact clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="link" />
              </q-item-section>
              <q-item-section>
                About
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>

        <q-img class="absolute-top image" style="height: 159px">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="../assets/user_avatar.png">
            </q-avatar>
            <div class="text-weight-bold">User Name</div>
            <div>@placeholder</div>
          </div>
        </q-img>
      </q-drawer>

    <q-page-container>
      <router-view v-slot="{Component}">
        <keep-alive>
          <component :is="Component"/>
        </keep-alive>
      </router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { date } from 'quasar'

export default defineComponent({
  name: 'MainLayout',

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  },
  computed:{
    todayDate() {
      const timeStamp = Date.now()
      return date.formatDate(timeStamp, "dddd D MMMM")
    }
  }
})
</script>

<style scoped lang="scss">
.header-image{
  height: 100%;
  width: 35%;
  z-index: -1;
  opacity: 0.3;
  margin-left: 400px;
}
.image{
  background-color: $primary;
}
</style>