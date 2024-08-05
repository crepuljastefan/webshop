<template>
  <div class="bg-gray-200 p-4">
    <section class="w-full rounded-md bg-white">
      <div>
        <!-- TODO: NAPRAVITI SLAJDER ZA SLIKE I BRENDOVE!-->
        <div class="flex flex-row justify-center items-center">
          <img class="mx-4 w-1/4" src="../../public/assets/nike.svg" alt="" />
          <img class="mx-4 w-1/4" src="../../public/assets/adidas.svg" alt="" />
          <img class="mx-4 w-1/4" src="../../public/assets/ck.svg" alt="" />
        </div>
      </div>
    </section>
    <section class="flex flex-col w-full bg-white my-2">
      <h2 class="text-lg text-center py-4 font-semibold font-['Cousine']">
        IZDVOJENO
      </h2>
      <!-- TODO: NAPRAVITI SLAJDER ZA SLIKE I BRENDOVE!-->
      <div class="flex flex-row text-sm text-wrap font-['Cousine']">
        <div v-if="loading">Products se ucitavaju</div>
        <Product
          v-else
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>
    </section>
    <section class="bg-white my-2">
      <img src="../../public/assets/sale.jpeg" />
    </section>
    <section class="bg-white my-2">
      <img src="../../public/assets/model1.webp" />
    </section>
    <section class="bg-white my-2">
      <img src="../../public/assets/model2.avif" alt="" />
    </section>
  </div>
</template>
<script>
import Product from "../components/ProductComp.vue";
import Menu from "../components/Menu.vue";
import { fetchSomeProducts } from "../components/utils.js";
export default {
  name: "HomePage",
  components: {
    Product,
    Menu,
  },
  data() {
    return {
      products: [],
      realprods: [],
      fetchSomeProducts,
      loading: true,
    };
  },
  created() {
    this.fetchSomeProducts(this.products, 2);
  },
};
</script>
<style scoped></style>
