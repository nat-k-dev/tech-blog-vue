<script>
    import articlesJson from '../assets/articles.json';
    import ToTopButton from './ToTopButton.vue';
    export default {
        data() {
            return {
                article: {}
            };
        },
        components: {
            ToTopButton
        },
        mounted() {
            this.article = this.fundById(this.$route.params.id);
        },
        methods: {
            fundById(id) {
                for (let i = 0; i < articlesJson.length; i++) {
                    if (id === articlesJson[i].id.toString()) {
                        return articlesJson[i];
                    }
                }
                return null;
            }
        }
    }
</script>

<template>
    <h1 class="page__title">{{ article.title }}</h1>
    <div class="article__content" v-html="article.content"></div>
    <ToTopButton />
</template>

<style scoped>
.article__content {
    max-width: 768px;
    line-height: 1.5rem;
    text-align: justify;
    margin-bottom: 3rem;
    color: black;
}
</style>
