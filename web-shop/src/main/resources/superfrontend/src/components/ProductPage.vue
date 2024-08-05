<template>
  <div class="flex flex-col p-4 font-['Cousine']">
    <h2 class="font-bold text-2xl">{{ this.product.name }}</h2>
    <h3 class="text-sm font-bold">Muškarci</h3>
    <img
      class="object-contain w-2/3 mx-auto"
      :src="getImageUrl(this.product.imagePath)"
    />
    <h3 class="text-xl font-bold font-['Cousine']">
      {{ this.product.price }} RSD
    </h3>
    <button>
      <div
        class="my-2 bg-black text-white p-4 rounded-3xl font-sans font-bold drop-shadow-md hover:opacity-85 hover:transition-all transition-all"
      >
        Dodaj u korpu
      </div>
    </button>
    <button>
      <div
        class="my-3 bg-white text-black p-2 rounded-3xl font-sans font-bold border-gray-400 border-[1px] hover:border-black hover:transition-all transition-all"
      >
        <div class="flex flex-row justify-center items-center">
          <p class="text-center">Dodaj u favorite</p>
          <svg
            class="ml-2"
            width="33px"
            height="33px"
            viewBox="0 0 64.00 64.00"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="#000000"
            stroke-width="1.9990000000000001"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M35.54 15.44 32 19l-3.54-3.53A11.67 11.67 0 0 0 12 31.94l3.54 3.54 8.25 8.25L32 52l8.25-8.25 8.25-8.25 3.5-3.56a11.67 11.67 0 0 0-16.5-16.5z"
              ></path>
            </g>
          </svg>
        </div>
      </div>
    </button>
  </div>
</template>
<script>
import axios from "axios";
import { getImageUrl } from "./utils";
export default {
  data() {
    return {
      product: {},
    };
  },
  computed: {
    productId() {
      return this.$route.params.id;
    },
  },
  methods: {
    getImageUrl,
    async fetchProduct() {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/v1/products/${this.productId}`
        );
        this.product = response.data;
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    },
  },
  created() {
    this.fetchProduct();
  },
};
</script>
