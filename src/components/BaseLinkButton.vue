<script setup lang="ts">
import { type Component, computed } from 'vue'

const {
  url,
  label,
  variant = 'primary',
  icon,
} = defineProps<{
  url: string
  label: string
  variant?: string
  icon?: Component
}>()

const buttonClass = computed(() => ({
  primary: variant === 'primary',
  secondary: variant === 'secondary',
}))
</script>

<template>
  <a :href="url" target="_blank" referrerpolicy="no-referrer" class="button" :class="buttonClass">
    {{ label }}
    <component :is="icon" size="18" />
  </a>
</template>

<style scoped>
.button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--jp-font-heading), sans-serif;
  font-weight: 600;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 999px;

  &.primary {
    background-color: var(--color-button);
    border: 1px solid var(--color-button);

    &:hover {
      background-color: var(--color-button-hover);
      border-color: var(--jp-c-fuschia-neon);
    }
  }

  &.secondary {
    background-color: var(--color-button-secondary);
    border: 1px solid var(--color-border);

    &:hover {
      background-color: var(--color-button-secondary-hover);
      border-color: var(--color-button-secondary-border);
    }
  }
}
</style>
