<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <section class="hero">
    <div class="intro">
      <h1>Hey there, I'm Janessa</h1>
      <p class="tagline">
        Bringing pixels to life with <span class="accent">&lt;code/&gt;</span> and
        <span class="accent">curiosity()</span>.
      </p>

      <div class="work-status-container">
        <p class="work-status">Available for work</p>
      </div>

      <p>
        Web developer with a background in design who enjoys figuring things out and building thoughtful web experiences.
      </p>
    </div>

    <div class="project-showcase">
      <h2>Showcase</h2>
      <article class="project-card">
        <div>image placeholder</div>

        <div class="project-overview">
          <p>Personal Project • Ongoing</p>
          <h2>Project Name</h2>
          <p>Full Stack Developer & Designer</p>

          <p>
            Developing a full-stack video game collection tracker with custom React hooks,
            multi-category filtering with URL syncs, JWT authentication with secure password reset,
            and a PostgreSQL backend synced from the IGDB API.
          </p>
        </div>

        <ul class="tech-stack-chips">
          <li class="chip">React</li>
          <li class="chip">TypeScript</li>
          <li class="chip">Node.js</li>
          <li class="chip">PostgreSQL</li>
        </ul>

        <div class="project-highlights">
          <h3>Highlights</h3>
          <ul>
            <li>Highlight 1</li>
            <li>Highlight 2</li>
          </ul>
        </div>

        <div class="card-actions">
          <a href="#" target="_blank" class="button">View demo</a>
          <a href="#" target="_blank" class="button">Github</a>
        </div>
      </article>
    </div>
  </section>

  <!--  <TheWelcome />-->
</template>

<style scoped>
.hero {
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
  font-family: var(--jp-font-mono), monospace;
  font-size: var(--font-size-lg);
}

.accent {
  color: var(--color-text-accent);
}

.work-status-container {
  background: linear-gradient(
    to top right,
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
    content: '';
    display: block;
    width: 8px;
    height: 8px;
    background-color: #95dac5;
    border-radius: 9999px;
  }
}

.project-card {
  & > * + * {
    margin-top: 1.4rem;
  }

  padding: 1rem;
  background-color: var(--color-surface-dark);
  border-radius: 1rem;
  box-shadow:
    inset 0 1px 2px 0 var(--color-shadow-inset-light),
    inset 0 2px 4px 0 var(--color-shadow-inset),
    inset 0 -2px 4px 0 var(--color-shadow-inset-dark);
}

.tech-stack-chips {
  list-style: none;
  padding-inline: 0;
  display: flex;
  gap: 0.5rem;
}

.chip {
  padding: 0.25rem 0.5rem;
  color: var(--color-text-accent);
  line-height: 1.2;
  background-color: var(--color-surface-dark-muted);
  border: 1px solid var(--color-border);
  border-radius: 8px;
}

@media (min-width: 1024px) {
  .hero {
    flex-direction: row;
    align-items: flex-start;
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
