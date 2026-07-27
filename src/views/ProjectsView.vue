<script setup lang="ts">
import ProjectCard from '../components/ProjectCard.vue'
import { allProjects } from '../data/allProjects.ts'
</script>

<template>
  <div class="projects">
    <section class="title-wrapper">
      <h1 class="page-title">Projects</h1>
      <p class="sub-title">Explore some of my recent work below.</p>
    </section>

    <section>
      <div class="project-cards">
        <ProjectCard
          v-for="project in allProjects"
          :key="project.id"
          :project="project"
          :show-highlights="true"
        />
      </div>
    </section>
  </div>
</template>

<style scoped>
.projects {
  & > * + * {
    margin-top: 1.5rem;
  }
}

.title-wrapper {
  text-align: center;
}

.sub-title {
  font-size: 1.2rem;

  @media screen and (min-width: 768px) {
    font-size: 1.5rem;
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
