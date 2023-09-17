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
    let query = document.getElementById("search").value;
    data = await getWeatherData(query, API_KEY);
    loading = false;
  })
</script>

<div>
{#if !loading}
  <h1>{data?.name.toUpperCase()}</h1>

  <div class="weather-card">
    <h2>{data?.main?.temp.toFixed(1)}ºC</h2>
    <h5>{data?.weather[0]?.description}</h5>
    <div><span style="color: #0d82d5">MIN: {data?.main?.temp_min.toFixed(1)}ºC</span>
    <span style="color: #f74528">MAX: {data?.main?.temp_max.toFixed(1)}ºC</span></div>
    <div>
      <span>Visibilidade: {data?.main?.visibility}m</span>
      <span>Umidade: {data?.main?.humidity %</span>
      <span>Vento: {data?.wind?.speed}m/s</span>
      <span>Sensação: {data?.main?.feels_like}ºC</span>
      <span>Pressão: {data?.main?.pressure}hPa</span>
    </div>
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