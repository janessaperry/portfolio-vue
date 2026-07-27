<script setup lang="ts">
import { ref } from 'vue'
import AvatarCard from '../components/AvatarCard.vue'
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
      <RoleSelector :selectedRole="selectedRole" @role-change="onRoleChange" />

      <div class="divider"></div>

      <CompanionSelector
        :selected-companion="selectedCompanion"
        @companion-change="onCompanionChange"
      />
    </section>

    <AvatarCard :selected-role="selectedRole" :selected-companion="selectedCompanion" />
  </div>
</template>

<style>
.title-wrapper {
  text-align: center;
  margin-bottom: 1.5rem;

  @media screen and (min-width: 768px) {
    margin-bottom: 2rem;
  }
}

.sub-title {
  font-size: 1.2rem;

  @media screen and (min-width: 768px) {
    font-size: 1.5rem;
  }
}

.experience-layout {
  display: flex;
  flex-direction: column-reverse;
  gap: 2rem;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 2.5rem
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

.divider {
  width: 100%;
  height: 1px;
  background: linear-gradient(to right, var(--gradient-neon-bg));
}
</style>
