<script setup>
import Home from './components/Home.vue'
import Contacts from './components/Contacts.vue'
</script>

<template>
  <header>
    <div id="nav">
      <router-link to='/'>Tech blog</router-link>
      <router-link to='/contacts'>Contacts</router-link>
    </div>
  </header>

  <router-view></router-view>
</template>

<style scoped>
#nav {
  display: flex;
  justify-content: space-around;
}
</style>
