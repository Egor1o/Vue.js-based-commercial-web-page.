<template>
  <form class="mx-2 mt-4" @submit.prevent>
    <div class="grid gap-6 mb-6 sm:grid-cols-2">
      <FormInput
          label="First name"
          type="text"
          :pattern="firstNamePattern"
          :errorMessage="firstNameErrorMessage"
          v-model:input="firstName"
          v-model:validation="nameValid"
      />
      <FormInput
          label="Last name"
          type="text"
          :pattern="lastNamePattern"
          :errorMessage="lastNameErrorMessage"
          v-model:input="lastName"
          v-model:validation="surnameValid"
      />
      <FormInput
          label="Delivery address"
          type="text"
          :pattern="addressPattern"
          :errorMessage="addressErrorMessage"
          v-model:input="address"
          v-model:validation="addressValid"
      />
    </div>
    <button
        type="submit"
        :disabled="buttonDisabled"
        class="btn btn-blue w-full"
        data-testid="placeOrderButton"
        @click="openModal"
    >
      Place order
    </button>

    <Modal
        v-model:open="isModalOpen"
        @submit="placeOrder"
        @cancel="cancelOrder"
        text="Confirm order"
    />
  </form>
</template>

<script setup>
import {ref, reactive, computed, inject} from 'vue';
import { useRouter } from 'vue-router';
import FormInput from './FormInput.vue';
import Modal from './Modal.vue';

const firstNamePattern = /^[A-Za-z0-9]{2,150}$/;
const firstNameErrorMessage = 'First name should be 2-150 characters long and shouldn\'t include any special character!';
const lastNamePattern = /^[A-Za-z0-9]{2,150}$/;
const lastNameErrorMessage = 'Last name should be 2-150 characters long and shouldn\'t include any special character!';
const addressPattern = /^[A-Za-z0-9_ ]{10,150}$/;
const addressErrorMessage = 'Address should be 10-150 characters long and shouldn\'t include any special character!';

const firstName = ref('');
const lastName = ref('');
const address = ref('');
const isFormDirty = ref(false);
const isModalOpen = ref(false);
const nameValid = ref(false)
const surnameValid = ref(false)
const addressValid = ref(false)


const router = useRouter();

const {cartProducts,checkout} = inject('context');

const buttonDisabled = computed(() => {
  return (
      !nameValid.value  || !surnameValid.value || !addressValid.value
  );
});

async function placeOrder() {
  const response = await fetch('http://localhost:8080/api/orders', {
    method: 'POST',
    body: JSON.stringify({
      orderProducts: cartProducts.value,
      recipientInfo: {
        firstName: firstName.value,
        lastName: lastName.value,
        address: address.value
      }
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  checkout();
  const orderId = await response.json();
  router.push(`/orders/${orderId}`);
}

function openModal() {
  isModalOpen.value = true;
}

function cancelOrder() {
  isModalOpen.value = false;
}
</script>

<style scoped>
/* Add your scoped styles here */
</style>

