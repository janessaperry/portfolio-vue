<script setup lang="ts">
import { PhArrowUpRight } from '@phosphor-icons/vue'
import type { Project } from '../types'

interface Props {
  project: Project
  showHighlights?: boolean
}

const { project, showHighlights = false } = defineProps<Props>()
</script>

<template>
  <article class="project-card" :class="project.showcase ? 'showcase' : ''">
    <img
      :src="project.thumbnailInfo.filePath"
      :alt="project.thumbnailInfo.altText"
      class="project-thumbnail"
    />

    <div class="project-overview">
      <p>{{ project.type }} • {{ project.yearCompleted }}</p>
      <h2>{{ project.title }}</h2>
      <p>{{ project.role }}</p>
      <p>{{ project.teaser }}</p>
    </div>

    <ul class="tech-stack-chips">
      <li v-for="skill of project.skillsAndTools" :key="skill" class="chip">{{ skill }}</li>
    </ul>

    <div v-if="showHighlights" class="project-highlights">
      <h3>Highlights</h3>
      <ul>
        <li v-for="(highlight, index) of project.highlights" :key="index">
          {{ highlight }}
        </li>
      </ul>
    </div>

    <template v-if="project.githubRepos || project.liveUrl">
      <div class="card-actions">
        <a
          v-if="project.liveUrl"
          :href="project.liveUrl"
          target="_blank"
          referrerpolicy="no-referrer"
          class="button primary"
        >
          View live
          <ph-arrow-up-right />
        </a>

        <template v-if="project.githubRepos">
          <a
            v-for="repo of project.githubRepos"
            :key="repo.url"
            :href="repo.url"
            target="_blank"
            referrerpolicy="no-referrer"
            class="button secondary"
          >
            {{ repo.title }}
          </a>
        </template>
      </div>
    </template>
  </article>
</template>

<style scoped>
.project-card {
  & > * + * {
    margin-top: 1.4rem;
  }

  padding: 1rem;
  background-color: var(--color-surface-dark);
  border-radius: 1.2rem;
  box-shadow: var(--shadow-inset-card);

  @media screen and (min-width: 768px) {
    padding: 1.5rem;
  }

  /*
  &.showcase {
    background-color: var(--color-surface-light);
  }
  */
}

.project-thumbnail {
  display: block;
  width: 100%;
  margin: 1rem auto 0;
}

.tech-stack-chips {
  list-style: none;
  padding-inline: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.chip {
  padding: 0.25rem 0.5rem;
  color: var(--color-text-accent);
  line-height: 1.2;
  background-color: var(--color-surface-dark-muted);
  border: 1px solid var(--color-border);
  border-radius: 8px;
}

.card-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.button {
  display: flex;
  align-items: center;
  font-family: var(--jp-font-heading), sans-serif;
  font-weight: 600;
  padding: 0.5rem 1rem;
  border-radius: 999px;

  &.primary {
    background-color: var(--color-button);
    border: 1px solid var(--color-button);

    &:hover {
      background-color: var(--color-button-hover);
      border-color: var(--jp-c-fuschia-neon);
    }
  }

  &.secondary {
    background-color: var(--color-button-secondary);
    border: 1px solid var(--color-border);

    &:hover {
      background-color: var(--color-button-secondary-hover);
      border-color: var(--color-button-secondary-border);
    }
  }
}
</style>
