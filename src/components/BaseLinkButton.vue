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
  font-size: var(--jp-font-size-base);
  padding: 0.5rem 1rem;
  border-radius: var(--jp-radius-pill);
  transition: color var(--jp-duration-slow), border var(--jp-duration-slow), background-color var(--jp-duration-slow);

  &.primary {
    background-color: var(--jp-button-primary-bg);
    border: 1px solid var(--jp-button-primary-border);

    &:hover {
      background-color: var(--jp-button-primary-bg-hover);
      border-color: var(--jp-button-primary-border-hover);
    }
  }

  &.secondary {
    background-color: var(--jp-button-secondary-bg);
    border: 1px solid var(--jp-button-secondary-border);

    &:hover {
      background-color: var(--jp-button-secondary-bg-hover);
      border-color: var(--jp-button-secondary-border-hover);
    }
  }
}
</style>
