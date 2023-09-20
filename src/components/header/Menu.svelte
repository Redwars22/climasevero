<script>
function showInfo(){
  window.open("https://andrewnationdev.vercel.app/docs/projects/climasevero")
}

function andrewNationWebsite(){
  window.open("https://andrewnationdev.vercel.app")
}
</script>

<div class="flex">
  <div>
    <button on:click={showInfo}>Sobre</button>
    <button class="disabled" disabled>App Mobile</button>
    <button on:click={andrewNationWebsite}>Mais Apps</button>
  </div>
</div>

<style>
  .flex {
    display: flex;
    justify-content: space-around;
    width: 100%;
  }
</style>