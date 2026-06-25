<script setup lang="ts">
import { ref } from 'vue'
import { experienceDetails, type ExperienceDetails } from '../data/experienceDetails.ts'
import type { CompanionKey } from '../types'
import { companionData } from '../data/companionData.ts'

import CompanionSelector from '../components/CompanionSelector.vue'
import RoleSelector from '../components/RoleSelector.vue'

const selectedCompanion = ref<CompanionKey>('classy')

function onCompanionChange(selectedId: CompanionKey) {
  selectedCompanion.value = selectedId
}

const selectedRole = ref<ExperienceDetails>(experienceDetails[0]!)

function onRoleChange(clickedRole: ExperienceDetails) {
  selectedRole.value = clickedRole
}
</script>

<template>
  <section class="hero">
    <h1 class="hero-title">My Experience</h1>
  </section>

  <div class="experience-layout">
    <section class="experience-container">
      <RoleSelector :selectedRole="selectedRole" @role-change="onRoleChange" />
      <div class="divider"></div>
      <CompanionSelector
        :selected-companion="selectedCompanion"
        @companion-change="onCompanionChange"
      />
    </section>

    <section class="avatar-layout">
      <div class="avatar-container">
        <div class="avatar-images-wrapper">
          <img
            :src="selectedRole.pixelLogo"
            :alt="`${selectedRole.company} Logo`"
            class="avatar-laptop-sticker"
          />
          <img
            src="@/assets/images/jp-laptop.png"
            alt="Character holding laptop"
            class="avatar-image"
          />
          <img
            :src="companionData[selectedCompanion].imageSrc"
            alt="Orange cat companion"
            class="avatar-companion"
          />
        </div>
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

.avatar-images-wrapper {
  position: relative;
  height: 100%;
  width: fit-content;
  left: 60%;
  transform: translateX(-50%);
}

.avatar-image {
  height: 100%;

  @media screen and (min-width: 768px) {
    max-height: 420px;
  }
}

.avatar-laptop-sticker {
  z-index: 10;
  position: absolute;
  top: 44%;
  left: 48%;
  transform: rotate(-15deg);
}

.avatar-companion {
  position: absolute;
  bottom: 0;
  left: -30%;
  max-width: 140px;

  @media screen and (min-width: 768px) {
    left: -40%;
    max-width: 160px;
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
