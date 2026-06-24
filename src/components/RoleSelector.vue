<script setup lang="ts">
import { ref } from 'vue'
import { type ExperienceDetails, experienceDetails } from '../data/experienceDetails.js'

const selectedRole = ref<ExperienceDetails>(experienceDetails[0]!)

function handleRoleClick(clickedRole: ExperienceDetails) {
  console.log(clickedRole)
  selectedRole.value = clickedRole
}
</script>

<template>
  <div class="role-selector">
    <p>Select a role to learn more</p>
    <div class="role-selection">
      <button
        v-for="role in experienceDetails"
        :key="role.id"
        :aria-pressed="selectedRole?.id === role.id"
        @click="handleRoleClick(role)"
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

  <section class="role-details">
    <div>
      <h2 class="role-title">{{ selectedRole.jobTitle }}</h2>
      <div class="role-meta">
        <p>{{ selectedRole.company }}</p>
        <p>{{ selectedRole.yearRange }}</p>
      </div>
    </div>

    <div>
      <h3>Quest Log</h3>
      <ul>
        <li v-for="(item, index) in selectedRole.description" :key="index">
          {{ item }}
        </li>
      </ul>
    </div>

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

.role-selection {
  display: flex;
  gap: 1rem;
  width: 100%;
  padding-bottom: 0.5rem;
  overflow-x: scroll;
  scrollbar-color: var(--color-scrollbar-on-dark) transparent;
  scrollbar-width: thin;
}

.role-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
  width: max-content;
  padding: 0.5rem;
  background-color: var(--color-selector-bg);
  border: 1px solid var(--color-border);
  border-radius: 0.5rem;
  color: var(--color-text-light);
  transition: background-color 0.5s ease;

  &:hover {
    background-color: var(--color-selector-bg-active);
  }

  &[aria-pressed='true'] {
    background-color: var(--color-selector-bg-active);
    border-color: var(--color-selector-border-active);
  }

  & > .role-logo {
    width: 2.5rem;
    height: 2.5rem;
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
  justify-content: space-between;
  gap: 1rem;

  & > p {
    font-size: 1rem;
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
  padding: 0 0.5rem;
  font-size: 1rem;
  color: var(--color-text-accent);
  background-color: var(--color-surface-dark-muted);
  border: 1px solid var(--color-border);
  border-radius: 0.5rem;
}
</style>
