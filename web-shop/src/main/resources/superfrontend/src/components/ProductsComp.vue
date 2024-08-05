<template>
  <div class="flex flex-col p-4">
    <div class="flex flex-row justify-between items-center">
      <p class="text-gray-500">1860 results</p>
      <button>
        <div
          class="bg-white justify-center items-center flex flex-row font-sans border-gray-400 border-[1px] rounded-3xl px-6 text-[16px] font-bold py-1 hover:border-black hover:transiton-all transition-all"
        >
          Filteri
          <svg
            class="w-[25px] ml-2"
            fill="#000000"
            viewBox="0 0 256 256"
            id="Flat"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#000000"
            stroke-width="3.9990000000000001"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M83.99951,87.99353h-.00012l-44-.001a4,4,0,0,1,.00012-8h.00012l44,.001a4,4,0,0,1-.00012,8Zm136,84a4.00019,4.00019,0,0,1-4,4H191.65967a23.99507,23.99507,0,0,1-47.32031,0H39.99951a4,4,0,0,1,0-8H144.33936a23.99507,23.99507,0,0,1,47.32031,0h24.33984A4.0002,4.0002,0,0,1,219.99951,171.99353Zm-36,0a16,16,0,1,0-16,16A16.01833,16.01833,0,0,0,183.99951,171.99353Zm-104-88a23.99775,23.99775,0,0,1,47.66016-4l88.33984-.001a4,4,0,0,1,0,8l-88.33984.001a23.99775,23.99775,0,0,1-47.66016-4Zm8,0a16,16,0,1,0,16-16A16.01833,16.01833,0,0,0,87.99951,83.99353Z"
              ></path>
            </g>
          </svg>
        </div>
      </button>
    </div>
    <hr class="border-gray-300 my-3" />
    <div class="grid grid-cols-2">
      <Product
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>

    <div class="flex flex-row transition-all justify-center items-center">
      <button v-on:click="prevPage" v-if="this.page >= 1">
        <svg
          class="h-[40px] w-[40px]"
          fill="#000000"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <g id="Circle_Chev_Left" data-name="Circle Chev Left">
              <g>
                <path
                  d="M10.15,12.35a.492.492,0,0,1,0-.7l3-3a.495.495,0,0,1,.7.7L11.21,12l2.64,2.65a.495.495,0,0,1-.7.7Z"
                ></path>
                <path
                  d="M12,21.933A9.933,9.933,0,1,1,21.933,12,9.944,9.944,0,0,1,12,21.933ZM12,3.067A8.933,8.933,0,1,0,20.933,12,8.943,8.943,0,0,0,12,3.067Z"
                ></path>
              </g>
            </g>
          </g>
        </svg>
      </button>
      <button
        v-on:click="firstPage"
        v-if="this.page != 0"
        class="rounded-full w-[34px] h-[34px] border-[1px] hover:transition-all transition-all hover:bg-black hover:text-white border-black"
      >
        1
      </button>
      <div
        v-if="this.page > 1"
        class="mx-1 transition-all hover:transition-all hover:bg-black hover:text-white rounded-full text-center w-[34px] h-[34px] border-[1px] border-black"
      >
        ...
      </div>
      <button
        v-on:click="prevPage"
        v-if="this.page == this.totalPages"
        class="mx-1 rounded-full w-[34px] h-[34px] border-[1px] hover:transition-all transition-all hover:bg-black hover:text-white border-black"
      >
        {{ this.page }}
      </button>
      <button
        class="mx-1 rounded-full w-[34px] h-[34px] border-[1px] bg-black text-white border-black"
      >
        {{ this.page + 1 }}
      </button>

      <button
        v-if="this.page != this.totalPages"
        v-on:click="nextPage"
        class="mx-1 transition-all hover:transition-all hover:bg-black hover:text-white rounded-full w-[34px] h-[34px] border-[1px] border-black"
      >
        {{ this.page + 2 }}
      </button>
      <div
        v-if="this.page < this.totalPages - 2"
        class="mx-1 transition-all hover:transition-all hover:bg-black hover:text-white rounded-full text-center w-[34px] h-[34px] border-[1px] border-black"
      >
        ...
      </div>

      <button
        v-on:click="lastPage"
        v-if="this.page < this.totalPages - 1"
        class="mx-1 transition-all hover:transition-all hover:bg-black hover:text-white rounded-full w-[34px] h-[34px] border-[1px] border-black"
      >
        {{ this.totalPages + 1 }}
      </button>
      <button v-on:click="nextPage" v-if="this.page < this.totalPages - 2">
        <svg
          fill="#000000"
          width="40px"
          height="40px"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <g id="Circle_Chev_Right" data-name="Circle Chev Right">
              <g>
                <path
                  d="M13.85,11.65a.492.492,0,0,1,0,.7l-3,3a.495.495,0,0,1-.7-.7L12.79,12,10.15,9.35a.495.495,0,0,1,.7-.7Z"
                ></path>
                <path
                  d="M12,2.067A9.933,9.933,0,1,1,2.067,12,9.944,9.944,0,0,1,12,2.067Zm0,18.866A8.933,8.933,0,1,0,3.067,12,8.943,8.943,0,0,0,12,20.933Z"
                ></path>
              </g>
            </g>
          </g>
        </svg>
      </button>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Product from "@/components/ProductComp.vue";
import { fetchSomeProducts } from "./utils";
export default {
  data() {
    return {
      products: [],
      fetchSomeProducts,
      page: 0,
      totalPages: 0,
      size: 10,
    };
  },
  components: {
    Product,
  },
  methods: {
    firstPage() {
      this.page = 0;
      this.fetchSomeProducts(this.page, this.size);
    },
    prevPage() {
      this.page -= 1;
      this.fetchSomeProducts(this.page, this.size);
    },
    nextPage() {
      this.page += 1;
      this.fetchSomeProducts(this.page, this.size);
    },
    lastPage() {
      this.page = this.totalPages;
      this.fetchSomeProducts(this.page, this.size);
    },
    async getPages() {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/v1/products/count?size=${this.size}`
        );
        this.totalPages = response.data;
      } catch (error) {
        console.error(error);
      }
    },
  },
  computed() {},
  async created() {
    await this.getPages();
    await this.fetchSomeProducts(this.page, this.size);
  },
};
</script>
<style scoped></style>
