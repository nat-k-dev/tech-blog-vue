import  { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import Contacts from './components/Contacts.vue'
import Article from './components/Article.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/contacts', name: 'Contacts', component: Contacts },
    { path: '/articles/:id', name: 'Article', component: Article }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;