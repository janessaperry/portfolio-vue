<script setup lang="ts">
import { computed, nextTick, ref } from 'vue'
import AvatarCard from '../components/AvatarCard.vue'
import ExperienceHighlights from '../components/ExperienceHighlights.vue'
import { experienceDetails, type ExperienceDetails } from '../data/experienceDetails.ts'
import type { CompanionKey } from '../types'
import { usePageScroll } from '../composables/usePageScroll.ts'

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

const currentRoleIndex = computed(() =>
  experienceDetails.findIndex((r) => r.id === selectedRole.value.id),
)
const prevRole = computed(() =>
  currentRoleIndex.value > 0 ? experienceDetails[currentRoleIndex.value - 1] ?? null : null,
)
const nextRole = computed(() =>
  currentRoleIndex.value < experienceDetails.length - 1
    ? experienceDetails[currentRoleIndex.value + 1] ?? null
    : null,
)

const { isScrolled } = usePageScroll()

function scrollToRoleDetails() {
  nextTick(() => {
    const el = document.getElementById('role-details')
    if (!el) return
    const avatarBar = document.querySelector('.avatar-layout') as HTMLElement
    const offset = avatarBar ? avatarBar.offsetHeight : 0
    const top = el.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top, behavior: 'smooth' })
  })
}

function goToPrevRole() {
  if (prevRole.value) {
    onRoleChange(prevRole.value)
    scrollToRoleDetails()
  }
}

function goToNextRole() {
  if (nextRole.value) {
    onRoleChange(nextRole.value)
    scrollToRoleDetails()
  }
}
</script>

<template>
  <section class="title-wrapper">
    <h1 class="page-title">My Experience</h1>
    <p class="sub-title">Check out my career journey.</p>
  </section>

  <div class="experience-layout">
    <section class="experience-container">
      <p class="lead-in">
        Explore the roles and experiences that have shaped how I work today.
      </p>

      <RoleSelector :selectedRole="selectedRole" @role-change="onRoleChange" />

      <div class="divider"></div>

      <CompanionSelector
        :selected-companion="selectedCompanion"
        @companion-change="onCompanionChange"
      />
    </section>

    <div class="experience-sidebar">
      <div class="avatar-wrapper" :class="{ scrolled: isScrolled }">
        <AvatarCard
          :selected-role="selectedRole"
          :selected-companion="selectedCompanion"
          :prev-role="prevRole"
          :next-role="nextRole"
          @prev="goToPrevRole"
          @next="goToNextRole"
        />
      </div>

      <div class="highlights-wrapper">
        <ExperienceHighlights />
      </div>
    </div>
  </div>
</template>

<style scoped>
.experience-layout {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 1.5rem;
  }

  @media screen and (min-width: 1024px) {
    gap: 2.5rem;
  }
}

.experience-container {
  padding: 1rem;
  background-color: var(--jp-surface-dark);
  border-radius: 1.2rem;
  box-shadow: var(--jp-shadow-card);
  order: 2;
  min-width: 0;

  & > * + * {
    margin-top: 2rem;
  }

  @media screen and (min-width: 768px) {
    width: 60%;
    padding: 1.4rem;
    order: 1;
  }
}

.experience-sidebar {
  display: contents;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 40%;
    order: 2;
  }

  @media screen and (min-width: 1024px) {
    gap: 2.5rem;
  }
}

.avatar-wrapper {
  order: 1;

  &.scrolled {
    @media screen and (max-width: 767px) {
      padding-top: calc(15vh + 6rem);
    }
  }
}

.highlights-wrapper {
  order: 3;
}

.lead-in {
  font-size: var(--jp-font-size-lg);
  margin-bottom: 1.5rem;
}

.divider {
  width: 100%;
  height: 1px;
  background: linear-gradient(to right, var(--jp-gradient-neon-stops));
}
</style>
