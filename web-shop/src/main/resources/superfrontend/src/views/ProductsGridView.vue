<template>
  <Header />
  <ProductsPage />
  <Footer />
</template>
<style scoped></style>
<script>
import Header from "@/components/Header.vue";
import ProductsPage from "@/components/ProductsComp.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Header,
    ProductsPage,
    Footer,
  },
};
</script>
