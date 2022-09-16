<script setup>
import Home from './components/Home.vue'
import Contacts from './components/Contacts.vue'
</script>

<template>
  <header>
    <div id="nav">
      <router-link to='/' class="nav-item">Tech blog</router-link>
      <router-link to='/contacts' class="nav-item">Contacts</router-link>
    </div>
  </header>
  <main>
    <router-view></router-view>
  </main>
  <footer>This blog is built using Vue.JS</footer>
</template>

<style scoped>
#nav {
  display: flex;
  justify-content: space-around;
  background-color: var(--vt-c-black);
  border-radius: 1rem;
  padding: 0.5rem;
}
.nav-item {
  padding: 0 0.5rem;
  border-radius: 1rem;
}
@media (hover: hover) {
  #nav a:hover {
    background-color: rgba(0, 189, 126, 0.2);
  }
}
header {
  height: var(--header-height);
}
footer {
  text-align: center;
  height: var(--footer-height);
  color: var(--color-text);
}
main {
  min-height: calc(100vh - var(--header-height) - var(--footer-height) - var(--app-padding) - var(--app-padding));
  display: flex;
  flex-direction: column;
  place-items: center center;
}
.footer-logo {
  width: 0.7rem;
  height: 0.7rem;
}
</style>
