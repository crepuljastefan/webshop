<template>
  <Header />
  <HomePage />
  <Footer />
</template>
<style scoped></style>
<script>
import Header from "@/components/Header.vue";
import HomePage from "@/components/HomePage.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Header,
    HomePage,
    Footer,
  },
};
</script>
