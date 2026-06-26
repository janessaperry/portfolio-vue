<script setup lang="ts">
import ProjectCard from '../components/ProjectCard.vue'
import { allProjects } from '../data/allProjects.ts'
</script>

<template>
  <section class="hero">
    <div class="intro">
      <h1>Hey there, I'm Janessa</h1>
      <p class="tagline">
        Bringing pixels to life with <span class="accent">&lt;code/&gt;</span> and
        <span class="accent">curiosity()</span>.
      </p>

      <div class="work-status-container">
        <p class="work-status">Available for work</p>
      </div>

      <p>
        Web developer with a background in design who enjoys figuring things out and building
        thoughtful web experiences.
      </p>
    </div>

    <div class="project-showcase">
      <h2>Showcase</h2>
      <template v-for="project of allProjects" :key="project.id">
        <ProjectCard v-if="project.showcase" :project="project" />
      </template>
    </div>
  </section>
</template>

<style scoped>
.hero {
  display: flex;
  flex-direction: column;
  gap: 2rem;

  & h1 {
    font-size: var(--font-size-display);
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: flex-start;
    gap: 2.5rem;
  }
}

.intro {
  & > * + * {
    margin-top: 2rem;
  }

  @media (min-width: 1024px) {
    flex-basis: 40%;
  }
}

.tagline {
  font-family: var(--jp-font-mono), monospace;
  font-size: var(--font-size-lg);
}

.accent {
  color: var(--color-text-accent);
}

.work-status-container {
  background: linear-gradient(to top right, var(--gradient-neon-bg));
  border-radius: 9999px;
  padding: 1px;
  width: fit-content;
}

.work-status {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 2px 0.75rem;
  background-color: var(--color-surface-dark-alt);
  border-radius: 9999px;

  &::before {
    content: '';
    display: block;
    width: 8px;
    height: 8px;
    background-color: #95dac5;
    border-radius: 9999px;
  }
}

.project-showcase {
  & > * + * {
    margin-top: 1.4rem;
  }

  @media (min-width: 1024px) {
    flex-basis: 60%;
  }
}
</style>
