<script>
    import articlesJson from '../assets/articles.json';
    import ArticlePreview from './ArticlePreview.vue';
    export default {
        data() {
            return {
                articles: []
            }
        },
        components: {
            ArticlePreview
        },
        mounted() {
            this.articles = articlesJson;
        }
    }
</script>

<template>
    <div class="container">
        <h1 class="page__title">Articles about tech and web</h1>
        <div class="container__articles">
            <div class="article-preview" v-for="article in articles" >
                <ArticlePreview :article="article" />
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
    grid-template-columns: 1fr;
    margin-top: 3rem;
    margin-bottom: 3rem;
}
.article-preview {
    border-radius: 1rem;
    background-color: var(--vt-c-black);
    opacity: 0.8;
}
.article-preview:hover {
    opacity: 0.9;
}
@media (min-width: 768px) {
    .container__articles {
        grid-template-columns: repeat(2, 1fr);
    }
}
@media (min-width: 1280px) {
    .container__articles {
        grid-template-columns: repeat(3, 1fr);
    }
}
@media (min-width: 1600px) {
    .container__articles {
        grid-template-columns: repeat(4, 1fr);
    }
}
</style>
