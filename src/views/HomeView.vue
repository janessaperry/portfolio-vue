<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <section class="hero">
    <div class="intro">
      <h1>Hey there, I'm Janessa</h1>
      <p class="tagline">Designer Turned Developer · Creative Problem Solver · Forever Curious, Always Evolving</p>

      <div>Available for work</div>

      <p>
        I'm a web developer with a background in design, specializing in creating responsive,
        user-friendly websites. I combine design expertise with development skills, building with
        React, Vue, TypeScript, Node.js, and more.
      </p>
    </div>

    <div class="project-showcase">
      <article class="project-card">project card here</article>
    </div>
  </section>

<!--  <TheWelcome />-->
</template>

<style scoped>
.hero {
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  & h1 {
    font-size: var(--font-size-display);
  }
}

.intro {

}

.tagline {
  font-size: var(--font-size-lg);
}

.project-card {
  padding: 1rem;
  background-color: var(--color-surface-dark);
  border-radius: 1rem;
}

@media (min-width: 1024px) {
  .hero {
    flex-direction: row;
    gap: 2.5rem;
  }

  .intro {
    flex-basis: 40%;
  }

  .project-showcase {
    flex-basis: 60%;
  }
}
</style>
