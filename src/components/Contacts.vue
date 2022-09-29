<template>
    <div class="container">
        <h1 class="page__title">Contacts</h1>
        <p class="container__text">Hello! I am a frontend and websites developer. I am passionate about website’s interfaces and I like to share my knowledge and create helpful instructions. I hope you find something useful reading this blog. If you want to know more about me, please visit my website:</p>
        <a class="container__button" href="https://natkdev.com/" target="_blank" rel="">natkdev.com</a>
    </div>
</template>

<style scoped>
.container {
    max-width: 20rem;
    display: flex;
    flex-direction: column;
    place-items: center center;
    gap: 2rem;
    color: var(--color-text);
}
.title {
    padding: 2rem 1rem 1rem;
}
.container__text {
    text-align: center;
}
.container__button {
    background-color: var(--vt-c-black);
    opacity: 0.9;
    padding: 0.5rem 1rem;
}
.container__button:hover {
    opacity: 0.8;
}
</style>
