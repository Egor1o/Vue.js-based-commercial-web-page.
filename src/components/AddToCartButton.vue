<template>
  <div class="inline-flex justify-center">
    <div v-if="getProductQuantity(product.id) > 0">
      <div class="inline">
        <button @click="removeFromCart(product.id)" class="btn w-10 inline-flex justify-center btn-red" data-testid="leftButton">
          -
        </button>
        <div :class="['inline-flex w-12 justify-center', textClassNames]">
          {{ getProductQuantity(product.id) }}
        </div>
        <button @click="addToCart(product)" class="btn w-10 inline-flex justify-center btn-blue" data-testid="rightButton">
          +
        </button>
      </div>
    </div>
    <div v-else>
      <button @click="addToCart(product)" class="btn btn-blue block w-32" data-testid="addToCartButton">
        Add to cart
      </button>
    </div>
  </div>
</template>

<script setup>
import {inject, } from 'vue';
const { addToCart, removeFromCart, getProductQuantity } = inject("context");

const props = defineProps({
  product: {
    type: Object,
    required: true
  },
  textClassNames: {
    type: String,
    default: ''
  }
});
</script>
