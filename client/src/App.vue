<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'


</script>
<script>
export default {
  data() {
    return {
      logout: 0
    }
  }
}
</script>

<template>
  <Navbar :key="logout" @logout="logout++"></Navbar>
  <RouterView :key="logout" @login="logout++" />
</template>

<style scoped>

</style>
