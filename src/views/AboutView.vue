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

      <section class="companion-wrapper">
        <h3>Select a companion</h3>
        <div class="companion-selection">
          <button aria-pressed="true" class="companion-button" aria-label="Class Act">
            <img src="@/assets/images/louie-sitting.png" alt="Orange cat sitting."/>
          </button>
          <button aria-pressed="false" class="companion-button" aria-label="Big Stretchies">
            <img src="@/assets/images/louie-stretching.png" alt="Orange cat stretching."/>
          </button>
          <button aria-pressed="false" class="companion-button" aria-label="Snoozie Boos">
            <img src="@/assets/images/louie-sleeping.png" alt="Orange cat sleeping."/>
          </button>
        </div>
        <div class="companion-bonus">
          <p class="bonus-title">Class Act</p>
          <p class="bonus-description">
            Your orange cat companion provides <span class="bonus-stat">+10% focus</span>
            when debugging complex systems.
          </p>
        </div>
      </section>
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
  flex-basis: 60%;
  padding: 1rem;
  background-color: var(--color-surface-dark);
  border-radius: 1.2rem;
  box-shadow: var(--shadow-inset-card);

  & > * + * {
    margin-top: 2rem;
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

.companion-wrapper {
  & > * + * {
    margin-top: 0.75rem;
  }
}

.companion-button {
  padding: 0.5rem;
  width: 4rem;
  height: 4rem;
  aspect-ratio: 1/1;
  background: none;
  border: 1px solid var(--color-border);
  border-radius: 9999px;

  &[aria-pressed="true"] {
    border-color: var(--color-text-accent);
  }

  & > img {
    width: 100%;
    object-fit: contain;
  }

}

.companion-bonus {
  padding: 1rem;
  background-color: var(--color-surface-dark-muted);
  border: 1px solid var(--color-border);
  border-radius: 0.75rem;
}

.bonus-title {
  color: var(--color-text-accent);
  font-size: 1.2rem;
  font-weight: 600;
}

.bonus-description {
  line-height: 1.2;
}

.bonus-stat {
  font-weight: 600;
}

.avatar-layout {
  flex-basis: 40%;
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
