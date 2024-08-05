<template>
  <div
    class="flex flex-col text-start p-2 bg-white font-helveticaNow justify-between mb-3"
  >
    <router-link
      :to="{
        name: 'product',
        params: { id: product.id },
      }"
    >
      <div class="flex flex-col font-semibold text-[13px]">
        <img :src="getImageUrl(product.imagePath)" />
        <p>{{ product.name }}</p>
        <p class="text-gray-500 font-normal">Muške patike</p>
      </div>
    </router-link>
    <div>
      <p class="mt-2 font-[500]">{{ product.price }} RSD</p>
    </div>
  </div>
</template>

<script>
import { getImageUrl } from "../components/utils";
export default {
  data() {
    return {
      getImageUrl,
    };
  },
  name: "ProductCardComp",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>
