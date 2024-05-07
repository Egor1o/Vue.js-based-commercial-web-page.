<template>
  <div class="formInput">
    <label :for="id" class="block mb-2 text-sm font-medium text-gray-900">{{ label }}</label>
    <input
        class="input w-full"
        :value="input"
        @input="handleChange($event.target.value)"
        @focus="handleFocus"
        @blur="handleBlur"
        :focused="focused.toString()"
        :data-testid="dataTestId"
    />
    <span v-if="!validation && firstTimeFocused && !focused" class="text-xs p-1 text-red-500">{{ errorMessage }}</span>
  </div>
</template>

<script setup>
import { defineProps, ref } from 'vue';

const props = defineProps({
  label: String,
  errorMessage: String,
  dataTestId: String,
  id: String,
  input: String,
  validation: Boolean,
  pattern: RegExp,
  pressed: Boolean
});

const emit = defineEmits(['update:input', 'update:validation']);

const focused = ref(false);
const firstTimeFocused = ref(false);

const handleChange = (value) => {
  validate(value);
  emit("update:input", value);
};

const handleFocus = () => {
  focused.value = true;
};

const handleBlur = () => {
  focused.value = false;
};

const validate = (value) => {
  firstTimeFocused.value = true;
  const isValid = props.pattern.test(value);
  emit("update:validation", isValid);
};
</script>

<style scoped>
/* Add your scoped styles here */
</style>
