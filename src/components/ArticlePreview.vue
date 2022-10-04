<script>
    export default {
        data() {
            return {
                observer: null,
                isAppear: false
            };
        },
        props: {
            article: {
                id: Number, 
                title: String,
                description: String,
                previewImage: String,
                previewImageDescription: String,
                content: String
            }
        },
        mounted() {
            this.observer = new IntersectionObserver(
                this.onElementObserved, 
                {
                    root: null,
                    threshold: 0.25,
                }
            );
            this.observer.observe(this.$el);
        },
        methods: {
            onElementObserved(entries) {
                entries.forEach(entry => {
                    if (!entry.isIntersecting) {
                        return;
                    }
                    const animationDelay = this.calculateAnimationDelay(this.article.id);
                    setTimeout(() => {
                        this.isAppear = true;
                    }, animationDelay);
                    this.observer.unobserve(entry.target);
                });
            },
            calculateAnimationDelay(articleId) {
                    //<768px -  1 columns
                    //<1280px - 2 columns
                    //<1600px - 3 columns
                    //>1600px - 4 columns
                    const columnsNumber = window.innerWidth < 768 ? 1 :
                                             window.innerWidth < 1280 ? 2 :
                                                window.innerWidth < 1600 ? 3 :
                                                                             4;
                    let ratio = articleId % columnsNumber;
                    ratio = ratio !== 0 ? ratio : columnsNumber;
                    const animationDelayBasis = 200; // ms
                    return animationDelayBasis * ratio;
            },
            moveUp() {
                window.scrollTo(0, 0);
            }
        }
    }
</script>

<template>
    <div class="slide-in" :class="{appear: isAppear}">
        <router-link :to="/articles/ + article.id" class="article-preview__inner" @click="moveUp">
            <img class="article-preview__image" :src="article.previewImage" :alt="article.previewImageDescription" />
            <h2 class="article-preview__title">{{ article.title }}</h2>
            <p class="article-preview__description">{{ article.description }}</p>
        </router-link>
    </div>
</template>

<style scoped>
.article-preview__inner {
    display: flex;
    flex-direction: column;
    place-items: center center;
    text-align: center;
    padding: 3rem 2rem;
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
.slide-in {
    opacity: 0;
    transform: scale(0.8);
    transition: opacity 200ms ease-in, transform 400ms ease-in;
}
.slide-in.appear {
    opacity: 0.8;
    transform: scale(1);
}
</style>
