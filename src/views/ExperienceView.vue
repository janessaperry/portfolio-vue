<script setup lang="ts">
import { ref } from 'vue'
import AvatarCard from '../components/AvatarCard.vue'
import ExperienceHighlights from '../components/ExperienceHighlights.vue'
import { experienceDetails, type ExperienceDetails } from '../data/experienceDetails.ts'
import type { CompanionKey } from '../types'

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
  <section class="title-wrapper">
    <h1 class="page-title">My Experience</h1>
    <p class="sub-title">Check out my career journey below.</p>
  </section>

  <div class="experience-layout">
    <section class="experience-container">
      <p class="lead-in">
        I'm a full-stack developer with a background in design who enjoys building thoughtful user
        experiences and solving complex problems.
      </p>

      <RoleSelector :selectedRole="selectedRole" @role-change="onRoleChange" />

      <div class="divider"></div>

      <CompanionSelector
        :selected-companion="selectedCompanion"
        @companion-change="onCompanionChange"
      />
    </section>

    <div class="experience-sidebar">
      <AvatarCard :selected-role="selectedRole" :selected-companion="selectedCompanion" />
      <ExperienceHighlights />
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
  background-color: var(--color-surface-dark);
  border-radius: 1.2rem;
  box-shadow: var(--shadow-inset-card);
  order: 2;

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
  display: flex;
  flex-direction: column;
  gap: 1rem;
  order: 1;

  @media screen and (min-width: 768px) {
    width: 40%;
    gap: 1.5rem;
    order: 2;
  }

  @media screen and (min-width: 1024px) {
    gap: 2.5rem;
  }
}

.lead-in {
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
}

.divider {
  width: 100%;
  height: 1px;
  background: linear-gradient(to right, var(--gradient-neon-bg));
}
</style>
