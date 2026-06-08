<script setup lang="ts">
import { ref } from 'vue'

type CompanionKey = 'classy' | 'stretch' | 'snooze'
type CompanionEntry = {
  title: string
  description: string
}
type CompanionData = Record<CompanionKey, CompanionEntry>

const selectedCompanion = ref<CompanionKey>('classy')
const companionData: CompanionData = {
  classy: {
    title: 'Class Act',
    description: `Your orange cat companion provides <span class="bonus-stat">+10% focus</span> when debugging complex systems.`,
  },
  stretch: {
    title: 'Big Stretchies',
    description: `Your orange cat companion's morning stretch unlocks <span class="bonus-stat">+15% momentum</span> entering a flow state.`,
  },
  snooze: {
    title: 'Snoozie Boos',
    description: `Your orange cat companion sleeps on it, <span class="bonus-stat">+15% clarity</span> guaranteed by morning.`,
  },
}
</script>

<template>
  <section class="companion-wrapper">
    <h3>Select a companion</h3>
    <div class="companion-selection">
      <button id="classy" aria-pressed="true" class="companion-button" aria-label="Class Act">
        <img src="@/assets/images/louie-sitting.png" alt="Orange cat sitting." />
      </button>
      <button id="stretch" aria-pressed="false" class="companion-button" aria-label="Big Stretchies">
        <img src="@/assets/images/louie-stretching.png" alt="Orange cat stretching." />
      </button>
      <button id="snooze" aria-pressed="false" class="companion-button" aria-label="Snoozie Boos">
        <img src="@/assets/images/louie-sleeping.png" alt="Orange cat sleeping." />
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
}

.bonus-stat {
  font-weight: 600;
}
</style>
