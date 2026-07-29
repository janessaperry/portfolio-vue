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

      <a href="mailto:hello@janessaperry.com" class="work-status-container">
        <span class="work-status">
          <span class="status-dot"></span>
          Available for work
        </span>
      </a>

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
  font-size: var(--jp-font-size-lg);
}

.tagline {
  font-family: var(--jp-font-mono), monospace;
  font-size: var(--jp-font-size-base);
}

.accent {
  color: var(--jp-text-accent);
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 0.8;
  }
  100% {
    transform: scale(2.5);
    opacity: 0;
  }
}

.work-status-container {
  display: inline-block;
  background: linear-gradient(to top right, var(--jp-gradient-neon-stops));
  border-radius: var(--jp-radius-pill);
  padding: 1px;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  color: inherit;

  &:hover {
    color: inherit;
  }

  @media screen and (min-width: 1024px) {
    margin-left: 0;
    margin-right: 0;
  }
}

.work-status {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0.75rem;
  background-color: var(--jp-surface-dark-alt);
  border-radius: var(--jp-radius-pill);
}

.status-dot {
  position: relative;
  display: inline-block;
  flex-shrink: 0;
  width: 0.5rem;
  height: 0.5rem;
  background-color: var(--jp-text-accent);
  border-radius: 50%;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background-color: var(--jp-text-accent);
    border-radius: 50%;
    animation: pulse 1.5s ease-out infinite;
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
