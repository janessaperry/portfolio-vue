<script setup lang="ts">
import CompanionSelector from '../components/CompanionSelector.vue'
</script>

<template>
  <section class="hero">
    <h1>My Experience</h1>
  </section>

  <div class="experience-layout">
    <section class="experience-container">
      <div>
        <p>Select a role to learn more</p>

        <div class="role-selection">
          <button aria-pressed="true" class="role-button">
            <img src="@/assets/logos/jp-logo.svg" alt="Janessa Perry Logo" class="role-logo" />
            <span class="role-content-wrapper">
              <span class="role-title">Junior Web Developer</span>
              <span class="role-company">Independent Contractor</span>
            </span>
          </button>

          <button aria-pressed="false" class="role-button">
            <img src="@/assets/logos/jp-logo.svg" alt="BrainStation Logo" class="role-logo" />
            <span class="role-content-wrapper">
              <span class="role-title">Teaching Assistant</span>
              <span class="role-company">BrainStation</span>
            </span>
          </button>

          <button aria-pressed="false" class="role-button">
            <img src="@/assets/logos/jp-logo.svg" alt="Janessa Perry Logo" class="role-logo" />
            <span class="role-content-wrapper">
              <span class="role-title">Web Designer</span>
              <span class="role-company">Independent Contractor</span>
            </span>
          </button>

          <button aria-pressed="false" class="role-button">
            <img src="@/assets/logos/jp-logo.svg" alt="Janessa Perry Logo" class="role-logo" />
            <span class="role-content-wrapper">
              <span class="role-title">Senior Manager, UI Design & Solutions</span>
              <span class="role-company">The Sentis Group</span>
            </span>
          </button>
        </div>
      </div>

      <section class="role-details">
        <div>
          <h2 class="role-title">Junior Web Developer</h2>
          <div class="role-meta">
            <p>Independent Contractor</p>
            <p>2025-Present</p>
          </div>
        </div>

        <div>
          <h3>Quest Log</h3>
          <ul>
            <li>Experience details.</li>
          </ul>
        </div>

        <div>
          <h3>Skills Unlocked</h3>
          <ul>
            <li>React</li>
            <li>JavaScript</li>
            <li>PHP</li>
            <li>Laravel</li>
            <li>WordPress</li>
          </ul>
        </div>
      </section>

      <div class="divider"></div>
      <CompanionSelector/>
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
}

.role-selection {
  display: flex;
  gap: 1rem;
  width: 100%;
  overflow-x: scroll;
}

.role-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
  width: max-content;
  padding: 0.5rem;
  background-color: var(--color-selector-bg);
  border: 1px solid var(--color-border);
  border-radius: 0.5rem;
  color: var(--color-text-light);
  transition: background-color 0.5s ease;

  &:hover {
    background-color: var(--color-selector-bg-active);
  }

  &[aria-pressed='true'] {
    background-color: var(--color-selector-bg-active);
    border-color: var(--color-selector-border-active);
  }

  & > .role-logo {
    width: 2.5rem;
    height: 2.5rem;
  }

  & .role-title {
    display: block;
    font-weight: 600;
    text-align: left;
  }

  & .role-company {
    display: block;
    text-align: left;
  }
}

.role-meta {
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  & > p {
    font-size: 0.875rem;
    font-weight: 600;
  }
}

.role-details {
  & > * + * {
    margin-top: 1.2rem;
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
