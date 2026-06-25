<script setup lang="ts">
import type { CompanionKey } from '../types'
import { companionData } from '../data/companionData.ts'

interface Props {
  selectedCompanion: CompanionKey
}
const { selectedCompanion } = defineProps<Props>()

const emit = defineEmits<{
  companionChange: [selectedId: CompanionKey]
}>()

</script>

<template>
  <section class="companion-wrapper">
    <h3>Select a companion</h3>
    <div class="companion-selection">
      <button
        v-for="(value, key) in companionData"
        :key="key"
        :id="key"
        :aria-pressed="selectedCompanion === key"
        :aria-label="value.title"
        @click="emit('companionChange', key)"
        class="companion-button"
      >
        <img :src="value.imageSrc" :alt="value.imageAlt" />
      </button>
    </div>

    <div class="companion-bonus">
      <p class="bonus-title">{{ companionData[selectedCompanion].title }}</p>
      <p class="bonus-description" v-html="companionData[selectedCompanion].description"></p>
    </div>
  </section>
</template>

<style scoped>
.companion-wrapper {
  & > * + * {
    margin-top: 0.75rem;
  }
}

.companion-selection {
  display: flex;
  gap: 0.5rem;
}

.companion-button {
  padding: 0.5rem;
  width: 4rem;
  height: 4rem;
  aspect-ratio: 1/1;
  background-color: var(--color-selector-bg);
  border: 1px solid var(--color-border);
  border-radius: 9999px;
  transition: background-color 0.5s ease;

  &:hover {
    background-color: var(--color-selector-bg-active);
  }

  &[aria-pressed='true'] {
    background-color: var(--color-selector-bg-active);
    border-color: var(--color-text-accent);
  }

  & > img {
    width: 100%;
    object-fit: contain;
  }
}

.companion-bonus {
  padding: 1rem;
  background-color: var(--color-surface-dark-muted);
  border: 1px solid var(--color-border);
  border-radius: 0.75rem;
}

.bonus-title {
  color: var(--color-text-accent);
  font-size: 1.2rem;
  font-weight: 600;
}

.bonus-description {
  line-height: 1.2;

  &:deep(.bonus-stat) {
    color: var(--color-text-accent-alt);
    font-weight: 600;
  }
}
</style>
