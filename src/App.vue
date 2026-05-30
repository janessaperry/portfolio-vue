<script setup lang="ts">
import { PhGithubLogo } from '@phosphor-icons/vue'
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/jp-logo.svg" width="48" />

    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/projects">Projects</RouterLink>
    </nav>
  </header>

  <main>
    <RouterView />
  </main>

  <footer>
    <div class="socials">
      <ph-github-logo size="32" />
    </div>

    <div class="attribution">
      <img alt="Vue logo" class="logo" src="@/assets/jp-logo.svg" width="24" />
      <p>Designed & developed by Janessa Perry</p>
    </div>
  </footer>
</template>

<style scoped>
header {
  width: 100%;
  padding-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 2rem;
}

nav {
  font-size: 1rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 1rem;
}

nav a.router-link-exact-active {
  color: var(--color-text-light);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
}

nav a:first-of-type {
  border: 0;
}

main {
  flex-grow: 1;
}

footer {
  padding-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.socials,
.attribution {
  display: flex;
  align-items: center;
  gap: 1rem;
}

@media (min-width: 1024px) {

}
</style>
