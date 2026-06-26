<script setup lang="ts">
import ProjectCard from '../components/ProjectCard.vue'
import { allProjects } from '../data/allProjects.ts'
</script>

<template>
  <div class="projects">
    <h1>Projects</h1>

    <section>
      <h2>Check out my recent work below.</h2>

      <div class="project-cards">
        <ProjectCard v-for="project in allProjects" :key="project.id" :project="project" :show-highlights="true" />
      </div>
    </section>
  </div>
</template>

<style scoped>
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
