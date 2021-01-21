<template>
  <div class="main-container">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from './Header.vue'

export default {
  name: 'HomeLayout',
  components: {
    Header
  }
}
</script>

<style scoped>
.main-container {
  max-width: 1200px;
  margin: 0 auto;
}
</style>