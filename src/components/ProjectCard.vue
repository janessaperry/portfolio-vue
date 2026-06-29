<script setup lang="ts">
import { PhArrowUpRight } from '@phosphor-icons/vue'
import type { Project } from '../types'
import BaseLinkButton from './BaseLinkButton.vue'

interface Props {
  project: Project
  showHighlights?: boolean
}

const { project, showHighlights = false } = defineProps<Props>()
</script>

<template>
  <article class="project-card" :class="{ showcase: project.showcase }">
    <img
      :src="project.thumbnailInfo.filePath"
      :alt="project.thumbnailInfo.altText"
      class="project-thumbnail"
    />

    <div class="project-overview">
      <p class="project-meta">{{ project.type }} • {{ project.yearCompleted }}</p>
      <div>
        <h2>{{ project.title }}</h2>
        <p class="project-role">{{ project.role }}</p>
      </div>
      <p>{{ project.teaser }}</p>
    </div>

    <ul class="tech-stack-chips">
      <li v-for="skill of project.skillsAndTools" :key="skill" class="chip">{{ skill }}</li>
    </ul>

    <div v-if="showHighlights" class="highlights">
      <h3>Highlights</h3>
      <ul>
        <li v-for="(highlight, index) of project.highlights" :key="index" class="highlight">
          {{ highlight }}
        </li>
      </ul>
    </div>

    <template v-if="project.githubRepos || project.liveUrl">
      <div class="card-actions">
        <BaseLinkButton
          v-if="project.liveUrl"
          label="View live"
          :url="project.liveUrl"
          :icon="PhArrowUpRight"
        />

        <template v-if="project.githubRepos">
          <BaseLinkButton
            v-for="repo of project.githubRepos"
            :key="repo.url"
            :label="repo.title"
            :url="repo.url"
            :icon="PhArrowUpRight"
            variant="secondary"
          />
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

.project-overview {
  & > * + * {
    margin-top: 0.5rem;
  }
}

.project-meta {
  color: var(--color-text-light-muted);
  font-size: 0.75rem;
  font-weight: 500;
  font-family: var(--jp-font-mono), monospace;
  text-transform: uppercase;
}

.project-role {
  font-size: 1rem;
  font-weight: 600;
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
  font-size: 1rem;
  line-height: 1.2;
  background-color: var(--color-surface-dark-muted);
  border: 1px solid var(--color-border);
  border-radius: 8px;
}

.highlights {
  & > * + * {
    margin-top: 0.5rem;
  }
}

.highlight {
  font-size: 1rem;
}

.card-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}
</style>
