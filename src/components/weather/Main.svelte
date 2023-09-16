<script lang="ts">
  import getWeatherData from '../../api/getWeatherData.ts';
  import {API_KEY} from '../../api/auth.ts';
  //import IWeatherData from "../../api/types.ts";

  let data;
  let loading;

  document.addEventListener("DOMContentLoaded", async function() {
    loading = true;
    data = await getWeatherData("Dubai", API_KEY);
    loading = false;
  });

  window.onload = () => document.getElementById("search-btn").addEventListener("click", async () => {
    loading = true;
    data = await getWeatherData("Dubai", API_KEY);
    loading = false;
  })
</script>

<div>
{#if !loading}
  <h1>{data?.name.toUpperCase()}</h1>

  <div class="weather-card">
    <h2>{data?.main?.temp.toFixed(1)}ºC</h2>
    <span style="color: #0d82d5">MIN: {data?.main?.temp_min.toFixed(1)}ºC</span>
    <span style="color: #f74528">MAX: {data?.main?.temp_max.toFixed(1)}ºC</span>
  </div>
{/if}
{#if loading}
  <h4>Carregando...</h4>
{/if}
</div>

<style>
  .weather-card {
    background-color: #002f68;
    padding: 10px;
    border-radius: 10px;
    border: 4px solid #1572e540;
  }
</style>