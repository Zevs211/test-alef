<template>
  <div class="wrapper">
    <label class="label" for="description">{{ label }}</label>
    <input
      id="description"
      :type="type"
      autocomplete="off"
      :value="modelValue"
      @input="onInput"
    >
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

defineProps({
  type: {
    type: String,
    default: 'text',
    validator: (value) => ['text', 'number'].includes(value),
  },
  label: {
    type: String,
    required: true,
  },
  modelValue: {
    type: [String, Number],
  },
});

const emits = defineEmits(['update:modelValue']);

function onInput(event) {
  emits('update:modelValue', event?.target?.value);
}
</script>

<style lang="scss" scoped>
  .wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 56px;

    background: #FFFFFF;
    border: 1px solid #F1F1F1;
    border-radius: 4px;
    box-sizing: border-box;
    .label {
      padding-left: 16px;
      padding-top: 8px;
      font-style: normal;
      font-weight: normal;
      font-size: 13px;
      line-height: 16px;
      color: #1111117a;
    }
    input {
      width: 100%;
      padding-left: 16px;
      padding-top: 2px;
      outline: none;
      line-height: inherit;
      box-sizing: border-box;
    }
  }
</style>
