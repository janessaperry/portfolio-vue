<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { companionData } from '../data/companionData.ts'
import type { ExperienceDetails } from '../data/experienceDetails.ts'
import type { CompanionKey } from '../types'

interface Props {
  selectedRole: ExperienceDetails
  selectedCompanion: CompanionKey
}

const { selectedRole } = defineProps<Props>()

const avatarScrolled = ref(false)

function onScroll() {
  avatarScrolled.value = window.scrollY > 160
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
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
</template>

<style scoped>
.avatar-layout {
  & > * + * {
    margin-top: 1rem;
  }

  position: sticky;
  top: 0;
  background-color: var(--color-background);
  padding-bottom: 1rem;
  transition: padding-top 1s ease;

  @media screen and (min-width: 768px) {
    width: 40%;
    height: fit-content;
  }
}

.avatar-layout.scrolled {
  padding-top: 5rem;

  @media screen and (min-width: 768px) {
    padding-top: revert;
    transition: none;
  }
}

.avatar-container {
  position: relative;
  height: 20vh;
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
</style>
