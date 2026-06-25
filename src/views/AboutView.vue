<script setup lang="ts">
import { ref } from 'vue'
import type { CompanionKey } from '../types'
import { companionData } from '../data/companionData.ts'

import CompanionSelector from '../components/CompanionSelector.vue'
import RoleSelector from '../components/RoleSelector.vue'

const selectedCompanion = ref<CompanionKey>('classy')
function onCompanionChange(selectedId: CompanionKey) {
  selectedCompanion.value = selectedId
}
</script>

<template>
  <section class="hero">
    <h1 class="hero-title">My Experience</h1>
  </section>

  <div class="experience-layout">
    <section class="experience-container">
      <RoleSelector />
      <div class="divider"></div>
      <CompanionSelector
        :selected-companion="selectedCompanion"
        :onCompanionChange="onCompanionChange"
      />
    </section>

    <section class="avatar-layout">
      <div class="avatar-container">
        <img
          src="@/assets/images/jp-laptop.png"
          alt="Character holding laptop"
          class="avatar-image"
        />
        <img
          :src="companionData[selectedCompanion].imageSrc"
          alt="Character holding laptop"
          class="avatar-companion"
        />
      </div>

      <div class="avatar-info">
        <h2 class="avatar-name">Janessa Perry</h2>
        <p class="avatar-title">Web Developer</p>
      </div>
    </section>
  </div>
</template>

<style>
.hero {
  margin-bottom: 2rem;
}

.hero-title {
  text-align: center;
}

.experience-layout {
  display: flex;
  flex-direction: column-reverse;
  gap: 2.5rem;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
}

.experience-container {
  padding: 1rem;
  background-color: var(--color-surface-dark);
  border-radius: 1.2rem;
  box-shadow: var(--shadow-inset-card);

  & > * + * {
    margin-top: 2rem;
  }

  @media screen and (min-width: 768px) {
    width: 60%;
    padding: 1.4rem;
  }
}

.avatar-layout {
  & > * + * {
    margin-top: 1rem;
  }

  @media screen and (min-width: 768px) {
    width: 40%;
  }
}

.avatar-container {
  position: relative;
  height: 30vh;

  @media screen and (min-width: 768px) {
    height: max-content;
  }
}

.avatar-image {
  display: block;
  margin: 0 auto 0 40vw;
  height: 100%;

  @media screen and (min-width: 768px) {
    margin: 0 30% 0 auto;
    max-height: 420px;
  }
}

.avatar-companion {
  display: block;
  position: absolute;
  bottom: 0;
  left: 25vw;
  max-width: 100px;

  @media screen and (min-width: 768px) {
    left: 0;
    max-width: 170px;
  }
}

.avatar-name,
.avatar-title {
  text-align: center;
}

.divider {
  width: 100%;
  height: 1px;
  background: linear-gradient(to right, var(--gradient-neon-bg));
}
</style>
