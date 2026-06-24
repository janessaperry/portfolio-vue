<script setup lang="ts">
import CompanionSelector from '../components/CompanionSelector.vue'
import RoleSelector from '../components/RoleSelector.vue'
</script>

<template>
  <section class="hero">
    <h1>My Experience</h1>
  </section>

  <div class="experience-layout">
    <section class="experience-container">
      <RoleSelector />
      <div class="divider"></div>
      <CompanionSelector />
    </section>

    <section class="avatar-layout">
      <div class="avatar-container">
        <img
          src="@/assets/images/jp-laptop.png"
          alt="Character holding laptop"
          class="avatar-image"
        />
        <img
          src="@/assets/images/louie-sitting.png"
          alt="Character holding laptop"
          class="avatar-companion"
        />
      </div>

      <h2>Janessa Perry</h2>
      <p>Web Developer</p>
    </section>
  </div>
</template>

<style>
.hero {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.experience-layout {
  display: flex;
  gap: 2.5rem;
}

.experience-container {
  width: 60%;
  padding: 1rem;
  background-color: var(--color-surface-dark);
  border-radius: 1.2rem;
  box-shadow: var(--shadow-inset-card);

  & > * + * {
    margin-top: 2rem;
  }

  @media screen and (min-width: 768px) {
    padding: 1.4rem;
  }
}

.avatar-layout {
  width: 40%;
}

.avatar-container {
  position: relative;
}

.avatar-image {
  display: block;
  margin: 0 30% 0 auto;
  height: 420px;
}

.avatar-companion {
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  max-width: 170px;
}

.divider {
  width: 100%;
  height: 1px;
  background: linear-gradient(to right, var(--gradient-neon-bg));
}

@media (min-width: 1024px) {
  .hero {
    display: flex;
    align-items: center;
  }
}
</style>
