<Script>
function showInfo(){
  window.alert("");
}
</script>

<div class="flex">
  <div>
    <button on:click={showInfo}>Sobre</button>
    <button disabled>App Mobile</button>
    <button>Mais Apps</button>
  </div>
</div>

<style>
  .flex {
    display: flex;
    justify-content: space-around;
    width: 100%;
  }
</style>