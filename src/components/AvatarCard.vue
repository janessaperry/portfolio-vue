<script setup lang="ts">
import { PhArrowLeft, PhArrowRight } from '@phosphor-icons/vue'
import { companionData } from '../data/companionData.ts'
import type { ExperienceDetails } from '../data/experienceDetails.ts'
import type { CompanionKey } from '../types'
import { usePageScroll } from '../composables/usePageScroll.ts'

interface Props {
  selectedRole: ExperienceDetails
  selectedCompanion: CompanionKey
  prevRole: ExperienceDetails | null
  nextRole: ExperienceDetails | null
}

const { selectedRole, selectedCompanion, prevRole, nextRole } = defineProps<Props>()

const emit = defineEmits<{ prev: []; next: [] }>()

const { isScrolled } = usePageScroll()
</script>

<template>
  <section class="avatar-layout" :class="{ scrolled: isScrolled }">
    <button
      class="role-nav-btn role-prev"
      :disabled="!prevRole"
      aria-label="View later role"
      @click="emit('prev')"
    >
      <PhArrowLeft aria-hidden="true" />
      <span class="role-nav-label">later</span>
      <span v-if="prevRole" class="role-nav-label-muted">{{ prevRole.yearRange }}</span>
    </button>

    <div class="avatar-container">
      <span class="star star--1"></span>
      <span class="star star--2"></span>
      <span class="star star--3"></span>
      <span class="star star--4"></span>
      <span class="star star--5"></span>
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

    <button
      class="role-nav-btn role-next"
      :disabled="!nextRole"
      aria-label="View earlier role"
      @click="emit('next')"
    >
      <PhArrowRight aria-hidden="true" />
      <span class="role-nav-label">earlier</span>
      <span v-if="nextRole" class="role-nav-label-muted">{{ nextRole.yearRange }}</span>
    </button>

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

  padding: 1rem;
  background-color: var(--jp-surface-dark);
  border-radius: var(--jp-radius-md);
  box-shadow: var(--jp-shadow-card);

  @media screen and (min-width: 768px) {
    height: fit-content;
    padding: 1.4rem;
  }
}

.avatar-layout.scrolled {
  @media screen and (max-width: 767px) {
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    border-radius: 0;
    background-color: var(--jp-background);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-top: 6rem;

    & > * + * {
      margin-top: 0;
    }
  }
}

.role-nav-btn {
  display: none;

  .avatar-layout.scrolled & {
    @media screen and (max-width: 767px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.25rem;
      background: none;
      border: none;
      color: var(--jp-text-accent-secondary);
      font-size: var(--jp-font-size-xs);
      font-family: var(--jp-font-heading), sans-serif;
      text-transform: lowercase;
      width: 5rem;
      padding: 0;

      &:disabled {
        opacity: 0.3;
      }
    }
  }
}

.role-nav-label, .role-nav-label-muted {
  font-size: var(--jp-font-size-xs);
  line-height: 1.2;
  text-align: center;
}

.role-nav-label-muted {
  opacity: 0.6;
}

.avatar-container {
  position: relative;
  height: 20vh;
  transition: height var(--jp-duration-base) var(--jp-ease-base);
  aspect-ratio: 1/1;
  margin: auto;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at center,
      var(--jp-c-fuchsia-neon) 4%,
      var(--jp-c-blue-neon) 30%,
      transparent 60%
    );
    opacity: 0.15;
    border-radius: 50%;
    pointer-events: none;
  }

  @media screen and (min-width: 768px) {
    height: max-content;
    transition: none;
  }
}

@keyframes twinkle {
  0%,
  100% {
    opacity: 0.1;
    transform: scale(0.7);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
}

.star {
  position: absolute;
  border-radius: 50%;
  background-color: var(--jp-text-accent);
  pointer-events: none;
  animation: twinkle 2s ease-in-out infinite;
}

.star--1 {
  width: 3px;
  height: 3px;
  top: 12%;
  left: 18%;
  animation-duration: 1.8s;
  animation-delay: 0.9s;
}

.star--2 {
  width: 2px;
  height: 2px;
  top: 38%;
  left: 78%;
  animation-duration: 2.5s;
  animation-delay: 1.3s;
}

.star--3 {
  width: 4px;
  height: 4px;
  top: 30%;
  left: 30%;
  animation-duration: 3.1s;
  animation-delay: 1.2s;
}

.star--4 {
  width: 2px;
  height: 2px;
  top: 60%;
  left: 12%;
  animation-duration: 2.2s;
  animation-delay: 0.7s;
}

.star--5 {
  width: 3px;
  height: 3px;
  top: 22%;
  left: 88%;
  animation-duration: 2.1s;
  animation-delay: 1.8s;
}

.avatar-layout.scrolled .avatar-container {
  @media screen and (max-width: 767px) {
    height: 15vh;
    flex-shrink: 0;
  }

  @media screen and (min-width: 768px) {
    height: max-content;
  }
}

.avatar-layout.scrolled .avatar-info {
  @media screen and (max-width: 767px) {
    display: none;
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
  width: clamp(1rem, 2vw, 2rem);
  transition: width var(--jp-duration-base) var(--jp-ease-base);

  @media screen and (min-width: 768px) {
    transition: none;
  }
}

.avatar-layout.scrolled .avatar-laptop-sticker {
  @media screen and (max-width: 767px) {
    width: 0.75rem;
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
  transition: font-size var(--jp-duration-base) var(--jp-ease-base);
}
</style>
