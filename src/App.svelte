<script lang="ts">
  import svelteLogo from './assets/svelte.svg'
  import viteLogo from '/vite.svg'
  import Counter from './lib/Counter.svelte'
</script>

<main>
<div class="app-logo">
<i class="bi bi-cloud-drizzle-fill"></i>
<h1>CLIMASEVERO</h1>
</div>
</main>

<style>
.app-logo {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.app-logo, .app-logo > h1 {
  font-size: 2rem;
}

.app-logo > h1 {
  text-decoration: wavy;
  text-decoration-line: underline;
  transition: opacity 1s;
}

.app-logo:hover > h1 {
  text-decoration: underline;
  opacity: 1.0;
}

  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
