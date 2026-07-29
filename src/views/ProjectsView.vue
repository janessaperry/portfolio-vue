<script setup lang="ts">
import { ref, computed } from 'vue'
import ProjectCard from '../components/ProjectCard.vue'
import { allProjects } from '../data/allProjects.ts'

type ValidFilters = 'all' | 'development' | 'design'
const selectedFilter = ref<ValidFilters>('all')

const filteredProjects = computed(() =>
  selectedFilter.value === 'all'
    ? allProjects
    : allProjects.filter((p) =>
        p.categories.map((c) => c.toLowerCase()).includes(selectedFilter.value),
      ),
)

const filterCounts = computed(() => ({
  all: allProjects.length,
  development: allProjects.filter((p) =>
    p.categories.map((c) => c.toLowerCase()).includes('development'),
  ).length,
  design: allProjects.filter((p) => p.categories.map((c) => c.toLowerCase()).includes('design'))
    .length,
}))
</script>

<template>
  <section class="title-wrapper">
    <h1 class="page-title">Projects</h1>
    <p class="sub-title">Explore some of my recent work below.</p>
  </section>

  <section>
    <div class="filter-group">
      <button
        class="filter-btn"
        :aria-pressed="selectedFilter === 'all'"
        @click="selectedFilter = 'all'"
      >
        All <span class="filter-count">{{ filterCounts.all }}</span>
      </button>
      <button
        class="filter-btn"
        :aria-pressed="selectedFilter === 'development'"
        @click="selectedFilter = 'development'"
      >
        Development <span class="filter-count">{{ filterCounts.development }}</span>
      </button>
      <button
        class="filter-btn"
        :aria-pressed="selectedFilter === 'design'"
        @click="selectedFilter = 'design'"
      >
        Design <span class="filter-count">{{ filterCounts.design }}</span>
      </button>
    </div>

    <div class="project-cards">
      <ProjectCard
        v-for="project in filteredProjects"
        :key="project.id"
        :project="project"
        :show-highlights="true"
      />
    </div>
  </section>
</template>

<style scoped>
.filter-group {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}

.filter-btn {
  appearance: none;
  -webkit-appearance: none;
  border: none;
  display: flex;
  align-items: center;
  gap: 0.25rem;

  background-color: var(--jp-background);
  color: var(--jp-text-accent-secondary);
  border-radius: var(--jp-radius-pill);
  font-size: var(--jp-font-size-base);
  font-family: var(--jp-font-heading), sans-serif;
  text-transform: lowercase;
  padding: 0.5rem 0.75rem;
  transition: color var(--jp-duration-slow), background-color var(--jp-duration-slow);

  &:hover {
    background-color: var(--jp-surface-light-muted);
    color: var(--jp-text-on-light)
  }

  &[aria-pressed='true'] {
    background-color: var(--jp-surface-light);
    color: var(--jp-text-on-light);
  }
}

.filter-count {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 1.25rem;
  padding: 0.1rem 0.35rem;
  border-radius: var(--jp-radius-pill);
  font-size: var(--jp-font-size-xs);
  font-family: var(--jp-font-mono), monospace;
  background-color: var(--jp-surface-dark-muted);
  color: var(--jp-text-accent);

  [aria-pressed='true'] & {
    background-color: var(--jp-surface-light-muted);
    color: var(--jp-text-on-light);
  }
}

.project-cards {
  display: grid;
  gap: 1rem;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 1024px) {
    gap: 2rem;
  }
}
</style>
