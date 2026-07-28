<script setup lang="ts">
import { PhCertificate, PhCode, PhLaptop } from '@phosphor-icons/vue'
</script>

<template>
  <section class="highlights-container">
    <h3 class="title">Highlights</h3>

    <div class="highlights-list">
      <div class="highlight">
        <ph-certificate class="highlight-icon" />
        <div class="content-wrapper">
          <p class="highlight-title">Software Engineering Diploma</p>
          <p class="highlight-info">BrainStation • 2024</p>
        </div>
      </div>
      <div class="highlight">
        <ph-code class="highlight-icon" />
        <div class="content-wrapper">
          <p class="highlight-title">Junior Web Developer</p>
          <p class="highlight-info">Independent Contractor • 2025 - Present</p>
        </div>
      </div>
      <div class="highlight">
        <ph-code class="highlight-icon" />
        <div class="content-wrapper">
          <p class="highlight-title">Press Start</p>
          <p class="highlight-info">Personal Project • Ongoing</p>
        </div>
      </div>
      <div class="highlight">
        <ph-laptop class="highlight-icon" />
        <div class="content-wrapper">
          <p class="highlight-title">Teaching Assistant</p>
          <p class="highlight-info">BrainStation • 2025</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.highlights-container {
  padding: 1rem;
  background-color: var(--color-surface-dark);
  border-radius: 1.2rem;
  box-shadow: var(--shadow-inset-card);

  @media screen and (min-width: 768px) {
    padding: 1.4rem;
  }
}

.title {
  margin-bottom: 1rem;
}

.highlights-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.highlight {
  display: flex;
  gap: 0.5rem;
}

.highlight-icon {
  flex-shrink: 0;
  font-size: 1.5rem;
  color: var(--color-text-accent);
}

.content-wrapper {
  & > * + * {
    margin-top: 0.25rem;
  }
}

.highlight-title {
  font-weight: 600;
}

.highlight-info {
  font-size: 1rem;
  color: var(--color-text-light-muted)
}
</style>
