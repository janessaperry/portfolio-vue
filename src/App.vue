<script setup lang="ts">
import { PhEnvelope, PhGithubLogo, PhLinkedinLogo } from '@phosphor-icons/vue'
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/about" class="nav-link">About</RouterLink>
      <RouterLink to="/" class="nav-link">
        <img alt="JP logo" class="logo" src="@/assets/logos/jp-logo.svg" />
      </RouterLink>
      <RouterLink to="/projects" class="nav-link">Projects</RouterLink>
    </nav>
  </header>

  <main>
    <RouterView />
  </main>

  <footer>
    <div class="socials">
      <a href="https://github.com/janessaperry" target="_blank" rel="noreferrer">
        <ph-github-logo class="social-icon" />
      </a>
      <a href="https://www.linkedin.com/in/janessa-perry" target="_blank" rel="noreferrer">
        <ph-linkedin-logo class="social-icon" />
      </a>
      <a href="mailto:hello@janessaperry.com" target="_blank" rel="noreferrer">
        <ph-envelope class="social-icon" />
      </a>
    </div>

    <div class="attribution">
      <img alt="JP logo" class="logo" src="@/assets/logos/jp-logo.svg" />
      <p>Designed & developed by Janessa Perry</p>
    </div>
  </footer>
</template>

<style scoped>
header {
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
  padding: 1rem 1rem;
  display: flex;
  align-items: center;
  gap: 2rem;
}

nav {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  margin: 0 auto;
  background-color: var(--color-surface-dark);
  border: 1px solid var(--color-border);
  border-radius: 999px;

  @media screen and (min-width: 768px) {
    padding: 0.5rem 1.5rem;
  }
}

.nav-link {
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--jp-font-heading), sans-serif;
  font-size: 1rem;
  text-transform: lowercase;
  color: var(--color-text-light);

  @media screen and (min-width: 768px) {
    font-size: 1.125rem;
  }

  &:hover {
    text-decoration: underline dotted;
    text-decoration-color: var(--color-link);
    text-underline-offset: 0.375rem;
  }

  &.router-link-exact-active {
    color: var(--color-link);
    text-decoration: underline dotted;
    text-underline-offset: 0.375rem;
  }
}

.nav-link .logo {
  width: 2.5rem;

  @media screen and (min-width: 768px) {
    width: 3rem;
  }
}

main {
  padding: 2rem 1rem;
  flex-grow: 1;

  @media screen and (min-width: 768px) {
    padding: 4rem 1rem;
  }
}

footer {
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
}

.socials {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.social-icon {
  font-size: 1.5rem;

  @media screen and (min-width: 768px) {
    font-size: 1.75rem;
  }
}

.attribution {
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.attribution .logo {
  width: 1.5rem;

  @media screen and (min-width: 768px) {
    width: 2rem;
  }
}
</style>
