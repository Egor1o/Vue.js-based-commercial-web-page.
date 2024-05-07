<template>
  <div :data-testid="'productCard' + product.price">
    <img
        :class="['rounded-t-lg', { 'rounded-lg': addToCartButton }]"
        :src="`https://picsum.photos/seed/${product.id}/600/300`"
        crossOrigin="anonymous"
        alt="Product image"
        width="600"
        height="300"
        loading="lazy"
        decoding="async"
    />
    <div class="flex flex-col items-center p-5">
      <strong :class="['mb-2', 'card-text', { 'text-white': !addToCartButton }, { 'text-gray-700': addToCartButton }]">{{ product.name }}</strong>
      <p :class="['mb-3', 'card-secondary-text', { 'text-gray-300': !addToCartButton }, { 'text-gray-600': addToCartButton }]">{{ product.price }}€</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: Object,
    addToCartButton: Boolean
  }
};
</script>

<style scoped>
/* Add your scoped styles here */
</style>
