<script>
    import articlesJson from '../assets/articles.json'
    export default {
        data() {
            return {
            articles: []
            }
        },
        mounted() {
            this.articles = articlesJson;
        }
    }
</script>

<template>
    <h1>Articles about tech by Natalia K.</h1>
    <div v-for="article in articles">
        <h2><router-link :to="/articles/ + article.id">{{ article.title }}</router-link></h2>
        <p>{{ article.description }}</p>
    </div>
</template>

<style scoped>
</style>
