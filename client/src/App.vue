<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'

</script>

<template>
  <Navbar v-bind="this.routes"></Navbar>
  <RouterView />
</template>

<style scoped>

</style>
