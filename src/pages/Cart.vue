<template>
  <div>
    <div class="xs:grid sm:block xs:grid-cols-2">
      <div v-for="product in prods" :key="product.id" class="m-2 flex justify-between items-center">
        <CartProductCard :product="product" />
      </div>
    </div>
    <template v-if="prods.length > 0">
      <strong class="mx-2 xs:text-left text-center font-bold">Total price: {{ getTotalPrice() }}€</strong>
      <OrderForm />
    </template>
    <template v-else>
      <p class="mx-2">Shopping cart is empty</p>
    </template>
  </div>
</template>

<script setup>
import {inject, } from 'vue';
import OrderForm from "../components/OrderForm.vue";
import CartProductCard from "../components/CartProductCard.vue";
const v = [{"name":"product 1","price":100,"id":"6605ad4c01213f6b47166a61","quantity":4}]
const { cartProducts, getTotalPrice } = inject("context");
const prods = cartProducts.value
</script>

<style scoped>
/* Add your scoped styles here */
</style>
