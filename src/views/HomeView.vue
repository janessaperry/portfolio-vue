<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <section class="hero">
    <div class="intro">
      <h1>Hey there, I'm Janessa</h1>
      <p class="tagline">Designer Turned Developer · Creative Problem Solver · Forever Curious, Always Evolving</p>

      <div class="work-status-container">
        <p class="work-status">Available for work</p>
      </div>

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
  & > * + * {
    margin-top: 2rem;
  }

}

.tagline {
  font-size: var(--font-size-lg);
}

.work-status-container{
  background: linear-gradient(to top right,
  rgba(149, 218, 197, 0.8),
  rgba(0, 157, 255, 0.8),
  rgba(252, 0, 255, 0.8)
  );
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
    content: "";
    display: block;
    width: 8px;
    height: 8px;
    background-color: #95DAC5;
    border-radius: 9999px;
  }
}

.project-card {
  padding: 1rem;
  background-color: var(--color-surface-dark);
  border-radius: 1rem;
  box-shadow: inset 0 1px 2px 0 var(--color-shadow-inset-light), inset 0 2px 4px 0 var(--color-shadow-inset), inset 0
  -2px 4px 0 var(--color-shadow-inset-dark);
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
