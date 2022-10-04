<script>
    export default {
        mounted() {
            // When the user scrolls down 20px from the top of the document, show the button
            window.onscroll = () => { 
                if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                    this.$el.style.display = "block";
                } else {
                    this.$el.style.display = "none";
                }
            };
        },
        methods: {
            moveToTop() {
                window.scrollTo({top: 0, behavior: 'smooth'});
            }
        }
    }
</script>

<template>
    <button @click="moveToTop" id="toTopBtn" title="Go to top">&#129093;</button>
</template>

<style scoped>
#toTopBtn {
  display: none; 
  position: fixed;
  width: 2.8rem;
  height: 2.8rem;
  bottom: 1.5rem; 
  right: 2rem; 
  z-index: 99; 
  border: none; 
  outline: none; 
  background-color: hsla(160, 100%, 37%, 1);
  opacity: 0.8; 
  color: white; 
  cursor: pointer; 
  padding: 0; 
  border-radius: 50%; 
  font-size: 1rem;
  font-weight: 900;
}
#toTopBtn:hover {
  opacity: 1;
}
</style>
