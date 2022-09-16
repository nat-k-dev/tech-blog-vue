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
    <div class="container">
        <h1 class="page__title">Articles by Natalia K.</h1>
        <div class="container__articles">
            <div class="article-preview" v-for="article in articles">
                <router-link :to="/articles/ + article.id" class="article-preview__inner">
                    <img class="article-preview__image" :src="article.previewImage" :alt="article.previewImageDescription" />
                    <h2 class="article-preview__title">{{ article.title }}</h2>
                    <p class="article-preview__description">{{ article.description }}</p>
                </router-link>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    place-items: center center;
}
.container__articles {
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr 1fr;
    margin-top: 3rem;
    margin-bottom: 3rem;
}
.article-preview {
    padding: 1rem;
    border-radius: 1rem;
    background-color: var(--vt-c-black);
    opacity: 0.8;
}
.article-preview__inner {
    display: flex;
    flex-direction: column;
    place-items: center center;
    text-align: center;
}
.article-preview:hover {
    opacity: 0.9;
}
.article-preview__image {
    max-width: 20rem;
    height: 10rem;
}
.article-preview__title {
    margin-top: 1rem;
    margin-bottom: 1rem;
    height: 3rem;
    display: flex;
    place-items: center center;
    font-weight: 700;
}
.article-preview__description {
    color: var(--vt-c-text-dark-2);
}
@media (max-width: 768px) {
    .container__articles {
        grid-template-columns: 1fr;
    }
}
</style>
