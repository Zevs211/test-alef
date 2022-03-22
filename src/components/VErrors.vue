<template>
  <div class="error mt-section">
  <div
    v-for="(error, index) in errors"
    :key="index"
    class="error--row"
    :class="{ 'mt-sm': index > 0 }"
  >{{ error }}</div>
</div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  errors: Array,
});
</script>

<style lang="scss" scoped>
.error {
  width: 50%;
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  &--row {
    color: red;
    padding: 4px 8px
  }
}</style>
