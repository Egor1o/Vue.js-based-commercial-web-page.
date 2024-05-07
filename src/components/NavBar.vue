<template>
  <nav class="border-gray-200 py-1 px-2 bg-white sticky top-0 z-50">
    <div class="container flex flex-wrap items-center justify-between mx-auto max-w-xl w-full h-16">
      <router-link to="/" class="hidden xs:flex items-center sm:ml-0">
        <span class="ml-4 self-center text-xl font-semibold whitespace-nowrap">Web Shop</span>
      </router-link>
      <div class="hidden xs:block ml-2 w-auto" id="navbar-default">
        <div class="flex flex-row space-x-4 mt-0 text-sm font-medium border-0 py-4 px-1">
          <CustomLink dataTestId="productsNavLink" to="/products">Products</CustomLink>
          <CustomLink dataTestId="ordersNavLink" to="/orders">Orders</CustomLink>
          <CustomLink dataTestId="cartNavLink" to="/cart">Cart ({{ getTotalQuantity() }})</CustomLink>
        </div>
      </div>
      <div class="flex ml-2 items-center xs:hidden justify-between w-full text-sm font-medium py-4 px-1">
        <Burger :isOpen="menuOpen" :toggle="toggleHamburger" />
        <CustomLink to="/cart">Cart ({{ getTotalQuantity() }})</CustomLink>
      </div>
    </div>
    <div class="xs:hidden">
      <Menu :isOpen="menuOpen" :setOpen="toggleHamburger" />
    </div>
  </nav>
</template>

<script>
import { ref, computed, inject } from 'vue';
import Menu from './Menu.vue'; // Import Menu component
import Burger from './Burger.vue'; // Import Burger component
import CustomLink from './CustomLink.vue'; // Import CustomLink component

export default {
  components: {
    Menu,
    Burger,
    CustomLink
  },
  setup() {
    const menuOpen = ref(false);
    const { getTotalQuantity } = inject("context")

    const toggleHamburger = () => {
      menuOpen.value = !menuOpen.value;
    };

    return {
      menuOpen,
      getTotalQuantity,
      toggleHamburger
    };
  }
};
</script>

<style>
/* Add your styles here */
</style>
