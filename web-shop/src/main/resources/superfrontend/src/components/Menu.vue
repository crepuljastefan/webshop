<template>
  <div class="bg-white w-full max-w-[360px] absolute top-0 p-8 h-full">
    <button class="" @click="closeMenu">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="50"
        height="30"
        viewBox="0 0 50 50"
      >
        <path
          d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"
        ></path>
      </svg>
    </button>
    <hr class="border-gray-300 w-full my-4" />
    <div class="flex flex-col my-6 text-lg text-gray-600 font-['Cousine']">
      <router-link
        @click="closeMenu"
        to="/products"
        class="text-black font-bold text-xl"
        >Svi proizvodi</router-link
      >
      <router-link @click="closeMenu" class="hover:text-black"
        >Odeća</router-link
      >
      <router-link @click="closeMenu" class="hover:text-black"
        >Obuća</router-link
      >
      <router-link @click="closeMenu" class="hover:text-black"
        >Zimska garderoba</router-link
      >
      <router-link @click="closeMenu" class="hover:text-black"
        >Letnja garderoba</router-link
      >
      <router-link @click="closeMenu" class="font-bold text-black text-xl"
        >Popusti</router-link
      >
    </div>
  </div>
</template>
<style scoped></style>
<script>
export default {
  methods: {
    closeMenu() {
      this.$emit("close");
    },
  },
};
</script>
