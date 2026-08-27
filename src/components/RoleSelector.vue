<script setup lang="ts">
import { watch } from 'vue'
import { PhArrowLeft, PhArrowRight } from '@phosphor-icons/vue'
import { type ExperienceDetails, experienceDetails } from '../data/experienceDetails.ts'

const props = defineProps<{
  selectedRole: ExperienceDetails
}>()

const emit = defineEmits<{
  roleChange: [selectedRole: ExperienceDetails]
}>()

function handlePrevRole() {
  const currentRoleIndex = experienceDetails.findIndex((role) => props.selectedRole.id === role.id)
  const prevRole =
    currentRoleIndex > 0 ? experienceDetails[currentRoleIndex - 1] : props.selectedRole
  if (prevRole && prevRole.id !== props.selectedRole.id) {
    handleRoleChange(prevRole)
  }
}

function handleNextRole() {
  const currentRoleIndex = experienceDetails.findIndex((role) => props.selectedRole.id === role.id)
  const nextRole =
    currentRoleIndex < experienceDetails.length - 1
      ? experienceDetails[currentRoleIndex + 1]
      : props.selectedRole
  if (nextRole && nextRole.id !== props.selectedRole.id) {
    handleRoleChange(nextRole)
  }
}

function handleRoleChange(role: ExperienceDetails) {
  emit('roleChange', role)
}

function scrollRoleIntoView(role: ExperienceDetails) {
  const el = document.getElementById(role.id)
  if (el) el.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' })
}

watch(() => props.selectedRole, scrollRoleIntoView)
</script>

<template>
  <div class="role-selector">
    <div class="role-nav">
      <p>Select a role to learn more.</p>
      <div class="role-nav-buttons">
        <button
          class="role-nav-button role-prev"
          aria-label="View previous role"
          @click="handlePrevRole"
        >
          <ph-arrow-left aria-hidden="true" size="20" />
        </button>
        <button
          class="role-nav-button role-next"
          aria-label="View next role"
          @click="handleNextRole"
        >
          <ph-arrow-right aria-hidden="true" size="20" />
        </button>
      </div>
    </div>

    <div class="role-selection">
      <button
        v-for="role in experienceDetails"
        :key="role.id"
        :id="role.id"
        :aria-pressed="selectedRole?.id === role.id"
        @click="handleRoleChange(role)"
        class="role-button"
      >
        <img :src="role.brandLogo" :alt="`${role.company} Logo`" class="role-logo" />
        <span class="role-content-wrapper">
          <span class="role-title">{{ role.jobTitle }}</span>
          <span class="role-company">{{ role.company }}</span>
        </span>
      </button>
    </div>
  </div>

  <section id="role-details" class="role-details">
    <div>
      <h2 class="role-title">{{ selectedRole.jobTitle }}</h2>
      <div class="role-meta">
        <p>{{ selectedRole.company }}</p>
        <p>{{ selectedRole.yearRange }}</p>
      </div>
    </div>

    <ul>
      <li v-for="(item, index) in selectedRole.description" :key="index">
        {{ item }}
      </li>
    </ul>

    <div class="role-skills">
      <h3>Skills Unlocked</h3>
      <ul class="role-skills-list">
        <li v-for="skill in selectedRole.skillsAndTools" :key="skill" class="role-skill-item">
          {{ skill }}
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.role-selector {
  & > * + * {
    margin-top: 1rem;
  }
}

.role-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.role-nav-buttons {
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
}

.role-nav-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  flex-shrink: 0;
  width: 2.5rem;
  height: 2.5rem;
  padding: 0.5rem;
  background-color: var(--jp-selector-bg);
  border: 1px solid var(--jp-border);
  border-radius: var(--jp-radius-pill);
  color: var(--jp-link);
  transition: background-color var(--jp-duration-slow) var(--jp-ease-base);

  &:hover {
    background-color: var(--jp-selector-bg-active);
  }
}

.role-selection {
  display: flex;
  gap: 1rem;
  width: 100%;
  padding-bottom: 1rem;
  overflow-x: scroll;
  scrollbar-color: var(--jp-scrollbar) transparent;
  scrollbar-width: thin;

  scroll-snap-type: x mandatory;
}

.role-button {
  display: flex;
  gap: 0.5rem;
  flex-shrink: 0;
  width: max-content;
  max-width: 100%;
  padding: 0.5rem;
  background-color: var(--jp-selector-bg);
  border: 1px solid var(--jp-border);
  border-radius: var(--jp-radius-sm);
  color: var(--jp-text);
  transition: background-color var(--jp-duration-slow) var(--jp-ease-base);
  scroll-snap-align: start;

  @media screen and (min-width: 768px) {
    align-items: center;
    width: max-content;
  }

  &:hover {
    background-color: var(--jp-selector-bg-active);
  }

  &[aria-pressed='true'] {
    background-color: var(--jp-selector-bg-active);
    border-color: var(--jp-selector-border-active);
  }

  & > .role-logo {
    width: 1.5rem;
    height: 1.5rem;

    @media screen and (min-width: 768px) {
      width: 2rem;
      height: 2rem;
    }
  }

  & .role-title {
    display: block;
    font-weight: 600;
    text-align: left;
  }

  & .role-company {
    display: block;
    text-align: left;
  }
}

.role-meta {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;

  & > p {
    font-size: var(--jp-font-size-base);
    font-weight: 600;
  }
}

.role-details {
  & > * + * {
    margin-top: 1.2rem;
  }
}

.role-skills {
  & > * + * {
    margin-top: 0.5rem;
  }
}

.role-skills-list {
  list-style: none;
  padding-inline-start: 0;
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.role-skill-item {
  padding: 0.25rem 0.5rem;
  font-size: var(--jp-font-size-base);
  color: var(--jp-text-accent);
  background-color: var(--jp-surface-dark-muted);
  border: 1px solid var(--jp-border);
  border-radius: 0.5rem;
}
</style>
