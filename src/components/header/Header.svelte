<script>
  import SearchBar from './SearchBar.svelte';
</script>

<header>
  <div class="app-logo">
    <i class="bi bi-cloud-drizzle-fill"></i>
    <h1>CLIMASEVERO</h1>
  </div>
  <SearchBar/>
</header>

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

  @media screen and (min-width: 800px) {
    header {
      display: flex;
      align-items: center;
      gap: 25px;
      margin-left: auto;
      margin-right: auto;
      width: 75vw;
    }
  }
</style>
