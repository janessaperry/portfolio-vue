<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
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

const avatarScrolled = ref(false)

function onScroll() {
  avatarScrolled.value = window.scrollY > 80
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <section class="title-wrapper">
    <h1 class="page-title">My Experience</h1>
    <p class="sub-title">Check out my career journey below!</p>
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

    <section class="avatar-layout" :class="{ scrolled: avatarScrolled }">
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
.title-wrapper {
  text-align: center;
  margin-bottom: 2rem;
}

.sub-title {
  font-size: 1.5rem;
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

  position: sticky;
  top: 0;
  background-color: var(--color-background);
  padding-bottom: 1rem;
  padding-top: 5rem;

  @media screen and (min-width: 768px) {
    width: 40%;
    height: fit-content;
  }
}

.avatar-container {
  position: relative;
  height: 30vh;
  transition: height 0.4s ease;

  @media screen and (min-width: 768px) {
    height: max-content;
    transition: none;
  }
}

.avatar-layout.scrolled .avatar-container {
  height: 25vh;

  @media screen and (min-width: 768px) {
    height: max-content;
  }
}

.avatar-images-wrapper {
  position: relative;
  height: 100%;
  width: fit-content;
  left: 55%;
  transform: translateX(-50%);

  @media screen and (min-width: 768px) {
    left: 60%;
  }
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
  width: 1.25rem;
  transition: width 0.4s ease;

  @media screen and (min-width: 768px) {
    width: initial;
    transition: none;
  }
}

.avatar-layout.scrolled .avatar-laptop-sticker {
  width: 0.75rem;

  @media screen and (min-width: 768px) {
    width: initial;
  }
}

.avatar-companion {
  position: absolute;
  bottom: 0;
  left: -30%;
  height: 40%;

  @media screen and (min-width: 768px) {
    left: -40%;
  }
}

.avatar-name,
.avatar-title {
  text-align: center;
  transition: font-size 0.4s ease;
}

.avatar-layout.scrolled .avatar-name {
  font-size: 1rem;

  @media screen and (min-width: 768px) {
    font-size: revert;
  }
}

.avatar-layout.scrolled .avatar-title {
  font-size: 0.75rem;

  @media screen and (min-width: 768px) {
    font-size: revert;
  }
}

.divider {
  width: 100%;
  height: 1px;
  background: linear-gradient(to right, var(--gradient-neon-bg));
}
</style>
