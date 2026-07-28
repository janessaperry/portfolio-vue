<script setup lang="ts">
import ProjectCard from '../components/ProjectCard.vue'
import { allProjects } from '../data/allProjects.ts'
</script>

<template>
  <div class="layout-wrapper">
    <section class="intro">
      <h1 class="page-title">Hey there, I'm Janessa</h1>

      <p class="about">
        I'm a web developer with a background in design who enjoys figuring things out and building
        thoughtful web experiences.
      </p>

      <div class="work-status-container">
        <p class="work-status">Available for work</p>
      </div>

      <p class="tagline">
        Bringing pixels to life with <span class="accent">&lt;code/&gt;</span> and
        <span class="accent">curiosity()</span>.
      </p>
    </section>

    <section class="project-showcase">
      <h2 class="showcase-title">Project Showcase</h2>
      <template v-for="project of allProjects" :key="project.id">
        <ProjectCard v-if="project.showcase" :project="project" />
      </template>
    </section>
  </div>
</template>

<style scoped>
.layout-wrapper {
  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: flex-start;
    gap: 2.5rem;
  }
}

.intro {
  & > * + * {
    margin-top: 1.5rem;
  }

  @media (min-width: 1024px) {
    flex-basis: 40%;
  }
}

.page-title {
  text-align: center;

  @media screen and (min-width: 768px) {
    text-align: revert;
  }
}

.about {
  font-size: 1.25rem;
}

.tagline {
  font-family: var(--jp-font-mono), monospace;
  font-size: 1.125rem;
}

.accent {
  color: var(--color-text-accent);
}

.work-status-container {
  background: linear-gradient(to top right, var(--gradient-neon-bg));
  border-radius: 9999px;
  padding: 1px;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 1024px) {
    margin-left: 0;
    margin-right: 0;
  }
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
    width: 0.5rem;
    height: 0.5rem;
    background-color: #95dac5;
    border-radius: 999px;
  }
}

.project-showcase {
  & > * + * {
    margin-top: 1.2rem;
  }

  @media (min-width: 1024px) {
    flex-basis: 60%;
  }
}
</style>
