<template>
  <router-link :to="`/orders/${order.id}`" class="block w-full p-6 border rounded-lg shadow bg-gray-800 border-gray-700 hover:bg-gray-700">
    <strong class="mb-2 card-text text-white">Order on {{ formattedDate }}</strong>
    <p class="card-secondary-text text-gray-300">{{ order.totalPrice }}€ ({{ order.totalProductCount }} products)</p>
  </router-link>
</template>

<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';



const props = defineProps({
    order: Object}
)
const router = useRouter();

const formattedDate = computed(() => {
  const datetime = new Date(props.order.createdAt);
  return datetime.toLocaleDateString('fi-FI');
});
</script>
