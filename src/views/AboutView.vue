<script setup lang="ts">
</script>
<template>
  <section class="hero">
    <h1>My Experience</h1>
  </section>

  <div class="experience-layout">
    <section class="experience-container">
      <div>
        <h2>Select a role to learn more</h2>

        <div>
          <button aria-pressed="true">Junior Web Developer</button>
          <button aria-pressed="false">Teaching Assistant</button>
          <button aria-pressed="false">Web Designer</button>
          <button aria-pressed="false">Other roles</button>
        </div>
      </div>

      <section class="role-details">
        <h2 class="role-title">Junior Web Developer</h2>
        <div class="role-meta">
          <p>Independent Contractor</p>
          <p>2025-Present</p>
        </div>

        <div>
          <h3>Quest Log</h3>
          <ul>
            <li>
              Contributed to a civic engagement platform for Austrian municipalities, building modal
              authentication and participation flows, improving mobile responsiveness, and
              implementing i18n translations for multilingual support.
            </li>
            <li>
              Designed and contributed to the development of a custom WordPress theme featuring
              Advanced Custom Fields (ACF), React-powered dynamic search and filtering to avoid page
              reloads, and PHP with Laravel on the backend.
            </li>
            <li>
              Collaborated with senior developers to integrate REST APIs, connecting frontend
              components with backend data and functionality.
            </li>
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

      <section class="companion-wrapper">
        <h3>Select a companion</h3>
        <div class="companion-selection">
          <button aria-pressed="true" class="companion-button">Class Act</button>
          <button aria-pressed="false" class="companion-button">Big Stretchies</button>
          <button aria-pressed="false" class="companion-button">Snoozie Boos</button>
        </div>
      </section>
    </section>

    <section class="avatar-wrapper">
      <div>Character image placeholder</div>

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
  flex-basis: 60%;
  padding: 1rem;
  background-color: var(--color-surface-dark);

  & > * + * {
    margin-top: 2rem;
  }
}

.role-meta {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
}

.avatar-wrapper {
  flex-basis: 40%;
}

.divider {
  width: 100%;
  border-top: 1px solid var(--color-border);
}

@media (min-width: 1024px) {
  .hero {
    display: flex;
    align-items: center;
  }
}
</style>
