<script>
    import articlesJson from '../assets/articles.json';
    export default {
        data() {
            return {
                article: {}
            };
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
<h1>{{ article.title }}</h1>
<p>{{ article.content }}</p>
</template>

<style scoped>
</style>
