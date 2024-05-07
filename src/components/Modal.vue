<template>
  <Teleport to="#portal">
    <div v-if="open" class="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-70 z-50" @click="onCancel"></div>
    <div v-if="open" class="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-white p-12 z-50 rounded">
      <h1 class="mb-4 mx-2 text-center xs:text-left">{{ text }}</h1>
      <div class="flex flex-col xs:flex-row items-center justify-center">
        <button data-testid="confirmButton" class="btn btn-green mx-2 mb-2 w-24" @click="onSubmit">Confirm</button>
        <button data-testid="cancelButton" class="btn btn-red mx-2 mb-2 w-24" @click="onCancel">Cancel</button>
      </div>
    </div>
  </Teleport>
</template>

<script setup>

const props = defineProps({
  text: String,
  onSubmit: Function,
  onCancel: Function,
  open: Boolean
})



</script>
