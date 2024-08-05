<template>
  <Header />
  <ProductPage />
  <Footer />
</template>
<style scoped></style>
<script>
import Header from "@/components/Header.vue";
import ProductPage from "@/components/ProductPage.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Header,
    ProductPage,
    Footer,
  },
};
</script>
