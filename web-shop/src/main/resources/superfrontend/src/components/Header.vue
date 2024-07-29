<template>
  <header>
    <main>
      <section class="bg-black"></section>
      <section class="bg-black">
        <div
          class="flex flex-col lg:flex-row lg:items-center lg:justify-center bg-black mx-auto lg:w-[1024px]"
        >
          <div class="flex flex-row justify-between items-center px-4 py-3">
            <button>
              <!-- TODO: hamburger meni -->
              <svg
                class="fill-white lg:w-0 w-[25px] py-2 my-[-40px]"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 50 50"
              >
                <path
                  d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"
                ></path>
              </svg>
            </button>
            <!-- LOGO -->
            <img
              class="mx-auto w-[145px] lg:w-[200px] py-2"
              src="../../public/assets/logo.svg"
            />

            <!-- PROFILE PICTURE -->
            <svg
              class="w-[25px] lg:w-0"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="#ffffff"
              stroke="#ffffff"
              stroke-width="0.00024000000000000003"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M12 1.2A4.8 4.8 0 1 0 16.8 6 4.805 4.805 0 0 0 12 1.2zm0 8.6A3.8 3.8 0 1 1 15.8 6 3.804 3.804 0 0 1 12 9.8zM20 22H4v-4.5A5.506 5.506 0 0 1 9.5 12h5a5.506 5.506 0 0 1 5.5 5.5zM5 21h14v-3.5a4.505 4.505 0 0 0-4.5-4.5h-5A4.505 4.505 0 0 0 5 17.5z"
                ></path>
                <path fill="none" d="M0 0h24v24H0z"></path>
              </g>
            </svg>
            <!-- SHOPPING CART -->
            <svg
              class="ml-2 w-[25px] lg:w-0"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="#ffffff"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M6.787 15.981l14.11-1.008L23.141 6H5.345L5.06 4.37a1.51 1.51 0 0 0-1.307-1.23l-2.496-.286-.114.994 2.497.286a.502.502 0 0 1 .435.41l1.9 10.853-.826 1.301A1.497 1.497 0 0 0 6 18.94v.153a1.5 1.5 0 1 0 1 0V19h11.5a.497.497 0 0 1 .356.15 1.502 1.502 0 1 0 1.074-.08A1.497 1.497 0 0 0 18.5 18H6.416a.5.5 0 0 1-.422-.768zM19.5 21a.5.5 0 1 1 .5-.5.5.5 0 0 1-.5.5zm-13 0a.5.5 0 1 1 .5-.5.5.5 0 0 1-.5.5zM21.86 7l-1.757 7.027-13.188.942L5.52 7z"
                ></path>
                <path fill="none" d="M0 0h24v24H0z"></path>
              </g>
            </svg>
          </div>
          <div class="flex-grow lg:ml-4">
            <form class="w-full px-2 py-2 mx-auto">
              <input
                type="text"
                v-model="searchTerm"
                placeholder="Unesite pojam za pretragu"
                class="bg-input outline px-6 py-1.5 mb-2 text-left rounded-full w-full text-black text-base"
              />
            </form>
          </div>
          <!-- LOGO -->
          <svg
            class="w-0 lg:w-[30px] mx-4"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="#ffffff"
            stroke="#ffffff"
            stroke-width="0.00024000000000000003"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M12 1.2A4.8 4.8 0 1 0 16.8 6 4.805 4.805 0 0 0 12 1.2zm0 8.6A3.8 3.8 0 1 1 15.8 6 3.804 3.804 0 0 1 12 9.8zM20 22H4v-4.5A5.506 5.506 0 0 1 9.5 12h5a5.506 5.506 0 0 1 5.5 5.5zM5 21h14v-3.5a4.505 4.505 0 0 0-4.5-4.5h-5A4.505 4.505 0 0 0 5 17.5z"
              ></path>
              <path fill="none" d="M0 0h24v24H0z"></path>
            </g>
          </svg>
          <!-- SHOPPING CART -->
          <svg
            class="w-0 lg:w-[30px]"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="#ffffff"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M6.787 15.981l14.11-1.008L23.141 6H5.345L5.06 4.37a1.51 1.51 0 0 0-1.307-1.23l-2.496-.286-.114.994 2.497.286a.502.502 0 0 1 .435.41l1.9 10.853-.826 1.301A1.497 1.497 0 0 0 6 18.94v.153a1.5 1.5 0 1 0 1 0V19h11.5a.497.497 0 0 1 .356.15 1.502 1.502 0 1 0 1.074-.08A1.497 1.497 0 0 0 18.5 18H6.416a.5.5 0 0 1-.422-.768zM19.5 21a.5.5 0 1 1 .5-.5.5.5 0 0 1-.5.5zm-13 0a.5.5 0 1 1 .5-.5.5.5 0 0 1-.5.5zM21.86 7l-1.757 7.027-13.188.942L5.52 7z"
              ></path>
              <path fill="none" d="M0 0h24v24H0z"></path>
            </g>
          </svg>
        </div>
      </section>
    </main>
  </header>
</template>
<style scoped>
@import "tailwindcss/tailwind.css";
.bg-input {
  background-size: 20px;
  background-image: url("../../public/assets/lupa.svg");
  background-repeat: no-repeat;
  background-position: right 10px center;
}
</style>
<script>
export default {};
</script>
